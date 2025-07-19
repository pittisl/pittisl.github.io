---
title: 'ProGait: A Multi-Purpose Video Dataset and Benchmark for Transfemoral Prosthesis Users'
authors:
  - xiangyu
  - boyuan
  - weichen
  - qiyao
  - 'Abrar Alamri'
  - 'Goeran Fiedler'
  - wei
date: '2025-07-15T00:00:00Z'
doi: '10.48550/arXiv.2507.10223'

# Schedule page publish date (NOT publication's date).
publishDate: '2025-07-15T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *2025 International Conference on Computer Vision*
publication_short: In *ICCV 2025*

abstract: Prosthetic legs play a pivotal role in clinical rehabilitation, allowing individuals with lower-limb amputations the ability to regain mobility and improve their quality of life. Gait analysis is fundamental for optimizing prosthesis design and alignment, directly impacting the mobility and life quality of individuals with lower-limb amputations. Vision-based machine learning (ML) methods offer a scalable and non-invasive solution to gait analysis, but face challenges in correctly detecting and analyzing prosthesis, due to their unique appearances and new movement patterns. In this paper, we aim to bridge this gap by introducing a multi-purpose dataset, namely ProGait, to support multiple vision tasks including Video Object Segmentation, 2D Human Pose Estimation, and Gait Analysis (GA). ProGait provides 412 video clips from four above-knee amputees when testing multiple newly-fitted prosthetic legs through walking trials, and depicts the presence, contours, poses, and gait patterns of human subjects with transfemoral prosthetic legs. Alongside the dataset itself, we also present benchmark tasks and fine-tuned baseline models to illustrate the practical application and performance of the ProGait dataset. We compared our baseline models against pre-trained vision models, demonstrating improved generalizability when applying the ProGait dataset for prosthesis-specific tasks.

# Summary. An optional shortened abstract.
summary: Vision-based machine learning (ML) methods offer a scalable and non-invasive solution to gait analysis, but face challenges in correctly detecting and analyzing prosthesis, due to their unique appearances and new movement patterns. In this paper, we aim to bridge this gap by introducing a multi-purpose dataset, namely ProGait, to support multiple vision tasks including Video Object Segmentation, 2D Human Pose Estimation, and Gait Analysis (GA). ProGait provides 412 video clips from four above-knee amputees when testing multiple newly-fitted prosthetic legs through walking trials, and depicts the presence, contours, poses, and gait patterns of human subjects with transfemoral prosthetic legs. Alongside the dataset itself, we also present benchmark tasks and fine-tuned baseline models to illustrate the practical application and performance of the ProGait dataset.

tags:
  - 'mobile-and-connected-health'
featured: true

links:
  - name: Dataset
    url: https://huggingface.co/datasets/ericyxy98/ProGait
url_code: 'https://github.com/pittisl/ProGait'
url_pdf: 'https://arxiv.org/pdf/2507.10223'
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

## Video and annotations in the dataset

We collected 412 video clips from four above-knee amputees, when testing multiple newly-fitted prosthetic legs through walking trials. The videos encompasses the following to primary scenarios:

1. **Walking inside the parallel bars without external assistance**: Subjects navigate the parallel bars independently, focusing on balance and stability.
2. **Walking in hallways outside the parallel bars with assistance**: Subjects ambulate in open indoor spaces with support from others, simulating real-world walking conditions.

![The two scenarios](2025-progait/progait-figure3.png)

Each walking trial includes both frontal and sagittal views, providing comprehensive perspectives for analysis. To ensure diversity and generalizability, the trials on each subject involve various types and configurations of prosthetic legs, different background contexts and lighting conditions, and heterogeneous presence of other human individuals. The dataset covers a diverse range of normal and abnormal gait patterns, each of which is accompanied by detailed textual descriptions from researchers in rehabilitation sciences and human engineering. As shown below, these descriptions outline the correlations between abnormal gait deviations and the necessary corrective adjustments in order to regain normal gaits, as well as detailed reasons about why such adjustments are needed.

![Examples of video frames and annotations](2025-progait/progait-dataset-examples.png)

## Benchmarks

To facilitate the effective use of the ProGait dataset, we establish several benchmark tasks and provide fine-tuned baseline models as reference implementations.

### Benchmark tasks and metrics

* **Video Object Segmentation**. For the segmentation task, we primarily use the mean Intersection over Union (mIoU) as the evaluation metric. The mIoU measures the overlap between the predicted mask and the ground-truth mask across video frames through a pixel-wise calculation.
* **2D Human Pose Estimation**. We evaluate the accuracy of pose estimation following the COCO-WholeBody standard, and use the Average Precision (AP) across different Object Keypoint Similarity (OKS) thresholds ranging from 0.5 to 0.95, namely the AP@[.5,.95] as the primary metric.
* **Gait Classfication**. This task categorizes video clips into predefined gait classes, by capturing the variations in movement patterns induced by different prosthetic configurations, walking conditions, or rehabilitation progress. We provide an end-to-end pipeline for training and evaluating different classification models.

### Baseline models

* For the Video Object Segmentation task, we use **YOLO11**.
* For the 2D Human Pose Estimation task, we use **RTM-Pose** from the MMPose framework.
* For the Gait Classification task, we use a **custom LSTM classifier**, which processes the sequence of poses over time and classifies the gait pattern for each video sample.

## Dataset access

We publish the ProGait dataset together with the paper. Please refer to
our [ dataset page](/dataset/#progait) for more information.
