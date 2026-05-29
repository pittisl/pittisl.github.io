---
title: 'Attribution-based Sparse Activation in Large Language Models'
authors:
  - jifeng
  - xiangyu
  - boyuan
  - kai
  - weichen
  - wei
date: '2026-05-20T00:00:00Z'
doi: '10.48550/arXiv.2406.06562'

# Schedule page publish date (NOT publication's date).
publishDate: '2026-05-20T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: In *Ninth Conference on Machine Learning and Systems*
publication_short: In *MLSys 2026*

abstract: LLM inference is computationally expensive due to the LLM’s large parameter sizes. Existing techniques reduce the computing cost via model retraining, but cannot well adapt to different downstream tasks or variant input data at runtime. To avoid such retraining efforts for runtime adaptability, a better option is sparse activation that selectively deactivates an input-dependent set of neurons in inference, but current methods of lossless sparse activation only deactivate neurons with zero output magnitudes, and are ineffective on recent LLMs with higher parameter efficiency. In this paper, we present a new technique of attribution-based sparse activation, which is a lossy sparse activation technique that deactivates neurons with low attribution scores and aims to achieve the best tradeoff between model accuracy and computing costs. To ensure optimal sparse activation, we quantified the large errors of existing attribution metrics when used for sparse activation, due to the interdependency among attribution scores of different neurons, and further proposed a new attribution metric that can provably correct such errors. Experiments show that our technique can achieve up to 70% model sparsity in difficult generative tasks such as question answering and text summarization with <5% model accuracy loss. Such high model sparsity enables us to reduce the computing latency and memory use of LLM inference by 35% and 40%, respectively.

# Summary. An optional shortened abstract.
###summary: In this paper, we aim to achieve sparse activation in Small Language Models (SLMs). Sparse activation can selectively activates only an input-dependent set of neurons in inference, is a useful technique to reduce the computing cost for Large Language Models (LLMs). We first show that the existing sparse activation schemes in LLMs cannot be applied to SLMs, and discuss better alternative based on attribution scores with different attribution metrics. We proposed a new attribution metric that can provably correct errors and achieve precise sparse activation. Experiments show that our approach can achieve 80% spasification ratio with <5% model accuracy loss.
summary: LLM inference is computationally expensive due to the LLM’s large parameter sizes. Existing techniques reduce the computing cost via model retraining, but cannot well adapt to different downstream tasks or variant input data at runtime. To avoid such retraining efforts for runtime adaptability, a better option is sparse activation that selectively deactivates an input-dependent set of neurons in inference, but current methods of lossless sparse activation only deactivate neurons with zero output magnitudes, and are ineffective on recent LLMs with higher parameter efficiency. In this paper, we present a new technique of attribution-based sparse activation, which is a lossy sparse activation technique that deactivates neurons with low attribution scores and aims to achieve the best tradeoff between model accuracy and computing costs. To ensure optimal sparse activation, we quantified the large errors of existing attribution metrics when used for sparse activation, due to the interdependency among attribution scores of different neurons, and further proposed a new attribution metric that can provably correct such errors. Experiments show that our technique can achieve up to 70% model sparsity in difficult generative tasks such as question answering and text summarization with <5% model accuracy loss. Such high model sparsity enables us to reduce the computing latency and memory use of LLM inference by 35% and 40%, respectively.

tags:
  - 'on-device-ai'
featured: true

#links:
#  - name: Artifact
#    url: https://doi.org/10.5281/zenodo.7812218
url_code: 'https://github.com/pittisl/Sparse-Activation'
#url_pdf: 'https://arxiv.org/pdf/2406.06562'
url_pdf: 'https://openreview.net/pdf?id=gJFigZeb5D'
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

![Sparse Activation comparision between LLM and SLM](2026-sparse-activation-slm/sparse-activation-slm-fig2.png)

## Using Attribution Scores as Neuron Importance

A better approach is to measure neurons’ importance in inference with their attribution scores, and further use such attribution scores for sparse activation. In general, attribution methods quantify the correlation between input data, intermediate features and model output, and most recent methods calculate neurons’ attribution scores from their gradients and outputs. We investigated the effectiveness of representative gradient-based attribution metrics, as listed below, when evaluating a neuron’s importance for sparse activation.

