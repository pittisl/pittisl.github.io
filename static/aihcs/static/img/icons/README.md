# Domain icons

Seven icons from **Font Awesome Free 6.7.2**, used where the theme's vendored
FontAwesome 4.7 has no matching glyph: it predates the medical set, so it can
draw a heart and a wheelchair but not lungs, a brain or DNA. They are the same
design family as the theme's icon font, so they sit consistently alongside it.

    lungs.svg              Pulmonology
    heart-pulse.svg        Cardiology
    wheelchair-move.svg    Rehabilitation and Living Assistance
    brain.svg              Neurosciences
    hand-holding-heart.svg Mental Health
    hand-dots.svg          Skin Disease
    dna.svg                Bioinformatics

Downloaded verbatim from `FortAwesome/Font-Awesome`, `svgs/solid/<name>.svg`,
at tag `6.7.2`. Icons are licensed CC BY 4.0; each file keeps Font Awesome's
own attribution comment, which is what the licence asks for.

`build.py` inlines these into the page rather than linking them, so that the
paths inherit the theme's gold `currentColor` the way an icon font would.
Refreshing one means re-downloading it from the path above.
