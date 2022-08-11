<template>
	<article
		class="weather-widget"
	>
		<!-- Container -->
		<div
			v-if="!loading"
			class="weather-widget__container"
		>
			<!-- Settings Button -->
			<button @click="onToggleMenu" key="settings" class="weather-widget__button weather-widget__button--settings">
				<transition name="fade" mode="out-in">
					<svg v-if="!menuActive" key="gear" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
						<path fill-rule="evenodd" d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm-1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
						<path class="weather-widget__gear" fill-rule="evenodd" d="M12 1c-.268 0-.534.01-.797.028-.763.055-1.345.617-1.512 1.304l-.352 1.45c-.02.078-.09.172-.225.22a8.45 8.45 0 00-.728.303c-.13.06-.246.044-.315.002l-1.274-.776c-.604-.368-1.412-.354-1.99.147-.403.348-.78.726-1.129 1.128-.5.579-.515 1.387-.147 1.99l.776 1.275c.042.069.059.185-.002.315-.112.237-.213.48-.302.728-.05.135-.143.206-.221.225l-1.45.352c-.687.167-1.249.749-1.304 1.512a11.149 11.149 0 000 1.594c.055.763.617 1.345 1.304 1.512l1.45.352c.078.02.172.09.22.225.09.248.191.491.303.729.06.129.044.245.002.314l-.776 1.274c-.368.604-.354 1.412.147 1.99.348.403.726.78 1.128 1.129.579.5 1.387.515 1.99.147l1.275-.776c.069-.042.185-.059.315.002.237.112.48.213.728.302.135.05.206.143.225.221l.352 1.45c.167.687.749 1.249 1.512 1.303a11.125 11.125 0 001.594 0c.763-.054 1.345-.616 1.512-1.303l.352-1.45c.02-.078.09-.172.225-.22.248-.09.491-.191.729-.303.129-.06.245-.044.314-.002l1.274.776c.604.368 1.412.354 1.99-.147.403-.348.78-.726 1.129-1.128.5-.579.515-1.387.147-1.99l-.776-1.275c-.042-.069-.059-.185.002-.315.112-.237.213-.48.302-.728.05-.135.143-.206.221-.225l1.45-.352c.687-.167 1.249-.749 1.303-1.512a11.125 11.125 0 000-1.594c-.054-.763-.616-1.345-1.303-1.512l-1.45-.352c-.078-.02-.172-.09-.22-.225a8.469 8.469 0 00-.303-.728c-.06-.13-.044-.246-.002-.315l.776-1.274c.368-.604.354-1.412-.147-1.99-.348-.403-.726-.78-1.128-1.129-.579-.5-1.387-.515-1.99-.147l-1.275.776c-.069.042-.185.059-.315-.002a8.465 8.465 0 00-.728-.302c-.135-.05-.206-.143-.225-.221l-.352-1.45c-.167-.687-.749-1.249-1.512-1.304A11.149 11.149 0 0012 1zm-.69 1.525a9.648 9.648 0 011.38 0c.055.004.135.05.162.16l.351 1.45c.153.628.626 1.08 1.173 1.278.205.074.405.157.6.249a1.832 1.832 0 001.733-.074l1.275-.776c.097-.06.186-.036.228 0 .348.302.674.628.976.976.036.042.06.13 0 .228l-.776 1.274a1.832 1.832 0 00-.074 1.734c.092.195.175.395.248.6.198.547.652 1.02 1.278 1.172l1.45.353c.111.026.157.106.161.161a9.653 9.653 0 010 1.38c-.004.055-.05.135-.16.162l-1.45.351a1.833 1.833 0 00-1.278 1.173 6.926 6.926 0 01-.25.6 1.832 1.832 0 00.075 1.733l.776 1.275c.06.097.036.186 0 .228a9.555 9.555 0 01-.976.976c-.042.036-.13.06-.228 0l-1.275-.776a1.832 1.832 0 00-1.733-.074 6.926 6.926 0 01-.6.248 1.833 1.833 0 00-1.172 1.278l-.353 1.45c-.026.111-.106.157-.161.161a9.653 9.653 0 01-1.38 0c-.055-.004-.135-.05-.162-.16l-.351-1.45a1.833 1.833 0 00-1.173-1.278 6.928 6.928 0 01-.6-.25 1.832 1.832 0 00-1.734.075l-1.274.776c-.097.06-.186.036-.228 0a9.56 9.56 0 01-.976-.976c-.036-.042-.06-.13 0-.228l.776-1.275a1.832 1.832 0 00.074-1.733 6.948 6.948 0 01-.249-.6 1.833 1.833 0 00-1.277-1.172l-1.45-.353c-.111-.026-.157-.106-.161-.161a9.648 9.648 0 010-1.38c.004-.055.05-.135.16-.162l1.45-.351a1.833 1.833 0 001.278-1.173 6.95 6.95 0 01.249-.6 1.832 1.832 0 00-.074-1.734l-.776-1.274c-.06-.097-.036-.186 0-.228.302-.348.628-.674.976-.976.042-.036.13-.06.228 0l1.274.776a1.832 1.832 0 001.734.074 6.95 6.95 0 01.6-.249 1.833 1.833 0 001.172-1.277l.353-1.45c.026-.111.106-.157.161-.161z"/>
					</svg>
					<svg v-else key="close" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1024">
						<path d="M764.288 214.592L512 466.88 259.712 214.592a31.936 31.936 0 00-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1045.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0045.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 10-45.12-45.184z"/>
					</svg>
				</transition>
			</button>
			<!-- Fields list -->
			<div
				v-for="(field, index) in locationFields"
				class="weather-widget__field"
			>
				<div class="weather-widget__header">
					<h2 class="weather-widget__title">{{ field.city }}, {{ field.country }}</h2>
				</div>
				<div class="weather-widget__temperature">
					<div class="weather-widget__image">
						<img :src="`http://openweathermap.org/img/wn/${field.icon}@2x.png`" :alt="field.icon">
					</div>
					<span>{{ field.temp }}°C</span>
				</div>
				<p class="weather-widget__description">Feels like {{ field.feelsLike }}°C. {{ field.description }}. {{ getUsefulInformation(index) }}.</p>
				<ul class="weather-widget__data">
					<li>
						<p>
							{{field.windSpeed}}m/s
						</p>
					</li>
					<li>
						<p>
							{{ field.pressure }}hPa
						</p>
					</li>
				</ul>
				<div class="weather-widget__information">
					<p
						v-for="item in field.information"
						class="weather-widget__text"
					>
						{{ item.text }}
					</p>
				</div>
			</div>
			<!-- Widget menu -->
			<transition name="fade-up" mode="out-in">
				<div
					v-show="menuActive"
					class="weather-widget__menu"
				>
					<div class="weather-widget__header">
						<h2 class="weather-widget__title">Settings</h2>
					</div>
					<div
						class="weather-widget__list"
					>
						<div v-for="(field, index) in locationFields" :key="index" class="weather-widget__location">
							<button
								:disabled="!(locationFields.length > 1)"
								class="weather-widget__button weather-widget__button--drag"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" data-name="Layer 1">
									<path d="M8.5,10a2,2,0,1,0,2,2A2,2,0,0,0,8.5,10Zm0,7a2,2,0,1,0,2,2A2,2,0,0,0,8.5,17Zm7-10a2,2,0,1,0-2-2A2,2,0,0,0,15.5,7Zm-7-4a2,2,0,1,0,2,2A2,2,0,0,0,8.5,3Zm7,14a2,2,0,1,0,2,2A2,2,0,0,0,15.5,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,15.5,10Z"/>
								</svg>
							</button>
							<p>{{ field.city }}, {{ field.country }}</p>
							<button
								:disabled="!(locationFields.length > 1)"
								class="weather-widget__button weather-widget__button--delete"
								@click="deleteFromLocationFields(index)"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor">
									<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
									<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
								</svg>
							</button>
						</div>
					</div>
					<div class="weather-widget__include">
						<label class="weather-widget__label">Add location:</label>
						<div class="weather-widget__wrapper">
							<input
								placeholder="Enter your location"
								class="weather-widget__input"
								type="text"
							>
							<button class="weather-widget__button weather-widget__button--enter">
								<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1024" class="icon">
									<path d="M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</transition>
		</div>
		<!-- Loading template -->
		<div
			v-else
			class="weather-widget__loading"
		>
			<p
				v-if="errorMessage"
			>
				{{ errorMessage }}
			</p>
			<svg
				v-else
				width="65px"
				height="65px"
				viewBox="0 0 66 66"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					fill="none"
					stroke-width="6"
					stroke-linecap="round"
					cx="33"
					cy="33"
					r="30"
				></circle>
			</svg>
		</div>
	</article>
