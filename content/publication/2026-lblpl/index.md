---
title: 'Low-Burden LLM-Based Preference Learning: Personalizing Assistive Robots from Natural Language Feedback for Users with Paralysis'
authors:
  - keshav
  - 'Dan Ding'
  - wei
date: '2026-04-01T00:00:00Z'
doi: '10.48550/arXiv.2604.01463'

# Schedule page publish date (NOT publication's date).
publishDate: '2026-04-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: In *arXiv preprint*
publication_short: In *arXiv*

abstract: Physically Assistive Robots (PARs) require personalized behaviors to ensure user safety and comfort. However, traditional preference learning methods, like exhaustive pairwise comparisons, cause severe physical and cognitive fatigue for users with profound motor impairments. To solve this, we propose a low-burden, offline framework that translates unstructured natural language feedback directly into deterministic robotic control policies. To safely bridge the gap between ambiguous human speech and robotic code, our pipeline uses Large Language Models (LLMs) grounded in the Occupational Therapy Practice Framework (OTPF). This clinical reasoning decodes subjective user reactions into explicit physical and psychological needs, which are then mapped into transparent decision trees. Before deployment, an automated "LLM-as-a-Judge" verifies the code's structural safety. We validated this system in a simulated meal preparation study with 10 adults with paralysis. Results show our natural language approach significantly reduces user workload compared to traditional baselines. Additionally, independent clinical experts confirmed the generated policies are safe and accurately reflect user preferences.

# Summary. An optional shortened abstract.
summary: We developed an LLM-based framework that personalizes assistive robots using natural language feedback, significantly reducing the physical and cognitive fatigue associated with traditional methods. Grounded in clinical reasoning, the system translates unstructured user input into safe, deterministic control policies for individuals with profound motor impairments.

tags:
  - 'human-robot-interaction'
featured: true

url_code: 'https://github.com/keshavshankar08/LBLPL'
url_pdf: 'https://arxiv.org/pdf/2604.01463'
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
#slides:
---