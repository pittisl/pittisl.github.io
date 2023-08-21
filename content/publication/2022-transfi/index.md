---
title: 'TransFi: emulating custom wireless physical layer from commodity wifi'
authors:
  - ruirong
  - wei
date: '2022-06-26T01:00:00Z'
doi: '10.1145/3498361.3538946'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-22T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 20th Annual International Conference on Mobile Systems, Applications and Services (MobiSys'22)*
publication_short: In *MobiSys'22*

abstract: New wireless physical-layer designs are the key to improving wireless network performance. Adopting these new designs, however, requires modifications on wireless hardware and is difficult on commodity devices. In this paper, we show that this hardware modification in many cases can be avoided by TransFi, a new software technique that enables custom wireless PHY functionality on commodity WiFi transmitters via fine-grained emulation. Our basic insight is that many custom wireless signals can be emulated by manipulating the MAC payloads of WiFi MIMO streams and mixing the transmitted signals from these streams on the air. To perform such emulation, TransFi considers the target signal as a mixture of QAM constellation points on the complex plane, and reversely computes the MAC payload of each MIMO stream from one selected QAM constellation point. We implemented TransFi on commodity WiFi devices to emulate three custom wireless PHYs with diverse characteristics. Experiment results show that TransFi's accuracy of emulation is >90% when transmitting emulated data payloads at 11.4 Mbps (46x faster than existing methods), and the decoding error at this data rate is <1% (10x lower than existing methods).

# Summary. An optional shortened abstract.
summary: TransFi realizes fine-grained signal emulation and allows commodity WiFi devices to emulate custom wireless physical layer, including but not limited to, custom PHY-layer preambles and new ways of agile spectrum usage. It could also improve the performance of cross-technology communication and many other wireless applications by up to 50x, enabling high-speed data communication on par with commodity WiFi.

tags:
  - 'intelligent-wireless-systems'
featured: true

url_pdf: 'https://sites.pitt.edu/~weigao/publications/mobisys22.pdf'
url_video: 'https://youtu.be/-BngtciwxfA'

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

{{< youtube id="-BngtciwxfA" >}}
