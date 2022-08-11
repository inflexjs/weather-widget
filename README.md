# Vue 2 + Vue CLI + Typescript

Это небольшой погодный виджет написанный на [VueJs](https://ru.vuejs.org/) с использованием [Vue CLI](https://cli.vuejs.org/ru/) для сборки однофайлового компонента с целью подключения его прямиков в браузер.

This is a small weather widget written in [VueJs](https://ru.vuejs.org/) using the [Vue CLI](https://cli.vuejs.org/ru/) to build a one-component component and include its direct files in the game.

## Инструкция & Instruction
Запуск режима разработки & Launching development mode:
```shell
npm run dev
```
Сборка модуля & Build module:
```shell
npm run build
```
### Пример использования & Usage example
```html
<head>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.8"></script>
    <script src="dist/weather-widget.js"></script>
</head>
<body>
    <weather-widget></weather-widget>
</body>
```
