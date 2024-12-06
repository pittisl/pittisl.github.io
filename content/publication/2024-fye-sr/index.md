---
title: 'Perceptual-Centric Image Super-Resolution using Heterogeneous Processors on Mobile Devices'
authors:
  - kai
  - xiangyu
  - wei
date: '2024-09-30T00:00:00Z'
doi: '10.1145/3636534.3690698'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-09-29T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 30th Annual International Conference on Mobile Computing And Networking (MobiCom'24)*
publication_short: In *MobiCom'24*

abstract: Image super-resolution (SR) is widely used on mobile devices to enhance user experience. However, neural networks used for SR are computationally expensive, posing challenges for mobile devices with limited computing power. A viable solution is to use heterogeneous processors on mobile devices, especially the specialized hardware AI accelerators, for SR computations, but the reduced arithmetic precision on AI accelerators can lead to degraded perceptual quality in upscaled images. To address this limitation, in this paper we present SR For Your Eyes (FYE-SR), a novel image SR technique that enhances the perceptual quality of upscaled images when using heterogeneous processors for SR computations. FYE-SR strategically splits the SR model and dispatches different layers to heterogeneous processors, to meet the time constraint of SR computations while minimizing the impact of AI accelerators on image quality. Experiment results show that FYE-SR outperforms the best baselines, improving perceptual image quality by up to 2×, or reducing SR computing latency by up to 5.6× with on-par image quality.

# Summary. An optional shortened abstract.
summary: Image super-resolution (SR) is widely used on mobile devices to enhance user experience. However, neural networks used for SR are computationally expensive, posing challenges for mobile devices with limited computing power. A viable solution is to use heterogeneous processors on mobile devices, especially the specialized hardware AI accelerators, but the reduced arithmetic precision on AI accelerators can lead to degraded perceptual quality in upscaled images. To address this limitation, we present a novel image SR technique that enhances the perceptual quality of upscaled images when using heterogeneous processors for SR computations. It strategically splits the SR model and dispatches different layers to heterogeneous processors, to meet the time constraint while minimizing the impact of AI accelerators on image quality. Experiment results show that our method outperforms the best baselines, improving perceptual image quality by up to 2×, or reducing SR computing latency by up to 5.6× with on-par image quality.

tags:
  - 'on-device-ai'
featured: true

#links:
#  - name: Artifact
#    url: https://doi.org/10.5281/zenodo.7812218
#url_code: 'https://github.com/pittisl/FreezeAsGuard'
url_pdf: 'https://sites.pitt.edu/~weigao/publications/mobicom2024.pdf'
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
slides:
---

