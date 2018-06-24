{% macro linklist(links) %}
    <nav class="link-list">
        {% for link in links %}

            <a href="{{ link.url }}" title="{{ link.label }}" class="link-list__link">
                {% if link.icon %}
                    {{ link.icon | safe }}
                {% endif %}
                {{ link.label }}
            </a>
        {% endfor %}
    </nav>
{% endmacro %}

{{ linklist(links=[
    {label : "denkwerk GmbH", url : "https://www.denkwerk.com"},
    {label : "denkstrap @GitHub Pages", url : "https://denkstrap.github.io"}
]) }}
