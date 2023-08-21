---
title: 'EasyPass: combating IoT delay with multiple access wireless side channels'
authors:
  - haoyang
  - ruirong
  - wei
date: '2019-12-22T00:00:00Z'
doi: '10.1145/3359989.3365421'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-25T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 15th International Conference on Emerging Networking Experiments And Technologies (CoNEXT'19)*
publication_short: In *CoNEXT'19*

abstract: Many IoT applications have stringent requirements on wireless transmission delay, but have to compete for channel access with other wireless traffic. Traditional techniques enable multiple access to wireless channels, but yield severe delay when the channel is congested. In this paper, we present EasyPass, a wireless PHY technique that allows multiple IoT devices to simultaneously transmit data over a congested wireless link without being delayed. The key idea of EasyPass is to exploit the excessive SNR margin in a wireless channel as a dedicated side channel for IoT traffic, and allow multiple access to the side channel by separating signals from different transmitters on the air. We implemented EasyPass on software-defined radio platforms. Experiment results demonstrate that EasyPass reduces the data transmission delay in congested IoT networks by 90%, but provides a throughput up to 2.5 Mbps over a narrowband 20MHz wireless link that can be accessed by more than 100 IoT devices.

# Summary. An optional shortened abstract.
summary: EasyPass exploits the excessive SNR margin in a wireless channel as a dedicated side channel for IoT traffic, and allow multiple access to the side channel by separating signals from different transmitters on the air. It allows multiple IoT devices to simultaneously transmit data over a congested wireless link without being delayed.

tags:
  - 'intelligent-wireless-systems'
featured: true

url_pdf: 'https://sites.pitt.edu/~weigao/publications/conext19.pdf'

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

_This paper received the **Best Paper Award** at the conference._
