---
title: 'PhyT2V: LLM-Guided Iterative Self-Refinement for Physics-Grounded Text-to-Video Generation'
authors:
  - qiyao
  - xiangyu
  - boyuan
  - wei
date: '2024-12-20T00:00:00Z'
doi: '10.48550/arXiv.2412.00596'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-12-20T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *Conference on Computer Vision and Pattern Recognition 2025*
publication_short: In *CVPR 2025*

abstract: Text-to-video (T2V) generation has been recently enabled by transformer-based diffusion models, but current T2V models lack capabilities in adhering to the real-world common knowledge and physical rules, due to their limited understanding of physical realism and deficiency in temporal modeling. Existing solutions are either data-driven or require extra model inputs, but cannot be generalizable to out-of-distribution domains. In this paper, we present PhyT2V, a new data-independent T2V technique that expands the current T2V model's capability of video generation to out-of-distribution domains, by enabling chain-of-thought and step-back reasoning in T2V prompting. Our experiments show that PhyT2V improves existing T2V models' adherence to real-world physical rules by 2.3x, and achieves 35% improvement compared to T2V prompt enhancers.

# Summary. An optional shortened abstract.
###summary: In this paper, we aim to achieve sparse activation in Small Language Models (SLMs). Sparse activation can selectively activates only an input-dependent set of neurons in inference, is a useful technique to reduce the computing cost for Large Language Models (LLMs). We first show that the existing sparse activation schemes in LLMs cannot be applied to SLMs, and discuss better alternative based on attribution scores with different attribution metrics. We proposed a new attribution metric that can provably correct errors and achieve precise sparse activation. Experiments show that our approach can achieve 80% spasification ratio with <5% model accuracy loss.
summary: Text-to-video (T2V) generative AI could revolutionize many current and emerging application and industry domains. However, the capabilities of today's T2V generative models are mostly data dependent. While they perform well in domains covered by the training data, they usually fail to obey the real-world common knowledge and physical rules with out-of-distribution prompts. Expanding the model's capabilities, on the other hand, relies on large amounts of real-world data and is hence not scalable. Our recent work aims to address this limitation of data dependency, by fully unleashing the current T2V models' potential in scene generation given proper and detailed prompts. Our approach, namely PhyT2V, is a training-free technique that leverages the LLM's capabilities of chain-of-thought and step-back reasoning in the language domain, to logically identify the deficiency of generated videos and iteratively refine the current T2V models' video generation by correcting such deficiency with more precise and well articulated prompts.

tags:
  - 'infer-time-generative-ai'
featured: true

#links:
#  - name: Artifact
#    url: https://doi.org/10.5281/zenodo.7812218
url_code: 'https://github.com/pittisl/PhyT2V'
url_pdf: 'https://arxiv.org/pdf/2412.00596'
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

## Overview

Text-to-video (T2V) generation with transformer-based diffusion model
can produce videos conditioned on textual prompts. These models demonstrate
astonishing capabilities of generating complex and photorealistic scenes,
but still have significant drawbacks in adhering to the real-world common
knowledge and physical rules, such as quantity, material,
fluid dynamics, gravity, motion, collision and causality, and such limitations
fundamentally prevent current T2V models from being used for real-world simulation.

Most existing solutions to these challenges are data-driven, by using large multimodal T2V
datasets that cover different real-world domain. However,
these solutions heavily rely on the volume, quality and diversity of datasets.
Since real-world common knowledge and physical rules are not explicitly embedded in the T2V generation process,
as shown in the figure below, the quality of video generation would largely drop in out-of-distribution
domains that are not covered
by the training dataset, and the generalizability of T2V models is limited due to the vast diversity of
real-world scenario domains.

![Quality drop in out-of-distribution prompts](2024-phyt2v/phyt2v-fig3.png)

To achieve generalizable enforcement of physics-grounded T2V generation, we propose a fundamentally
different approach: instead of expanding the training dataset or further complicating the T2V model
architecture, we aim to expand the current T2V model’s capability of video generation from
in-distribution to out-of-distribution domains, by embedding real-world knowledge and physical rules
into the text prompts with sufficient and appropriate contexts. To avoid ambiguous and unexplainable
prompt engineering, our basic idea is to enable chain-of-thought (CoT) and step-back
reasoning in T2V generation prompting, to ensure that T2V models follow correct physical dynamics
and inter-frame consistency by applying step-by-step guidance and iterative refinement.

### Our Approach

As shown in the figure below, reasoning is iteratively conducted in PhyT2V, and each iteration autonomously
refines both the T2V prompt and generated video in three steps.

![PhyT2V approach](phyt2v.png)

In Step 1, the LLM analyzes the T2V prompt to extract objects
to be shown and physical rules to follow in the video via in-context learning. In Step 2, we first use
a video captioning model to translate the video’s semantic contents into texts according to the list of
objects obtained in Step 1, and then use the LLM to evaluate the mismatch between the video caption
and current T2V prompt via CoT reasoning. In Step 3, the LLM refines the current T2V prompt, by
incorporating the physical rules summarized in Step 1 and resolving the mismatch derived in Step 2,
through step-back prompting. The refined T2V prompt is then used by the T2V model again for video
generation, starting a new round of refinement. Such iterative refinement stops when the quality of
generated video is satisfactory or the improvement of video quality converges. You may find
an example of our prompt design for the 3 steps in the figure below.

![PhyT2V design](2024-phyt2v/phyt2v-fig6.png)

## Result Showcase

The images below show a comparison between videos generated by the current
text-to-video generation model (CogVideoX-5B) that cannot adhere to the
real-world physical rules (described in brackets following the user prompt,
and our method PhyT2V, when applied to the same model, better reflects
the real-world physical knowledge.

![PhyT2V improvements compared to SOTA T2V models](2024-phyt2v/phyt2v-fig1.png)

### Online Demo

We have released a Discord Bot which allows you to try our work on-the-fly
with SOTA T2V models.
Please visit [this link](https://discord.com/channels/1312937020141732011/1314317637047812207)
to get started.
