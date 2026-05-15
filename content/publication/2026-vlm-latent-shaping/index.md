---
title: 'Uncovering and Shaping the Latent Representation of 3D Scene Topology in Vision-Language Models'
authors:
  - haoming
  - wei
date: '2026-05-15T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: '2026-05-15T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: In *Preprint*
publication_short: Preprint

abstract: Decades of cognitive science establish that humans navigate environments by forming cognitive maps, defined as allocentric and topology-preserving representations of 3D space. While modern Vision-Language Models (VLMs) demonstrate emergent spatial reasoning from 2D egocentric inputs, it remains unclear whether they construct an analogous 3D internal representation. In this paper, we demonstrate that current VLMs do possess a latent topological map of 3D scenes, but it is heavily overshadowed by non-geometric visual semantics, such as color and shape. By isolating this spatial subspace through cross-scene linear feature extraction, we extract a clean spatial subspace that causally controls the model's spatial outputs. We mathematically shape this latent representation and prove its correspondence to the Laplacian eigenmaps of the scene's 3D Gaussian-kernel graph, converging to the physical 3D space in the continuous limit. Motivated by this geometric identification, we further introduce a mathematically principled latent regularization method for VLMs, based on Dirichlet energy. Applying this single-term regularizer to a minimal 500-step supervised VLM fine-tuning (SFT) on simple synthetic data yields significant improvements on real-world spatial benchmarks, outperforming standard SFT and competitive baselines by up to 12.1% in spatial tasks involving scene topology understanding.

# Summary. An optional shortened abstract.
summary: We show that VLMs internally encode a latent topological map of 3D scenes, but it is overshadowed by non-geometric visual semantics. By isolating this spatial subspace via cross-scene linear feature extraction, we recover a clean representation that causally controls the model's spatial outputs and mathematically aligns with the Laplacian eigenmaps of the scene's 3D graph. We further introduce a Dirichlet-energy latent regularizer that, applied during a 500-step LoRA fine-tuning on simple synthetic data, improves real-world spatial benchmarks by up to 12.1% over standard SFT and competitive baselines.

tags:
  - 'spatial-intelligence'
featured: true

url_code: 'https://github.com/pittisl/vlm-latent-shaping'
#url_pdf: ''
#url_video: ''
#url_slides: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#projects:
#  - internal-project

# Slides (optional).
#slides:
---