</template>

<script>
export default {
	name: "weather-widget",
	props: {
		apiKey: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			loading: true,
			menuActive: false,
			errorMessage: '',
			storageName: 'weather-widget',
			currentPosition: {
				latitude: 0,
				longitude: 0
			},
			locationFields: []
		}
	},
	methods: {
		onToggleMenu() {
			this.menuActive = !this.menuActive
		},
		deleteFromLocationFields(index) {
			console.log({index})
			if (this.locationFields.length >= 1) {
				this.locationFields.splice(index, 1)
			}
		},
		setLocalStorageData(itemName, itemData) {
			return localStorage.setItem(itemName, `{latitude:${itemData.latitude},longitude:${itemData.longitude}}`)
		},
		getLocalStorageData(itemName) {
			return localStorage.getItem(itemName)
		},
		getLocationsDataFromApi() {
			const urlPath = `https://api.openweathermap.org/data/2.5/weather?lat=${this.currentPosition.latitude}&lon=${this.currentPosition.longitude}&cnt=1&appid=${this.apiKey}&units=metric`
			fetch(urlPath)
			.then(response => response.json())
			.then(result => {
				console.log({result})
				this.locationFields.push({
					id: result.id,
					city: result.name, // 'Moscow'
					country: result.sys.country, // 'RU'
					icon: result.weather[0].icon, // '04n'
					temp: Math.round(result.main.temp), // '14'
					maxTemp: Math.round(result.main.temp_max), // '14'
					minTemp: Math.round(result.main.temp_min), // '14'
					feelsLike: Math.round(result.main.feels_like) , //'12'
					description: result.weather[0].main, //'Clouds'
					semiDescription: result.weather[0].description, // 'Scattered clouds'
					windSpeed: result.wind.speed,
					pressure: result.main.pressure,
					information: [
						{
							text: `Humidity: ${result.main.humidity}%`
						},
						{
							text: result.visibility > 1000 ? `Visibility: ${result.visibility / 1000}km` : `Visibility: ${result.visibility}m`
						},
						{
							text: `Zone: UTC+${+result.timezone / 3600}`
						},
						{
							text: `Gust: ${result.wind.gust}m/s`
						},
						{
							text: `Cloudiness: ${result.clouds.all}%`
						},
						{
							text: `Sea level: ${result.main.sea_level}m`
						},
					]
				})
			})
			.catch(error => console.log(error))
			.finally(() => this.loading = false)
		},
		getUsefulInformation(index) {
			try {
				const temp = this.locationFields[index].temp
				const maxTemp = this.locationFields[index].maxTemp
				const minTemp = this.locationFields[index].minTemp
				if (temp > maxTemp) {
					return `Now it is ${temp - maxTemp}°C more than the max temp today`
				} else if (temp > minTemp) {
					return `Now it is ${temp - minTemp}°C more than the min temp today`
				} else if (temp === maxTemp) {
					return 'This is the hottest record for today'
				} else if (temp === minTemp) {
					return 'This is the coldest reading today'
				}
			} catch (e) {
				console.log(e)
			}
		},
		initWidget() {
			navigator.geolocation.getCurrentPosition(async ({ coords }) => {
				const { latitude, longitude } = coords
				this.currentPosition.longitude = longitude
				this.currentPosition.latitude = latitude
				
				this.setLocalStorageData(this.storageName, this.currentPosition)
				this.getLocationsDataFromApi()
			}, ({ message }) => {
				this.errorMessage = message
				this.loading = true
			})
		}
	},
	mounted() {
		this.initWidget()
	}
}
</script>

