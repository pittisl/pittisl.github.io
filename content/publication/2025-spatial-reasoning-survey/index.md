---
title: 'Spatial Reasoning in Multimodal Large Language Models: A Survey of Tasks, Benchmarks and Methods'
authors:
  - weichen
  - qiyao
  - haoming
  - xiangyu
  - boyuan
  - wei
date: '2025-11-14T00:00:00Z'
doi: '10.48550/arXiv.2511.15722'

# Schedule page publish date (NOT publication's date).
publishDate: '2025-11-14T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: In *arXiv preprint*
publication_short: In *arXiv*

abstract: Spatial reasoning, which requires ability to perceive and manipulate spatial relationships in the 3D world, is a fundamental aspect of human intelligence, yet remains a persistent challenge for Multimodal large language models (MLLMs). While existing surveys often categorize recent progress based on input modality (e.g., text, image, video, or 3D), we argue that spatial ability is not solely determined by the input format. Instead, our survey introduces a taxonomy that organizes spatial intelligence from cognitive aspect and divides tasks in terms of reasoning complexity, linking them to several cognitive functions. We map existing benchmarks across text only, vision language, and embodied settings onto this taxonomy, and review evaluation metrics and methodologies for assessing spatial reasoning ability. This cognitive perspective enables more principled cross-task comparisons and reveals critical gaps between current model capabilities and human-like reasoning. In addition, we analyze methods for improving spatial ability, spanning both training-based and reasoning-based approaches. This dual perspective analysis clarifies their respective strengths, uncovers complementary mechanisms. By surveying tasks, benchmarks, and recent advances, we aim to provide new researchers with a comprehensive understanding of the field and actionable directions for future research. 

# Summary. An optional shortened abstract.
summary: Our survey on spatial reasoning introduces a taxonomy that organizes spatial intelligence from cognitive aspect and divides tasks in terms of reasoning complexity, linking them to several cognitive functions. We map existing benchmarks across text only, vision language, and embodied settings onto this taxonomy, and review evaluation metrics and methodologies for assessing spatial reasoning ability. This cognitive perspective enables more principled cross-task comparisons and reveals critical gaps between current model capabilities and human-like reasoning. In addition, we analyze methods for improving spatial ability, spanning both training-based and reasoning-based approaches. This dual perspective analysis clarifies their respective strengths, uncovers complementary mechanisms. By surveying tasks, benchmarks, and recent advances, we aim to provide new researchers with a comprehensive understanding of the field and actionable directions for future research.

tags:
  - 'spatial-intelligence'
featured: true

#url_code: 'https://github.com/pittisl/infinibench'
url_pdf: 'https://arxiv.org/pdf/2511.15722'
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

## Survey Taxonomy

We introduce a cognitive taxonomy of spatial reasoning tasks, organizing them by function and reasoning complexity. We also map existing benchmarks, review evaluation metrics, and analyze training- and reasoning-based methods to improve spatial ability. The study highlights key gaps and future directions toward developing models with more human-like spatial intelligence.

![Taxonomy of our survey](2025-spatial-reasoning-survey/spatial-reasoning-survey-figure3.png)

