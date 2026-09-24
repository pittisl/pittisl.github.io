/* The behaviour the Ocelot theme's CSS expects, without the theme's JavaScript.
 *
 * Upstream, main.js drives this through jQuery plus fifteen plugins (owl
 * carousel, isotope, masonry, matchHeight, countUp, magnific-popup and the
 * rest). None of that is needed here: the site has no carousel and no
 * lightbox. What the CSS does depend on is four class toggles:
 *
 *   .header.shrink                  header collapses once the page scrolls
 *   .navbar-toggle.open             hamburger animates into a cross
 *   .consult-menu.active            mobile drawer slides in
 *   .consult-menu li.active         a dropdown / drawer sub-menu is open
 *
 * Beyond those, two things of this site's own: the People page's filter, which
 * narrows the roster to one school, and the Contact page's join form, which
 * has no server to post to and composes an email instead.
 */
(function () {
  'use strict';

  /* People filter. The buttons are in the page but hidden, so that without
     this script the roster simply shows everyone. A division in the URL hash
     (#medicine) preselects it, and choosing one writes it back, so a filtered
     view can be linked to. */
  var filter = document.querySelector('.js-people-filter');
  if (filter) {
    var buttons = Array.prototype.slice.call(filter.querySelectorAll('button[data-division]'));
    var cards = Array.prototype.slice.call(document.querySelectorAll('.person-col[data-division]'));
    var keys = buttons.map(function (button) { return button.getAttribute('data-division'); });

    var select = function (division) {
      buttons.forEach(function (button) {
        var on = button.getAttribute('data-division') === division;
        button.setAttribute('aria-pressed', String(on));
        button.parentNode.classList.toggle('current', on);
      });
      cards.forEach(function (card) {
        card.hidden = division !== 'all' && card.getAttribute('data-division') !== division;
      });
    };

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var division = button.getAttribute('data-division');
        select(division);
        if (window.history.replaceState) {
          window.history.replaceState(null, '', division === 'all' ? '#members' : '#' + division);
        }
      });
    });

    filter.hidden = false;
    var initial = window.location.hash.replace('#', '');
    if (keys.indexOf(initial) > 0) {
      select(initial);
      var members = document.getElementById('members');
      if (members) members.scrollIntoView();
    }
  }

  /* Join form. Without this the form posts to its mailto: action, which every
     browser turns into a new message with the fields dumped in the body. With
     it the message gets a subject and a body someone can read. Either way the
     visitor's own mail application does the sending. */
  var joinForm = document.querySelector('.js-join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', function (event) {
      if (!joinForm.checkValidity()) return;
      event.preventDefault();
      var value = function (name) {
        var field = joinForm.elements[name];
        return field ? field.value.trim() : '';
      };
      var body = [
        'Name: ' + value('Name'),
        'Email: ' + value('Email'),
        'Institution and department: ' + value('Affiliation'),
        'Role: ' + value('Role'),
        '',
        value('Message')
      ].join('\r\n');
      var subject = 'Application to join the Center - ' + value('Name');
      window.location.href = 'mailto:' + joinForm.getAttribute('data-to') +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }

  var DESKTOP = window.matchMedia('(min-width: 993px)');
  var nav = document.querySelector('.consult-nav');
  var menu = nav && nav.querySelector('.consult-menu');
  var toggle = nav && nav.querySelector('.navbar-toggle');
  var header = document.querySelector('.header');

  /* Header shrinks past 100px, matching the theme's own threshold. */
  if (header) {
    var onScroll = function () {
      header.classList.toggle('shrink', window.scrollY > 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (!nav || !menu || !toggle) return;

  var parents = Array.prototype.slice.call(
    menu.querySelectorAll('.menu-item-has-children')
  );

  function closeSubMenus(except) {
    parents.forEach(function (item) {
      if (item !== except) item.classList.remove('active');
    });
  }

  function closeDrawer() {
    menu.classList.remove('active');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    closeSubMenus(null);
  }

  toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', function (event) {
    event.preventDefault();
    var opening = !menu.classList.contains('active');
    menu.classList.toggle('active', opening);
    toggle.classList.toggle('open', opening);
    toggle.setAttribute('aria-expanded', String(opening));
    if (!opening) closeSubMenus(null);
  });

  parents.forEach(function (item) {
    /* Desktop: the theme's plugin opens dropdowns on hover, so do the same. */
    item.addEventListener('mouseenter', function () {
      if (DESKTOP.matches) item.classList.add('active');
    });
    item.addEventListener('mouseleave', function () {
      if (DESKTOP.matches) item.classList.remove('active');
    });

    /* Keyboard users get the same dropdown when focus moves into the item. */
    item.addEventListener('focusin', function () {
      if (DESKTOP.matches) item.classList.add('active');
    });
    item.addEventListener('focusout', function (event) {
      if (DESKTOP.matches && !item.contains(event.relatedTarget)) {
        item.classList.remove('active');
      }
    });

    /* Mobile: the top-level link doubles as the sub-menu's disclosure. Tapping
       it opens the children; tapping again follows the link, so the section
       landing page stays reachable. */
    var link = item.querySelector(':scope > a');
    if (!link) return;
    link.addEventListener('click', function (event) {
      if (DESKTOP.matches) return;
      if (item.classList.contains('active')) return;
      event.preventDefault();
      closeSubMenus(item);
      item.classList.add('active');
    });
  });

  /* A click anywhere else closes whatever is open. */
  document.addEventListener('click', function (event) {
    if (nav.contains(event.target)) return;
    if (DESKTOP.matches) closeSubMenus(null);
    else closeDrawer();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeSubMenus(null);
      if (!DESKTOP.matches) closeDrawer();
    }
  });

  /* Crossing the breakpoint leaves stale state on both sides of it. */
  DESKTOP.addEventListener('change', function () {
    closeDrawer();
  });
})();
