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
    id: on-device-ai
    content:
      title: On-device AI
      subtitle: 'Our research strives to enable AI capabilities (inference & training) on resource-constrained embedded devices in the IoT and tailor AI models to effectively support various system applications. We utilize fine-grained and explainable knowledge about AI model execution to determine the most efficient part of the model for on-device training and inference, and employ modular neural networks and incorporates domain knowledge of specific system applications into the neural network module design.'
      text: |
        {{< columns >}}
        ### [ElasticTrainer: Speeding Up On-Device Training with Runtime Elastic Tensor Selection](publication/2023-elastictrainer/) {id=elastictrainer}
        MobiSys'23  
        ![ElasticTrainer](elastictrainer.jpg)
        The first on-device AI technique that achieves full elasticity of on-device training on resource-constrained mobile and embedded devices. By leveraging the principle of eXplainable AI (XAI) and evaluating the importance of different tensors in training, we allow fully flexible adaptation of the trainable neural network portion at runtime, according to the current training needs and online data patterns, to minimize the training cost without accuracy loss.
        <--->
        ### [Real-time Neural Network Inference on Extremely Weak Devices: Agile Offloading with Explainable AI](publication/2022-agilenn/) {id=agilenn}
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
    id: mobile-and-connected-health
    content:
      title: Mobile and connected health
      subtitle: 'The COVID-19 pandemic poses a significant public health challenge, with the potential to overwhelm the healthcare system due to the high number of hospital visits. To address this issue, we are developing mobile sensing and AI techniques that allow individuals to self-evaluate possible COVID-19 infections at home using their smartphones. Our goal is to enable low-cost self-assessment and avoid unnecessary hospital visits by identifying other diseases that share similar symptoms with COVID-19, such as fever and shortness of breath. This research is urgently needed to alleviate the strain on the healthcare system and preserve medical resources for hospitalized patients, especially considering the rapid spread of the virus across the United States.'
      text: |
        ### [PTEase: Objective Airway Examination for Pulmonary Telemedicine using Commodity Smartphones](publication/2023-ptease/) {id=ptease}
        MobiSys'23  
        ![PTEase](ptease.jpg)
        The first mobile health system that turns a commodity smartphone into a fully functional pulmonary examination device to measure the internal physiological conditions of human airways, such as airway caliber, obstruction and possible inflammation. Information about these airway conditions could provide vital clues for precise and objective pulmonary disease evaluation.
        ### [SpiroSonic: Monitoring Human Lung Function via Acoustic Sensing on Commodity Smartphones](publication/2020-spirosonic) {id=spirosonic}
        MobiCom'20  
        ![SpiroSonic](spirosonic.png)
        The first work that allows commodity smartphones to be used as a portable spirometer and provide accuracy lung function test results on par with clinical-grade spirometers. This is a collaborative work with the Children's Hospital of Pittsburgh, and could also potentially contribute to in-home evaluation of COVID-19 risks by allowing convenient out-of-clinic lung function evaluation.
        {{< hr >}}
        [View more...](/tag/mobile-and-connected-health)

    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    id: mobile-embed-systems
    content:
      title: Mobile and embedded systems
      subtitle: 'With the continuous evolvement of mobile computing on embedded system platforms, our research focuses on the application of recent advances in mobile computataional needs. We investigate into improving the safety and performance of mobile computing tasks and the utilization of heterogeneous hardware resources on mobile platform.'
      text: |
        ### [Eavesdropping User Credentials via GPU Side Channels on Smartphones](publication/2022-mobile-gpu-eavesdropping/) {id=mobile-gpu-eavesdropping}
        ASPLOS'22  
        ![MobileGPUEavesdropping](mobilegpueavesdropping_animation_comp.gif)
        This is one of the few works that demonstrate critical security vulnerabilities of mainstream GPUs (QualComm Adreno GPU on Snapdragon SoCs) on smartphones, which allow an unprivileged attacker to eavesdrop the user's sensitive credentials such as app username and password.
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    id: intelligent-wireless-systems
    content:
      title: Intelligent Wireless Systems
      subtitle: 'Wireless communications, such as Wi-Fi, Bluetooth and Zigbee, play an important role in IoT and mobile application. However, the noisy wireless channel conditions and interference makes such communication less effective. Our research focuses on physical layer designs, and apply AI-assisted techniques for intereference cancellation and efficiency improvement.'
      text: |
        {{< columns >}}
        ### [AiFi: AI-Enabled WiFi Interference Cancellation with Commodity PHY-Layer Information](publication/2022-aifi/) {id=aifi}
        SenSys'22  
        ![AiFi](aifi.jpg)
        AiFi applies on-device AI techniques to interference cancellation in WiFi networks and enables generalizable interference cancellation on commodity WiFi devices without any extra RF hardware. By using neural network models to mimic WiFi network's PHY-layer operation, AiFi can be generally applied to different types of interference signals ranging from concurrent WiFi transmissions, ZigBee/Bluetooth to wireless baby monitors or even microwave oven, and improves the MAC-layer frame reception rate by 18x.
        <--->
        ### [TransFi: emulating custom wireless physical layer from commodity wifi](publication/2022-transfi/) {id=transfi}
        MobiSys'22  
        ![TransFi](transfi.png)
        TransFi realizes fine-grained signal emulation and allows commodity WiFi devices to emulate custom wireless physical layer, including but not limited to, custom PHY-layer preambles and new ways of agile spectrum usage. It could also improve the performance of cross-technology communication and many other wireless applications by up to 50x, enabling high-speed data communication on par with commodity WiFi.
        {{< /columns >}}
        {{< hr >}}
        [View more...](/tag/intelligent-wireless-systems/)
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    id: intelligent-edge-computing
    content:
      title: Intelligent Edge Computing
      subtitle: ''
      text: |
        {{< columns >}}
        ### [DeltaVR: achieving high-performance mobile VR dynamics through pixel reuse](publication/2019-deltavr/) {id=deltavr}
        IPSN'19  
        ![DeltaVR](deltavr.png)
        This work leverages the unique characteristics of image warping used in current VR applications, and fundamentally expand the scope of image warping to the entire VR lifespan to precisely capture the fluctuations of VR scene due to VR dynamics. We implemented our design over Android OS and Unity VR application engine, and demonstrated that our design can maximize the mobile VR performance over highly dynamic VR scenarios with 95% less amount of VR frame data being transmitted.
        <--->
        ### [MUVR: Supporting Multi-User Mobile Virtual Reality with Resource Constrained Edge Cloud](publication/2018-muvr/) {id=muvr}
        2018 IEEE SEC  
        ![MUVR](muvr.png)
        MUVR aims to remove the performance constraint of highly dynamic VR appliations by adaptively reusing the redundant VR frames being rendered for different VR users. The redundancy in each frame is decided at run-time by the edge cloud, which further reuses its redundant pixels compared with other frames. The design implementation over Android OS and Unity VR demonstrated that the design can reduce edge computation burden and transmitted VR frame data.
        {{< /columns >}}
        {{< hr >}}
        [View more...](/tag/intelligent-edge-computing/)
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']


  - block: markdown
    id: videos
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
