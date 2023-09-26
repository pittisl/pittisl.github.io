---
title: 'Tackling the Unlimited Staleness in Federated Learning with Intertwined Data and Device Heterogeneities'
authors:
  - haoming
  - wei
date: '2023-09-21T03:19:40Z'
doi: '10.48550/arXiv.2309.13536'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-09-25T00:00:11Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: In *arXiv preprint*
publication_short: In *arXiv*

abstract: The efficiency of Federated Learning (FL) is often affected by both data and device heterogeneities. Data heterogeneity is defined as the heterogeneity of data distributions on different clients. Device heterogeneity is defined as the clients' variant latencies in uploading their local model updates due to heterogeneous conditions of local hardware resources, and causes the problem of staleness when being addressed by asynchronous FL. Traditional schemes of tackling the impact of staleness consider data and device heterogeneities as two separate and independent aspects in FL, but this assumption is unrealistic in many practical FL scenarios where data and device heterogeneities are intertwined. In these cases, traditional schemes of weighted aggregation in FL have been proved to be ineffective, and a better approach is to convert a stale model update into a non-stale one. In this paper, we present a new FL framework that leverages the gradient inversion technique for such conversion, hence efficiently tackling unlimited staleness in clients' model updates. Our basic idea is to use gradient inversion to get estimations of clients' local training data from their uploaded stale model updates, and use these estimations to compute non-stale client model updates. In this way, we address the problem of possible data quality drop when using gradient inversion, while still preserving the clients' local data privacy. We compared our approach with the existing FL strategies on mainstream datasets and models, and experiment results demonstrate that when tackling unlimited staleness, our approach can significantly improve the trained model accuracy by up to 20% and speed up the FL training progress by up to 35%.

# Summary. An optional shortened abstract.
summary: Federated Learning (FL) efficiency is influenced by intertwined data and device heterogeneities. Traditionally, these factors are treated separately, which becomes ineffective in addressing staleness issue due to asynchronous FL. We introduce a novel FL framework employing the gradient inversion technique to get estimations of clients' local training data from their uploaded stale model updates, and use these estimations to compute non-stale client model updates, which addresses both data quality and privacy concerns. Experiments on mainstream datasets reveal our approach enhances model accuracy by up to 20% and accelerates FL training by up to 35% over existing methods.

tags:
  - 'on-device-ai'
featured: true

url_pdf: 'https://arxiv.org/pdf/2309.13536.pdf'
url_code: 'https://github.com/pittisl/FL-with-intertwined-heterogeneity'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Training accuracy comparison with MNIST dataset and LeNet model'
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

## Background

In practical Federated Learning (FL) scenarios, it is not uncommon to witness excessive or even unlimited staleness in clients’ model updates, especially whenthe client devices have very limited computing power, local energy budget, or communication capabilities. The most intuitive solution to staleness is weighted aggregation, but results in improper bias towards fast clients and misses important knowledge in slow clients’ model updates, when data and device heterogeneities are intertwined. To demonstrate its impact, we conducted experiments by using the MNIST dataset on 100 clients to train a 3-layer CNN model. We set data heterogeneity as that each client only contain samples in one data class, and set device heterogeneity as a staleness of 40 epochs on clients with data samples in class 5. Results in the figure show that, staleness will lead to large degradation of model accuracy, and using weighted aggregation will further enlarge the degradation.

![The impact of staleness in asynchronous Federated Learning](2023-intertwined-heterogeneity/figure1.png)

## Methodology

![Overall Picture](2023-intertwined-heterogeneity/intertwined-heterogeneity-overview.png)

As shown in the figure above, our proposed technique consists of three key components: 1) recovering an intermediate dataset from the received stale model update via gradient inversion to represent the distribution of the client’s training data; 2) estimating the unstale model update using the recovered dataset; and 3) deciding when to switch back to vanilla FL in the late stage of FL training, to avoid the excessive estimation error from gradient inversion.

## Experiment Results

In all experiments, we consider a FL scenario with 100 clients. We assess our approach’s performance improvement by measuring the increase of model accuracy in the selected data class being affected by staleness.

The figure below shows the model accuracy in data class 5 when affected by staleness, using MNIST dataset to train a LeNet model.

![Basic result](intertwined-heterogeneity.png)

The figure below shows model accuracy in data class 2 when affected by staleness, using CIFAR-10 dataset to train a ResNet-8 model.

![Result in fixed data scenario](2023-intertwined-heterogeneity/figure12.png)
