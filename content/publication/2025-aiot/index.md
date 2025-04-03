---
title: 'When Device Delays Meet Data Heterogeneity in Federated AIoT Applications'
authors:
  - haoming
  - wei
date: '2025-03-30T03:19:40Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2025-03-30T00:00:11Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the 31st Annual International Conference on Mobile Computing and Networking (MobiCom 2025)'
publication_short: In *MobiCom 2025*

abstract: Federated AIoT uses distributed data on IoT devices to train AI models. However, in practical AIoT systems, heterogeneous devices cause data heterogeneity and varying amounts of device staleness, which can reduce model performance or increase federated training time. When addressing the impact of device delays, existing FL frameworks improperly consider it as independent from data heterogeneity. In this paper, we explore a scenario where device delays and data heterogeneity are closely correlated, and propose FedDC, a new technique to mitigate the impact of device delays in such cases. Our basic idea is to use gradient inversion to learn knowledge about device’s local data distribution and use such knowledge to compensate the impact of device delays on devices’ model updates. Experiment results on heterogeneous IoT devices show that FedDC can improve the FL performance by 34% with high amounts of device delays, without impairing the devices’ local data privacy.

# Summary. An optional shortened abstract.
summary: Federated Artificial Intelligence of Things (AIoT) uses distributed data on IoT devices to train AI models. However, in practical AIoT systems, heterogeneous devices cause data heterogeneity and varying amounts of device staleness, which can reduce model performance or increase federated training time. Existing FL frameworks improperly consider device delays as independent from data heterogeneity. Our work explore a scenario where device delays and data heterogeneity are closely correlated, and propose FedDC, a new technique to mitigate the impact of device delays in such cases. Our basic idea is to use gradient inversion to learn knowledge about device’s local data distribution and use such knowledge to compensate the impact of device delays on devices’ model updates. Experiment shows that FedDC can improve the FL performance by 34% with high amounts of device delays, without impairing the devices’ local data privacy.

tags:
  - 'on-device-ai'
  - 'federated-learning'
featured: true

url_pdf: 'https://sites.pitt.edu/~weigao/publications/mobicom25_aiot.pdf'
#url_code: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
# caption: 'Training accuracy comparison with MNIST dataset and LeNet model'
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

