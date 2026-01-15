---
title: 'InfiniBench: Infinite Benchmarking for Visual Spatial Reasoning with Customizable Scene Complexity'
authors:
  - haoming
  - qiyao
  - wei
date: '2025-12-05T00:00:00Z'
doi: '10.48550/arXiv.2511.18200'

# Schedule page publish date (NOT publication's date).
publishDate: '2025-12-05T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: In *arXiv preprint*
publication_short: In *arXiv*

abstract: Modern vision-language models (VLMs) are expected to have abilities of spatial reasoning with diverse scene complexities, but evaluating such abilities is difficult due to the lack of benchmarks that are not only diverse and scalable but also fully customizable. Existing benchmarks offer limited customizability over the scene complexity and are incapable of isolating and analyzing specific VLM failure modes under distinct spatial conditions. To address this gap, instead of individually presenting benchmarks for different scene complexities, in this paper we present InfiniBench, a fully automated, customizable and user-friendly benchmark generator that can synthesize a theoretically infinite variety of 3D scenes with parameterized control on scene complexity. InfiniBench uniquely translates scene descriptions in natural language into photo-realistic videos with complex and physically plausible 3D layouts. This is achieved through three key innovations. 1) a LLM-based agentic framework that iteratively refines procedural scene constraints from scene descriptions; 2) a flexible cluster-based layout optimizer that generates dense and cluttered scenes previously intractable for procedural methods; and 3) a task-aware camera trajectory optimization method that renders scenes into videos with full object coverage as VLM input. Experiments demonstrate that InfiniBench outperforms state-of-the-art procedural and LLM-based 3D generation methods in prompt fidelity and physical plausibility, especially in high-complexity scenarios. We further showcased the usefulness of InfiniBench, by generating benchmarks for representative spatial reasoning tasks including measurement, perspective-taking and spatiotemporal tracking.

# Summary. An optional shortened abstract.
summary: We present InfiniBench, a fully automated, customizable and user-friendly benchmark generator that can synthesize a theoretically infinite variety of 3D scenes with parameterized control on scene complexity. InfiniBench uniquely translates scene descriptions in natural language into photo-realistic videos with complex and physically plausible 3D layouts. Experiments demonstrate that InfiniBench outperforms state-of-the-art procedural and LLM-based 3D generation methods in prompt fidelity and physical plausibility, especially in high-complexity scenarios. We further showcased the usefulness of InfiniBench, by generating benchmarks for representative spatial reasoning tasks including measurement, perspective-taking and spatiotemporal tracking.

tags:
  - 'spatial-intelligence'
featured: true

links:
  - name: Dataset
    url: https://huggingface.co/datasets/Haoming645/infinibench
url_code: 'https://github.com/pittisl/infinibench'
url_pdf: 'https://arxiv.org/pdf/2511.18200'
#url_video: ''
#url_slides: ''

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
#slides:
---

## Agentic Generation of Scene Constraints

InfiniBench iteratively refines the generated scene constraints via a critical feedback loop. In each iteration, we use the scene layout optimizer described to attempt realizing the generated constraints into a 3D scene. If the optimizer fails, the returned error report, which includes a bird's eye view (BEV) map showing object collisions and a textual summary describing the unmet constraints, is fed back to the LLM agent to refine the constraint generation. Such refinement enforces a Chain-of-Thought (CoT) reasoning process that prompts the LLM agent to first analyze the failure, propose a solution accordingly, and then implement the changes on scene constraints.

![constraint_generation](2025-infinibench/constraint_generation.png)

## Layout Optimization for Complex Scenes

To ensure robust layout optimization with high scene complexity, we restructured the layout engine with a flexible cluster-based optimization strategy. This strategy, builds on a new concept of movable cluster, defined as a dynamic group of related objects (e.g., a table and chairs surrounding it) that are treated as a single entity in optimization. 

![optimizer](2025-infinibench/optimizer.png)

## Camera Trajectory Optimization

Our method is inspired by frontier-based exploration, a classical robotic navigation technique. Unlike traditional approaches that explore frontiers using occupancy grids, we define ``frontiers'' as the set of unvisited target objects. We then develop a viewpoint sampling method to find optimal views for these targets while avoiding occlusion.

![path_gen](2025-infinibench/path_gen.png)

### Associated Dataset

We also published [the associated dataset](/dataset/#infinibench) together with this paper.
