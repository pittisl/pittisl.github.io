---
title: 'MagHacker: eavesdropping on stylus pen writing via magnetic sensing from commodity mobile devices'
authors:
  - yihao
  - kai
  - xingzhe
  - boyuan
  - wei
date: '2020-06-22T00:00:00Z'
doi: '10.1145/3386901.3389030'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-22T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 18th International Conference on Mobile Systems, Applications, and Services (MobiSys'20)*
publication_short: In *MobiSys'20*

abstract: Stylus pens have been widely used with today's mobile devices to provide a convenient handwriting input method, but also bring a unique security vulnerability that may unveil the user's handwriting contents to a nearby eavesdropper. In this paper, we present MagHacker, a new sensing system that realizes such eavesdropping attack over commodity mobile devices, which monitor and analyze the magnetic field being produced by the stylus pen's internal magnet. MagHacker divides the continuous magnetometer readings into small segments that represent individual letters, and then translates these readings into writing trajectories for letter recognition. Experiment results over realistic handwritings from multiple human beings demonstrate that MagHacker can accurately eavesdrop more than 80% of handwriting with stylus pens, from a distance of 10cm. Only slight degradation in such accuracy is produced when the eavesdropping distance or the handwriting speed increases. MagHacker is highly energy efficient, and can well adapt to different stylus pen models and environmental contexts.

# Summary. An optional shortened abstract.
summary: We present MagHacker, a new sensing system that realizes such eavesdropping attack over commodity mobile devices, which monitor and analyze the magnetic field being produced by the stylus pen's internal magnet. It divides the continuous magnetometer readings into small segments that represent individual letters, and then translates these readings into writing trajectories for letter recognition.

tags:
  - 'mobile-sensing'
  - 'mobile-security'
featured: true

url_pdf: 'https://sites.pitt.edu/~weigao/publications/mobisys20.pdf'
url_video: 'https://youtu.be/RBdKpQoRHH0'

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

{{< youtube id="RBdKpQoRHH0" >}}
