<template>
	<div class="main-bottom">
		<div class="images an an-opacity an-no">
			<img src="../assets/img/hippa.jpeg" alt="">
	        <img src="../assets/img/rexmd.jpg" alt="">
	        <img src="../assets/img/Privacy.jpeg" alt="">
		</div>

		<p>Cialis is a registered trademark of Eli Lilly and Company. Viagra is<br> a registered trademark of Pfizer, Inc.</p>
	</div>

	<Popup/>
</template>

<script>
	import Popup from "@/components/Popup";

	export default {
		components: {
			Popup
		}
	}
</script>

<style scoped>
	.main-bottom {
	    padding: 120px 0 30px 0;
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