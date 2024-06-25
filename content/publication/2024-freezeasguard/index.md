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
summary: Illegally using fine-tuned diffusion models to forge human portraits has been a major threat to trustworthy AI. While most existing work focuses on detection of the AI-forged contents, our recent work instead aims to mitigate such illegal domain adaptation by applying safeguards on diffusion models. Being different from model unlearning techniques that cannot prevent the illegal domain knowledge from being relearned with custom or public data, our approach, namely FreezeGuard, suggests that the model publisher selectively freezes tensors in pre-trained models that are critical to the convergence of fine-tuning in illegal domains. FreezeAsGuard can effectively reduce the quality of images generated in illegal domains and ensure that these images are unrecognizable as target objects. Meanwhile, it has the minimum impact on legal domain adaptations, and can save up to 48% GPU memory and 21% wall-clock time in model fine-tuning.

tags:
  - 'trustworthy-ai'
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

## Overview

Our design of FreezeAsGuard builds on bilevel optimization, which embeds one optimization
problem within another. As shown in the figure below, the lower-level optimization problem
is a *simulated user loop* that the user fine-tunes the diffusion model towards convergence
by minimizing the loss over both illegal and innocent domains. The upper-level problem is a
mask learning loop that the model publisher learns m to mitigate the diffusion model’s
representation power when being fine-tuned in illegal domains, without affecting fine-tuning
in innocent domains.

![FreezeAsGuard Overview](2024-freezeasguard/freezeasguard-overview.png)

## Qualitative Examples of Generated Images

The following figures show qualitative examples of generated images in illegal domains
of 10 subjects in [our FF25 dataset](/dataset/#ff25), after applying FreezeAsGuard-30%
to fine-tuning SD v1.5. Each prompt adopts the same seed for generation.

![Qualitative Examples 1](2024-freezeasguard/freezeasguard-main.png)
![Qualitative Examples 2](2024-freezeasguard/freezeasguard-other.png)
