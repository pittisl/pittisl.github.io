---
title: 'Reasoning Path and Latent State Analysis for Multi-view Visual Spatial Reasoning: A Cognitive Science Perspective'
authors:
  - qiyao
  - weichen
  - shiqi
  - haoming
  - 'Yuyang Wu'
  - wei
date: '2025-12-02T00:00:00Z'
doi: '10.48550/arXiv.2512.02340'

# Schedule page publish date (NOT publication's date).
publishDate: '2025-12-02T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: In *arXiv preprint*
publication_short: In *arXiv*

abstract: Spatial reasoning is a core aspect of human intelligence that allows perception, inference and planning in 3D environments. However, current vision-language models (VLMs) struggle to maintain geometric coherence and cross-view consistency for spatial reasoning in multi-view settings. We attribute this gap to the lack of fine-grained benchmarks that isolate multi-view reasoning from single-view perception and temporal factors. To address this, we present ReMindView-Bench, a cognitively grounded benchmark for evaluating how VLMs construct, align and maintain spatial mental models across complementary viewpoints. ReMindView-Bench systematically varies viewpoint spatial pattern and query type to probe key factors of spatial cognition. Evaluations of 15 current VLMs reveals consistent failures in cross-view alignment and perspective-taking in multi-view spatial reasoning, motivating deeper analysis on the reasoning process. Explicit phase-wise analysis using LLM-as-a-judge and self-consistency prompting shows that VLMs perform well on in-frame perception but degrade sharply when integrating information across views. Implicit analysis, including linear probing and entropy dynamics, further show progressive loss of task-relevant information and uncertainty separation between correct and incorrect trajectories. These results provide a cognitively grounded diagnosis of VLM spatial reasoning and reveal how multi-view spatial mental models are formed, degraded and destabilized across reasoning phases.

# Summary. An optional shortened abstract.
summary: We present ReMindView-Bench, a cognitively grounded benchmark for evaluating how VLMs construct, align and maintain spatial mental models across complementary viewpoints. ReMindView-Bench systematically varies viewpoint spatial pattern and query type to probe key factors of spatial cognition. Explicit phase-wise analysis using LLM-as-a-judge and self-consistency prompting shows that VLMs perform well on in-frame perception but degrade sharply when integrating information across views. Implicit analysis, including linear probing and entropy dynamics, further show progressive loss of task-relevant information and uncertainty separation between correct and incorrect trajectories. These results provide a cognitively grounded diagnosis of VLM spatial reasoning and reveal how multi-view spatial mental models are formed, degraded and destabilized across reasoning phases.

tags:
  - 'spatial-intelligence'
featured: true

links:
  - name: Dataset
    url: https://huggingface.co/datasets/Xue0823/ReMindView-Bench
url_code: 'https://github.com/pittisl/ReMindView-Bench'
url_pdf: 'https://arxiv.org/pdf/2512.02340'
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
