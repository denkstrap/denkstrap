{% macro macro( condition = false ) %}

    <div class="example-module"
         data-ds-component="modules/example-module/example-module"
         data-ds-options='{ "test": true, "foo": "bar" }'
         {% if condition %}
             data-ds-condition="onCall"
         {% endif %}
         style="margin-bottom: 50vh">
        Example Module 1

        <div class="example-module" data-ds-component="modules/example-module/example-module">
            Example Module 1.1

            <div class="example-module" data-ds-component="modules/example-module/example-module">
                Example Module 1.1.1
            </div>

            <div class="example-module" data-ds-component="modules/example-module/example-module2">
                Example Module2
            </div>

            <div class="example-module" data-ds-component="modules/example-module/example-module3">
                Example Module3
            </div>

            {#<div class="example-module" data-ds-component="modules/example-module/example-module5">#}
                {#Example Module5#}
            {#</div>#}

        </div>

        <div class="example-module" data-ds-component="modules/example-module/example-module">
            Example Module 1.2
        </div>

    </div>

{% endmacro %}
