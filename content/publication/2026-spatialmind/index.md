---
title: 'SpatialMind: Spatially Aware On-Device Embodied AI via Viewpoint Integration'
authors:
  - haoming
  - qiyao
  - weichen
  - boyuan
  - xiangyu
  - wei
date: '2026-08-15T00:00:00Z'
doi: '10.1145/3795866.3844467'
# The arXiv preprint of this paper was titled MosaicThinker. Its old page URL is
# redirected by static/publication/2026-mosaicthinker/index.html, because
# config.yaml sets disableAliases: true.

# Schedule page publish date (NOT publication's date).
publishDate: '2026-02-06T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the 32nd Annual International Conference on Mobile Computing and Networking (MobiCom 2026)*
publication_short: In *MobiCom 2026*

abstract: On-device embodied AI allows local processing of visual data and prompt responses to user requests. Applying embodied AI to more complex domains requires spatial cognition, to properly comprehend the 3D environment and geometric relations between objects. However, existing vision-language models (VLMs) are weak in spatial cognition due to their limitations to 2D image understandings. In this paper, we present SpatialMind, a new on-device embodied AI technique that bridges the gap between 2D visual inputs and 3D physical reality, by injecting 3D spatial knowledge into on-device VLMs in a sparse form of 2D allocentric spatial memory. This memory is constructed by systematically aligning cross-frame visual features to a unified global viewpoint, and we prune the scope of on-device computation to maximize the compute efficiency in memory construction and VLM reasoning. Experiment results in diverse indoor environments show that SpatialMind greatly enhances the performance of spatially aware on-device embodied AI tasks, with high adaptability, robustness and compute efficiency.

# Summary. An optional shortened abstract.
summary: SpatialMind injects 3D spatial knowledge into small on-device VLMs as a sparse 2D allocentric spatial memory. It grounds the task in the user query, selects the relevant key frames, and aligns their visual features to a unified global viewpoint, so that the VLM can reason about the 3D scene from a single compact visual prompt. It greatly improves spatially aware embodied AI tasks on resource-constrained devices, with high adaptability, robustness and compute efficiency.

tags:
  - 'spatial-intelligence'
  - 'on-device-ai'
featured: true

url_pdf: 'https://sites.pitt.edu/~weigao/publications/mobicom26-spatialmind.pdf'
links:
  - name: arXiv (earlier version)
    url: https://arxiv.org/abs/2602.07082
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

An earlier version of this work is available on arXiv as *MosaicThinker: On-Device Visual Spatial Reasoning for Embodied AI via Iterative Construction of Space Representation*.
