---
title: 'Towards Green AI in Fine-tuning Large Language Models via Adaptive Backpropagation'
authors:
  - kai
  - 'Hanyun Yin'
  - 'Heng Huang'
  - wei
date: '2023-09-22T21:55:18Z'
doi: '10.48550/arXiv.2309.13192'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-09-26T00:30:11Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: In *arXiv preprint*
publication_short: In *arXiv*

abstract: Fine-tuning is the most effective way of adapting pre-trained large language models (LLMs) to downstream applications. With the fast growth of LLM-enabled AI applications and democratization of open-souced LLMs, fine-tuning has become possible for non-expert individuals, but intensively performed LLM fine-tuning worldwide could result in significantly high energy consumption and carbon footprint, which may bring large environmental impact. Mitigating such environmental impact towards Green AI directly correlates to reducing the FLOPs of fine-tuning, but existing techniques on efficient LLM fine-tuning can only achieve limited reduction of such FLOPs, due to their ignorance of the backpropagation cost in fine-tuning. To address this limitation, in this paper we present GreenTrainer, a new LLM fine-tuning technique that adaptively evaluates different tensors' backpropagation costs and contributions to the fine-tuned model accuracy, to minimize the fine-tuning cost by selecting the most appropriate set of tensors in training. Such selection in GreenTrainer is made based on a given objective of FLOPs reduction, which can flexibly adapt to the carbon footprint in energy supply and the need in Green AI. Experiment results over multiple open-sourced LLM models and abstractive summarization datasets show that, compared to fine-tuning the whole LLM model, GreenTrainer can save up to 64% FLOPs in fine-tuning without any noticeable model accuracy loss. Compared to the existing fine-tuning techniques such as LoRa, GreenTrainer can achieve up to 4% improvement on model accuracy with on-par FLOPs reduction.

# Summary. An optional shortened abstract.
summary: The growing need of fine-tuning large language models (LLMs) can lead to significant energy consumption and environmental impact. To address this issue, we introduce GreenTrainer, a novel LLM fine-tuning technique. GreenTrainer assesses the backpropagation costs and contributions of different tensors to model accuracy, allowing for the selection of the most efficient set of tensors. This selection is guided by a user-defined objective, which can adapt to energy supply considerations and Green AI goals. Experimental results demonstrate that GreenTrainer can reduce FLOPs by up to 64% without compromising model accuracy, and outperforms existing techniques like LoRA while maintaining comparable FLOPs reduction.

tags:
  - 'on-device-ai'
featured: true

url_pdf: 'https://arxiv.org/pdf/2309.13192.pdf'
url_code: 'https://github.com/pittisl/GreenTrainer'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
# caption: 'GreenTrainer adaptively selects the trainable portion'
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

