<template>
	<div hidden class="show-991 wrap-timer">
		<lottie-animation
		    path="lottie/timer.json"
		    :loop="false"
		    :autoPlay="false"
		    :speed="1"
		    class="ic-timer"
			@AnimControl="animated"
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
				const today = new Date()
				const tomorrow = new Date(today)
				tomorrow.setDate(tomorrow.getDate() + 1);

				var x = setInterval(function() {
					var now = new Date().getTime();				    
					var distance = tomorrow - now;
					    
					var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
					var seconds = Math.floor((distance % (1000 * 60)) / 1000);

					hours = ("00" + hours).slice(-2);
					minutes = ("00" + minutes).slice(-2);
					seconds = ("00" + seconds).slice(-2);

					document.getElementById("stopwatch-2").innerHTML = hours + ":" + minutes + ":" + seconds;			    
				}, 1000);
			},
			animated(anim) {
				let icons = document.querySelectorAll('.an-icon');
			    let flag = true;

			    document.addEventListener('scroll', scrolling);
			    document.addEventListener('DOMContentLoaded', scrolling);

			    function scrolling() {
			        icons.forEach(icon => {
			            if (isFullyVisible(icon)) {
			                anim.play();              
			            }
			        }); 
			    }

			    function isFullyVisible(el) {
			        var elementBoundary = el.getBoundingClientRect();			     
			        var top = elementBoundary.top;
			        var bottom = elementBoundary.bottom;
			     
			        return ((top >= 0) && (bottom <= window.innerHeight));
			    }				
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