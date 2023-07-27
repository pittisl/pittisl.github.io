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
        Cyber-physical systems, Internet of Things, and more!
        
        Our projects:
          * [On-device AI](/#on-device-ai)
          * [Mobile and Connected Health](/#mobile-and-connected-health)
          * [Mobile and Embedded Systems](/#mobile-embed-systems)
          * [Intelligent Wireless Systems](/#intelligent-wireless-systems)
          * [Intelligent Edge Computing](/#intelligent-edge-computing)

  - block: markdown
    content:
      title: On-device AI
      subtitle: 'Our research strives to enable AI capabilities (inference & training) on resource-constrained embedded devices in the IoT and tailor AI models to effectively support various system applications. We utilize fine-grained and explainable knowledge about AI model execution to determine the most efficient part of the model for on-device training and inference, and employ modular neural networks and incorporates domain knowledge of specific system applications into the neural network module design.'
      text: |
        {{< columns >}}
        ### [ElasticTrainer: Speeding Up On-Device Training with Runtime Elastic Tensor Selection](publication/2023-elastictrainer/) {id=on-device-ai}
        MobiSys'23  
        ![ElasticTrainer](elastictrainer.jpg)
        The first on-device AI technique that achieves full elasticity of on-device training on resource-constrained mobile and embedded devices. By leveraging the principle of eXplainable AI (XAI) and evaluating the importance of different tensors in training, we allow fully flexible adaptation of the trainable neural network portion at runtime, according to the current training needs and online data patterns, to minimize the training cost without accuracy loss.
        <--->
        ### [Real-time Neural Network Inference on Extremely Weak Devices: Agile Offloading with Explainable AI](publication/2022-agilenn/)
        MobiCom'22  
        ![AgileNN](agilenn.png)
        AgileNN is the first work that achieves real-time inference (<20ms) of mainstream neural network models (e.g., ImageNet) on extremely weak MCUs (e.g., STM32 series with <1MB of memory), without impairing the inference accuracy. The usage of eXplainable AI (XAI) techniques allows >6x improvement of feature compressibility during offloading and >8x reduction of the local device's resource consumption.
        {{< /columns >}}
        {{< hr >}}
        [View more...](/tag/on-device-ai/)
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    content:
      title: Mobile and connected health
      subtitle: 'The COVID-19 pandemic poses a significant public health challenge, with the potential to overwhelm the healthcare system due to the high number of hospital visits. To address this issue, we are developing mobile sensing and AI techniques that allow individuals to self-evaluate possible COVID-19 infections at home using their smartphones. Our goal is to enable low-cost self-assessment and avoid unnecessary hospital visits by identifying other diseases that share similar symptoms with COVID-19, such as fever and shortness of breath. This research is urgently needed to alleviate the strain on the healthcare system and preserve medical resources for hospitalized patients, especially considering the rapid spread of the virus across the United States.'
      text: |
        ### [PTEase: Objective Airway Examination for Pulmonary Telemedicine using Commodity Smartphones](publication/2023-ptease/) {id=mobile-and-connected-health}
        MobiSys'23  
        ![PTEase](ptease.jpg)
        The first mobile health system that turns a commodity smartphone into a fully functional pulmonary examination device to measure the internal physiological conditions of human airways, such as airway caliber, obstruction and possible inflammation. Information about these airway conditions could provide vital clues for precise and objective pulmonary disease evaluation.
        ### [SpiroSonic: Monitoring Human Lung Function via Acoustic Sensing on Commodity Smartphones](publication/2020-spirosonic)  
        MobiCom'20  
        ![SpiroSonic](spirosonic.png)
        The first work that allows commodity smartphones to be used as a portable spirometer and provide accuracy lung function test results on par with clinical-grade spirometers. This is a collaborative work with the Children's Hospital of Pittsburgh, and could also potentially contribute to in-home evaluation of COVID-19 risks by allowing convenient out-of-clinic lung function evaluation.
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    content:
      title: Mobile and embedded systems
      subtitle: 'With the continuous evolvement of mobile computing on embedded system platforms, our research focuses on the application of recent advances in mobile computataional needs. We investigate into improving the safety and performance of mobile computing tasks and the utilization of heterogeneous hardware resources on mobile platform.'
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
      title: Intelligent Wireless Systems
      subtitle: ''
      text: |
        ### [AiFi: AI-Enabled WiFi Interference Cancellation with Commodity PHY-Layer Information](publication/2022-aifi/) {id=intelligent-wireless-systems}
        SenSys'22  
        ![AiFi](aifi.jpg)
        AiFi applies on-device AI techniques to interference cancellation in WiFi networks and enables generalizable interference cancellation on commodity WiFi devices without any extra RF hardware. By using neural network models to mimic WiFi network's PHY-layer operation, AiFi can be generally applied to different types of interference signals ranging from concurrent WiFi transmissions, ZigBee/Bluetooth to wireless baby monitors or even microwave oven, and improves the MAC-layer frame reception rate by 18x.
        {{< hr >}}
        [View more...](/tag/intelligent-wireless-systems/)
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
