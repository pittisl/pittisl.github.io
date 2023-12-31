---
title: 'Eavesdropping user credentials via GPU side channels on smartphones'
authors:
  - boyuan
  - ruirong
  - kai
  - wei
date: '2022-03-22T00:00:00Z'
doi: '10.1145/3503222.3507757'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-07-22T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *the 27th ACM International Conference on Architectural Support for Programming Languages and Operating Systems*
publication_short: In *ASPLOS'22*

abstract: Graphics Processing Unit (GPU) on smartphones is an effective target for hardware attacks. In this paper, we present a new side channel attack on mobile GPUs of Android smartphones, allowing an unprivileged attacker to eavesdrop the user's credentials, such as login usernames and passwords, from their inputs through on-screen keyboard. Our attack targets on Qualcomm Adreno GPUs and investigate the amount of GPU overdraw when rendering the popups of user's key presses of inputs. Such GPU overdraw caused by each key press corresponds to unique variations of selected GPU performance counters, from which these key presses can be accurately inferred. Experiment results from practical use on multiple models of Android smartphones show that our attack can correctly infer more than 80% of user's credential inputs, but incur negligible amounts of computing overhead and network traffic on the victim device. To counter this attack, this paper suggests mitigations of access control on GPU performance counters, or applying obfuscations on the values of GPU performance counters.

# Summary. An optional shortened abstract.
summary: This is one of the few works that demonstrate critical security vulnerabilities of mainstream GPUs (QualComm Adreno GPU on Snapdragon SoCs) on smartphones, which allow an unprivileged attacker to eavesdrop the user’s sensitive credentials such as app username and password. 

tags:
  - 'mobile-security'
  - 'projects-mobile-and-edge-computing-systems'
featured: true

links:
  - name: Artifact
    url: 'https://doi.org/10.5281/zenodo.5733423'
url_pdf: 'https://sites.pitt.edu/~weigao/publications/asplos22.pdf'
url_code: 'https://github.com/pittisl/perfinfer-code'
url_video: 'https://www.youtube.com/watch?v=LE9Eyn43zSs'

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

## About this work

### Information Leakage from On-screen Keyboard

The GPU rendering of on-screen keyboard animation causes information leakage
on user input.

![GPU Overdraw and Keyboard](2022-mobile-gpu-eavesdropping/keyboard-gpu-overdraw.png)

### One-on-one mapping between key press event and GPU performance counter changes

Screen rendering activity is reflected by GPU performance counter values as provided
by Qualcomm GPU driver via OpenGL APIs. The key pop-up activity has one-on-one mapping
with certain GPU performance counter value changes.

![Mapping Key Press with Perfcounter](2022-mobile-gpu-eavesdropping/mobilegpu-xy-plot-match.png)

### System Overview

Our work designs the whole attack with an offline training phase and online attacking phase.
In the offline phase, the attacker emulates all key
presses over different device models and configurations to collect
a sufficient amount of GPU PC (Performance Counter) data.
In the online phase, the attacking application will spawn a moni-
toring process, which runs as an Android service in background.
If a target application is launched, the monitoring process will start
reading the selected GPU PCs. These readings
will be first used to recognize the current device model and configuration,
and then applied to the corresponding classification model
for eavesdropping.

![Eavesdropping System Overview](2022-mobile-gpu-eavesdropping/system-overview.png)

### Reading GPU PC information from OS

We make use of customized `ioctl()` system call on GPU device file in the Android
OS in order to circumvent privilege limitation in system OpenGL library and directly
query system GPU performance counter values.

![Utilizing GPU device file in Android OS](2022-mobile-gpu-eavesdropping/mobilegpu-ioctl-call-map.png)

### Handling Noises and System Factors

To reduce impact from noises and system factors, we use a distance-based
algorithm to match the GPU performance counter readings with the nearest
possible key press events.

![Distance-based Algorithm](2022-mobile-gpu-eavesdropping/mobilegpu-algorithm.png)

### Key Press Inference Accuracy

With specially designed eavesdropping Android App, we can achieve an
average accuracy of individual key press inference of up to 98.3%.
For random text string inputs, the average inference accuracy is 81.3%.

![Accuracy for Individual Key Presses](2022-mobile-gpu-eavesdropping/mobilegpu-overall-accuracy.png)

The inference accuracy is shown to be not significantly affected by
the choice of targeted App or the on-screen keyboard software.

![Accuracy with different targeted App](2022-mobile-gpu-eavesdropping/mobilegpu-targeted-app.png)

![Accuracy with different on-screen keyboard](2022-mobile-gpu-eavesdropping/mobilegpu-result-keyboard.png)

### Follow-up Security Fixes

The vulnerabilities found in this paper is designated with CVE number
[CVE-2022-22075](https://nvd.nist.gov/vuln/detail/CVE-2022-22075), acknowledged
by [Qualcomm Security Bulletin](https://docs.qualcomm.com/product/publicresources/securitybulletin/march-2023-bulletin.html),
and fixed in
[February 2023 Android Security patches](https://source.android.com/docs/security/overview/acknowledgements#feb-2023).

## Videos

### Attack Demo

{{< youtube id="f40TvdDaxqw" >}}

### Paper Presentation

{{< youtube id="LE9Eyn43zSs" >}}
