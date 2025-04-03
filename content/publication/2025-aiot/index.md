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
summary: Federated Artificial Intelligence of Things (AIoT) uses distributed data on IoT devices to train AI models. However, in practical AIoT systems, heterogeneous devices cause data heterogeneity and varying amounts of device staleness, which can reduce model performance or increase federated training time. Existing FL frameworks improperly consider device delays as independent from data heterogeneity. Our work explore a scenario where device delays and data heterogeneity are closely correlated, and propose FedDC, a new technique to mitigate the impact of such device delays. Our basic idea is to use gradient inversion to learn knowledge about device’s local data distribution and use such knowledge to compensate the impact of device delays on devices’ model updates. Experiment shows that FedDC can improve the FL performance by 34% with high amounts of device delays, without impairing the devices’ local data privacy.

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

## FL in AIoT: Challenges

Federated Learning (FL) in Artificial Intelligence of Things (AIoT)
is often used to train AI models in scenarios where data in AIoT
applications is generated at distributed sources and cannot be processed
at a central server due to large sizes and privacy concerns, such as
Human Activity Recognition, Smart Health, Hazard Rescue of Industrial
Sensing.

For FL in AIoT environments, there are two major challenges,
namely *data heterogeneity* and *device delays*. Non-IID data distribution
degrades the global model’s performance, and delays could cause significant
slowdown of FL training.

Conventional FL solutions fail in such cases because they either:

* Ignore delayed updates (synchronous FL)
* Down-weight them indiscriminately (asynchronous FL)
* Assume independence between delay and data (which is rarely true)

## Our Solution: FedDC

FedDC introduces a gradient inversion-based *Delay Compensator* that
estimates and rectifies the error introduced by delays at the FL server,
requiring no changes to IoT devices’ local training.

![FedDC basic idea](2025-aiot/aiot-fig2.png)

### Key Idea

In our design, the FL server uses gradient inversion to approximate the
local data distribution of a slow device from its delayed model update.
It then mimics how the delayed update would have looked had it been computed
using the current global model—ensuring that critical knowledge is
preserved in aggregation.

![FedDC Design Overview](2025-aiot/aiot-fig4.png)

### Improve FL Server Compute Efficiency and Privacy Protection

To further reduce the time cost from the computationally-expensive gradient
inversion operation, we propose methods such as gradient sparsification
and selective computation to only compute important gradients.
As shown in the Figure below, involving the top 5% of gradients can reduce
55% of iterations in gradient inversion with only slight error increase.

![Sparsification errors with different rates](/2025-aiot/aiot-fig11.png)

On the other hand, previous works and our work finds out that sparsification
can also reduce the capability of estimating the training data from the
trained model, thus also achieving the goal of privacy protection.

## Implementation and Experiments

We implement our system on top of the Flower FL framework, using a combination
of IoT devices, including embedded devices such as Raspberry
Pi and NVIDIA Jetson Nano and smartphones of different models.

![Devices used in experiments](/2025-aiot/aiot-fig16.png)

We evaluate the performance of FedDC over multiple AIoT datasets in
different domains, such as PAMAP2 (human activity recognition),
ExtraSensory (smartphone-based sensing) and MDI (disaster imagery classification).
Compared to five different baselines, FedDC consistently outperformed alternatives under
high device delay, data heterogeneity, and even in non-stationary data distributions.

![Results with PAMAP2 Dataset](/2025-aiot/aiot-fig19.png)

![Results with different data heterogeneity level](/2025-aiot/aiot-fig20.png)

![Results with variant global data distribution](/2025-aiot/aiot-fig22.png)
