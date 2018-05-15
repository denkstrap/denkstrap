{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Example page{% endblock %}

{% block content %}

    <h1>This is a simple example of a nunjucks template</h1>

    <p style="height: 100vh;">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum repudiandae esse dolores quos minus perspiciatis laboriosam magni ipsum, optio sed quae aliquid sequi consectetur eaque vel, est ducimus similique illum. Debitis ea dolorum temporibus doloremque ratione, nesciunt aspernatur. Velit saepe dicta ipsa minus iusto odit ex, obcaecati temporibus, sint deserunt.
    </p>

    <div class="component-wrapper">
        {{ modules.exampleModule.macro() }}
        {#{{ modules.exampleModule.macro() }}#}
        {#{{ modules.exampleModule.macro() }}#}
        {#{{ modules.exampleModule.macro() }}#}
        {#{{ modules.exampleModule.macro() }}#}
        {#{{ modules.exampleModule.macro(true) }}#}
        {#{{ modules.exampleModule.macro(true) }}#}
        {#{{ modules.exampleModule.macro(true) }}#}
        {#{{ modules.exampleModule.macro(true) }}#}
        {#{{ modules.exampleModule.macro(true) }}#}
        {#{{ modules.exampleModule.macro(true) }}#}

        {#<div data-ds-component="modules/example-module/example-module4">#}
            <div data-ds-component="modules/example-module/example-module4" data-ds-condition="onCall"></div>
            {#<div data-ds-component="modules/example-module/example-module4"></div>#}
            {#<div data-ds-component="modules/example-module/example-module4"></div>#}
            {#<div data-ds-component="modules/example-module/example-module4"></div>#}
            {#<div data-ds-component="modules/example-module/example-module4"></div>#}
            {#<div data-ds-component="modules/example-module/example-module4"></div>#}
            {#<div data-ds-component="modules/example-module/example-module4"></div>#}
            {#<div data-ds-component="modules/example-module/example-module4"></div>#}
            {#<div data-ds-component="modules/example-module/example-module4"></div>#}
            {#<div data-ds-component="modules/example-module/example-module4"></div>#}
        {#</div>#}
        {% block prefetch %}
            {#<link rel="preload" href="/js/11.bundle.js" as="script">#}
        {% endblock %}
    </div>
{% endblock %}
