---
title: 'Demo: MobileClaw: A Notification-Driven, Human-Gated Mobile LLM Agent'
authors:
  - boyuan
  - 'Alexander Du'
  - 'Ozzie Hassel'
  - 'Jash Uganandan'
  - wei
date: '2026-10-23T00:00:00Z'
publishDate: '2026-10-23T00:00:00Z'
doi: '10.1145/3795866.3848463'
publication_types: ['1']
publication: In *The 32nd Annual International Conference on Mobile Computing and Networking (MobiCom 2026)*
publication_short: In *MobiCom 2026 (Demo)*
abstract: >-
  Smartphone assistants built on large language models (LLMs) today either drive an
  application’s screen display or wait to be asked through chatting; neither is integrated
  into the event stream produced by the mobile OS and user-installed applications. We
  demonstrate MobileClaw, an Android system component that attaches an external LLM to the
  OS notification channel. A background service captures every posted notification and
  asks the model for recommended further actions; an interactive front end carries out the
  user’s requests through built-in skills, operated through OS API calls rather than
  screen automation. The model is treated as an untrusted component: nothing it decides
  takes effect unless the user confirms it. Notification text and everything the app reads
  from the device pass a sanitizer before they leave the phone, and privileged operations
  run in a separate process behind an allowlist it re-checks itself. Demo attendees may
  fire synthetic or real notifications, manipulate local resources on the device, approve
  or reject suggested actions, and watch the model’s reasoning trace in real time.
summary: MobileClaw connects an LLM to Android notifications and local resources. Background assistance and interactive chat share context on the phone, while supported actions use Android interfaces with user confirmation by default.
tags:
  - 'on-device-ai'
featured: true
url_pdf: '/uploads/mobileclaw_mobicom2026_paper.pdf'
url_code: 'https://github.com/pittisl/MobileClaw'
url_video: '/publication/2026-mobileclaw/#demo-video'
links:
  - name: Poster
    url: /uploads/mobileclaw_mobicom2026_poster.pdf
  - name: Download APK
    url: https://github.com/pittisl/MobileClaw/releases
image:
  caption: ''
  focal_point: ''
  preview_only: false
---

## An agent workspace on your phone

MobileClaw is an open-source Android research prototype that connects an LLM to
the phone's notification channel. Incoming notifications can initiate assistance,
and interactive chat uses the same conversations, memory and local resource
lookup. The phone coordinates the agent loop and executes supported operations
through notification actions, Android APIs and AppFunctions exposed by cooperating
apps, with user confirmation by default for outward actions.

The model service is configurable: use a cloud API or an OpenAI-compatible local
server, including one running on the phone. For example, a photo request can
trigger a local search and present candidate images. The user selects a photo,
requests sharing, and confirms the image and recipient.

## Watch the demo {#demo-video}

{{< local-video src="/uploads/mobileclaw_mobicom2026_demo.mp4" poster="/uploads/mobileclaw_mobicom2026_demo-preview.jpg" title="MobileClaw demonstration: notifications, local context and user-confirmed actions" >}}

[Download the video (MP4, 1920 × 1080)](/uploads/mobileclaw_mobicom2026_demo.mp4).
The [GitHub repository](https://github.com/pittisl/MobileClaw) includes source code,
installable APKs, documentation and instructions for trying the demo.

## Poster {#poster}

[![MobileClaw poster: system design and demonstration scenarios](2026-mobileclaw/mobileclaw_mobicom2026_poster.png)](/uploads/mobileclaw_mobicom2026_poster.pdf)

*Alexander Du, Ozzie Hassel and Jash Uganandan contributed equally to this work.*
