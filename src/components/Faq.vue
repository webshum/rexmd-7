<template>
	<section class="faq">
		<span class="after"></span>

		<div class="thumb" hidden>
			<img src="img/bg-faq.jpg" alt="">
		</div>

		<div class="center">
			<h2 class="title js-scroll fade-top">Frequently<br hidden> Asked <span>Questions</span></h2>

			<div class="link-more-dropdown">
				<div class="accordion">
					<div class="accordion__head">Is my personal information safe?</div>
					<div class="accordion__body" style="display: none;">
						<p>We take privacy and security seriously at Rex MD. Rex MD complies with all relevant privacy and HIPAA regulations in the U.S. Our system meets strict security and encryption protocols to keep your information safe. Rex MD is LegitScript Certified, a third-party regulatory and safety reviewer.</p>
					</div>
					<div class="accordion__head">What is the Lowest Price Guarantee?</div>
					<div class="accordion__body" style="display: none;">
						<p>This is an easy one. If you find a lower price (good luck) we’ll beat it. Just contact our patient care team and let them know where you found it.</p>
					</div>
					<div class="accordion__head">How is Rex MD different from other services?</div>
					<div class="accordion__body" style="display: none;">
						<p>There are a number of factors that make us different, all of which we are proud of. Most importantly, we take great pride in the level of quality and care our licensed doctors put into making sure our patients are receiving the right treatment plan. Secondly, unlike our competitors, we sell the real deal at the guaranteed lowest prices. Our sildenafil tablets come in the actual 25mg, 50mg, and 100mg dosage sizes. We think that if you’re getting ready for a special time with your partner, the idea of taking 5 pills just to get and maintain an erection sounds ridiculous.</p>

					</div>
					<div class="accordion__head">What is the process for receiving my order?</div>
					<div class="accordion__body" style="display: none;">
						<p>It starts with an online visit. Our doctors assess your symptoms and make a diagnosis, writing you a prescription if that’s the best course of action. Your medication is then delivered to you quickly and in discreet packaging. You can continue with a monthly subscription (the simplest way to stay up to date) and, if need be, ask your Rex MD doctor about new or ongoing issues after your initial diagnosis.</p>
					</div>
					<div class="accordion__head">Why shouldn't I order this product?</div>
					<div class="accordion__body" style="display: none;">
						<p>We still can’t figure that out! Online consultations are completely free and prescriptions are written by a licensed doctor or nurse practitioner. You'll have genuine ED medications, prescribed online and delivered directly from the pharmacy at the lowest price, guaranteed. It's fast, easy, discreet and MUCH more affordable!</p>
					</div>					
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		mounted() {
			$('.accordion__head').on('click', function(){
			    var el = $(this);
			    var elNext = $(this).next();
			    $('.accordion__head').not(el).removeClass('open')
			    $('.accordion__body').not(elNext).slideUp(200)
			    el.next('.accordion__body').slideToggle(200);
			    el.toggleClass('open');
			    return false;
			});
		}
	}
</script>	

<style>
	.faq {
		margin-top: 300px;
		padding-bottom: 70px;
		position: relative;
	}
	.faq .after {
	    display: block;
	    width: 450px;
	    height: 530px;
	    background: url(../assets/img/hand.png) no-repeat;
	    background-size: 450px;
	    position: sticky;
	    top: 150px;
	    right: 0;
	    float: right;
	    z-index: 2;
	    transition: all 0.3s;
	}

	.faq h2.title {
		font-size: 67px;
		line-height: 69px;
		letter-spacing: 2px;
		text-align: center;
	}
	.faq h2.title span {color: #a20e1e;}

	.accordion {
	  	margin-top: 30px;
	}

	.accordion__head {
	  	position: relative;
	  	cursor: pointer;
	  	padding: 16px 15px 16px 50px;
	  	font-size: 24px;
	  	line-height: 1.55;
	  	font-weight: 300;
	  	letter-spacing: 1px;
	}

	.accordion__head:not(:first-child) {
	  	border-top: 1px solid rgba(49, 63, 73, 0.2);
	}

	.accordion__head:before {
	  	content: '+';
	  	display: block;
	  	position: absolute;
	  	left: 0;
	  	top: 50%;
	  	-webkit-transform: translate(0, -50%);
	  	transform: translate(0, -50%);
	  	font-size: 36px;
	  	line-height: .8;
	  	color: #b31f24;
	  	margin-top: -1px;
	}

	.accordion__head.open:before {
	  	content: '-';
	}

	.accordion__body {
	  	padding-left: 50px;
	  	padding-bottom: 35px;
	  	font-size: 18px;
	  	line-height: 36px;
	  	letter-spacing: 1px;
	  	font-weight: 300;
	  	max-width: 900px;
	}
	.accordion__body p + p {margin-top: 36px;}

	.accordion__body>*:last-child {
	  	margin-bottom: 0;
	}

	.accordion__body>*:first-child {
	  	margin-top: 0;
	}
</style>