---
layout: page
title: Writing
permalink: /writing/
---


<ul class="post-list">
  {% for post in site.posts %}
    <li>
      {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
      <h2 class="post-heading"><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
      <p class="post-meta">{{ post.date | date: date_format }}</p>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>
