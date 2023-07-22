---
title: 'Real-time Neural Network Inference on Extremely Weak Devices: Agile Offloading with Explainable AI'
authors:
  - admin
date: '2023-07-22T00:00:00Z'
doi: '10.1145/3495243.3560551'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-22T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 28th Annual International Conference on Mobile Computing And Networking (MobiCom'22)*
publication_short: In *MobiCom'22*

abstract: On-device training is essential for neural networks (NNs) to continuously adapt to new online data, but can be time-consuming due to the device's limited computing power. To speed up on-device training, existing schemes select trainable NN portion offline or conduct unrecoverable selection at runtime, but the evolution of trainable NN portion is constrained and cannot adapt to the current need for training. Instead, runtime adaptation of on-device training should be fully elastic, i.e., every NN substructure can be freely removed from or added to the trainable NN portion at any time in training. In this paper, we present _ElasticTrainer_, a new technique that enforces such elasticity to achieve the required training speedup with the minimum NN accuracy loss. Experiment results show that ElasticTrainer achieves up to 3.5× more training speedup in wall-clock time and reduces energy consumption by 2×-3× more compared to the existing schemes, without noticeable accuracy loss.

# Summary. An optional shortened abstract.
summary: AgileNN is the first work that achieves real-time inference (<20ms) of mainstream neural network models (e.g., ImageNet) on extremely weak MCUs (e.g., STM32 series with <1MB of memory), without impairing the inference accuracy. The usage of eXplainable AI (XAI) techniques allows >6x improvement of feature compressibility during offloading and >8x reduction of the local device’s resource consumption.

tags:
  - 'on-device-ai'
featured: true

url_pdf: https://doi.org/10.1145/3495243.3560551
url_code: 'https://github.com/pittisl/AgileNN'
url_video: 'https://www.youtube.com/watch?v=OwNRcuTRgwE'

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

{{< youtube id="OwNRcuTRgwE" >}}
