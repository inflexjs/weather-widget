# Vue 2 + Vue CLI + Typescript

Это небольшой погодный виджет написанный на [VueJs](https://ru.vuejs.org/) с использованием [Vue CLI](https://cli.vuejs.org/ru/) для сборки однофайлового компонента с целью подключения его прямиков в браузер.

This is a small weather widget written in [VueJs](https://ru.vuejs.org/) using the [Vue CLI](https://cli.vuejs.org/ru/) to build a one-component and include its direct files in the browser.

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
    <script src="./dist/weather-widget.js"></script>
    <!-- Если хотите использовать любой другой шрифт из google fonts 
         If you want to use any other font from google fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <weather-widget
      api-key="your api key from www.openweathermap.org"
      font="google font name"
    ></weather-widget>
</body>
```
