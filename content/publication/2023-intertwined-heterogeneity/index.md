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

## Background

In practical Federated Learning (FL) scenarios, it is not uncommon to witness excessive or even unlimited staleness in clients’ model updates, especially when the client devices have very limited computing power, local energy budget, or communication capabilities. Traditional asynchronous Federated Learning (AFL) solution, such as weighted aggregation, results in improper bias towards fast clients and misses important knowledge in slow clients’ model updates, when data and device heterogeneities are intertwined.

To demonstrate its impact, we conducted experiments by using the MNIST dataset on 100 clients to train a 3-layer CNN model. We set data heterogeneity as that each client only contain samples in one data class, and set device heterogeneity as a staleness of 40 epochs on clients with data samples in class 5. Results in the bottom-left figure show that, staleness will lead to large degradation of model accuracy, and using weighted aggregation will further enlarge the degradation. The bottom-right figure also shows that other techniques such as DC-ASGD become ineffective rapidly with the increase of staleness epoch value.

![The impact of staleness in asynchronous Federated Learning](2023-intertwined-heterogeneity/figure1_2.png)


## Methodology

We propose addressing the above limitations based on existing techniques of gradient inversion. Gradient inversion (GI) aims to recover the original training data from gradients of a model under the white box setting where the all information about the model is known. The basic idea is to minimize the difference between the trained model’s gradient and the gradient computed from the recovered data.

![Overall Picture](2023-intertwined-heterogeneity/intertwined-heterogeneity-overview.png)

As shown in the figure above, our proposed technique consists of three key components: 1) recovering an intermediate dataset from the received stale model update via gradient inversion to represent the distribution of the client’s training data; 2) estimating the unstale model update using the recovered dataset; and 3) deciding when to switch back to vanilla FL in the late stage of FL training, to avoid the excessive estimation error from gradient inversion.

## Experiment Results

We evaluated our proposed technique in two FL scenarios. In the first scenario, all clients’ local datasets are fixed. In the second scenario, we consider a more practical FL setting, where clients’ local data is continuously updated and data distributions are variant over time. In all experiments, we consider a FL scenario with 100 clients. We assess our approach’s performance improvement by measuring the increase of model accuracy in the selected data class being affected by staleness.

### FL Performance in the Fixed Data Scenario

With staleness set to 40 epochs, the figures below shows (1) the model accuracy in data class 5, using MNIST dataset to train a LeNet model, and (2) in data class 2 with CIFAR-10 dataset and ResNet-8 model.

![Result in Fixed Data Scenario](2023-intertwined-heterogeneity/figure11_12.png)

Results also shows that our GI-based Estimation method could speed up the training process by achieving the same model accuracy with less training time consumption. This applies to different staleness conditions, different datasets and different amounts of data heterogeneity (as indicated by parameter $\alpha$ in the table below).

![Table Results in Fixed Data Scenario](2023-intertwined-heterogeneity/table3_4.png)

### FL Performance in the Variant Data Scenario

To verify performance with continuously varied data distributions of clients’ local datasets, we use MNIST and SVHN datasets, which are for the same learning task (i.e., handwriting digit recognition) but with different feature representations. Each client’s local dataset is initialized as the MNIST dataset in the same way as in the fixed data scenario. Afterwards, during training, each client continuously replaces random data samples in its local dataset with new data samples in the SVHN dataset.

Results in the figure below show that in such variant data scenario, the model accuracy improvements by the existing FL training strategies exhibit significant fluctuations over time and stay low (<40%). in comparison, our proposed gradient inversion based estimation achieves much higher model accuracy, which is comparable to FL without staleness and 20% higher than those in existing FL schemes.

![Results with variant data distributions](2023-intertwined-heterogeneity/figure14.png)

More results below with different amounts of staleness and rates of data variation (streaming rate) also demonstrate that our proposed method outperformed the existing FL strategies in different scenarios with different dynamics of local data patterns.

![Table results with variant data distributions](2023-intertwined-heterogeneity/table5_6.png)
