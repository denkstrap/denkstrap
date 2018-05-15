<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>denkstrap-structure | {% block pageTitle %}{% endblock %}</title>

    <link rel="stylesheet" href="/css/main.css">
    <script type="text/javascript" src="/js/main.bundle.js" async></script>

    <link rel="preload" href="/js/main.bundle.js" as="script">
    {% block prefetch %}
    {% endblock %}
</head>
<body>

    {% block content %}
    {% endblock %}

</body>
</html>
