---
layout: page
permalink: /notes/
title: research notes
description: Notes on research papers I am reading in AI safety. Written to think as I read.
nav: false
nav_order: 2
---

<!--
RESEARCH NOTE TEMPLATE
======================
To add a note, create a new file in _posts/ with this frontmatter:

---
layout: post
title: "Short title — what the paper is really about"
date: YYYY-MM-DD
categories: [research-notes]
tags: [alignment-faking, ...]
description: "One sentence on why this paper is worth reading."
author: Chijioke Ugwuanyi
---

Then use this structure in the body:

**Paper** — Authors. Venue/year. [arXiv link]

**The real question** — What they are actually trying to resolve, stripped of abstract framing.

**Approach** — What they did and why that is the right or wrong way to test it.

**Key result** — The one number or finding that shifts your priors.

**What this changes** — How it affects your research direction or assumptions.

**Where it breaks** — Specific scope or methodological limits, not vague critique.

**Open question** — What this paper leaves unresolved that someone should test.
-->

<div class="post">

  <div class="header-bar">
    <h1>Research Notes</h1>
    <h2>{{ page.description }}</h2>
  </div>

  <ul class="post-list">
    {% assign notes = site.posts | where_exp: "post", "post.categories contains 'research-notes'" %}
    {% for post in notes %}
      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% assign year = post.date | date: "%Y" %}
      <li>
        <h3>
          {% if post.redirect == blank %}
            <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% elsif post.redirect contains '://' %}
            <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
          {% else %}
            <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
          {% endif %}
        </h3>
        <p>{{ post.description }}</p>
        <p class="post-meta">
          {{ read_time }} min read &nbsp; &middot; &nbsp;
          {{ post.date | date: '%B %d, %Y' }}
        </p>
      </li>
    {% endfor %}
    {% if notes.size == 0 %}
      <p>Notes coming soon.</p>
    {% endif %}
  </ul>

</div>