<style lang="scss">
@use "sass:math";

$fontFamilyName: 'Source Sans Pro';
$fontFamilyNameWithoutSpaces: 'SourceSansPro';
$settingsButtonZIndex: 3;
$settingMenuZIndex: 2;

$loadingOffset: 187;
$loadingDuration: 1.4s;

$blackTextColor: #545454;
$grayTextColor: #dcdcdc;
$grayLightTextColor: #f9f9f9;
$redTextColor: #ec9e9e;

$widgetBorder: 10px;

$boxShadow: 0 2px 10px rgba(0, 0, 0, 0.1);

$menuListHeight: calc(100% - (53px + 20px + 25px)); // 53px - include, 20px - header, 25px - list margin-top + margin-bottom

@mixin newFont($family,$pathName,$weight,$style: normal) {
	@font-face {
		font-family: '#{$family}';
		src: url('/src/fonts/#{$pathName}.woff2') format('woff2'), url('/src/fonts/#{$pathName}.woff') format('woff');
		font-weight: #{$weight};
		font-style: $style;
	}
}

@include newFont($fontFamilyName, '#{$fontFamilyNameWithoutSpaces}-Regular', 400);
@include newFont($fontFamilyName, '#{$fontFamilyNameWithoutSpaces}-SemiBold', 600);
@include newFont($fontFamilyName, '#{$fontFamilyNameWithoutSpaces}-Bold', 700);

