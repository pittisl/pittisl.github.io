---
title: 'FreezeAsGuard: Mitigating Illegal Adaptation of Diffusion Models via Selective Tensor Freezing'
authors:
  - kai
  - wei
date: '2024-05-20T00:00:00Z'
doi: '10.48550/arXiv.2405.17472'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-05-20T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: In *arXiv preprint*
publication_short: In *arXiv*

abstract: Text-to-image diffusion models can be fine-tuned in custom domains to adapt to specific user preferences, but such unconstrained adaptability has also been utilized for illegal purposes, such as forging public figures' portraits and duplicating copyrighted artworks. Most existing work focuses on detecting the illegally generated contents, but cannot prevent or mitigate illegal adaptations of diffusion models. Other schemes of model unlearning and reinitialization, similarly, cannot prevent users from relearning the knowledge of illegal model adaptation with custom data. In this paper, we present FreezeAsGuard, a new technique that addresses these limitations and enables irreversible mitigation of illegal adaptations of diffusion models. The basic approach is that the model publisher selectively freezes tensors in pre-trained diffusion models that are critical to illegal model adaptations, to mitigate the fine-tuned model's representation power in illegal domains but minimize the impact on legal model adaptations in other domains. Such tensor freezing can be enforced via APIs provided by the model publisher for fine-tuning, can motivate users' adoption due to its computational savings. Experiment results with datasets in multiple domains show that FreezeAsGuard provides stronger power in mitigating illegal model adaptations of generating fake public figures' portraits, while having the minimum impact on model adaptation in other legal domains.

# Summary. An optional shortened abstract.
summary: This work, FreezeAsGuard, presents a new technique that enables irreversible mitigation of illegal adaptations of diffusion models. The basic approach is that to selectively freezes tensors in pre-trained diffusion models that are critical to illegal model adaptations. This mitigates the fine-tuned model's representation power in illegal domains but minimize the impact on legal model adaptations in other domains. Experiment show that FreezeAsGuard provides stronger power in mitigating illegal model adaptations of generating fake public figures' portraits, while having the minimum impact in other legal domains.

tags:
  - 'on-device-ai'
featured: true

#links:
#  - name: Artifact
#    url: https://doi.org/10.5281/zenodo.7812218
url_code: 'https://github.com/pittisl/FreezeAsGuard'
url_pdf: 'https://arxiv.org/pdf/2405.17472'
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

## Qualitative Examples of Generated Images

The following figures show qualitative examples of generated images in illegal domains
of 10 subjects in FF25 dataset, after applying FreezeAsGuard-30% to fine-tuning SD v1.5.
Each prompt adopts the same seed for generation.

![Qualitative Examples 1](2024-freezeasguard/freezeasguard-main.png)
![Qualitative Examples 2](2024-freezeasguard/freezeasguard-other.png)
