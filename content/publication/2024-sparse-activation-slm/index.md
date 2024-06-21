---
title: 'Achieving Sparse Activation in Small Language Models'
authors:
  - jifeng
  - kai
  - boyuan
  - wei
date: '2024-06-03T00:00:00Z'
doi: '10.48550/arXiv.2406.06562'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-06-03T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: In *arXiv preprint*
publication_short: In *arXiv*

abstract: Sparse activation, which selectively activates only an input-dependent set of neurons in inference, is a useful technique to reduce the computing cost of Large Language Models (LLMs) without retraining or adaptation efforts. However, whether it can be applied to the recently emerging Small Language Models (SLMs) remains questionable, because SLMs are generally less over-parameterized than LLMs. In this paper, we aim to achieve sparse activation in SLMs. We first show that the existing sparse activation schemes in LLMs that build on neurons' output magnitudes cannot be applied to SLMs, and activating neurons based on their attribution scores is a better alternative. Further, we demonstrated and quantified the large errors of existing attribution metrics when being used for sparse activation, due to the interdependency among attribution scores of neurons across different layers. Based on these observations, we proposed a new attribution metric that can provably correct such errors and achieve precise sparse activation. Experiments over multiple popular SLMs and datasets show that our approach can achieve 80% sparsification ratio with <5% model accuracy loss, comparable to the sparse activation achieved in LLMs.

# Summary. An optional shortened abstract.
###summary: In this paper, we aim to achieve sparse activation in Small Language Models (SLMs). Sparse activation can selectively activates only an input-dependent set of neurons in inference, is a useful technique to reduce the computing cost for Large Language Models (LLMs). We first show that the existing sparse activation schemes in LLMs cannot be applied to SLMs, and discuss better alternative based on attribution scores with different attribution metrics. We proposed a new attribution metric that can provably correct errors and achieve precise sparse activation. Experiments show that our approach can achieve 80% spasification ratio with <5% model accuracy loss.
summary: Being different from model compression that requires expensive retraining, sparse activation can effectively reduce neural network models' inference cost at runtime without any prior retraining or adaptation efforts. Although sparse activation has been proved to be effective on Large Language Models (LLMs) that are usually redundant (e.g., OPT and BLOOMZ models), its applicability on recent Small Language Models (SLMs) with higher parameter efficiency remains questionable. Our recent work verified such possibility by using gradient-based attribution scores to evaluate neurons' importance in inference, in both analytical and experimental perspectives. Our results show that we can achieve up to 80% sparsity in major SLM models, including Phi-1.5/2 and MobiLlama-0.5B/1B, with less than 5% model accuracy loss on QA tasks.

tags:
  - 'on-device-ai'
featured: true

#links:
#  - name: Artifact
#    url: https://doi.org/10.5281/zenodo.7812218
url_code: 'https://github.com/pittisl/Sparse-Activation'
url_pdf: 'https://arxiv.org/pdf/2406.06562'
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

## Sparse Activation Difference between LLMs and SLMs

As shown in the Figure, OPT-6.7B is highly over-parameterized such that we only need to activate <40% of neurons to achieve the maximum accuracy. In contrast, MobiLlama-0.5B and Phi-2 are much less over-parameterized, and both require almost all neurons to be activated to avoid accuracy loss. Even when a small percentage of neurons with the smallest magnitudes are deactivated, the model accuracy significantly drops. These results show that for SLMs, neurons’ output magnitudes cannot precisely measure the neurons’ importance in inference, and hence cannot be used as the metric for sparse activation.

![Sparse Activation comparision between LLM and SLM](sparse-activation-slm-fig2.png)

## Using Attribution Scores as Neuron Importance

A better approach is to measure neurons’ importance in inference with their attribution scores, and further use such attribution scores for sparse activation. In general, attribution methods quantify the correlation between input data, intermediate features and model output, and most recent methods calculate neurons’ attribution scores from their gradients and outputs. We investigated the effectiveness of representative gradient-based attribution metrics, as listed below, when evaluating a neuron’s importance for sparse activation.

* **Gradient × Output (GxO)**: It calculates the first-order approximation of the change of model output when the neuron is deactivated, as $\partial F(x) / \partial x \cdot x$, whiere $x$ is the neurons’ output scalar and $F$ is a function that maps neoron’s output to the model output.
* **SNIP**: It considers only the sensitivity of neuron’s output change on the model output as $| \partial F(x) / \partial x \cdot x|$.
* **Fisher information**: It calculates the square value of SNIP, and hence ranks the importances of different neurons in the same ways as SNIP does.
* **Integrated Gradients (IG)**: It calculates the neuron’s contribution to the change of model output by interpolating between x and a baseline (usually zero output) and averaging the gradients at these interpolations.

As shown in the Figure below, IG and GxO achieve the highest and very similar levels of model accuracy. Due to IG being computationally expensive, GxO’s first-order approximation to attribution is a better choice.
