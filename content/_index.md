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
        The **Intelligent System Lab** at University of Pittsburgh conducts pioneering research at the intersection between
        AI and computer systems. Our current research focuses on Multimodal Generative AI, On-device AI, Mobile and embedded
        systems, Mobile and connected health, Cyber-physical systems, Internet of Things, and more!
        
        Our projects:
          * [Multimodal Generative AI](/projects/multimodal-generative-ai/)
          * [On-device AI](/projects/on-device-ai/)
          * [Trustworthy AI](/projects/trustworthy-ai/)
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
        * **Jul 2025:** Our paper, [ProGait: A Multi-Purpose Video Dataset and Benchmark for Transfemoral Prosthesis Users](/publication/2025-progait/), has been accepted for publication at 2025 International Conference on Computer Vision (ICCV 2025).
        * **Jun 2025:** Our paper, [Data Can Speak for Itself: Quality-guided Utilization of Wireless Synthetic Data](/publication/2025-syncheck/), has been accepted for publication at the ACM International Conference on Mobile Systems, Applications, and Services (MobiSys 2025) with the **best paper award!**
        * **Jun 2025:** Our paper, [Never Start from Scratch: Expediting On-Device LLM Personalization via Explainable Model Selection](/publication/2025-xpert/), has been accepted for publication at the ACM International Conference on Mobile Systems, Applications, and Services (MobiSys 2025).
        * **Apr 2025:** Our paper, [PhyT2V: LLM-Guided Iterative Self-Refinement for Physics-Grounded Text-to-Video Generation](/publication/2024-phyt2v/), has been accepted for publication at the Conference on Computer Vision and Pattern Recognition 2025 (CVPR 2025).
        * **Dec 2024:** Our paper, [Tackling Intertwined Data and Device Heterogeneities in Federated Learning with Unlimited Staleness](/publication/2023-intertwined-heterogeneity/), has been accepted for publication at the 39th Annual Conference on Artificial Intelligence (AAAI 2025).
        * **Dec 2024:** Two of our papers, [When Device Delays Meet Data Heterogeneity in Federated AIoT Applications](/publication/2025-aiot/) and [Modality Plug-and-Play: Runtime Modality Adaptation in LLM-Driven Autonomous mobile Systems](/publication/2023-mpnp-llm/), have been accepted for publication at the 2025 ACM International Conference on Mobile Computing and Networking (MobiCom'25).
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
    id: multimodal-generative-ai
    content:
      title: Multimodal Generative AI
      subtitle: 'Generative AI could revolutionize many current and emerging application and industry domains. In applications under real-world scenarios, rich data modalities other than text are being integrated into generative AI research to solve emerging challenges. Our research explores multimodal generative AI computation and unleash potentials of the current models.'
      text: |
        ### [Data Can Speak for Itself: Quality-guided Utilization of Wireless Synthetic Data](/publication/2025-syncheck/) {id=xpert}
        MobiSys 2025
        ![syncheck.png](2025-syncheck/syncheck-figure1.png)
        While recent studies show performance improvements in wireless sensing tasks by incorporating synthetic data from generative models into training sets, the quality of synthetic data remains unpredictable and the resulting performance gains are not guaranteed. To address this gap, we propose tractable and generalizable metrics to quantify quality attributes of synthetic data - affinity and diversity. Our assessment reveals prevalent affinity limitation in current wireless synthetic data, leading to mislabeled data and degraded task performance. We attribute the quality limitation to generative models' lack of awareness of untrained conditions and domain-specific processing. To mitigate these issues, we introduce SynCheck, a quality-guided synthetic data utilization scheme that refines synthetic data quality during task model training. Our evaluation demonstrates that SynCheck consistently outperforms quality-oblivious utilization of synthetic data.
        {{< hr-pittisl >}}
        ### [PhyT2V: LLM-Guided Iterative Self-Refinement for Physics-Grounded Text-to-Video Generation](/publication/2024-phyt2v/) {id=phyt2v}
        CVPR 2025
        {{< columns >}}
        ![Our iteration of video and prompt self-refinement in PhyT2V](phyt2v.png)  
        * Check our paper [here](https://openaccess.thecvf.com/content/CVPR2025/papers/Xue_PhyT2V_LLM-Guided_Iterative_Self-Refinement_for_Physics-Grounded_Text-to-Video_Generation_CVPR_2025_paper.pdf).
        * We have also released a [Discord Bot](https://discord.com/channels/1312937020141732011/1314317637047812207) which allows you to try our work with SOTA T2V models.
        <--->
        Text-to-video (T2V) generative AI could revolutionize many current and emerging application and industry domains. However, the capabilities of today's T2V generative models are mostly data dependent. While they perform well in domains covered by the training data, they usually fail to obey the real-world common knowledge and physical rules with out-of-distribution prompts. Expanding the model's capabilities, on the other hand, relies on large amounts of real-world data and is hence not scalable. Our recent work aims to address this limitation of data dependency, by fully unleashing the current T2V models' potential in scene generation given proper and detailed prompts. Our approach, namely PhyT2V, is a training-free technique that leverages the LLM's capabilities of chain-of-thought and step-back reasoning in the language domain, to logically identify the deficiency of generated videos and iteratively refine the current T2V models' video generation by correcting such deficiency with more precise and well articulated prompts.
        {{< /columns >}}
        {{< hr >}}
        [**View more...**](/projects/multimodal-generative-ai/)
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    id: on-device-ai
    content:
      title: On-device AI
      subtitle: 'Our research aims to enable high-performance AI inference and training on resource-constrained mobile and embedded devices, to enable emerging applications such as AIoT, smart health and embodied AI. We utilize fine-grained and explainable knowledge about AI model execution to determine the most efficient part of the model for on-device training and inference, and employ modular neural networks that incorporate domain knowledge of specific system applications into the neural network module design. Our recent research focuses on enabling computational efficient inference and training of modern Large Language Models (LLMs) on weak devices, to efficiently incorporate these devices’ rich varieties of data modalities into the LLMs’ representation power and hence allow more flexible domain adaptation and model personalization.'
      text: |
        ### [Never Start from Scratch: Expediting On-Device LLM Personalization via Explainable Model Selection](/publication/2025-xpert/) {id=xpert}
        MobiSys 2025
        {{< columns >}}
        ![XPerT.png](xpert.png)
        <--->
        Personalization of Large Language Models (LLMs) is important in practical applications to accommodate the individual needs of different mobile users. Due to data privacy concerns, LLM personalization often needs to be locally done at the user's mobile device, but such on-device personalization is constrained by both the limitation of on-device compute power and insufficiency of user's personal data. In this paper, we address these constraints by fine-tuning an already personalized LLM with user's personal data, and present XPerT, a new technique that ensure proper selection of such already personalized LLMs based on explainability about how they were being fine-tuned. We implemented and evaluated XPerT on various smartphone models with mainstream LLMs, and experiment results show that XPerT reduces the computation costs of on-device LLM personalization by 83%, and improves its data efficiency by 51%. 
        {{< /columns >}}
        {{< hr-pittisl >}}
        ### [Modality Plug-and-Play: Runtime Modality Adaptation in LLM-Driven Autonomous Mobile Systems](/publication/2023-mpnp-llm/) {id=mpnp-llm}
        MobiCom 2025
        {{< columns >}}
        ![MPnP-LLM](mpnp-llm.png)
        <--->
        Multimodal reasoning by LLMs is critical to autonomous mobile systems, but the growing diversity of input data modalities prevents incorporating all modalities into LLMs. Instead, only the useful modalities should be adaptively involved at runtime, based on the current environmental contexts and task requirements. Existing work on runtime modality adaptation uses fixed connections between data encoder and LLM’s input layer, but results in high training costs and ineffective cross-modal interaction. In this paper, we present MPnP, a new modality adaptation technique that connects data encoders to a flexible set of last LLM blocks and makes such latent connections fully trainable at runtime. Evaluation results show that MPnP has high compute and data efficiency, with 3.7× FLOPs reduction and 30% memory usage reduction compared to best baselines. It requires only few hundreds of training samples at runtime, and completes modality adaptation within few minutes on weak devices.
        {{< /columns >}}
        {{< hr-pittisl >}}
        ### [When Device Delays Meet Data Heterogeneity in Federated AIoT Applications](/publication/2025-aiot/) {id=aiot}
        MobiCom 2025
        {{< columns >}}
        ![AIoT](2025-aiot/aiot-homepage.png)
        <--->
        Federated Artificial Intelligence of Things (AIoT) uses distributed data on IoT devices to train AI models. However, in practical AIoT systems, heterogeneous devices cause data heterogeneity and varying amounts of device staleness, which can reduce model performance or increase federated training time. Existing FL frameworks improperly consider device delays as independent from data heterogeneity. Our work explore a scenario where device delays and data heterogeneity are closely correlated, and propose FedDC, a new technique to mitigate the impact of such device delays. Our basic idea is to use gradient inversion to learn knowledge about device’s local data distribution and use such knowledge to compensate the impact of device delays on devices’ model updates. Experiment shows that FedDC can improve the FL performance by 34% with high amounts of device delays, without impairing the devices’ local data privacy.
        {{< /columns >}}
        {{< hr-pittisl >}}
        ### [Tackling Intertwined Data and Device Heterogeneities in Federated Learning with Unlimited Staleness](/publication/2023-intertwined-heterogeneity/) {id=intertwined-heterogeneity}
        AAAI 2025
        ![Intertwined Heterogeneity](2023-intertwined-heterogeneity/intertwined-fig2.png)
        Federated Learning (FL) can be affected by data and device heterogeneities. Traditional schemes consider these heterogeneities as two separate and independent aspects, but this assumption is unrealistic in practical FL scenarios where these heterogeneities are intertwined. In these cases, traditional FL schemes are ineffective. We introduce a novel FL framework with the idea of estimating the distributions of clients' local training data from their uploaded stale model updates, and use these estimations to compute unstale client model updates. Experiments on comparison with existing FL strategies on mainstream datasets and models showed that our approach can improve the trained model accuracy by up to 25% and reduce the number of required training epochs by up to 35%.
        {{< hr-pittisl >}}
        ### [Perceptual-Centric Image Super-Resolution using Heterogeneous Processors on Mobile Devices](/publication/2024-fye-sr/) {id=fye-sr}
        MobiCom'24
        {{< columns >}}
        ![Our SR method compared to Image-based Split Methods](fye-sr-vertical.jpg)
        <--->
        Image super-resolution (SR) is widely used on mobile devices to enhance user experience. However, neural networks used for SR are computationally expensive, posing challenges for mobile devices with limited computing power. A viable solution is to use heterogeneous processors on mobile devices, especially the specialized hardware AI accelerators, but the reduced arithmetic precision on AI accelerators can lead to degraded perceptual quality in upscaled images. To address this limitation, we present a novel image SR technique that enhances the perceptual quality of upscaled images when using heterogeneous processors for SR computations. It strategically splits the SR model and dispatches different layers to heterogeneous processors, to meet the time constraint while minimizing the impact of AI accelerators on image quality. Experiment results show that our method outperforms the best baselines, improving perceptual image quality by up to 2×, or reducing SR computing latency by up to 5.6× with on-par image quality.
        {{< /columns >}}
        {{< hr-pittisl >}}
        ### [Achieving Sparse Activation in Small Language Models](/publication/2024-sparse-activation-slm/) {id=sparse-activation-slm}
        ArXiv preprint
        {{< columns >}}
        ![Sparse Activation on SLM](sparse-activation-slm.jpg)
        <--->
        Being different from model compression that requires expensive retraining, sparse activation can effectively reduce neural network models' inference cost at runtime without any prior retraining or adaptation efforts. Although sparse activation has been proved to be effective on Large Language Models (LLMs) that are usually redundant (e.g., OPT and BLOOMZ models), its applicability on recent Small Language Models (SLMs) with higher parameter efficiency remains questionable. Our recent work verified such possibility by using gradient-based attribution scores to evaluate neurons' importance in inference, in both analytical and experimental perspectives. Our results show that we can achieve up to 80% sparsity in major SLM models, including Phi-1.5/2 and MobiLlama-0.5B/1B, with less than 5% model accuracy loss on QA tasks.
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
    id: trustworthy-ai
    content:
      title: Trustworthy AI
      subtitle: 'The versatility of recent emerging AI techniques also brings challenges in ensuring the AI systems to be safe, fair, explainable, and to cause no harm. Our research aims at discovering potential malicious adaptations to AI models, and propose protections and mitigations against unwanted model usages.'
      text: |
        ### [FreezeAsGuard: Mitigating Illegal Adaptation of Diffusion Models via Selective Tensor Freezing](/publication/2024-freezeasguard/) {id=freezeasguard}
        ArXiv preprint
        {{< columns >}}
        ![FreezeAsGuard](freezeasguard.png)
        <--->
        {{< youtube id="9D3ue-xhQkA" >}}
        {{< /columns >}}
        Text-to-image diffusion models can be fine-tuned in custom domains to adapt to specific user preferences, but such adaptability has also been utilized for illegal purposes, such as forging public figures’ portraits, duplicating copyrighted artworks and generating explicit contents. Existing work focused on detecting the illegally generated contents, but cannot prevent or mitigate illegal adaptations of diffusion models. Other schemes of model unlearning and reinitialization, similarly, cannot prevent users from relearning the knowledge of illegal model adaptation with custom data. In this paper, we present FreezeAsGuard, a new technique that addresses these limitations and enables irreversible mitigation of illegal adaptations of diffusion models. Our approach is that the model publisher selectively freezes tensors in pre-trained diffusion models that are critical to illegal model adaptations, to mitigate the fine-tuned model’s representation power in illegal adaptations, but minimize the impact on other legal adaptations. Experiment results in multiple text-to-image application domains show that FreezeAsGuard provides 37% stronger power in mitigating illegal model adaptations compared to competitive baselines, while incurring less than 5% impact on legal model adaptations.
        {{< hr >}}
        [**View more...**](/projects/trustworthy-ai/)

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
        ### [ProGait: A Multi-Purpose Video Dataset and Benchmark for Transfemoral Prosthesis Users](/publication/2025-progait/) {id=progait}
        ICCV 2025  
        {{< columns >}}
        ![ProGait](2025-progait/progait-figure5.png)  
        #### [ProGait Dataset](/dataset/#progait)
        Our ProGait dataset aims to support multiple vision tasks on prosthesis users, including Video Object Segmentation, 2D Human Pose Estimation, and Gait Analysis. Check our [dataset page](/dataset/#progait) for more information.
        <--->
        Vision-based machine learning (ML) methods offer a scalable and non-invasive solution to gait analysis, but face challenges in correctly detecting and analyzing prosthesis, due to their unique appearances and new movement patterns. In this paper, we aim to bridge this gap by introducing a multi-purpose dataset, namely ProGait, to support multiple vision tasks including Video Object Segmentation, 2D Human Pose Estimation, and Gait Analysis (GA). ProGait provides 412 video clips from four above-knee amputees when testing multiple newly-fitted prosthetic legs through walking trials, and depicts the presence, contours, poses, and gait patterns of human subjects with transfemoral prosthetic legs. Alongside the dataset itself, we also present benchmark tasks and fine-tuned baseline models to illustrate the practical application and performance of the ProGait dataset.
        {{< /columns >}}
        {{< hr-pittisl >}}
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
