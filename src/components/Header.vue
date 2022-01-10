<template>
	<header>
		<a href="/" class="logo">
			<img src="../assets/img/logo.png" alt="">
		</a>
	</header>

	<div class="head-line">
		<lottie-animation
		    path="lottie/birca.json"
		    :loop="false"
		    :autoPlay="true"
		    :speed="1"
		/>
		<p>Sample pack discount activated + online<br hidden class="show-991"> consultation & rushed shipping for free!</p>
	</div>
</template>

<script>
	import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

	export default {
		components: {
			LottieAnimation
		}
	}
</script>

<style scoped>
	header {
		background: var(--blue);
		display: flex;
		justify-content: center;
		padding: 15px 0;
	}

	.logo {
		width: 180px;
		line-height: 0;
	}

	.head-line {
	    background: #cef1ec;
	    text-align: center;
	    font-weight: 500;
	    color: var(--blue);
	    padding: 10px 0;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    position: fixed;
	    top: 0;
	    right: 0;
	    left: 0;
	    z-index: 999;
	}

	.head-line div {
	    max-width: 15px;
	    margin: 0 10px 0 !important;
	    line-height: 0;
	    position: relative;
    	top: -1px;
	}
</style>