---
title: 'Eavesdropping user credentials via GPU side channels on smartphones'
authors:
  - admin
date: '2022-03-22T00:00:00Z'
doi: '10.1145/3503222.3507757'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-22T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 27th ACM International Conference on Architectural Support for Programming Languages and Operating Systems*
publication_short: In *ASPLOS'22*

abstract: Graphics Processing Unit (GPU) on smartphones is an effective target for hardware attacks. In this paper, we present a new side channel attack on mobile GPUs of Android smartphones, allowing an unprivileged attacker to eavesdrop the user's credentials, such as login usernames and passwords, from their inputs through on-screen keyboard. Our attack targets on Qualcomm Adreno GPUs and investigate the amount of GPU overdraw when rendering the popups of user's key presses of inputs. Such GPU overdraw caused by each key press corresponds to unique variations of selected GPU performance counters, from which these key presses can be accurately inferred. Experiment results from practical use on multiple models of Android smartphones show that our attack can correctly infer more than 80% of user's credential inputs, but incur negligible amounts of computing overhead and network traffic on the victim device. To counter this attack, this paper suggests mitigations of access control on GPU performance counters, or applying obfuscations on the values of GPU performance counters.

# Summary. An optional shortened abstract.
summary: This is one of the few works that demonstrate critical security vulnerabilities of mainstream GPUs (QualComm Adreno GPU on Snapdragon SoCs) on smartphones, which allow an unprivileged attacker to eavesdrop the user’s sensitive credentials such as app username and password. 

tags:
  - 'mobile-gpu'
  - 'mobile-systems'
  - 'embedded-systems'
featured: true

links:
  - name: Artifact
    url: https://doi.org/10.5281/zenodo.5733423
url_pdf: https://doi.org/10.1145/3503222.3507757
url_code: 'https://github.com/pittisl/perfinfer-code'
url_video: 'https://www.youtube.com/watch?v=LE9Eyn43zSs'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
#projects:
#  - internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides:
---

## Videos

### Demo

{{< youtube id="f40TvdDaxqw" >}}

### Paper Presentation

{{< youtube id="LE9Eyn43zSs" >}}
