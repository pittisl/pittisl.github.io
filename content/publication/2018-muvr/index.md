---
title: 'MUVR: Supporting Multi-User Mobile Virtual Reality with Resource Constrained Edge Cloud'
authors:
  - yong
  - wei
date: '2020-07-22T00:00:00Z'
doi: '10.1109/SEC.2018.00008'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-22T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *2018 IEEE/ACM Symposium on Edge Computing (SEC)*
publication_short: In *SEC 2018*

abstract: Virtual Reality (VR) fundamentally improves the user's experience when interacting with the virtual world, and could revolutionarily transform designs of many interactive systems. To provide VR from untethered mobile devices, a viable solution is to remotely render VR frames from the edge cloud, but encounters challenges from the limited computation and communication capacities of the edge cloud when serving multiple mobile VR users at the same time. In this paper, we envision the key reason of such challenges as the ignorance of redundancy across VR frames being rendered, and aim to fundamentally remove this performance constraint on highly dynamic VR applications by adaptively reusing the redundant VR frames being rendered for different VR users. Such redundancy in each frame is decided at run-time by the edge cloud, which is then able to memoize the previous results of VR frame rendering for future reuse by other users. After a VR frame is generated, the edge cloud further reuses its redundant pixels compared with other frames, and only transmits the distinct portion of this frame to mobile devices. We have implemented our design over Android OS and Unity VR application engine, and demonstrated that our design can efficiently reduce the computation burden at the edge cloud by more than 90%, and reduce more than 95% of the VR frame data being transmitted to mobile devices.

# Summary. An optional shortened abstract.
summary: MUVR aims to remove the performance constraint of highly dynamic VR appliations by adaptively reusing the redundant VR frames being rendered for different VR users. The redundancy in each frame is decided at run-time by the edge cloud, which further reuses its redundant pixels compared with other frames. The design implementation over Android OS and Unity VR demonstrated that the design can reduce edge computation burden by more than 90%, and reduce more than 95% of the transmitted VR frame data.

tags:
  - 'intelligent-edge-computing'
featured: true

url_pdf: https://doi.org/10.1109/SEC.2018.00008

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
