---
title: 'Real-time Neural Network Inference on Extremely Weak Devices: Agile Offloading with Explainable AI'
authors:
  - kai
  - wei
date: '2022-10-22T00:00:00Z'
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

abstract: With the wide adoption of AI applications, there is a pressing need of enabling real-time neural network (NN) inference on small embedded devices, but deploying NNs and achieving high performance of NN inference on these small devices is challenging due to their extremely weak capabilities. Although NN partitioning and offloading can contribute to such deployment, they are incapable of minimizing the local costs at embedded devices. Instead, we suggest to address this challenge via agile NN offloading, which migrates the required computations in NN offloading from online inference to offline learning. In this paper, we present AgileNN, a new NN offloading technique that achieves real-time NN inference on weak embedded devices by leveraging eXplainable AI techniques, so as to explicitly enforce feature sparsity during the training phase and minimize the online computation and communication costs. Experiment results show that AgileNN's inference latency is >6X lower than the existing schemes, ensuring that sensory data on embedded devices can be timely consumed. It also reduces the local device's resource consumption by >8X, without impairing the inference accuracy.

# Summary. An optional shortened abstract.
summary: AgileNN is the first work that achieves real-time inference (<20ms) of mainstream neural network models (e.g., ImageNet) on extremely weak MCUs (e.g., STM32 series with <1MB of memory), without impairing the inference accuracy. The usage of eXplainable AI (XAI) techniques allows >6x improvement of feature compressibility during offloading and >8x reduction of the local device’s resource consumption.

tags:
  - 'on-device-ai'
featured: true

url_pdf: 'https://sites.pitt.edu/~weigao/publications/mobicom22.pdf'
url_code: 'https://github.com/pittisl/AgileNN'
url_video: 'https://www.youtube.com/watch?v=OwNRcuTRgwE'
url_slides: 'https://github.com/HelloKevin07/HelloKevin07.github.io/raw/master/files/AgileNN-slides.pptx'

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

## AgileNN vs. Existing Work
AgileNN is a new technique that shifts the
rationale of NN partitioning and offloading from fixed to agile
and data-centric. Our basic idea is to incorporate the knowledge
about different input data’s heterogeneity in training, so that the
required computations to enforce feature sparsity are migrated from
online inference to offline training.

![AgileNN Basic Idea](2022-agilenn/agilenn-illustration.PNG)

![AgileNN vs. Existing Work](2022-agilenn/agilenn-comparison-table.PNG)

## System Overview
AgileNN partitions the neural network into a
Local NN and a Remote NN. In online inference, AgileNN runtime
uses a lightweight feature extractor at the local embedded device
to provide feature inputs: the top-k features with high importance
are retained by the Local NN to make a local prediction, which is
then combined with the Remote NN’s prediction from other less
important features for the final inference output. In this way, the
complexity of Local NN could be minimized without impairing
the inference accuracy, and high sparsity can be enforced when
compressing and transmitting less important features to the server.

![AgileNN System Overview](2022-agilenn/agilenn-system-overview.PNG)

## Experimental Results
We implemented our offline training procedure using tensorflow and deployed the trained local NN and remote NN on a weak microcontroller board and a Dell workstation, respectively. The microcontroller board is equipped with an ESP WiFi module for wireless data transmission. We focus on image recognition tasks and use CIFAR, SVHN and a subset of ImageNet as the datasets in evaluation.

**AgileNN reduces end-to-end latency by 2x-2.5x! compared to existing schemes!**

![AgileNN Accuracy vs. Latency](2022-agilenn/agilenn-accuracy-latency.PNG)

**AgileNN maintains better accuracy under extreme compression rates!**

![AgileNN Compression Rates](2022-agilenn/agilenn-compression-rate.PNG)

**AgileNN consumes less local memory and storage!**

![AgileNN Memory & Storage](2022-agilenn/agilenn-memory-storage.PNG)

**AgileNN consumes less local energy!**

![AgileNN Energy Consumption](2022-agilenn/agilenn-energy-consumption.PNG)

**AgileNN can maintain the best performance under different wireless bandwidths!**

![AgileNN Bandwidth](2022-agilenn/agilenn-bandwidth.PNG)

{{< youtube id="OwNRcuTRgwE" >}}
