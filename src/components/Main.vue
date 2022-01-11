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
				timer: '23:00:00'
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
					var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
					var seconds = Math.floor((distance % (1000 * 60)) / 1000);

					hours = ("00" + hours).slice(-2);
					minutes = ("00" + minutes).slice(-2);
					seconds = ("00" + seconds).slice(-2);

					document.getElementById("stopwatch").innerHTML = hours + ":" + minutes + ":" + seconds;			    
				}, 1000);
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