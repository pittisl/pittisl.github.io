---
title: 'RAScatter: Achieving Energy-Efficient Backscatter Readers via AI-Assisted Power Adaptation'
authors:
  - admin
date: '2023-07-22T00:00:00Z'
doi: '10.1109/IoTDI54339.2022.00016'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-22T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 7th ACM/IEEE Conference on Internet of Things Design and Implementation (IoTDI'22)*
publication_short: In *IoTDI'2*

abstract: Backscatter communication reduces the batteryless device's power consumption at the cost of extra RF energy transmitted from backscatter readers. Such extra cost results in extremely low energy efficiency at readers, but is ignored by existing systems that always use the highest transmit RF power for maximum goodput. Instead, we envision that the maximum goodput is unnecessary in many practical scenarios, allowing adaptation of transmit RF power to the required goodput. In this paper, we present RAScatter, a new backscatter system of precise, adaptive and lightweight power adaptation towards energy-efficient backscatter readers. RAScatter learns the entangled correlation between backscatter channel conditions, transmit RF power and goodput by designing a modular neural network, which decomposes the complex learning task into multiple related but simplified subtasks. This decomposition avoids redundancy in neural networks and eliminates any confusion in training due to insufficient training data in low-speed backscatter systems. Experiment results over commodity batteryless tags show that RAScatter improves the energy efficiency at backscatter readers by 3.5× and reduces the readers' power consumption in backscatter communication by up to 80%.

# Summary. An optional shortened abstract.
summary: A new backscatter system of precise, adaptive and lightweight power adaptation towards energy-efficient backscatter readers. It learns the entangled correlation between backscatter channel conditions, transmit RF power and goodput by designing a modular neural network to avoid redundancy and any confusion in training. Experiment results show improvement in energy efficiency at readers by 3.5× and reduces power consumption by up to 80%.

tags:
  - 'on-device-ai'
featured: true

url_pdf: https://doi.org/10.1109/IoTDI54339.2022.00016
url_code: 'https://github.com/pittisl/RAScatter'
url_slides: 'https://github.com/HelloKevin07/HelloKevin07.github.io/raw/master/files/RAScatter-slides.pptx'

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
