<template>
	<main class="center">
		<div class="main-timer">
			<h2 class="js-scroll fade-bottom">
				<span>
					<lottie-animation
					    path="lottie/bg-timer.json"
					    :loop="true"
					    :autoPlay="true"
					    :speed="1"
					    class="bg-timer"
					/>

					Congrats!
				</span> 

				You’ve scored the lowest price
				<lottie-animation
				    path="lottie/lock.json"
				    :loop="true"
				    :autoPlay="true"
				    :speed="1"
				/>
			</h2>
			<div class="timer js-scroll fade-bottom">Bryant, your treatment is reserved for <span id="stopwatch"></span></div>
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
				const today = new Date()
				const tomorrow = new Date(today)
				tomorrow.setDate(tomorrow.getDate() + 1);

				var x = setInterval(function() {
					var now = new Date().getTime();				    
					var distance = tomorrow - now;
					    
					var hours = Math.floor((distance % (1000 * 60 * 60 * 8)) / (1000 * 60 * 60));
					// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) - 51;
					var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) - 58;
					var seconds = Math.floor((distance % (1000 * 60)) / 1000);
					var miliseconds = Math.floor(distance % 60, 10);

					minutes = minutes < 10 ? "0" + minutes : minutes;
	                seconds = seconds < 10 ? "0" + seconds : seconds;
	                miliseconds = miliseconds < 10 ? "0" + miliseconds : miliseconds;

	                if (minutes == 0) minutes = '00';
	                if (seconds == 0) seconds = '00';
	                if (miliseconds == 0) miliseconds = '00';

	                if (minutes == 0 && seconds == 0) {
	                	clearInterval(x);
	                	miliseconds = '00';
	                }

					document.getElementById("stopwatch").innerHTML = minutes + ":" + seconds + ":" + miliseconds;			    
				}, 10);
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
	.main-timer h2 span {
		color: var(--red);
		position: relative;
	}
	.main-timer h2 div {
		display: inline-block;
		vertical-align: middle;
		max-width: 28px;
		margin: 0 0 0 0 !important;
	}
	.main-timer .bg-timer {
		display: inline-block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-width: 150px;
		min-height: 150px;
	}
	.main-timer .timer {font-size: 20px;}
	#stopwatch {
		display: inline-block;
		min-width: 100px;
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