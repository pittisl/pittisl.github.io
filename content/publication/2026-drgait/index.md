---
title: 'DrGait: Biomechanically Grounded Visual Reasoning for Interpretable Clinical Gait Analysis'
# TODO(arXiv): the review copy is anonymous. Complete this list from the
# arXiv version; Xiangyu is the first author.
authors:
  - xiangyu
  - wei
# TODO(arXiv): set date and publishDate to the arXiv submission date, and add
# doi: '10.48550/arXiv.<id>'. Dates in the future are not built.
date: '2026-09-23T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: '2026-09-23T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
# The paper is under review; do not name the venue until it is accepted.
publication: In *arXiv preprint*
publication_short: In *arXiv*

abstract: Current automated gait analysis for clinical applications relies on uninterpretable black-box classifiers. Although Vision-Language Models (VLMs) offer strong reasoning capabilities, applying them directly to gait videos often leads to hallucinations, because they struggle to measure subtle geometric deviations from raw visual contexts. To address this, we introduce DrGait, a training-free agentic framework that shifts the VLM's role from a direct visual reasoner to a clinical planner. DrGait decouples semantic reasoning from geometric perception through a structured Triage-Verification-Synthesis (TVS) workflow. Given an input video and a set of basic spatiotemporal metrics, the DrGait agent first performs a heuristic triage to propose diagnostic hypotheses, which are then verified by autonomously calling deterministic biomechanical tools that operate on reconstructed 3D mesh trajectories, segmented 2D pose tracks, and event-centered video evidence. Finally, a closed-loop mechanism recursively updates the agent's reasoning context based on the feedback. By anchoring VLM's reasoning in verifiable geometric and temporal measurements, DrGait reduces hallucinations, achieving competitive diagnostic accuracy while generating transparent and audit-ready clinical reports.

# Summary. An optional shortened abstract.
# TODO(arXiv): re-check the 94.1% / 96.1% figures against the arXiv version.
summary: 'DrGait turns a vision-language model into a clinical planner for video-based gait analysis: instead of judging raw video, it verifies each diagnostic hypothesis with biomechanical measurements from 3D body meshes and 2D poses, and produces an interpretable, evidence-backed report. On the GAVD benchmark it recognizes Parkinsonian gait with 94.1% accuracy, close to human experts (96.1%).'

tags:
  - 'parkinsons-disease'
  - 'mobile-and-connected-health'
featured: true

# TODO(arXiv): url_pdf: 'https://arxiv.org/pdf/<id>'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'High-level comparison between existing gait analysis methods and DrGait'
  focal_point: ''
  preview_only: false
---
