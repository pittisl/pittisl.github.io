---
title: 'MMBERT: Scaled Mixture-of-Experts Multimodal BERT for Robust Chinese Hate Speech Detection under Cloaking Perturbations'
authors:
  - qiyao
  - 'Yuchen Dou'
  - 'Zheyuan Ryan Shi'
  - 'Xiang Lorraine Li'
  - wei
date: '2025-11-08T00:00:00Z'
doi: '10.1609/aaai.v40i40.40715'

# Schedule page publish date (NOT publication's date).
publishDate: '2025-08-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the 40th Annual AAAI Conference on Artificial Intelligence (AAAI 2026)*
publication_short: In *AAAI 2026*

abstract: Hate speech detection on Chinese social networks presents distinct challenges, particularly due to the widespread use of cloaking techniques designed to evade conventional text-based detection systems. Although large language models (LLMs) have recently improved hate speech detection capabilities, the majority of existing work has concentrated on English datasets, with limited attention given to multimodal strategies in the Chinese context. In this study, we propose MMBERT, a novel BERT-based multimodal framework that integrates textual, speech, and visual modalities through a Mixture-of-Experts (MoE) architecture. To address the instability associated with directly integrating MoE into BERT-based models, we develop a progressive three-stage training paradigm. MMBERT incorporates modality-specific experts, a shared self-attention mechanism, and a router-based expert allocation strategy to enhance robustness against adversarial perturbations. Empirical results in several Chinese hate speech datasets show that MMBERT significantly surpasses fine-tuned BERT-based encoder models, fine-tuned LLMs, and LLMs utilizing in-context learning approaches.

# Summary. An optional shortened abstract.
summary: Cloaking techniques such as character deformation, homophonic substitution, abbreviation and code-mixing with pinyin or emojis let hate speech on Chinese social networks evade text-only detectors. MMBERT is a BERT-based multimodal framework that integrates textual, speech and visual modalities through a Mixture-of-Experts architecture, with modality-specific experts, a shared self-attention mechanism and router-based expert allocation. A progressive three-stage training paradigm keeps MoE training stable, and MMBERT significantly surpasses fine-tuned BERT-based encoders, fine-tuned LLMs and in-context learning with LLMs on several Chinese hate speech datasets.

tags:
  - 'trustworthy-ai'
  - 'multimodal-generative-ai'
featured: true

url_pdf: 'https://ojs.aaai.org/index.php/AAAI/article/view/40715/44676'
url_code: 'https://github.com/xue-qi-yao/MMBERT_chinese_hate_speech_detection'
links:
  - name: arXiv
    url: https://arxiv.org/abs/2508.00760

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'MMBERT model structure'
  focal_point: ''
  preview_only: false
---
