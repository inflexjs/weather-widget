# Vue 2 + Vue CLI + Typescript

Это небольшой погодный виджет написанный на [VueJs](https://ru.vuejs.org/) с использованием [Vue CLI](https://cli.vuejs.org/ru/) для сборки однофайлового компонента с целью подключения его прямиков в браузер.

## Инструкция
Запуск режима разработки:
```shell
npm run dev
```
Сборка модуля:
```shell
npm run build
```
### Пример использования
```html
<head>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.8"></script>
    <script src="dist/weather-widget.js"></script>
</head>
<body>
    <weather-widget></weather-widget>
</body>
```
