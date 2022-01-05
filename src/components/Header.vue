<template>
	<header>
		<a href="/" class="logo">
			<img src="../assets/img/logo.png" alt="">
		</a>
	</header>

	<div class="head-line">
		<p>Sample pack discount activated + online consultation & rushed shipping for free!</p>
	</div>
</template>

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
	    color: var(--blue);
	    padding: 5px 0;
	}
	.head-line p:before {
	    content: '';
	    display: inline-block;
	    vertical-align: middle;
	    width: 28px;
	    height: 32px;
	    background: url(../assets/img/ic-percent.png) no-repeat;
	    margin-right: 11px;
	}
</style>