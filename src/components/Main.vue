<template>
	<main class="center">
		<div class="main-timer">
			<h2>
				<span>Congrats!</span> You’ve scored the lowest price
				<lottie-animation
				    path="lottie/lock.json"
				    :loop="true"
				    :autoPlay="true"
				    :speed="1"
				/>
			</h2>
			<div class="timer">Bryant, your treatment is reserved for 07:59:05</div>
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
		max-width: 25px;
		margin: 0 0 0 0 !important;
	}
	.main-timer .timer {font-size: 20px;}

	.flex {
		display: flex;
		position: relative;
		align-items: flex-start;
    	justify-content: space-between;
    	margin-top: 130px;
	}
</style>