p, span, h2 {
	margin: 0;
	padding: 0;
}

.weather-widget {
	position: relative;
	font-family: $fontFamilyName, sans-serif;
	font-size: 14px;
	font-weight: 400;
	color: $blackTextColor;
	width: 250px;
	box-shadow: $boxShadow;
	border-radius: $widgetBorder;
	min-height: 270px;
	overflow: hidden;
	
	&__container {
		padding: 0 20px;
		margin: 20px 5px 20px 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		max-height: 650px;
		overflow-x: hidden;
		overflow-y: auto;
		
		&::-webkit-scrollbar {
			width: 4px;
		}
		
		&::-webkit-scrollbar-track {
			background-color: transparent;
			border-radius: 100px;
		}
		
		&::-webkit-scrollbar-thumb {
			background-color: transparent;
			border-radius: 4px;
		}
		
		&:hover {
			&::-webkit-scrollbar-track {
				background-color: rgba(255,255,255,0.1);
			}
			
			&::-webkit-scrollbar-thumb {
				background-color: $grayTextColor;
			}
		}
	}
	
	&__field {
		position: relative;
		&+& {
			margin-top: 20px;
			padding-top: 20px;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 50%;
				width: 80%;
				height: 1px;
				background-color: $grayTextColor;
				transform: translateX(-50%);
			}
		}
	}
	
	&__button {
		padding: 0;
		width: 20px;
		height: 20px;
		text-align: center;
		font-family: inherit;
		font-size: inherit;
		border: none;
		background-color: transparent;
		cursor: pointer;
		
		svg {
			width: 100%;
			height: 100%;
			fill: $grayTextColor;
			transition: fill .1s ease-in;
		}
		
		&:disabled,
		&[disabled] {
			cursor: default;
		}
		
		&:not(:disabled) {
			&.weather-widget__button{
				&:hover {
					& svg {
						fill: $blackTextColor;
					}
				}
				&--delete {
					&:hover {
						& svg {
							fill: $redTextColor;
						}
					}
				}
			}
		}
		
		&--settings {
			position: absolute;
			top: 20px;
			right: 20px;
			z-index: $settingsButtonZIndex;
		}
		
		&--delete {
			position: absolute;
			top: 50%;
			right: 5px;
			transform: translateY(-50%);
		}
		
		&--drag {
			display: inline-block;
			vertical-align: middle;
			margin-right: 5px;
			cursor: grab;
			
			svg {
				fill: $blackTextColor;
			}
		}
		
		&--enter {
			vertical-align: middle;
		}
	}
	
	&__title {
		margin: 0;
		padding: 0;
		font-size: 16px;
		font-weight: 600;
	}
	
	&__temperature {
		span {
			display: inline-block;
			vertical-align: middle;
			width: 50%;
			text-align: left;
			font-weight: 600;
			font-size: 40px;
		}
	}
	
	&__image {
		width: 50%;
		display: inline-block;
		vertical-align: middle;
		text-align: center;
		
		img {
			height: 100%;
			display: inline-block;
			vertical-align: middle;
		}
	}
	
	&__description {
		margin-bottom: 15px;
	}
	
	&__data {
		padding: 0;
		margin: 0 0 15px;
		
		li {
			position: relative;
			display: inline-block;
			vertical-align: middle;
			width: 50%;
			text-align: center;
			
			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				width: 5px;
				height: 5px;
				border-radius: 50%;
				transform: translateY(-50%);
				background-color: $blackTextColor;
			}
		}
	}
	
	&__information {
		column-count: 2;
		column-gap: 5px;
	}
	
	&__text {
		page-break-inside: avoid;
		break-inside: avoid;
		
		&+& {
			margin-top: 10px;
		}
	}
	
	&__loading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		
		p {
			text-align: center;
			font-size: 18px;
			font-weight: 600;
		}
		
		svg {
			transform: translate(-50%, -50%);
			transform-origin: center;
			animation: rotator $loadingDuration linear infinite;
		}
		
		circle {
			stroke-dasharray: $loadingOffset;
			stroke-dashoffset: 0;
			transform-origin: center;
			stroke: $blackTextColor;
			animation: dash $loadingDuration ease-in-out infinite;
		}
	}
	
	&__menu {
		position: absolute;
		padding: 20px;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: $widgetBorder;
		z-index: $settingMenuZIndex;
		background-color: #fff;
	}
	
	&__list {
		flex-grow: 1;
		margin-top: 15px;
		margin-bottom: 10px;
		height: $menuListHeight;
		overflow-x: hidden;
		overflow-y: auto;
		
		@media (hover: hover) {
			&::-webkit-scrollbar {
				width: 4px;
			}

			&::-webkit-scrollbar-track {
				background-color: rgba(255,255,255,0.1);
				border-radius: 4px;
			}
			
			&::-webkit-scrollbar-thumb {
				background-color: $grayTextColor;
				border-radius: 4px;
			}
		}
	}
	
	&__location {
		position: relative;
		padding: 5px;
		margin-right: 5px;
		background-color: $grayLightTextColor;
		
		p {
			display: inline-block;
			vertical-align: middle;
		}
		
		&+&{
			margin-top: 15px;
		}
	}
	
	&__label {
		font-weight: 600;
		display: block;
		margin-bottom: 5px;
	}
	
	&__wrapper {
		input {
			width: 80%;
		}
		button {
			width: 20%;
		}
	}
	
	&__input {
		padding: 5px 10px;
		border-radius: 2px;
		border: 1px solid $grayTextColor;
		outline: none;
		box-sizing: border-box;
		width: 80%;
		font-size: inherit;
		font-family: inherit;
		display: inline-block;
		vertical-align: middle;
	}
	
	.fade {
		&-enter {
			opacity: 0;
			
			&-active {
				transition: opacity 0.1s ease-in !important;
			}
			
			&-to {
				opacity: 1;
			}
		}
		
		&-leave {
			opacity: 1;
			
			&-active {
				transition: opacity 0.1s ease-out !important;
			}
			
			&-to {
				opacity: 0;
			}
		}
	}
	
	.fade-up {
		&-enter {
			transform: translate(0, -10px);
			opacity: 0;
			
			&-active {
				transition: all 0.3s ease;
			}
			
			&-to {
				transform: translate(0, 0);
				opacity: 1;
			}
		}
		
		&-leave {
			transform: translate(0, 0);
			opacity: 1;
			
			&-active {
				transition: all 0.1s ease;
			}
			
			&-to {
				transform: translate(0, -10px);
				opacity: 0;
			}
		}
	}
	
	@keyframes rotator {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(270deg);
		}
	}
	
	@keyframes dash {
		0% {
			stroke-dashoffset: $loadingOffset;
		}
		50% {
			stroke-dashoffset: math.div($loadingOffset, 4);
			transform: rotate(135deg);
		}
		100% {
			stroke-dashoffset: $loadingOffset;
			transform: rotate(450deg);
		}
	}
}
</style>
