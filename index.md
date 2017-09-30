---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

<img src="/assets/background.jpeg" />

<h1>Latest</h1>
<ul class="post-list">
  {% for post in site.posts limit: 1 %}
    <li>
      {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
      <h2 class="post-heading"><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
      <p class="post-meta">{{ post.date | date: date_format }}</p>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>
