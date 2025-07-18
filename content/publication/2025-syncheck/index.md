---
title: 'Data Can Speak for Itself: Quality-guided Utilization of Wireless Synthetic Data'
authors:
  - 'Chen Gong'
  - 'Bo Liang'
  - wei
  - 'Chenren Xu'
date: '2025-06-23T00:00:00Z'
doi: '10.1145/3711875.3729123'

# Schedule page publish date (NOT publication's date).
publishDate: '2025-06-23T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 23rd Annual International Conference on Mobile Systems, Applications and Services (MobiSys'24)*
publication_short: In *MobiSys'25*

abstract: Generative models have gained significant attention for their ability to produce realistic synthetic data that supplements the quantity of real-world datasets. While recent studies show performance improvements in wireless sensing tasks by incorporating all synthetic data into training sets, the quality of synthetic data remains unpredictable and the resulting performance gains are not guaranteed. To address this gap, we propose tractable and generalizable metrics to quantify quality attributes of synthetic data - affinity and diversity. Our assessment reveals prevalent affinity limitation in current wireless synthetic data, leading to mislabeled data and degraded task performance. We attribute the quality limitation to generative models' lack of awareness of untrained conditions and domain-specific processing. To mitigate these issues, we introduce SynCheck, a quality-guided synthetic data utilization scheme that refines synthetic data quality during task model training. Our evaluation demonstrates that SynCheck consistently outperforms quality-oblivious utilization of synthetic data, and achieves 4.3% performance improvement even when the previous utilization degrades performance by 13.4%.

# Summary. An optional shortened abstract.
summary: While recent studies show performance improvements in wireless sensing tasks by incorporating synthetic data from generative models into training sets, the quality of synthetic data remains unpredictable and the resulting performance gains are not guaranteed. To address this gap, we propose tractable and generalizable metrics to quantify quality attributes of synthetic data - affinity and diversity. Our assessment reveals prevalent affinity limitation in current wireless synthetic data, leading to mislabeled data and degraded task performance. We attribute the quality limitation to generative models' lack of awareness of untrained conditions and domain-specific processing. To mitigate these issues, we introduce SynCheck, a quality-guided synthetic data utilization scheme that refines synthetic data quality during task model training. Our evaluation demonstrates that SynCheck consistently outperforms quality-oblivious utilization of synthetic data.

tags:
  - 'multimodal-generative-ai'
featured: true

#links:
#  - name: Artifact
#    url: https://doi.org/10.5281/zenodo.7812218
#url_code: 'https://github.com/pittisl/FreezeAsGuard'
url_pdf: 'https://arxiv.org/pdf/2506.23174'
#url_video: 'https://youtu.be/q86LnqEew_U'
#url_slides: 'https://github.com/HelloKevin07/HelloKevin07.github.io/raw/master/files/ElasticTrainer-slides.pptx'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  #caption: 'Existing work vs. ElasticTrainer'
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

