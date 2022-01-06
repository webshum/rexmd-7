<template>
	<main class="center">
		<div class="main-timer">
			<h2 class="js-scroll fade-bottom">
				<span>Congrats!</span> You’ve scored the lowest price
				<lottie-animation
				    path="lottie/lock.json"
				    :loop="false"
				    :autoPlay="true"
				    :speed="1"
				/>
			</h2>
			<div class="timer js-scroll fade-bottom">Bryant, your treatment is reserved for <span id="stopwatch">{{ timer }}</span></div>
		</div>

		<div class="flex">
			<MainQuick/>
			<MainReal/>
			<MainPrice/>
		</div>		
	</main>
</template>

<script>
	import MainQuick from "@/components/MainQuick";
	import MainReal from "@/components/MainReal";
	import MainPrice from "@/components/MainPrice";
	import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

	export default {
		components: {
			MainQuick, MainReal, MainPrice, LottieAnimation
		},
		data() {
			return {
				timer: '00:00:00'
			}
		},
		methods: {
			addTimer() {
				var spd = 100;
		        var spdVal = 10;
		        var cntDown = 0 * 60 * spdVal;
		        setInterval(function () {
		            var mn, sc, ms;
		            cntDown++;
		            if(cntDown < 0) {
		                return false;
		            }
		            mn = Math.floor((cntDown / spdVal) / 60 );
		            mn = (mn < 10 ? '0' + mn : mn);
		            sc = Math.floor((cntDown / spdVal) % 60);
		            sc = (sc < 10 ? '0' + sc : sc);
		            ms = Math.floor(cntDown % spdVal);
		            ms = (ms < 10 ? '0' + ms : ms);
		            var result = mn + ':' + sc + ':' + ms;
		            document.getElementById('stopwatch').innerHTML = result;
		        }, spd);
			}
		},
		mounted() {
			this.addTimer();
		}
	}
</script>

<style scoped>
	.main-timer {
		text-align: center;
		margin-top: 30px;
	}
	.main-timer h2 {
		font-size: 27px;
	}
	.main-timer h2 span {color: var(--red)}
	.main-timer h2 div {
		display: inline-block;
		vertical-align: middle;
		max-width: 35px;
		margin: 0 0 0 0 !important;
	}
	.main-timer .timer {font-size: 20px;}
	#stopwatch {
		display: inline-block;
		min-width: 90px;
		text-align: left;
	}

	.flex {
		display: flex;
		position: relative;
		align-items: flex-start;
    	justify-content: space-between;
    	margin-top: 130px;
	}
</style>