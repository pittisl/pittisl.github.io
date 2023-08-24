---
title: 'Out-Clinic Pulmonary Disease Evaluation via Acoustic Sensing and Multi-Task Learning on Commodity Smartphones'
authors:
  - xiangyu
  - kai
  - wei
date: '2022-11-24T00:00:00Z'
doi: '10.1145/3560905.3568437'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-08-22T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the the 20th ACM Conference on Embedded Networked Sensor Systems*
publication_short: In *SenSys'22*

abstract: Pulmonary diseases, such as asthma and Chronic Obstructive Pulmonary Disease (COPD), constitute a major public health challenge. The disease symptoms, including airway obstruction and inflammation, usually result in changes in airway mechanical properties, such as the caliber and impedance of the airway. To measure such airway properties for disease evaluation and diagnosis purposes, pulmonary function tests (PFT) has been widely adopted. However, most existing PFT systems require expensive and cumbersome hardware that are impossible to be used out of clinic. To allow out-clinic continuous pulmonary disease evaluation, in this paper we present AWARE, a new sensing and AI system that supports accurate and reliable PFT using commodity smartphones. AWARE uses a smartphone to transmit acoustic signals and reconstructs the profile of human airway based on the analysis of reflected acoustic waves captured from the smartphone's microphone. The subject's pulmonary condition is then evaluated by a multi-task learning model that integrates both the airway measurements and the subject's lung function records as the ground truth. Evaluations on 75 human subjects demonstrate that AWARE has the capability to achieve 80% accuracy on distinguishing between humans with healthy pulmonary function and with asthma symptoms.

# Summary. An optional shortened abstract.
summary: This work prsents AWARE, a new sensing and AI system that supports accurate and reliable pulmonary function tests (PFT) using commodity smartphones. AWARE uses a smartphone to transmit acoustic signals and reconstructs the profile of human airway based on the analysis of reflected acoustic waves captured from the smartphone's microphone. The subject's pulmonary condition is then evaluated by a multi-task learning model to detect airway obstruction and inflammation and identify pulmonary diseases like asthma or COPD.

tags:
  - 'mobile-and-connected-health'
featured: true

url_pdf: 'https://dl.acm.org/doi/pdf/10.1145/3560905.3568437'
#url_video: 'https://www.youtube.com/watch?v=Netn1AOdsz8'

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
