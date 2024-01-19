---
title: Published Dataset
date: 2024-01-17

type: landing

# block: collection can give a list, which we do not use here
sections:
  - block: markdown
    content:
      title: 'Published Dataset'
    design:
      columns: '1'
      spacing:
        padding: ['1.8rem', '0', '0', '0']
  - block: markdown
    id: aware
    content:
      title: Acoustic Waveform Respiratory Evaluation (AWARE)
      subtitle: January 2024
      text: |
        {{< columns >}}
        The Acoustic Waveform Respiratory Evaluation (AWARE) dataset consists of a group of human airway measurements, produced by our integrated AI and sensing systems for smart pulmonary telemedicine.
        
        This dataset contains airway measurements of 382 human subjects, including patients with various pulmonary diseases and healthy control subjects, recruited from the Children's Hospital of Pittsburgh during the past 3 years. The contents of the dataset include raw WAV files from acoustic sensing, segmented and aligned acoustic signal pulses, and processed measurements of airway cross-sectional areas.
        <--->
        ![AWARE Setup](aware-dataset.jpg)
        {{< /columns >}}
        {{< hr-pittisl >}}
        * Visit [AWARE dataset homepage](https://huggingface.co/datasets/ericyxy98/AWARE) for more information.
        * The source code related to using the dataset can be found [from our GitHub repository](https://github.com/pittisl/PTEase).
        * Our [PTEase](/publication/2023-ptease/) paper makes use of the AWARE dataset.

        To our best knowledge, this is the first public dataset of human airway measurements with pulmonary diseases, and we welcome any feedback from the smart health research community.
      # Automatically link email and phone or display as text?
      autolink: true
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']
  - block: markdown
    id: nuscenes-qa-mini
    content:
      title: NuScenes-QA-mini Dataset
      subtitle: 'January 2024'
      text: |
        This dataset is used for multimodal question-answering tasks in autonomous driving scenarios. We created this dataset based on [nuScenes-QA dataset](https://github.com/qiantianwen/NuScenes-QA) for evaluation in our paper [Modality Plug-and-Play: Elastic Modality Adaptation in Multimodal LLMs for Embodied AI](/publication/2023-mpnp-llm/). The samples are divided into day and night scenes.

        ![NuScenes-QA-mini Data Sample](2024-nuscenes-qa-mini/nuqa_example.png)

        This dataset is built on the [nuScenes](https://www.nuscenes.org/) mini-split, where we obtain the QA pairs from the [original nuScenes-QA dataset](https://github.com/qiantianwen/NuScenes-QA). Each data sample contains **6-view RGB camera captures, a 5D LiDAR point cloud, and a corresponding text QA pair**. The data in the nuScenes-QA dataset is collected from driving scenes in cities of Boston and Singapore with diverse locations, time, and weather conditions.
        {{< hr-pittisl >}}
        * You may find more details on our [dataset homepage](https://huggingface.co/datasets/KevinNotSmile/nuscenes-qa-mini).
        * The source code of generating the dataset can be found [in our GitHub repository](https://github.com/pittisl/mPnP-LLM/tree/main/nuqamini).
        * Our [Modality Plug-and-Play](/publication/2023-mpnp-llm/) paper utilizes this dataset.
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']
#   - block: markdown
#     content:
#       title:
#       subtitle: ''
#       text:
#     design:
#       columns: '1'
#       background:
#         image: 
#           filename: contact_pittisl.png
#           filters:
#             brightness: 1
#           parallax: false
#           position: center
#           size: cover
#           text_color_light: true
#       spacing:
#         padding: ['20px', '0', '20px', '0']
#       css_class: fullscreen
---
