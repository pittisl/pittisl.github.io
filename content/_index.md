---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title:
      image:
        filename: ssoe.jpg
      text: |
        The **Intelligent System Lab** at University of Pittsburgh conducts research on
        On-device AI, Mobile and embedded systems, Mobile and connected health,
        Cyber-physical systems and Internet of Things.

  - block: markdown
    content:
      title: On-device AI
      subtitle: 'Accelerating neural network training and inference'
      text: |
        {{< columns >}}
        ### [ElasticTrainer: Speeding Up On-Device Training with Runtime Elastic Tensor Selection](publication/2023-elastictrainer/) {id=on-device-ai}
        Mobisys'23  
        ![ElasticTrainer](elastictrainer.jpg)
        The first on-device AI technique that achieves full elasticity of on-device training on resource-constrained mobile and embedded devices. By leveraging the principle of eXplainable AI (XAI) and evaluating the importance of different tensors in training, we allow fully flexible adaptation of the trainable neural network portion at runtime, according to the current training needs and online data patterns, to minimize the training cost without accuracy loss.
        <--->
        ### [Real-time Neural Network Inference on Extremely Weak Devices: Agile Offloading with Explainable AI](publication/2022-agilenn/)
        MobiCom'22  
        ![AgileNN](agilenn.png)
        AgileNN is the first work that achieves real-time inference (<20ms) of mainstream neural network models (e.g., ImageNet) on extremely weak MCUs (e.g., STM32 series with <1MB of memory), without impairing the inference accuracy. The usage of eXplainable AI (XAI) techniques allows >6x improvement of feature compressibility during offloading and >8x reduction of the local device's resource consumption.
        {{< /columns >}}
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    content:
      title: Mobile and connected health
      subtitle: ''
      text: |
        ### [PTEase Objective Airway Examination for Pulmonary Telemedicine using Commodity Smartphones](publication/2023-ptease/) {id=mobile-and-connected-health}
        Mobisys'23  
        ![PTEase](ptease.jpg)
        The first mobile health system that turns a commodity smartphone into a fully functional pulmonary examination device to measure the internal physiological conditions of human airways, such as airway caliber, obstruction and possible inflammation. Information about these airway conditions could provide vital clues for precise and objective pulmonary disease evaluation.
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    content:
      title: Mobile and embedded systems
      subtitle: ''
      text: |
        ### [Eavesdropping User Credentials via GPU Side Channels on Smartphones](publication/2022-mobile-gpu-eavesdropping/) {id=mobile-embed-systems}
        ASPLOS'22  
        ![MobileGPUEavesdropping](mobile-gpu-eavesdropping.png)
        This is one of the few works that demonstrate critical security vulnerabilities of mainstream GPUs (QualComm Adreno GPU on Snapdragon SoCs) on smartphones, which allow an unprivileged attacker to eavesdrop the user's sensitive credentials such as app username and password.
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    content:
      title: 'Videos'
      subtitle: ''
      text: |
        {{< columns >}}
        ##### ElasticTrainer
        {{< youtube id="q86LnqEew_U" >}}
        <--->
        ##### AgileNN
        {{< youtube id="OwNRcuTRgwE" >}}
        <--->
        ##### PTEase
        {{< youtube id="Netn1AOdsz8" >}}
        {{< /columns >}}
        <br />
        {{< columns >}}
        ##### GPU Eavesdropping
        {{< youtube id="f40TvdDaxqw" >}}
        <--->
        ##### SpiroSonic
        {{< youtube id="SDiboSXJr28" >}}
        <--->
        ##### TransFi
        {{< youtube id="-BngtciwxfA" >}}
        {{< /columns >}}
    design:
      columns: '1'
      spacing:
        padding: ['20px', '0', '20px', '0']
#      css_class: fullscreen

  
#  - block: collection
#    content:
#      title: On-device AI
#      subtitle: 'Accelerating neural network training and inference'
#      text:
#      count: 5
#      filters:
#        author: ''
#        category: ''
#        exclude_featured: false
#        publication_type: ''
#        tag: 'on-device-ai'
#      offset: 0
#      order: desc
#      page_type: publication
#    design:
#      view: card
#      columns: '5'

  
#  - block: markdown
#    content:
#      title:
#      subtitle: ''
#      text:
#    design:
#      columns: '1'
#      background:
#        image: 
#          filename: coders.jpg
#          filters:
#            brightness: 1
#          parallax: false
#          position: center
#          size: cover
#          text_color_light: true
#      spacing:
#        padding: ['20px', '0', '20px', '0']
#      css_class: fullscreen
  
#  - block: markdown
#    content:
#      title:
#      subtitle:
#      text: |
#        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
#    design:
#      columns: '1'
---
