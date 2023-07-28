---
title: 'Enabling Cross-Technology Coexistence for Extremely Weak Wireless Devices'
authors:
  - ruirong
  - wei
date: '2019-05-22T00:00:00Z'
doi: '10.1109/INFOCOM.2019.8737379'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-25T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *IEEE INFOCOM 2019 - IEEE Conference on Computer Communications*
publication_short: In *INFOCOM 2019*

abstract: Cross-technology coexistence is crucial to avoid collisions of wireless transmissions and improve the efficiency of spectrum utilization in today's large-scale wireless network systems, especially the Internet of Things. However, existing approaches to cross-technology coexistence incur additional transmission delay and signal processing overhead, which are unaffordable by extremely weak wireless devices such as embedded sensors and computational RFIDs. These schemes hence fail when being applied to emerging application scenarios, such as smart cities and connected healthcare where weak devices play important roles. In this paper, we design and implement EmBee, a new wireless PHY technique that enables cross-technology coexistence at zero cost or performance loss to these extremely weak wireless devices. The basic idea of EmBee is to exploit the diversity of different wireless technologies' spectrum utilization, so as to adaptively reserve occupied spectrum from the strong devices for weak wireless devices' concurrent data transmissions. We have implemented EmBee over custom wireless hardware and evaluated EmBee under different wireless scenarios. Experiment results show that EmBee can effectively support ZigBee transmissions over a fully occupied WiFi channel without causing any extra delay, while only resulting in 10% WiFi throughput loss.

# Summary. An optional shortened abstract.
summary: EmBee is designed to exploit the diversity of different wireless technologies' spectrum utilization, so as to adaptively reserve occupied spectrum from the strong devices for weak wireless devices' concurrent data transmissions. It is a new wireless PHY technique that enables cross-technology coexistence at zero cost or performance loss to these extremely weak wireless devices.

tags:
  - 'intelligent-wireless-systems'
featured: true

url_pdf: https://doi.org/10.1109/INFOCOM.2019.8737379

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
