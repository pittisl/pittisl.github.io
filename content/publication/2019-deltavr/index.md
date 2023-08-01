---
title: 'DeltaVR: achieving high-performance mobile VR dynamics through pixel reuse'
authors:
  - yong
  - wei
date: '2019-04-22T00:00:00Z'
doi: '10.1145/3302506.3310385'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-22T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 18th International Conference on Information Processing in Sensor Networks (IPSN'18)*
publication_short: In *IPSN'18*

abstract: Virtual Reality (VR) improves the user's experience when interacting with the virtual world, and could revolutionarily transform the designs of many interactive systems. However, providing VR from untethered mobile devices is difficult due to their limited local capabilities. Existing VR solutions address this difficulty by rendering VR frames at remote computing facilities, but are limited to rendering every VR frame separately. A tremendous amount of VR frame data, hence, needs to be transmitted to mobile devices over low-bandwidth wireless links and seriously impairs VR performance. In this paper, we aim to remove this performance constraint on highly dynamic VR applications with complicated scenes and intensive user movement, by adaptively reusing the redundant VR pixels across multiple VR frames. We leverage the unique characteristics of image warping used in current VR applications, and fundamentally expand the scope of image warping to the entire VR lifespan to precisely capture the fluctuations of VR scene due to VR dynamics. We implemented our design over Android OS and Unity VR application engine, and demonstrated that our design can maximize the mobile VR performance over highly dynamic VR scenarios with 95% less amount of VR frame data being transmitted, by completely removing the pixel redundancy across VR frames.

# Summary. An optional shortened abstract.
summary: This work leverages the unique characteristics of image warping used in current VR applications, and fundamentally expand the scope of image warping to the entire VR lifespan to precisely capture the fluctuations of VR scene due to VR dynamics. We implemented our design over Android OS and Unity VR application engine, and demonstrated that our design can maximize the mobile VR performance over highly dynamic VR scenarios with 95% less amount of VR frame data being transmitted.

tags:
  - 'intelligent-edge-computing'
featured: true

url_pdf: https://doi.org/10.1145/3302506.3310385

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
