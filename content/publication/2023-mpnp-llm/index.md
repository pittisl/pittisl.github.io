---
title: 'Modality Plug-and-Play: Elastic Modality Adaptation in Multimodal LLMs for Embodied AI'
authors:
  - kai
  - boyuan
  - wei
date: '2023-12-14T00:00:00Z'
doi: '10.48550/arXiv.2312.07886'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-12-14T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: In *arXiv preprint*
publication_short: In *arXiv*

abstract: Large Language Models (LLMs) are capable of reasoning over diverse input data modalities through pre-trained encoders. However, the growing diversity of input data modalities prevents incorporating all modalities into LLMs, especially when LLMs are deployed on resource-constrained edge devices for embodied AI applications. Instead, a better option is to adaptively involve only the useful modalities at runtime, depending on the current environmental contexts and task requirements. For such modality adaptation, existing work adopts fixed connections between encoders and the LLM's input layer, leading to high training cost at runtime and ineffective cross-modal interaction. In this paper, we address these limitations by presenting mPnP-LLM, a new technique that allows fully elastic, automated and prompt runtime modality adaptation, by connecting unimodal encoders to a flexible set of last LLM blocks and making such latent connections fully trainable at runtime. Experiments over the nuScenes-QA dataset show that mPnP-LLM can achieve up to 3.7x FLOPs reduction and 30% GPU memory usage reduction, while retaining on-par accuracy with the existing schemes. Under the same compute budget, mPnP-LLM improves the task accuracy by up to 4% compared to the best existing scheme. 

# Summary. An optional shortened abstract.
#summary: This paper introduces mPnP-LLM, a novel technique for adaptive runtime modality adaptation in Large Language Models (LLMs). The goal is to optimize resource usage on edge devices for embodied AI applications. Unlike existing approaches with fixed connections between encoders and LLMs, mPnP-LLM offers fully flexible and trainable connections, resulting in reduced computational cost and improved task accuracy. Experiments on nuScenes-QA dataset demonstrate significant reductions in FLOPs and GPU memory usage while maintaining competitive accuracy.
summary: This is the first work that allows multimodal LLMs to elastically switch between input data modalities at runtime, for embodied AI applications such as autonomous navigation. Our basic technical approach is to use fully trainable projectors to adaptively connect the unimodal data encoders being used to a flexible set of last LLM blocks. In this way, we can flexibly adjust the amount of LLM blocks being connected to balance between accuracy of runtime fine-tuning cost, and optimize the efficiency of cross-modal interaction by controlling the amount of information being injected in each connection. Our implementations on NVidia Jetson AGX Orin demonstrate short modality adaptation delays of few minutes with mainstream LLMs, 3.7x fine-tuning FLOPs reduction, and 4% accuracy improvements on multimodal QA tasks.

tags:
  - 'on-device-ai'
featured: true

#links:
#  - name: Artifact
#    url: https://doi.org/10.5281/zenodo.7812218
url_code: 'https://github.com/pittisl/mPnP-LLM'
url_pdf: 'https://arxiv.org/pdf/2312.07886.pdf'
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
