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
          * [On-device AI](/projects/on-device-ai/)
          * [Mobile and Connected Health](/projects/mobile-and-connected-health/)
          * [Mobile and Edge Computing Systems](/projects/mobile-and-edge-computing-systems/)
          * [Intelligent Wireless Systems](/projects/intelligent-wireless-systems/)
        
        Our tutorials:
          * [Generative AI Roadmap](https://github.com/pittisl/Generative-AI-Tutorial)

  - block: collection
    id: news
    content:
      title: Latest News
      subtitle:
      text: |
        * **Jan 2024:** We are happy to publish the dataset of human airway measurements, produced by our integrated AI and sensing systems for smart pulmonary telemedicine, namely [Acoustic Waveform Respiratory Evaluation (AWARE)](/dataset/#aware).
        * **Jan 2024:** Our paper, [Towards Green AI in Fine-Tuning Large Language Models via Adaptive Backpropagation](/publication/2023-greentrainer/), has been accepted for publication at the 2024 International Conference on Learning Representations (ICLR).
        * **Dec 2023:** The preprint of our recent work on runtime modality adaptation for embodied AI, [Modality Plug-and-Play: Elastic Modality Adaptation in Multimodal LLMs for Embodied AI](/publication/2023-mpnp-llm/), has been made publicly available [on arXiv](https://arxiv.org/abs/2312.07886).
        * **Sep 2023:** Two of our recent works, [Towards Green AI in Fine-tuning Large Language Models via Adaptive Backpropagation](/publication/2023-greentrainer/) (“GreenTrainer”) and [Tackling the Unlimited Staleness in Federated Learning with Intertwined Data and Device Heterogeneities](/publication/2023-intertwined-heterogeneity/), are now available online on arXiv.
        * **Jun 2023:** Two papers from our lab, [ElasticTrainer: Speeding Up On-Device Training with Runtime Elastic Tensor Selection](/publication/2023-elastictrainer/) and [PTEase: Objective Airway Examination for Pulmonary Telemedicine using Commodity Smartphones](/publication/2023-ptease/), are accepted and presented at MobiSys 2023.
#        * **Nov 2022:** [AiFi: AI-Enabled WiFi Interference Cancellation with Commodity PHY-Layer Information](/publication/2022-aifi/) is accepted and presented at SenSys 2022.
#        * **Oct 2022:** Our AgileNN work is accepted and presented at MobiCom 2022. The published paper, [Real-time Neural Network Inference on Extremely Weak Devices: Agile Offloading with Explainable AI](/publication/2022-agilenn/), is also available online.
      count: 0
      filters:
        author: ''
        category: ''
        exclude_featured: true
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
#      view: card
      view: compact-orig
      spacing:
        padding: ['20px', '0', '20px', '0']
      columns: '2'

  - block: markdown
    id: on-device-ai
    content:
      title: On-device AI
      subtitle: 'Our research aims to enable high-performance AI inference and training on resource-constrained mobile and embedded devices, to enable emerging applications such as AIoT, smart health and embodied AI. We utilize fine-grained and explainable knowledge about AI model execution to determine the most efficient part of the model for on-device training and inference, and employ modular neural networks that incorporate domain knowledge of specific system applications into the neural network module design. Our recent research focuses on enabling computational efficient inference and training of modern Large Language Models (LLMs) on weak devices, to efficiently incorporate these devices’ rich varieties of data modalities into the LLMs’ representation power and hence allow more flexible domain adaptation and model personalization.'
      text: |
        ### [Modality Plug-and-Play: Elastic Modality Adaptation in Multimodal LLMs for Embodied AI](/publication/2023-mpnp-llm/) {id=mpnp-llm}
        ArXiv preprint
        {{< columns >}}
        ![MPnP-LLM](mpnp-llm.png)
        <--->
        This is the first work that allows multimodal LLMs to elastically switch between input data modalities at runtime, for embodied AI applications such as autonomous navigation. Our basic technical approach is to use fully trainable projectors to adaptively connect the unimodal data encoders being used to a flexible set of last LLM blocks. In this way, we can flexibly adjust the amount of LLM blocks being connected to balance between accuracy of runtime fine-tuning cost, and optimize the efficiency of cross-modal interaction by controlling the amount of information being injected in each connection. Our implementations on NVidia Jetson AGX Orin demonstrate short modality adaptation delays of few minutes with mainstream LLMs, 3.7x fine-tuning FLOPs reduction, and 4% accuracy improvements on multimodal QA tasks.
        {{< /columns >}}
        {{< hr-pittisl >}}
        ### [Towards Green AI in Fine-tuning Large Language Models via Adaptive Backpropagation](/publication/2023-greentrainer/) {id=greentrainer}
        2024 ICLR
        {{< columns >}}
        ![GreenTrainer](greentrainer.png)
        <--->
        The growing need of fine-tuning large language models (LLMs) can lead to significant energy consumption and environmental impact. To address this issue, we introduce GreenTrainer, a novel LLM fine-tuning technique. GreenTrainer assesses the backpropagation costs and contributions of different tensors to model accuracy, allowing for the selection of the most efficient set of tensors. This selection is guided by a user-defined objective, which can adapt to energy supply considerations and Green AI goals. Experimental results demonstrate that GreenTrainer can reduce FLOPs by up to 64% without compromising model accuracy, and outperforms existing techniques like LoRA while maintaining comparable FLOPs reduction.
        {{< /columns >}}
        {{< hr-pittisl >}}
        ### [Tackling the Unlimited Staleness in Federated Learning with Intertwined Data and Device Heterogeneities](/publication/2023-intertwined-heterogeneity/) {id=intertwined-heterogeneity}
        ArXiv preprint
        ![Intertwined Heterogeneity](2023-intertwined-heterogeneity/intertwined-heterogeneity-overview.png)
        Federated Learning (FL) efficiency is influenced by intertwined data and device heterogeneities. Traditionally, these factors are treated separately, which becomes ineffective in addressing staleness issue due to asynchronous FL. We introduce a novel FL framework employing the gradient inversion technique to get estimations of clients' local training data from their uploaded stale model updates, and use these estimations to compute non-stale client model updates, which addresses both data quality and privacy concerns. Experiments on mainstream datasets reveal our approach enhances model accuracy by up to 20% and accelerates FL training by up to 35% over existing methods.
        {{< hr-pittisl >}}
        ### [ElasticTrainer: Speeding Up On-Device Training with Runtime Elastic Tensor Selection](/publication/2023-elastictrainer/) {id=elastictrainer}
        MobiSys'23  
        {{< columns >}}
        ![ElasticTrainer](elastictrainer.jpg)
        <--->
        {{< youtube id="q86LnqEew_U" >}}
        {{< /columns >}}
        The first on-device AI technique that achieves full elasticity of on-device training on resource-constrained mobile and embedded devices. By leveraging the principle of eXplainable AI (XAI) and evaluating the importance of different tensors in training, we allow fully flexible adaptation of the trainable neural network portion at runtime, according to the current training needs and online data patterns, to minimize the training cost without accuracy loss.
        {{< hr-pittisl >}}
        ### [Real-time Neural Network Inference on Extremely Weak Devices: Agile Offloading with Explainable AI](/publication/2022-agilenn/) {id=agilenn}
        MobiCom'22  
        {{< columns >}}
        ![AgileNN](agilenn.png)
        <--->
        {{< youtube id="OwNRcuTRgwE" >}}
        {{< /columns >}}
        AgileNN is the first work that achieves real-time inference (<20ms) of mainstream neural network models (e.g., ImageNet) on extremely weak MCUs (e.g., STM32 series with <1MB of memory), without impairing the inference accuracy. The usage of eXplainable AI (XAI) techniques allows >6x improvement of feature compressibility during offloading and >8x reduction of the local device's resource consumption.
        {{< hr >}}
        [**View more...**](/projects/on-device-ai/)
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    id: mobile-and-connected-health
    content:
      title: Mobile and connected health
      subtitle: 'Recent technical advances of sensing, computation and communication on mobile and embedded devices, such as smartphones and wearables, highlights the possibility of pervasive monitoring and unobtrusive diagnostics of various acute or chronic diseases, as convenient yet low-cost alternatives of medical-grade methods without any involvement of clinicians. Our research aims to fully unleash such potential of today’s mobile and embedded devices towards accurate, efficient yet cost-effective solutions to mobile and connected health, by employing modern AI tools and developing new AI algorithms to properly extract biomarkers from the mobile sensory data and provide sufficient interpretability to the extracted biomarkers. Currently, our integrated sensing and AI systems have been widely applied to various clinical applications including pulmonary telemedicine, post-discharge heart failure risk evaluation and mitigation, and orthopedic disease evaluation.'
      text: |
        ### [PTEase: Objective Airway Examination for Pulmonary Telemedicine using Commodity Smartphones](/publication/2023-ptease/) {id=ptease}
        MobiSys'23  
        {{< columns >}}
        ![PTEase](ptease.png)
        <--->
        {{< youtube id="Netn1AOdsz8" >}}
        {{< /columns >}}
        The first mobile health system that turns a commodity smartphone into a fully functional pulmonary examination device to measure the internal physiological conditions of human airways, such as airway caliber, obstruction and possible inflammation. Information about these airway conditions could provide vital clues for precise and objective pulmonary disease evaluation.
        #### [Acoustic Waveform Respiratory Evaluation (AWARE) Dataset](/dataset/#aware)  
        Our AWARE dataset consists of a group of human airway measurements, produced by our integrated AI and sensing systems for smart pulmonary telemedicine. The PTEase paper makes use of the AWARE dataset.
        {{< hr-pittisl >}}
        ### [SpiroSonic: Monitoring Human Lung Function via Acoustic Sensing on Commodity Smartphones](/publication/2020-spirosonic) {id=spirosonic}
        MobiCom'20  
        {{< columns >}}
        ![SpiroSonic](spirosonic.png)
        <--->
        {{< youtube id="SDiboSXJr28" >}}
        {{< /columns >}}
        The first work that allows commodity smartphones to be used as a portable spirometer and provide accuracy lung function test results on par with clinical-grade spirometers. This is a collaborative work with the Children's Hospital of Pittsburgh, and could also potentially contribute to in-home evaluation of COVID-19 risks by allowing convenient out-of-clinic lung function evaluation.
        {{< hr >}}
        [**View more...**](/projects/mobile-and-connected-health/)

    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    id: mobile-and-edge-computing-systems
    content:
      title: Mobile and Edge Computing Systems
      subtitle: 'Edge computing remains a viable solution in task offloading to balance between network latency and computational power. Our research focuses on the co-design between mobile and edge systems to achieve better efficiency on mobile applications with heavy workload, such as mobile VR rendering.'
      text: |
        ### [FaceListener: Recognizing Human Facial Expressions via Acoustic Sensing on Commodity Headphones](publication/2022-facelistener/) {id=facelistener}
        IPSN'22
        {{< columns >}}
        ![FaceListener](facelistener.png)
        <--->
        FaceListener transforms the commodity headphone into an acoustic sensing device, which captures the face skin deformations caused by fa-cial muscle movements with different facial expressions. To ensure the recognition accuracy, FaceListener leverages the knowledge distillation technique to learn the subtle correlation between face skin deformation and the acoustic signal changes.
        {{< /columns >}}
        {{< hr-pittisl >}}
        ### [Eavesdropping User Credentials via GPU Side Channels on Smartphones](publication/2022-mobile-gpu-eavesdropping/) {id=mobile-gpu-eavesdropping}
        ASPLOS'22  
        {{< columns >}}
        ![MobileGPUEavesdropping](mobilegpueavesdropping_animation_comp.gif)
        <--->
        {{< youtube id="f40TvdDaxqw" >}}
        {{< /columns >}}
        This is one of the few works that demonstrate critical security vulnerabilities of mainstream GPUs (QualComm Adreno GPU on Snapdragon SoCs) on smartphones, which allow an unprivileged attacker to eavesdrop the user’s sensitive credentials such as app username and password.
        {{< hr-pittisl >}}
        ### [MagHacker: eavesdropping on stylus pen writing via magnetic sensing from commodity mobile devices](publication/2020-maghacker/) {id=maghacker}
        MobiSys'20
        {{< columns >}}
        ![MagHacker](maghacker.png)
        <--->
        We present MagHacker, a new sensing system that realizes such eavesdropping attack over commodity mobile devices, which monitor and analyze the magnetic field being produced by the stylus pen’s internal magnet. It divides the continuous magnetometer readings into small segments that represent individual letters, and then translates these readings into writing trajectories for letter recognition.
        {{< /columns >}}
        {{< hr-pittisl >}}
        ### [DeltaVR: achieving high-performance mobile VR dynamics through pixel reuse](publication/2019-deltavr/) {id=deltavr}
        IPSN'19  
        {{< columns >}}
        ![DeltaVR](deltavr.png)
        <--->
        This work leverages the unique characteristics of image warping used in current VR applications, and fundamentally expand the scope of image warping to the entire VR lifespan to precisely capture the fluctuations of VR scene due to VR dynamics. We implemented our design over Android OS and Unity VR application engine, and demonstrated that our design can maximize the mobile VR performance over highly dynamic VR scenarios with 95% less amount of VR frame data being transmitted.
        {{< /columns >}}
        {{< hr-pittisl >}}
        ### [MUVR: Supporting Multi-User Mobile Virtual Reality with Resource Constrained Edge Cloud](publication/2018-muvr/) {id=muvr}
        2018 IEEE SEC  
        {{< columns >}}
        ![MUVR](muvr.png)
        <--->
        MUVR aims to remove the performance constraint of highly dynamic VR appliations by adaptively reusing the redundant VR frames being rendered for different VR users. The redundancy in each frame is decided at run-time by the edge cloud, which further reuses its redundant pixels compared with other frames. The design implementation over Android OS and Unity VR demonstrated that the design can reduce edge computation burden and transmitted VR frame data.
        {{< /columns >}}
        {{< hr >}}
        [**View more...**](/projects/mobile-and-edge-computing-systems/)

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
        ### [AiFi: AI-Enabled WiFi Interference Cancellation with Commodity PHY-Layer Information](/publication/2022-aifi/) {id=aifi}
        SenSys'22  
        {{< columns >}}
        ![AiFi](aifi.jpg)
        <--->
        AiFi applies on-device AI techniques to interference cancellation in WiFi networks and enables generalizable interference cancellation on commodity WiFi devices without any extra RF hardware. By using neural network models to mimic WiFi network's PHY-layer operation, AiFi can be generally applied to different types of interference signals ranging from concurrent WiFi transmissions, ZigBee/Bluetooth to wireless baby monitors or even microwave oven, and improves the MAC-layer frame reception rate by 18x.
        {{< /columns >}}
        {{< hr-pittisl >}}
        ### [TransFi: emulating custom wireless physical layer from commodity wifi](/publication/2022-transfi/) {id=transfi}
        MobiSys'22  
        {{< columns >}}
        TransFi realizes fine-grained signal emulation and allows commodity WiFi devices to emulate custom wireless physical layer, including but not limited to, custom PHY-layer preambles and new ways of agile spectrum usage. It could also improve the performance of cross-technology communication and many other wireless applications by up to 50x, enabling high-speed data communication on par with commodity WiFi.
        <--->
        ![TransFi](transfi.png)
        {{< youtube id="-BngtciwxfA" >}}
        {{< /columns >}}
        {{< hr >}}
        [**View more...**](/projects/intelligent-wireless-systems/)
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

#  - block: markdown
#    id: moreinfo
#    content:
#      title: 'More from Us...'
#      subtitle: ''
#      text: |
#        {{< columns >}}
#        ##### [News](news/)
#        <--->
#        ##### [Publication](publication/)
#        <--->
#        ##### [GitHub](https://github.com/pittisl)
#        <--->
#        ##### [Contact](contact/)
#        {{< /columns >}}
#    design:
#      columns: '1'
#      spacing:
#        padding: ['20px', '0', '20px', '0']
##      css_class: fullscreen

  
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
