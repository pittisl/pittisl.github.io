---
title: "AI for Parkinson's Disease and Movement Disorders"
type: landing

sections:
  - block: portfolio
    id: project-parkinsons-disease
    content:
      text: |
        # AI for Parkinson's Disease and Movement Disorders
        {{< columns >}}
        Parkinson's disease (PD) is a progressive neurodegenerative disorder, with hallmark motor symptoms such as shuffling gait, rigidity and loss of fine motor control.

        These symptoms are accompanied by complications that grow with disease progression and reduced mobility, including fatigue, muscle weakness and respiratory dysfunction. Respiratory complications such as pneumonia are among the leading causes of death in advanced PD.

        Our research applies AI, computer vision and mobile sensing across this spectrum: interpretable video-based gait analysis that recognizes pathological gait patterns such as Parkinsonian gait and backs each diagnosis with measured biomechanical evidence, assistive robots that users with severe motor impairments can direct with their eye gaze and personalize through natural language feedback, and smartphone-based tools that examine the airway and monitor lung function and muscle fatigue at home.
        <--->
        ![Overview of our research on Parkinson's disease: interpretable gait analysis, gaze-guided assistive robots, airway and lung function exams, and muscle fatigue monitoring](parkinsons-overview.png)
        {{< /columns >}}
        {{< hr >}}
        ## Related Datasets
        ### [ProGait](/dataset/#progait)  
        {{< columns ratio="2:1" >}}
        *July 2025*  
        ProGait is a multi-purpose video dataset aimed to support multiple vision tasks on prosthesis users, including Video Object Segmentation, 2D Human Pose Estimation, and Gait Analysis.

        ProGait provides 412 video clips from four above-knee amputees when testing multiple newly-fitted prosthetic legs through walking trials, and depicts the presence, contours, poses, and gait patterns of human subjects with transfemoral prosthetic legs. It is also one of the two benchmarks used to evaluate [DrGait](/publication/2026-drgait/)'s interpretable gait analysis.
        <--->
        ![ProGait dataset example](2025-progait/progait-dataset-examples.jpg)
        {{< /columns >}}
        ### [Acoustic Waveform Respiratory Evaluation (AWARE)](/dataset/#aware)  
        {{< columns ratio="2:1" >}}
        *January 2024*  
        The Acoustic Waveform Respiratory Evaluation (AWARE) dataset consists of a group of human airway measurements, produced by our integrated AI and sensing systems for smart pulmonary telemedicine.

        This dataset contains airway measurements of 382 human subjects, including patients with various pulmonary diseases and healthy control subjects, recruited from the Children's Hospital of Pittsburgh during the past 3 years. Each measurement reconstructs the airway's cross-sectional area from the mouth through the pharynx and glottis to the trachea, covering the upper airway segment in which obstruction has been reported in people with PD.
        <--->
        ![AWARE Setup](aware-dataset.jpg)
        {{< /columns >}}
        {{< hr >}}
        ## Related Papers
      filters:
        folders:
          - publication
        tags: ['parkinsons-disease']
    design:
      view: compact

---
