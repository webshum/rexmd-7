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

	/* ANIMATION SCROLL
	------------------------------------ */
	function animationScroll() {
	    let el = document.querySelectorAll('.js-scroll');

	    document.addEventListener('scroll', scrolling);
	    window.addEventListener("load", scrolling);

	    function scrolling() {
	        el.forEach(el => {
	            let boundary = el.getBoundingClientRect();

	            if (window.innerHeight >= (boundary.bottom)) {
	                el.classList.add('scrolled');
	            } else if (window.innerHeight <= boundary.top) {
	                el.classList.remove('scrolled');
	            }
	        });
	    }    

	    scrolling();
	}

	window.addEventListener('load', animationScroll);
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
	    box-shadow: 0 0 76px rgb(0 0 0 / 10%);
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

	.tx-center {text-align: center;}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		border-radius: 5px;
		font-family: 'Gotham', sans-serif;
		font-weight: 500;
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
		top: 1px;
		transition: all 0.3s;
	}
	.btn:hover:not(.back):after {
		transform: translateX(10px);
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
	.btn.back:hover:after {
		transform: translateX(-10px);
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

	/* ANIMATION
	-------------------------------------- */
	.js-scroll,
	.js-product {
	    opacity: 0;
	    transition: opacity 500ms;
	}
	.js-scroll.scrolled,
	.js-product.scrolled {
	    opacity: 1;
	}
	.scrolled.fade {
	    animation: fade 0.3s ease-in-out both;
	}
	.scrolled.fade-bottom {
	    animation: fade-bottom 0.3s ease-in-out both;
	}
	.scrolled.fade-top {
	    animation: fade-top 0.3s ease-in-out both;
	}
	.scrolled.fade-left {
	    animation: fade-left 0.3s ease-in-out both;
	}
	.scrolled.fade-right {
	    animation: fade-right 0.3s ease-in-out both;
	}
	.scrolled.fade-scale {
	    animation: fade-scale 0.3s ease-in-out both;
	}

	@keyframes fade {
	    0% {opacity: 0;}
	    100% {opacity: 1;}
	}

	@keyframes fade-bottom {
	    0% {
	        transform: translateY(50px);
	        opacity: 0;
	    }

	    100% {
	        transform: translateY(0);
	        opacity: 1;
	    }
	}

	@keyframes fade-top {
	    0% {
	        transform: translateY(-50px);
	        opacity: 0;
	    }

	    100% {
	        transform: translateY(0);
	        opacity: 1;
	    }
	}

	@keyframes fade-left {
	    0% {
	        transform: translateX(-50px);
	        opacity: 0;
	    }

	    100% {
	        transform: translateX(0);
	        opacity: 1;
	    }
	}

	@keyframes fade-right {
	    0% {
	        transform: translateX(50px);
	        opacity: 0;
	    }

	    100% {
	        transform: translateX(0);
	        opacity: 1;
	    }
	}

	@keyframes fade-scale {
	    0% {
	        transform: scale(0.5);
	        opacity: 0;
	    }

	    100% {
	        transform: scale(1);
	        opacity: 1;
	    }
	}

	.d-none {display: none !important;}

	.wrap-timer {
		padding: 0 25px;
		text-align: center;
	}
	.wrap-timer .ic-timer {
		max-width: 110px;
		margin: 0 auto;
	}
	.wrap-timer .timer {
		font-size: 34px;
		line-height: 1.5;
		margin-top: 15px;
	}
	.wrap-timer .timer strong {
		font-weight: 500;
		display: inline-block;
		min-width: 155px;
		text-align: left;
	}
	.wrap-timer .group {margin-top: 30px;}
	.wrap-timer .group .btn {width: 100%;}
	.wrap-timer .group .btn + .btn {margin-top: 15px;}
	.wrap-timer p {
		color: #9e9e9e;
		font-size: 16px;
		margin-top: 30px;
	}
	.wrap-timer img:last-child {
		display: block;
		width: 100%;
	}

	@media (max-width: 1550px) {
		.main-real {max-width: 580px;}
		.price-video {max-width: 445px;}
	}

	@media (max-width: 1350px) {
		.main-quick {
			padding: 25px 25px 15px 25px !important;
		}
		.main-quick .inner {
			max-width: 300px;
		}
		.foot h3 + p br,
		.foot div p br {display: none;}

		.total .title,
		.total .price {font-size: 18px;}

		.main-price .inner {max-width: 350px;}
		.main-price .foot br {display: none;}

		#app .popup .wrap {
			font-size: 14px;
			line-height: 1.5;
		}
		#app .popup .wrap h5 {
			margin-top: 15px;
			padding: 10px 0;
		}
		#app .popup .wrap h4 {
			font-size: 25px;
			margin: 15px 0;
		}
		#app .popup .wrap ul {
			margin-top: 15px;
		}
	}

	@media (max-width: 1300px) {
		body {
		    font-size: 14px;
		    line-height: 24px;
		}
		.box h2 {
		    font-size: 24px;
		    line-height: 28px;
		}

		/* MAIN QUICK */
		.main-quick {padding: 25px 20px 25px 20px !important;}
		.main-quick .inner {
		    max-width: 250px;
		}
		.main-quick h2 + p {font-size: 14px !important;}
		.main-quick .foot h4 {
			font-size: 11px;
			letter-spacing: 1px;
		}
		.main-quick .foot h3 + p {font-size: 14px;}
		.main-quick .foot > img {width: 100%;}

		/* MAIN REAL */
		.main-real {
		    padding: 25px 30px;
		}
		.real-head p {
			font-size: 11px;
			letter-spacing: 1px;
		}
		.real-head h3 {font-size: 25px;}
		.real-head img {max-width: 80px;}
		.real-head > div > div {
			font-size: 15px;
    		line-height: 27px;
		}
		.form-real .field input {
			padding: 0 65px 0 15px;
			font-size: 12px;
		}
		.form-real p {
			font-size: 11px;
			letter-spacing: 1px;
		}
		.form-real ul li {
			font-size: 15px;
		}
		.throw:after {
			width: 90px;
    		height: 15px;
    		background-size: 100%;
		}
		.total .title, .total .price {
		    font-size: 15px;
		}
		.product h3 {
			font-size: 25px;
		}
		.product p {font-size: 13px;}
		.product p:last-child {font-size: 13px;}

		/* MAIN PRICE */
		.main-price .inner {
		    max-width: 290px;
		}
		.main-price .inner h2 + p br {display: none;}
		.main-price h3 {
			font-size: 24px;
			line-height: 28px;
		}
		.main-price .foot {font-size: 13px;}

		/* FAQ */
		.faq {margin-top: 130px;}

		/* FOOTER */
		.main-bottom {padding-top: 50px !important;}
	}

	@media (max-width: 1200px) {
		.main-real {max-width: 500px;}

		/* FAQ */
		.faq .after {
		    width: 300px;
		    height: 430px;
		    background-size: 300px;
		    top: 230px;
		}
		.accordion__head {font-size: 16px;}
		.accordion__body {max-width: 700px;}
	}

	@media (max-width: 1150px) {
		.main-real {max-width: 450px;}
		.arr {
			width: 70px;
		    height: 100px;
		    background-size: 70px;
		    margin-bottom: -45px;
		}

		.wrap-timer .timer {font-size: 25px;}
		.wrap-timer .timer strong {min-width: 110px;}
	}

	@media (max-width: 1050px) {
		.main-real {max-width: 400px;}
	}

	@media (max-width: 991px) {
		.show-991 {display: block !important;}
		.hide-991 {display: none !important;}

		body {
		    font-size: 26px;
		    line-height: 37px;
		}

		#app .flex {
			flex-direction: column;
			margin-top: 60px;
		}
		.center {padding: 0 25px !important;}
		.box {
		    width: 100%;
		    box-shadow: none;
		    padding: 0 !important;
		}
		.box .inner {
			max-width: 100%;
		}

		.btn {
			height: 75px;
			font-size: 20px;
		}
		.btn:after,
		.btn.back:after {
			top: 3px;
		    background-size: 6px;
		    width: 6px;
		}

		.box h2 {
		    font-size: 53px;
		    line-height: 60px;
		}

		/* HEADER */
		#app .head-line {
			text-align: left !important;
			justify-content: center !important;
			padding-left: 20px;
			padding-right: 20px;
			line-height: 1.4;
		}
		#app .head-line div {
			max-width: 25px !important;
			margin: 0 20px 0 0 !important;
		}

		/* MAIN REAL */
		.main-real {
		    max-width: inherit;
		    padding: 25px 30px;
		    position: static;
		    order: -1;
		    transform: none;
		}
		.form-box {
			padding: 30px;
			border-radius: 15px;
		    background: #fff;
		    box-shadow: 0 0 76px rgb(0 0 0 / 10%);
		}
		.form-real .wrap > p {
		    font-size: 15px;
		    letter-spacing: 3px;
		    margin-top: 0;
		}
		.real-head h3 {
		    font-size: 35px;
		    line-height: 1.3;
		}
		.real-head > div > div {
		    font-size: 25px;
		    line-height: 43px;
		}
		.real-head > div > div:after {height: 80px;}
		.real-head img {
		    max-width: 135px;
		}
		.form-real .field input {
		    padding: 0 70px 0 20px;
		    font-size: 21px;
		}
		.form-real .wrap {
			padding: 30px;
		}
		.form-real ul.list {margin-top: 30px;}
		.form-real ul.list li {
		    font-size: 24px;
		}
		.form-real ul.list li + li {margin-top: 15px;}

		.total {
			margin-top: 30px;
			padding-top: 30px;
		}
		.total .title, .total .price {
		    font-size: 27px;
		}
		.form-real .group {
		    margin-top: 50px;
		}
		.form-real .wrap ul.show-991 {
			display: flex !important;
			margin-bottom: 0;
		}
		.arr {
		    width: 70px;
		    height: 97px;
		    background-size: 70px;
		    margin-right: -20px;
		    margin-bottom: -40px;
		}
		.foot-real .trust, .form-real .wrap .trust {
			margin: 40px auto 15px auto !important;
		}

		.product {
			padding: 30px;
			border-radius: 15px;
		    background: #fff;
		    box-shadow: 0 0 76px rgb(0 0 0 / 10%);
		}
		.product h3 {
		    font-size: 41px;
		    line-height: 1.3;
		}
		.product p {
		    font-size: 20px;
		    margin-top: 10px;
		}
		.product p:last-child {
		    font-size: 17px;
		}
		.product h2 {
			margin-top: 70px;
			font-size: 55px;
			line-height: 1.1;
			text-align: left;
		}
		.product h2 + p {
			font-size: 31px;
			line-height: 1.2;
			text-align: left;
		}
		.product .icons {
			display: block;
		    margin-top: 30px;
		    margin-left: auto;
		    margin-right: auto;
		    max-width: 380px;
		}
		.product .icons li + li {
			margin-left: 0;
			margin-top: 15px;
		}
		.product .icons li .icon {
			max-width: 100px;
			width: 100%;
			margin-right: 20px;
		}
		.product .icons li .icon img {
			margin: 0;
			width: 100%;
		}
		.product .icons li p {
			margin-top: 0;
			font-size: 26px;
			font-family: 'Campton', sans-serif;
			font-weight: 300;
			line-height: 1.4;
			color: var(--blue);
			text-transform: capitalize;
		}
		.product .icons li p span {color: var(--red);}

		/* MAIN QUICK */
		.main-quick {
			text-align: center;
		}
		.main-quick .foot {margin-top: 75px;} 
		.main-quick .foot h4 {
		    font-size: 15px;
		    letter-spacing: 3px;
		    margin-bottom: 15px;
		}
		.main-quick .foot h3 {
		    font-size: 66px;
		    line-height: 1.1;
		    margin-bottom: 7px;
		}
		.main-quick .foot h3 span {display: block;}
		.main-quick .foot h3 + p {
		    font-size: 26px;
		    line-height: 1.3;
		}
		.main-quick .foot > img {
		    margin: 30px auto;
		    display: block;
		    max-width: 370px;
		}
		.main-quick .foot div {
			max-width: 100%;
		}
		.main-quick .foot div p {
			font-size: 20px !important;
			margin-bottom: 50px !important;
		}
		.main-quick .foot div p br {display: block;}
		.main-quick .foot .group {
			padding: 0 30px 0 30px;
		}
		.main-quick .foot .btn {
			width: 100%;
		}
		.main-quick .foot .btn + .btn {
			margin-top: 15px;
		}

		/* MAIN PRICE */
		.main-price {
			margin-top: 65px;
			padding: 30px;
			border-radius: 15px;
			background: #fff;
			box-shadow: 0 0 76px rgb(0 0 0 / 10%);
		}
		.main-price .banner-dots {display: none;}
		.price-video {
			min-height: 350px;
			max-width: inherit;
			margin-bottom: 0;
			border-radius: 15px 15px 0 0;
			overflow: hidden;			
		}
		.price-video.play {z-index: 9999;}
		.price-video .iframe.play {display: block;}
		.main-price .inner {
			padding: 30px;
		}
		.main-price h2 {margin-bottom: 15px;}
		.slider-reviews p,
		.slider-reviews .head span {
		    font-size: 23px;
		}
		.main-price h3 {
		    font-size: 53px;
		    line-height: 59px;
		    margin-top: 70px;
		    margin-bottom: 35px;
		}
		.main-price h3 + img {
			display: block;
			margin: 0 auto;
		}
		.main-price .foot {
		    font-size: 20px;
		    line-height: 1.6;
		    padding-bottom: 25px;
		}
		.main-price .foot br {display: block;}

		/* FAQ */
		.faq {margin-top: 50px;}
		.faq h2.title {
			font-size: 53px;
			line-height: 60px;
		}
		.faq .after {display: none;}

		/* FOOTER */
		#app .popup iframe {
			width: 600px;
			height: 340px;
		}

		/* POPUP */
		#app .popup-info, .popup-home {
		    max-width: 100%;
		}
		#app .modal-title {
		    font-size: 30px;
		    line-height: 35px;
		}
	}

	@media (max-width: 650px) {
		body {
			font-size: 14px;
			line-height: 1.5;
		}

		.center {
		    padding: 0 15px !important;
		}

		.btn {
		    height: 50px;
		    font-size: 13px;
		}

		/* HEADER */
		.header .logo {max-width: 150px;}
		#app .head-line {
			padding-left: 15px;
		    padding-right: 15px;
		    line-height: 1.4;
		    font-size: 15px;
		}
		#app .head-line div {
		    max-width: 15px !important;
		    margin: 0 15px 0 0 !important;
		}

		#app .main-timer {margin-top: 20px;}
		#app .main-timer h2 {
			font-size: 17px;
		}
		#app .main-timer h2 div {
			max-width: 25px;
		}
		#app .main-timer .timer {font-size: 14px;}
		#app #stopwatch {min-width: 70px;}

		#app .flex {margin-top: 40px;}

		/* MAIN REAL */
		.crown {
		    max-width: 50px;
		    max-height: 50px;
		    margin: 0 0 -15px !important;
		}
		.form-box {padding: 25px;}
		.form-real .wrap > p {
		    font-size: 11px;
		    letter-spacing: 1px;
		}
		.real-head {align-items: center;}
		.real-head h3 {font-size: 25px;}
		.real-head > div > div {
		    font-size: 16px;
		    line-height: 34px;
		    padding-left: 15px;
		}
		.real-head > div > div:after {
		    height: 60px;
		}
		.real-head img {
		    max-width: 90px;
		}
		.form-real .field input {
		    padding: 0 65px 0 15px;
		    font-size: 12px;
		    min-height: 45px;
		}
		.form-real .field > div {
		    max-width: 80px;
		    min-height: 80px;
		    position: absolute;
		    top: -17px;
		    right: -17px;
		}
		.form-real .wrap {
		    padding: 25px;
		}
		.form-real ul.list {
		    margin-top: 15px;
		}
		.form-real ul.list li {
		    font-size: 14px;
		}
		.form-real ul.list li + li {
		    margin-top: 5px;
		}
		.total {
		    margin-top: 20px;
		    padding-top: 20px;
		}
		.total .title, .total .price {
		    font-size: 15px;
		}
		.form-real .group {
		    margin-top: 30px;
		}
		.arr {
		    width: 50px;
		    height: 70px;
		    background-size: 50px;
		    margin-right: -15px;
		    margin-bottom: -30px;
		}
		.form-real .wrap .trust {
			max-width: 250px;
			margin: 30px auto 10px auto !important;
		}
		.form-real .wrap ul:not(.list) li + li {margin-top: 0;}
		.product {
			margin-top: 15px;
			padding: 25px;
		}
		.product h3 {font-size: 26px;}
		.product p {
		    font-size: 13px;
		    margin-top: 0;
		}
		.product img {max-width: 270px;}
		.product h2 {
			margin-top: 40px;
			font-size: 37px;
		}
		.product h2 + p {font-size: 21px;}
		.product .icons {max-width: 260px;}
		.product .icons li .icon {
		    max-width: 70px;
		    margin-right: 15px;
		}
		.product .icons li p {
			font-size: 17px;
		}

		/* MAIN QUICK */
		.main-quick .foot {
		    margin-top: 50px;
		}
		.main-quick .foot h4 {
			font-size: 11px;
			letter-spacing: 1px;
		}
		.main-quick .foot h3 {font-size: 45px;}
		.main-quick .foot h3 + p {
			font-size: 17px;
		}
		.main-quick .foot > img {max-width: 250px;}
		.main-quick .foot div p {
		    font-size: 14px !important;
		    margin-bottom: 35px !important;
		}

		/* MAIN PRICE */
		.main-price {margin-top: 50px;}
		.price-video {min-height: 230px;}
		.main-price .inner {
		    padding: 25px;
		}
		.box h2 {
		    font-size: 35px;
		    line-height: 40px;
		}
		.slider-reviews p, .slider-reviews .head span {
		    font-size: 14px;
		}
		.main-price h3 {
		    font-size: 31px;
		    line-height: 39px;
		    margin-top: 35px;
		    margin-bottom: 20px;
		}
		.main-price h3 + img {max-width: 230px;}
		.main-price .foot {
		    font-size: 14px;
		    padding-bottom: 15px;
		}

		.wrap-timer .timer {
			font-size: 20px;
		}
		.wrap-timer .timer strong {
			min-width: 90px;
		}
		#app .main-bottom {
			padding: 30px 15px !important;
		}
		#app .main-bottom .images {
			margin: 0 0 15px;
		}
		#app .main-bottom .images img {
			max-width: 85px;
		}
		#app .main-bottom .images img:nth-child(2) {
			max-width: 120px;
		}
		#app .main-bottom p {font-size: 10px;}

		#app .popup iframe {
		    width: 280px;
		    height: 165px;
		}
		#app .popup-close {
			top: -40px;
			right: -35px;
		}
		#app .popup-info .popup-close {
			top: 15px;
			right: 15px;
		}

		/* FAQ */
		.faq {padding-bottom: 30px;}
		.faq h2.title {
		    font-size: 38px;
		    line-height: 42px;
		}
		.accordion__head {
		    font-size: 17px;
		    padding: 12px 15px 12px 40px;
		}
		.accordion__body {
		    padding-left: 40px;
		    padding-bottom: 20px;
		    font-size: 15px;
		    line-height: 25px;
		    max-width: 700px;
		}
	}

	@media (max-width: 390px) {
		#app .main-timer h2 {font-size: 16px;}
		.real-head > div > div {
			font-size: 14px;
			line-height: 32px;
		}
		.real-head h3 {font-size: 22px;}
		.real-head img {max-width: 75px;}
		.form-real .field input {font-size: 11px;}
		.product h3 {font-size: 24px;}
		.product h2 + p {
		    font-size: 19px;
		}
		.box h2 {
		    font-size: 33px;
		    line-height: 38px;
		}
		.main-price .foot {font-size: 13px;}
		.price-video {
		    min-height: 200px;
		}
	}

	@media (max-width: 375px) {
		#app .main-timer h2 {font-size: 14px;}
		#app .main-timer .timer {
		    font-size: 12px;
		}
		.total .title, .total .price {
		    font-size: 14px;
		}
		.total .price span {
		    font-size: 12px;
		    margin-right: 5px;
		}
		.product h3 {
		    font-size: 23px;
		}
		.product h2 + p {
		    font-size: 18px;
		}
		.main-quick .foot h3 {
		    font-size: 42px;
		}
		.main-quick .foot h3 + p {
		    font-size: 15px;
		}
		.box h2 {
		    font-size: 31px;
		    line-height: 36px;
		}
		.main-price h3 {
			font-size: 29px;
			line-height: 36px;
		}
		.main-price .foot {font-size: 12px;}
		#app .main-bottom .images img {
		    max-width: 80px;
		}
		#app .main-bottom .images img:nth-child(2) {
		    max-width: 115px;
		}
	}

	@media (max-width: 360px) {
		.form-real ul.list li {
			font-size: 12px;
		}
		.product h3 {font-size: 22px;}
		.product p {font-size: 12px;}
		.product h2 + p {font-size: 17px;}
		.box h2 {
		    font-size: 30px;
		    line-height: 35px;
		}
		.main-price h3 {
		    font-size: 28px;
		    line-height: 35px;
		}
		#app .main-bottom .images img {
		    max-width: 75px;
		}
		#app .main-bottom .images img:nth-child(2) {
		    max-width: 110px;
		}
	}
</style>