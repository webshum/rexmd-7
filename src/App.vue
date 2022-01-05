<template>
	<Header/>
	<Main/>
	<Footer/>
</template>

<script>
	import Header from "@/components/Header";
	import Main from "@/components/Main";
	import Footer from "@/components/Footer";

	export default {
		components: {
			Header, Main, Footer
		}
	} 
</script>

<style>
	@font-face {
	    font-family: 'Campton';
	    src: url('./assets/fonts/Campton-Light.eot');
	    src: url('./assets/fonts/Campton-Light.eot?#iefix') format('embedded-opentype'),
	        url('./assets/fonts/Campton-Light.woff2') format('woff2'),
	        url('./assets/fonts/Campton-Light.woff') format('woff'),
	        url('./assets/fonts/Campton-Light.ttf') format('truetype'),
	        url('./assets/fonts/Campton-Light.svg#Campton-Light') format('svg');
	    font-weight: 300;
	    font-style: normal;
	    font-display: swap;
	}

	@font-face {
	    font-family: 'Campton';
	    src: url('./assets/fonts/Campton-Bold.eot');
	    src: url('./assets/fonts/Campton-Bold.eot?#iefix') format('embedded-opentype'),
	        url('./assets/fonts/Campton-Bold.woff2') format('woff2'),
	        url('./assets/fonts/Campton-Bold.woff') format('woff'),
	        url('./assets/fonts/Campton-Bold.ttf') format('truetype'),
	        url('./assets/fonts/Campton-Bold.svg#Campton-Bold') format('svg');
	    font-weight: bold;
	    font-style: normal;
	    font-display: swap;
	}

	@font-face {
	    font-family: 'Campton';
	    src: url('./assets/fonts/Campton-Medium.eot');
	    src: url('./assets/fonts/Campton-Medium.eot?#iefix') format('embedded-opentype'),
	        url('./assets/fonts/Campton-Medium.woff2') format('woff2'),
	        url('./assets/fonts/Campton-Medium.woff') format('woff'),
	        url('./assets/fonts/Campton-Medium.ttf') format('truetype'),
	        url('./assets/fonts/Campton-Medium.svg#Campton-Medium') format('svg');
	    font-weight: 500;
	    font-style: normal;
	    font-display: swap;
	}

	@font-face {
	    font-family: 'Campton-Book';
	    src: url('./assets/fonts/Campton-Book.eot');
	    src: url('./assets/fonts/Campton-Book.eot?#iefix') format('embedded-opentype'),
	        url('./assets/fonts/Campton-Book.woff2') format('woff2'),
	        url('./assets/fonts/Campton-Book.woff') format('woff'),
	        url('./assets/fonts/Campton-Book.ttf') format('truetype'),
	        url('./assets/fonts/Campton-Book.svg#Campton-Book') format('svg');
	    font-weight: normal;
	    font-style: normal;
	    font-display: swap;
	}

	@font-face {
	    font-family: 'Campton';
	    src: url('./assets/fonts/Campton-SemiBold.eot');
	    src: url('./assets/fonts/Campton-SemiBold.eot?#iefix') format('embedded-opentype'),
	        url('./assets/fonts/Campton-SemiBold.woff2') format('woff2'),
	        url('./assets/fonts/Campton-SemiBold.woff') format('woff'),
	        url('./assets/fonts/Campton-SemiBold.ttf') format('truetype'),
	        url('./assets/fonts/Campton-SemiBold.svg#Campton-SemiBold') format('svg');
	    font-weight: 600;
	    font-style: normal;
	    font-display: swap;
	}

	@font-face {
	    font-family: 'Gotham';
	    src: url('./assets/fonts/GothamHTF-Medium.eot');
	    src: url('./assets/fonts/GothamHTF-Medium.eot?#iefix') format('embedded-opentype'),
	        url('./assets/fonts/GothamHTF-Medium.woff2') format('woff2'),
	        url('./assets/fonts/GothamHTF-Medium.woff') format('woff'),
	        url('./assets/fonts/GothamHTF-Medium.ttf') format('truetype'),
	        url('./assets/fonts/GothamHTF-Medium.svg#GothamHTF-Medium') format('svg');
	    font-weight: 500;
	    font-style: normal;
	    font-display: swap;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		--blue: #131c2f;
		--red: #b31f23;
		--camptonBook: 'Campton-Book', sans-serif;
		--akcent: #73d502;
	}

	body {
	    font: 300 16px/1.4 'Campton', sans-serif;
	    color: var(--blue);
	}

	img	{
		max-width: 100%;
		height: auto;
	}

	ul {list-style: none;}

	.center {
		width: 100%;
	    max-width: 1500px;
	    min-width: 250px;
	    margin: 0 auto;
	    padding: 0 15px;
	}

	.box {
	    width: 33.33%;
	    border-radius: 15px;
	    background: #fff;
	    box-shadow: 0 0 76px rgb(0 0 0 / 6%);
	}

	.box h2 {
	    font-size: 34px;
	    line-height: 1.1;
	    color: #14192f;
	    margin-bottom: 5px;
	}
	.box h2 span {color: var(--red);}

	.c-red {color: var(--red) !important;}
	.f-500 {font-weight: 500 !important;}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		border-radius: 5px;
		background: var(--akcent);
		padding: 0 15px;
		font-size: 17px;
		font-weight: 500;
		color: #fff;
		border: none;
		outline: none;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.3s;
	}
	.btn:after {
		content: '';
		display: inline-block;
		width: 9px;
		height: 14px;
		margin-left: 10px;
		background: url(./assets/img/arrow.png) no-repeat;
		position: relative;
		top: -1.5px;
	}
	.btn.back {
		background: #f5f5f5;
		color: #5c5c5c;
	}
	.btn.back:after {
		order: -1;
		background: url(./assets/img/arrow-h.png) no-repeat;
		margin-left: 0;
		margin-right: 10px;
	}
	.btn:hover {
		background: var(--red);
	}
	.btn.back:hover {
		background: #e3e3e3;
	}

	.shadow-pulse {
		animation: shadow-pulse 3s infinite;
	}

	@keyframes shadow-pulse {
	    0% {box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.8);}
	    50% {box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);}
	    100% {box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);}
	}

	.slide-dots {
		display: flex;
	    justify-content: center;
	    align-items: center;
	    margin-top: 20px;
	}
	.slide-dots span {
	    width: 12px;
	    height: 12px;
	    border-radius: 50%;
	    background: #14192f;
	    margin: 0 4px;
	}
	.slide-dots span.active {
		background: #c2c3c9;
    	cursor: pointer;
	}

	.pulse-transform {
		animation: pulse-transform 1.5s infinite;
	}
	@keyframes pulse-transform { 
	    0% {transform: scale(0.9); opacity: 0.9;}
	    50% {transform: scale(1); opacity: 1;}
	    100% {transform: scale(0.9); opacity: 0.9;} 
	}
</style>