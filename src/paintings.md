---
title: Tableaux
layout: base
tags: page
modified: 2022-01-09 00:00:00
order: 2
pagination:
  data: collections.painting
  size: 200
  alias: painting
---

<ol>
{% for paint in painting %}
  <li><a href="{{ paint.url }}"><img src="{{ config.url }}/images/paintings/square/{{ paint.data.filename }}" width="200" height="200" /></a></li>
{% endfor %}
</ol>
