{% import 'patterns' as patterns %}

{% macro macro(version = "3.0") %}
    <div class="hello-denkstrap">
        <h2 class="hello-denkstrap__headline">Hello World! </h2>
        <div class="hello-denkstrap__image">
            <svg width="167" height="33" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="preserveAspectRatio"
                 viewBox="0 0 167 33">
                <g stroke-width="5" fill="none" fill-rule="evenodd">
                    <path d="M104.5 4.738L88.496 30.5h32.008L104.5 4.738z" stroke="#33B8BD"/>
                    <path stroke="#EFCB65" d="M2.5 2.5h28v28h-28z"/>
                    <path d="M135 16.5h29" stroke="#FF2C3B" stroke-linecap="square"/>
                    <circle stroke="#F3B8A4" cx="59.5" cy="16.5" r="14"/>
                </g>
            </svg>
        </div>

        <p class="hello-denkstrap__paragraph">
            This is <code class="bold">denkstrap {{ version }}</code>
        </p>

        {{ patterns.linkList.linklist([
            {label: 'GitHub', url: 'https://github.com/denkstrap'},
            {label: 'Issues', url: 'https://github.com/denkstrap/denkstrap/issues'},
            {label: 'Wiki', url: 'https://github.com/denkstrap/denkstrap/wiki'},
            {label: 'Troubleshooting', url: 'https://github.com/denkstrap/denkstrap/wiki/Troubleshooting'}
        ]) }}
    </div>

{% endmacro %}

{{ macro() }}
