---
title: 'ElasticTrainer: Speeding Up On-Device Training with Runtime Elastic Tensor Selection'
authors:
  - admin
date: '2023-07-22T00:00:00Z'
doi: '10.1145/3581791.3596852'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-22T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 21st Annual International Conference on Mobile Systems, Applications and Services*
publication_short: In *MobiSys'23*

abstract: On-device training is essential for neural networks (NNs) to continuously adapt to new online data, but can be time-consuming due to the device's limited computing power. To speed up on-device training, existing schemes select trainable NN portion offline or conduct unrecoverable selection at runtime, but the evolution of trainable NN portion is constrained and cannot adapt to the current need for training. Instead, runtime adaptation of on-device training should be fully elastic, i.e., every NN substructure can be freely removed from or added to the trainable NN portion at any time in training. In this paper, we present _ElasticTrainer_, a new technique that enforces such elasticity to achieve the required training speedup with the minimum NN accuracy loss. Experiment results show that ElasticTrainer achieves up to 3.5× more training speedup in wall-clock time and reduces energy consumption by 2×-3× more compared to the existing schemes, without noticeable accuracy loss.

# Summary. An optional shortened abstract.
summary: The first on-device AI technique that achieves full elasticity of on-device training on resource-constrained mobile and embedded devices. By leveraging the principle of eXplainable AI (XAI) and evaluating the importance of different tensors in training, we allow fully flexible adaptation of the trainable neural network portion at runtime, according to the current training needs and online data patterns, to minimize the training cost without accuracy loss.

tags:
  - 'on-device-ai'
featured: true

links:
  - name: Artifact
    url: https://doi.org/10.5281/zenodo.7812218
url_pdf: https://doi.org/10.1145/3581791.3596852
url_code: 'https://github.com/pittisl/ElasticTrainer'
url_video: 'https://youtu.be/q86LnqEew_U'

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

{{< youtube id="q86LnqEew_U" >}}
