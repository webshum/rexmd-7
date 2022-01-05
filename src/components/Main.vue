<template>
	<main class="center">
		<div class="main-timer">
			<h2><span>Congrats!</span> You’ve scored the lowest price</h2>
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

	export default {
		components: {
			MainQuick, MainReal, MainPrice
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
	.main-timer h2:after {
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 18px;
		height: 26px;
		background: url(../assets/img/lock.png) no-repeat;
		margin-left: 10px;
		position: relative;
		top: -3px;
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