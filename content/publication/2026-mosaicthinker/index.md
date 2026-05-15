---
title: 'MosaicThinker: On-Device Visual Spatial Reasoning for Embodied AI via Iterative Construction of Space Representation'
authors:
  - haoming
  - qiyao
  - weichen
  - wei
date: '2026-02-06T00:00:00Z'
doi: '10.48550/arXiv.2602.07082'

# Schedule page publish date (NOT publication's date).
publishDate: '2026-02-06T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: In *arXiv preprint*
publication_short: In *arXiv*

abstract: When embodied AI is expanding from traditional object detection and recognition to more advanced tasks of robot manipulation and actuation planning, visual spatial reasoning from the video inputs is necessary to perceive the spatial relationships of objects and guide device actions. However, existing visual language models (VLMs) have very weak capabilities in spatial reasoning due to the lack of knowledge about 3D spatial information, especially when the reasoning task involves complex spatial relations across multiple video frames. In this paper, we present a new inference-time computing technique for on-device embodied AI, namely MosaicThinker, which enhances the on-device small VLM's spatial reasoning capabilities on difficult cross-frame reasoning tasks. Our basic idea is to integrate fragmented spatial information from multiple frames into a unified space representation of global semantic map, and further guide the VLM's spatial reasoning over the semantic map via a visual prompt. Experiment results show that our technique can greatly enhance the accuracy of cross-frame spatial reasoning on resource-constrained embodied AI devices, over reasoning tasks with diverse types and complexities.

# Summary. An optional shortened abstract.
summary: MosaicThinker is an inference-time computing technique that boosts on-device small VLMs on cross-frame visual spatial reasoning. It integrates fragmented spatial information from multiple frames into a unified global semantic map, and then guides the VLM's reasoning over this map via a visual prompt, achieving large accuracy gains on diverse spatial reasoning tasks under resource-constrained embodied AI settings.

tags:
  - 'spatial-intelligence'
featured: true

url_pdf: 'https://arxiv.org/pdf/2602.07082'
#url_code: ''
#url_video: ''
#url_slides: ''

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
#slides:
---

*Haoming Wang and Qiyao Xue contributed equally to this work.*
