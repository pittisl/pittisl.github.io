---
title: 'Never Start from Scratch: Expediting On-Device LLM Personalization via Explainable Model Selection'
authors:
  - haoming
  - boyuan
  - xiangyu
  - wei
date: '2025-06-20T00:00:00Z'
doi: '10.1145/3711875.3729132'

# Schedule page publish date (NOT publication's date).
publishDate: '2025-06-20T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 23rd ACM International Conference on Mobile Systems, Applications, and Services (MobiSys 2025)*
publication_short: In *MobiSys 2025*

abstract: Personalization of Large Language Models (LLMs) is important in practical applications to accommodate the individual needs of different mobile users. Due to data privacy concerns, LLM personalization often needs to be locally done at the user's mobile device, but such on-device personalization is constrained by both the limitation of on-device compute power and insufficiency of user's personal data. In this paper, we address these constraints by fine-tuning an already personalized LLM with user's personal data, and present XPerT, a new technique that ensure proper selection of such already personalized LLMs based on explainability about how they were being fine-tuned. We implemented and evaluated XPerT on various smartphone models with mainstream LLMs, and experiment results show that XPerT reduces the computation costs of on-device LLM personalization by 83%, and improves its data efficiency by 51%. 

# Summary. An optional shortened abstract.
summary: Personalization of Large Language Models (LLMs) is important in practical applications to accommodate the individual needs of different mobile users. Due to data privacy concerns, LLM personalization often needs to be locally done at the user's mobile device, but such on-device personalization is constrained by both the limitation of on-device compute power and insufficiency of user's personal data. In this paper, we address these constraints by fine-tuning an already personalized LLM with user's personal data, and present XPerT, a new technique that ensure proper selection of such already personalized LLMs based on explainability about how they were being fine-tuned. We implemented and evaluated XPerT on various smartphone models with mainstream LLMs, and experiment results show that XPerT reduces the computation costs of on-device LLM personalization by 83%, and improves its data efficiency by 51%.

tags:
  - 'on-device-ai'
featured: true

#links:
#  - name: Artifact
#    url: https://doi.org/10.5281/zenodo.7812218
url_code: 'https://github.com/pittisl/ExplainablePersonalization'
url_pdf: 'https://arxiv.org/pdf/2504.13938'
#url_video: 'https://youtu.be/q86LnqEew_U'
url_slides: 'https://github.com/pittisl/ExplainablePersonalization/raw/main/slides/mobisys2025-xpert-slides.pdf'

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