* **Gradient × Output (GxO)**: It calculates the first-order approximation of the change of model output when the neuron is deactivated, as $\partial F(x) / \partial x \cdot x$, where $x$ is the neurons’ output scalar and $F$ is a function that maps neoron’s output to the model output.
* **SNIP**: It considers only the sensitivity of neuron’s output change on the model output as $| \partial F(x) / \partial x \cdot x|$.
* **Fisher information**: It calculates the square value of SNIP, and hence ranks the importances of different neurons in the same ways as SNIP does.
* **Integrated Gradients (IG)**: It calculates the neuron’s contribution to the change of model output by interpolating between x and a baseline (usually zero output) and averaging the gradients at these interpolations.

As shown in the Figure below, IG and GxO achieve the highest and very similar levels of model accuracy. Due to IG being computationally expensive, GxO’s first-order approximation to attribution is a better choice.

![Accuracy-spasity tradeoff comparison](2026-sparse-activation-slm/sparse-activation-slm-fig3.png)

## Attribution Errors due to Interdependency

As shown in the Figure below on the left, whenever some neurons are deactivated, such deactivation changes the attribution scores of other activated neurons, both in the same layer and in other subsequent layers. These changes, in many cases, could also change the rankings of neurons’ attribution scores and hence result in suboptimal selection of neurons being deactivated, given a required activation ratio.

Results in Figure below on the right show that such impact significantly grows with higher activation ratios. The basic reason is that when the activation ratio is high, only few neurons are deactivated. We also found that attribution errors produce much higher impacts on MLP neurons, because the number of MLP neurons is usually much larger than the number of attention heads, and the rank of MLP neurons’ attention scores is hence easier to be changed.

![Interdependency and Attribution Score changes](2026-sparse-activation-slm/sparse-activation-slm-fig45.png)

We are then motivated to develop techniques that can effectively mitigate these attribution errors and optimize the accuracy-sparsity tradeoffs in SLMs with proper sparse activation. In particular, the intra-layer dependency only reflects changes in the current layer’s gradients because the outputs of neurons in the same layer are independent from each other. In contrast, the inter-layer dependency reflects changes in both the neuron outputs and gradients of the subsequent layer, as they all depend on the outputs of the previous layer. Hence, we mainly focus on mitigating the errors caused by inter-layer dependency.

## Attribution Error Correction

Our approach is to first analyze and quantify the attribution error caused by inter-layer dependency, and then mitigate such error by adding a corrective term onto each neuron’s attribution calculated with the GxO metric, so that we can ensure proper sparse activation by calculating all neurons’ attributions in one shot. More specifically, we formally proved the lower and upper bounds of the attribution error, and further provided practical methods of calculating and applying such corrective terms based on these bounds.

### Our Proposed Corrective Term

Without loss of generality, we use a case of two layers in a SLM, namely $L_1$ and $L_2$, to quantify the attribution error caused by inter-layer dependency. $L_2$ is a deeper layer than $L_1$. $L_1$’s neuron output $\textbf{X} = (x_{1}, x_{2}, \ldots{}, x_{N_1})$. We use $F( \cdot )$ to represent the function that maps the output of $L_1$ to the model output.

With a reasonable assumption that intra-layer dependency has minimal impact on attribution error, we can assume that applying masking does not change the neuron gradients in the same $L_1$ layer. In this scenario, we could prove the Theorem that the error of inter-layer dependency caused by deactivating neuron $i$ in $L_1$ has a lower bound of $0$, and an upper bound of $| x_i | \cdot \sqrt{ \sum_{k=1}^{N_1} { ( \frac{\partial F}{\partial x_k } ) }^{2} } $, where $x_k$ is the output of another neuron $k$ in $L_1$. The proof can be found in Section 3.2 of our paper.

On top of the Theorem above, we experimentally show that the distribution of attribution errors follows a truncated normal distribution with a high confidence interval. As a result, we calculate the corrective term as $$ C(i) = \frac{1}{2} \cdot | x_i | \cdot \sqrt{ \sum_{k=1}^{N_1} { ( \frac{\partial F}{\partial x_k } ) }^{2}  } $$

This corrective term is only related to the output magnitudes and gradients of neurons, and hence such corrective terms of all neurons can be computed in one shot with vectorized computations enabled in the existing deep learning APIs.

In the actual computation, the corrective term is added onto the attribution score of neuron $i$ in $L_1$ calculated without deactivation, which is denoted as $S(F, x_{i})$ in the paper. In our experiments, we use GxO’s first-order approximation to compute $S( \cdot )$.

## Main Results

We evaluate the model accuracy with different activation ratios (ARs), using the Phi-2 model on the TruthfulQA dataset. Results in the Table below show that, when applying our proposed corrective term onto the GxO metric, our approach generally achieves much higher model accuracy than all baselines.

![Main Results](2026-sparse-activation-slm/sparse-activation-slm-table2.png)
