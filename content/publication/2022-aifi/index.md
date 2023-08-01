---
title: 'AiFi: AI-Enabled WiFi Interference Cancellation with Commodity PHY-Layer Information'
authors:
  - ruirong
  - kai
  - wei
date: '2022-11-24T00:00:00Z'
doi: '10.1145/3560905.3568537'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-26T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the the 20th ACM Conference on Embedded Networked Sensor Systems (Sensys'22)*
publication_short: In *SenSys'22*

abstract: Interference could result in significant performance degradation in WiFi networks. Most existing solutions to interference cancellation require extra RF hardware, which is usually infeasible in many low-power wireless scenarios. In this paper, we present AiFi, a new interference cancellation technique that can be applied to commodity WiFi devices without using any extra RF hardware. The key idea of AiFi is to retrieve knowledge about interference from the locally available physical-layer (PHY) information at the WiFi receiver, including the pilot information (PI) and the channel state information (CSI). AiFi leverages the power of AI to address the possible ambiguity when estimating interference from these PHY information, and incorporates the domain knowledge about WiFi PHY to minimize the neural network complexity. Experiment results show that AiFi can correct 80% of bit errors due to interference and improves the MAC frame reception rate by 18x, with <1ms latency for interference cancellation in each frame.

# Summary. An optional shortened abstract.
summary: This work applies on-device AI techniques to interference cancellation in WiFi networks and enables generalizable interference cancellation on commodity WiFi devices without any extra RF hardware. By using neural network models to mimic WiFi network's PHY-layer operation, AiFi can be generally applied to different types of interference signals ranging from concurrent WiFi transmissions, ZigBee/Bluetooth to wireless baby monitors or even microwave oven, and improves the MAC-layer frame reception rate by 18x.

tags:
  - 'intelligent-wireless-systems'
  - 'on-device-ai'
featured: true

url_pdf: https://doi.org/10.1145/3560905.3568537
url_code: 'https://github.com/pittisl/AiFi_PHY_Reconstruct'

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
