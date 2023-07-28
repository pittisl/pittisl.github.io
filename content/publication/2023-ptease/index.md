---
title: 'PTEase: Objective Airway Examination for Pulmonary Telemedicine using Commodity Smartphones'
authors:
  - xiangyu
  - kai
  - wei
date: '2023-06-22T00:00:00Z'
doi: '10.1145/3581791.3596854'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-22T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 21st Annual International Conference on Mobile Systems, Applications and Services*
publication_short: In *MobiSys'23*

abstract: Remote monitoring and evaluation of pulmonary diseases via tele-medicine are important to disease diagnosis and management, but current telemedicine solutions have limited capability of objectively examining the airway's internal physiological conditions that are crucial to pulmonary disease evaluation. Existing solutions based on smartphone sensing are also limited to externally monitoring breath rates, respiratory events, or lung function. In this paper, we present PTEase, a new system design that addresses these limitations and uses commodity smartphones to examine the airway's internal physiological conditions. PTEase uses active acoustic sensing to measure the internal changes of lower airway caliber, and then leverages machine learning to analyze the sensory data for pulmonary disease evaluation. We implemented PTEase as a smartphone app, and verified its measurement error in lab-controlled settings as <10%. Clinical studies further showed that PTEase reaches 75% accuracy on disease prediction and 11%-15% errors in estimating lung function indices. Given that such accuracy is comparable with that in clinical practice using spirometry, PTEase can be reliably used as an assistive telemedicine tool for disease evaluation and monitoring.

# Summary. An optional shortened abstract.
summary: The first mobile health system that turns a commodity smartphone into a fully functional pulmonary examination device to measure the internal physiological conditions of human airways, such as airway caliber, obstruction and possible inflammation. Information about these airway conditions could provide vital clues for precise and objective pulmonary disease evaluation.

tags:
  - 'smart-health'
featured: true

url_pdf: https://doi.org/10.1145/3581791.3596854
url_code: 'https://github.com/pittisl/PTEase'
url_video: 'https://www.youtube.com/watch?v=Netn1AOdsz8'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
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

{{< youtube id="Netn1AOdsz8" >}}
