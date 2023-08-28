---
title: 'ElasticTrainer: Speeding Up On-Device Training with Runtime Elastic Tensor Selection'
authors:
  - kai
  - boyuan
  - wei
date: '2023-06-22T00:00:00Z'
doi: '10.1145/3581791.3596852'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-22T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 21st Annual International Conference on Mobile Systems, Applications and Services (MobiSys'23)*
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
url_pdf: 'https://sites.pitt.edu/~weigao/publications/mobisys23-elastictrainer.pdf'
url_code: 'https://github.com/pittisl/ElasticTrainer'
url_video: 'https://youtu.be/q86LnqEew_U'
url_slides: 'https://github.com/HelloKevin07/HelloKevin07.github.io/raw/master/files/ElasticTrainer-slides.pptx'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Existing work vs. ElasticTrainer'
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

## Opportunities for on-device NN Training Speedup

Since the pre-trained NN model has learned generic capabilities of
extracting low-level features (e.g., color and texture information in
images), on-device training only needs to be applied to some
NN substructures and hence requires fewer training epochs and
weight updates.
As a result, we can potentially gain significant speedup by selecting
a small trainable NN portion without losing much accuracy.
When retraining a ResNet50 NN model with CUB-200 dataset using
traditional transfer learning methods, selecting a NN portion with
only 10 bottom layers in first 3 epochs measures similar validation
accuracy than full retraining, but with a 2x training speedup.
However, traditional learning methods, such as offline exhaustively searching,
have their optimality quickly deterioates with training proceeds. This motivates
us to transform to online and fully elastic selection of trainable NN portion.

![Opportunities of training speedup](2023-elastictrainer/elastictrainer-fig2.png)

## Granuliarity of Selection

The optimality of selecting the trainable NN portion is affected by the granularity
of selection, which can be at the level of weights, tensors and layers on most NNs.
ElasticTrainer adopts tensor-level selection, which ensures accuracy and can also
be efficiently executed in existing NN frameworks without extra overhead.

![Granularities of Selection](2023-elastictrainer/elastictrainer-fig4.png)

## System Overview

ElasticTrainer’s design aims to select the optimal
trainable NN portion at runtime, to achieve the desired training
speedup with the maximum training loss reduction.
In the offline stage, ElasticTrainer uses a *Tensor Timing Profiler* to
profile the training times of selected tensors, to provide inputs for
calculating {{< math >}}$ T_{sel}(M) ${{< /math >}}.
In the online stage, the system builds on an accurate yet computationally efficient metric
that evaluates the aggregate importance of selected tensors and the
corresponding reduction of training loss, and such evaluation is
done by *Tensor Importance Evaluator* in ElasticTrainer design.

![ElasticTrainer System Overview](2023-elastictrainer/elastictrainer-system-overview.png)

## Teaser Video

{{< youtube id="q86LnqEew_U" >}}
