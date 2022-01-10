<template>
	<div hidden class="show-991 wrap-timer">
		<lottie-animation
		    path="lottie/timer.json"
		    :loop="true"
		    :autoPlay="true"
		    :speed="1"
		    class="ic-timer"
		/>
		
		<div class="timer">
			Bryant, your treatment is only<br>
            reserved for another <strong id="stopwatch-2">{{ timer }}</strong>
		</div>
		<div class="group">
			<button class="btn shadow-pulse">CONTINUE TO FINAL STEP</button>
			<button class="btn back js-scroll fade-bottom">PREVIOUS STEP</button>
		</div>
		<p>RexMD featured in</p>
		<img src="../assets/img/logos.png" alt="">
	</div>

	<div class="main-bottom">
		<div class="images an an-opacity an-no">
			<img src="../assets/img/hippa.jpeg" alt="" class="js-scroll fade-bottom">
	        <img src="../assets/img/rexmd.jpg" alt="" class="js-scroll fade-bottom">
	        <img src="../assets/img/Privacy.jpeg" alt="" class="js-scroll fade-bottom">
		</div>

		<p class="js-scroll fade-bottom">Cialis is a registered trademark of Eli Lilly and Company. Viagra is<br> a registered trademark of Pfizer, Inc.</p>
	</div>

	<Popup/>
</template>

<script>
	import Popup from "@/components/Popup";
	import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

	export default {
		components: {
			Popup, LottieAnimation
		},
		data() {
			return {
				timer: '00:00:00'
			}
		},
		methods: {
			addTimer() {
				let result = '00:00:00';

				setInterval(function() {
					let deadline = new Date(2022, 12, 0, 0);
					let date = new Date();

					if (deadline != date) {
						let hours = date.getHours();
						let minutes = date.getMinutes();
						let seconds = date.getSeconds();

						hours = (hours < 10) ? '0' + hours : hours;
						minutes = (minutes < 10) ? '0' + minutes : minutes;
						seconds = (seconds < 10) ? '0' + seconds : seconds;

						result = hours + ':' + minutes + ':' + seconds;
					}

					document.querySelector('#stopwatch-2').innerHTML = result;
				}, 1000);
			}
		},
		mounted() {
			this.addTimer();
		}
	}
</script>

<style scoped>
	.main-bottom {
	    padding: 155px 0 30px 0;
	    text-align: center;
	}
	.main-bottom .images {
	    margin: 45px 0 45px 0;
	}
	.main-bottom .images img {
	    margin: 0 10px;
	}
	.main-bottom .images img:nth-child(2) {
		max-width: 170px;
	}
	.main-bottom p {
	    font: 13px var(--camptonBook);
	    color: #454545;
	}
</style>