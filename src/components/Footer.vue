<template>
	<div hidden class="show-991 wrap-timer">
		<img src="../assets/img/timer.png" alt="">
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

	export default {
		components: {
			Popup
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
		            document.getElementById('stopwatch-2').innerHTML = result;
		        }, spd);
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