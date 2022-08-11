<template>
  <div id="app">
		<weather-widget
			:api-key="apiKey"
		/>
  </div>
</template>

<script>
export default {
	data() {
		return {
			apiKey: '755868e5616d4f4676952dc64461af68'
		}
	}
}
</script>

<style lang="scss">
body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: center;
}
</style>
