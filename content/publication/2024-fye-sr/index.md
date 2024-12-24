---
title: 'Perceptual-Centric Image Super-Resolution using Heterogeneous Processors on Mobile Devices'
authors:
  - kai
  - xiangyu
  - wei
date: '2024-09-30T00:00:00Z'
doi: '10.1145/3636534.3690698'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-09-29T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 30th Annual International Conference on Mobile Computing And Networking (MobiCom'24)*
publication_short: In *MobiCom'24*

abstract: Image super-resolution (SR) is widely used on mobile devices to enhance user experience. However, neural networks used for SR are computationally expensive, posing challenges for mobile devices with limited computing power. A viable solution is to use heterogeneous processors on mobile devices, especially the specialized hardware AI accelerators, for SR computations, but the reduced arithmetic precision on AI accelerators can lead to degraded perceptual quality in upscaled images. To address this limitation, in this paper we present SR For Your Eyes (FYE-SR), a novel image SR technique that enhances the perceptual quality of upscaled images when using heterogeneous processors for SR computations. FYE-SR strategically splits the SR model and dispatches different layers to heterogeneous processors, to meet the time constraint of SR computations while minimizing the impact of AI accelerators on image quality. Experiment results show that FYE-SR outperforms the best baselines, improving perceptual image quality by up to 2×, or reducing SR computing latency by up to 5.6× with on-par image quality.

# Summary. An optional shortened abstract.
summary: Image super-resolution (SR) is widely used on mobile devices to enhance user experience. However, neural networks used for SR are computationally expensive, posing challenges for mobile devices with limited computing power. A viable solution is to use heterogeneous processors on mobile devices, especially the specialized hardware AI accelerators, but the reduced arithmetic precision on AI accelerators can lead to degraded perceptual quality in upscaled images. To address this limitation, we present a novel image SR technique that enhances the perceptual quality of upscaled images when using heterogeneous processors for SR computations. It strategically splits the SR model and dispatches different layers to heterogeneous processors, to meet the time constraint while minimizing the impact of AI accelerators on image quality. Experiment results show that our method outperforms the best baselines, improving perceptual image quality by up to 2×, or reducing SR computing latency by up to 5.6× with on-par image quality.

tags:
  - 'on-device-ai'
featured: true

#links:
#  - name: Artifact
#    url: https://doi.org/10.5281/zenodo.7812218
#url_code: 'https://github.com/pittisl/FreezeAsGuard'
url_pdf: 'https://sites.pitt.edu/~weigao/publications/mobicom2024.pdf'
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

## Background

Recent SOTA Image Super-Resolution (SR) techniques are mainly based on Neural
networks (NNs) that can better capture such non-linearity and
hence improve the image quality. However, NN-based SR models are
computationally expensive for mobile devices with limited computing power.
A better alternative is to involve specialized hardware AI
accelerators that have been readily available in mobile SoCs,
such as Neural Processing Units (NPUs), in addition to traditional
processors (e.g., CPU and GPU) for faster inference.
However, their use of fixed-point
arithmetic could result in low quality in upscaled images
when being applied to regression-based SR task.

To mitigate such image quality drop, existing schemes
split input images into small patches and dispatch these
patches to traditional processors and AI accelerators.
However, when upscaled patches
are re-stitched to form a complete image, such image-based
split of SR computations often leads to color mismatch and
visual inconsistency across image patches, as shown in the
figure below. This inconsistency may not impact the structural
image quality with a small portion of mismatching patches
, but can largely affect the human perception of images.

![Quality drop and visual inconsistency](2024-fye-sr/fye-sr-fig1.png)

## Overview

### Our Idea

Our work addresses the visual inconsistency
in upscaled images by introducing a new procedure-based
approach to splitting SR computations among heterogeneous
processors, as opposed to the traditional image-based split-
ting. As shown below, We split the SR model and adaptively
dispatch different NN layers of the SR model to heterogeneous\
processors, according to the computing complexity
of these NN layers and how SR computations in these layers
are affected by the reduced arithmetic precision. Our goal
is to maximize the utilization of AI accelerators within the
given time constraints on SR computations, while minimizing
their impact on perceptual image quality.

![FYE-SR basic idea](2024-fye-sr/fye-sr-fig2.png)

### System Design

![FYE-SR system overview](2024-fye-sr/fye-sr-fig8.png)

As shown in the figure above,
our design of FYE-SR consists
of three main modules. During the
offline phase, we first use a SR Timing Profiler to measure the
computing latencies of SR model’s different NN layers on
traditional processors (e.g., GPU) and AI accelerators (e.g.,
NPU), respectively. Then, knowledge about such latencies
will be used to train a Model Split Learner to solve Eq. (2) for
the optimal split of SR model.

During the online phase, FYE-SR enforces such model
split, and uses a Data Format Converter to convert the intermediate
feature maps into the right data formats (e.g.,
INT8 and FP32) for properly switching SR computations be-
tween heterogeneous processors.

## Results

As shown in the figures below,
compared to other SOTA image SR approaches,
our method could reach the overall optimal result
considering both the structual image quality and
perceptual quality, while meeting the preset deadline
requirement.

![FYE-SR comparison results](2024-fye-sr/fye-sr-fig15.png)

Looking into the output images, FYE-SR can effectively
suppress the distortions and visual inconsistency at
detailed objects (windows on buildings).

![FYE-SR comparison: GPU-only, NPU-only](2024-fye-sr/fye-sr-fig16ab.png)

![FYE-SR comparison: MobiSR, FYE-SR](2024-fye-sr/fye-sr-fig16cd.png)
