{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Hello World{% endblock %}

{% block content %}
    {{ modules.helloDenkstrap.macro() }}
{% endblock %}
