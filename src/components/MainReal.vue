<template>
	<div class="main-real box">
		<lottie-animation
		    path="lottie/crown-2.json"
		    :loop="false"
		    :autoPlay="true"
		    :speed="1"
		    class="crown"
		/>

		<div class="inner">
			<form action="#" class="form-real">
				<div class="form-box">
					<div class="real-head">
						<div>
							<p class="js-scroll fade-top">ORDER DETAILS</p>
							<h3 class="js-scroll fade-top">50mg Sildenafil</h3>
							<div class="js-scroll fade-bottom">3 Month Supply, 60 tablets<br>
			                Every 3 Months</div>
						</div>
						
		                <img src="../assets/img/pill.png" alt="" class="js-scroll fade-scale">
					</div>

					<div class="field js-scroll fade-bottom">
						<input type="text" placeholder="Promo Code FREEGIFT has been applied!">
						<lottie-animation
						    path="lottie/checkbox.json"
						    :loop="true"
						    :autoPlay="true"
						    :speed="1"
						/>
					</div>
				</div>
				
				<div class="wrap">
					<p class="js-scroll fade-bottom">ORDER SUMMARY</p>
					<ul class="list">
						<li class="js-scroll fade-bottom">
							<div class="title">Free Bonus Gift <span class="throw">($39 Value)</span></div>
							<div class="price f-500">FREE</div>
						</li>
						<li class="js-scroll fade-bottom">
							<div class="title">Physician Consultation <span class="throw">($40 Value)</span></div>
							<div class="price f-500">FREE</div>
						</li>
						<li class="js-scroll fade-bottom">
							<div class="title">Rex MD Doctor Prescription</div>
							<div class="price f-500">FREE</div>
						</li>
						<li class="js-scroll fade-bottom">
							<div class="title">ED Treatment Total</div>
							<div class="price f-500">$120.00</div>
						</li>
						<li class="c-red f-500 js-scroll fade-bottom">
							<div class="title">14% Instant Savings</div>
							<div class="price c-red f-500">-$18.00</div>
						</li>
						<li class="js-scroll fade-bottom">
							<div class="title">2-Day Rush Delivery <span class="throw">($15 Value)</span></div>
							<div class="price f-500">FREE</div>
						</li>
					</ul>

					<div class="total js-scroll fade-bottom">
						<div class="title">Today’s Discounted Total</div>
						<div class="price"><span>USD</span> $102.00</div>
					</div>

					<div class="group">
						<button class="btn shadow-pulse">
							<div class="arr animationend"></div>
							CONTINUE TO FINAL STEP
						</button>
						<button class="btn back js-scroll fade-bottom">PREVIOUS STEP</button>
					</div>

					<lottie-animation
					    path="lottie/trust.json"
					    :loop="false"
					    :autoPlay="false"
					    :speed="1"
					    class="trust an-icon js-scroll fade-bottom show-991 d-none js-lottie"
						@AnimControl="animated"
					/>

					<ul class="show-991 d-none">
						<li class="js-scroll fade-bottom">
							<lottie-animation
							    path="lottie/pharmacy.json"
							    :loop="false"
							    :autoPlay="false"
							    :speed="1"
							    class="an-icon"
						    	@AnimControl="animated"
							/>
						</li>
						<li class="js-scroll fade-bottom">
							<lottie-animation
							    path="lottie/hippa.json"
							    :loop="false"
							    :autoPlay="false"
							    :speed="1"
							    class="an-icon"
						    	@AnimControl="animated"
							/>
						</li>
						<li class="js-scroll fade-bottom">
							<lottie-animation
							    path="lottie/physicians.json"
							    :loop="false"
							    :autoPlay="false"
							    :speed="1"
							    class="an-icon"
						    	@AnimControl="animated"
							/>
						</li>
					</ul>
				</div>				
			</form>

			<div class="foot-real">
				<lottie-animation
				    path="lottie/trust.json"
				    :loop="false"
				    :autoPlay="false"
				    :speed="1"
				    class="trust an-icon js-scroll fade-bottom hide-991"
				    @AnimControl="animated"
				/>

				<ul class="hide-991">
					<li class="js-scroll fade-bottom">
						<lottie-animation
						    path="lottie/pharmacy.json"
						    :loop="false"
						    :autoPlay="false"
						    :speed="1"
						    class="an-icon"
						    @AnimControl="animated"
						/>
					</li>
					<li class="js-scroll fade-bottom">
						<lottie-animation
						    path="lottie/hippa.json"
						    :loop="false"
						    :autoPlay="false"
						    :speed="1"
						    class="an-icon"
						    @AnimControl="animated"
						/>
					</li>
					<li class="js-scroll fade-bottom">
						<lottie-animation
						    path="lottie/physicians.json"
						    :loop="false"
						    :autoPlay="false"
						    :speed="1"
						    class="an-icon"
						    @AnimControl="animated"
						/>
					</li>
				</ul>

				<div class="product">
					<h3 class="js-scroll fade-bottom">Satisfaction <span>Guaranteed.</span></h3>
					<p class="js-scroll fade-bottom">Improve your symptoms & lifestyle, worry-free.</p>
					<img src="../assets/img/product.png" alt="">
					<p class="js-scroll fade-bottom">If you’re not crazy about your results, just<br> contact us and we’ll take care of you. SImple!</p>

					<div class="show-991" hidden>
						<h2 class="js-scroll fade-top">Quick. Simple.<br> <span>Safe. Convenient.</span></h2>
						<p class="js-scroll fade-top">No waiting rooms, no trips to the <br>doctor, no insurance or co-pays. </p>
						<ul class="icons">
							<li class="js-scroll fade-bottom">
								<div class="icon">
									<img src="../assets/img/icon-1.png" alt="">
								</div>
								<p>The <span>Lowest Price</span><br> Per Pill, Guaranteed</p>
							</li>
							<li class="js-scroll fade-bottom">
								<div class="icon">
									<img src="../assets/img/icon-2.png" alt="">
								</div>
								<p>Free <span>Personalized</span><br> Telehealth Review</p>
							</li>
							<li class="js-scroll fade-bottom">
								<div class="icon">
									<img src="../assets/img/icon-3.png" alt="">
								</div>
								<p>Branded &amp; Generic<br> <span>Treatments</span> for Men</p>
							</li>
							<li class="js-scroll fade-bottom">
								<div class="icon">
									<img src="../assets/img/icon-4.png" alt="">
								</div>
								<p>Free <span>Delivery</span> Direct<br> From the Pharmacy</p>
							</li>
							<li class="js-scroll fade-bottom">
								<div class="icon">
									<img src="../assets/img/icon-5.png" alt="">
								</div>
								<p>Continued <span>Medical</span><br> Telehealth Support</p>
							</li>
						</ul>	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

	export default {
		components: {
			LottieAnimation
		},
		methods: {
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
		}
	}
</script>

<style>
	.main-real {
	    width: 100% !important;
    	max-width: 630px;
	    box-shadow: 0 0 76px rgb(0 0 0 / 14%);
	    padding: 30px 44px 45px 44px;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    z-index: 2;
	    transform: translate(-50%, -50%);
	    top: -6%;
	    transform: translate(-50%, 0%);
	}

	.crown {
		max-width: 70px;
		max-height: 60px;
	    position: absolute;
	    bottom: 100%;
	    left: 50%;
	    transform: translateX(-50%);
	    margin: 0 0 -20px !important;
	}

	.real-head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		margin-bottom: 30px;
	}
	.real-head p {
		font-size: 13px;
		color: #8b8b8b;
		text-transform: uppercase;
		letter-spacing: 3px;
	}
	.real-head h3 {
		font-size: 30px;
		margin-top: 10px;
		letter-spacing: 1px;
	}
	.real-head > div > div {
		font-size: 18px;
		line-height: 30px;
		margin-top: 10px;
		padding-left: 20px;
		position: relative;
	}
	.real-head > div > div:after {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: 0;
		width: 3px;
		height: 57px;
		transform: translateY(-50%);
		background: var(--blue);
	}

	.form-real .field {position: relative;}
	.form-real .field input {
		min-height: 57px;
		border: 1px solid #4d5a69;
		padding: 0 80px 0 20px;
		width: 100%;
		font-size: 17px;
		font-family: 'Campton', sans-serif;
		font-weight: 300;
		color: var(--blue);
	}
	.form-real .field input::placeholder {color: var(--blue);}
	.form-real .field > div {
		max-width: 103px;
	    min-height: 103px;
	    position: absolute;
	    top: -22px;
	    right: -23px;
	}

	.form-real .wrap > p {
		font-size: 13px;
		color: #8b8b8b;
		text-transform: uppercase;
		letter-spacing: 3px;
		margin-top: 30px;
		margin-bottom: 20px;
	}

	.form-real ul.list {margin-top: 20px;}
	.form-real ul li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 18px;
	}
	.form-real ul li + li {margin-top: 10px;}

	.throw {position: relative;}
	.throw:after {
		content: '';
		display: inline-block;
		width: 122px;
		height: 16px;
		background: url(../assets/img/throw.png) no-repeat;
		position: absolute;
		top: 0;
		left: -5px;
	}

	.total {
		margin-top: 15px;
		padding-top: 15px;
		border-top: 1px solid #d6d6d6;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.total .title {
		font-weight: bold;
		font-size: 23px;
	}
	.total .price {
		font-weight: bold;
		font-size: 23px;
		color: var(--akcent);
		display: flex;
		align-items: center;
	}
	.total .price span {
		font-size: 14px;
		font-weight: 300;
		text-transform: uppercase;
		margin-right: 15px;
	}

	.form-real .group {
		margin-top: 30px;
	}
	.form-real .btn {
		width: 100%;
		position: relative;
	}
	.form-real .btn + .btn {margin-top: 15px;}

	.arr {
	    display: block;
	    width: 113px;
	    height: 153px;
	    background: url(../assets/img/big-arrow.png) no-repeat;
	    position: absolute;
	    right: 100%;
	    bottom: 100%;
	    margin-right: 10px;
	    margin-bottom: -55px;
	    opacity: 1;
	}

	.animationend {
	  	animation-name: toggle;
	  	animation-duration: 5s;
	  	animation-iteration-count: infinite;
	}

	@-webkit-keyframes toggle {
	  0% {
	    transform:rotate(-5deg);
	  }
	  5% {
	    transform:rotate(5deg);
	  }
	  10% {
	    transform:rotate(-5deg);
	  }
	  15% {
	    transform:rotate(5deg);
	  }
	  20% {
	    transform:rotate(0deg);
	  }
	}

	.foot-real .trust,
	.form-real .wrap .trust {
		margin: 40px auto 25px auto !important;
		display: block;
		max-width: 370px;
	}
	.foot-real ul,
	.form-real .wrap ul.show-991 {
	    display: flex;
	    justify-content: center;
	    margin-bottom: 30px;
	}
	.foot-real ul li,
	.form-real .wrap ul.show-991 li {
	    display: flex;
	    align-items: center;
	}
	.foot-real ul li + li,
	.form-real .wrap ul.show-991 li + li {
	    margin-left: 30px;
	}
	.foot-real ul li div,
	.form-real .wrap ul.show-991 li div {
		max-width: 180px;
	}
	.foot-real ul li p,
	.form-real .wrap ul.show-991 li p {
	    font: 500 10px/12px 'Gotham', sans-serif;
	    color: #8a8d96;
	    text-transform: uppercase;
	    text-align: left;
	}

	.product {
		text-align: center;
		margin-top: 40px;
	}
	.product h3 {
		font-size: 34px;
	}
	.product h3 span {color: var(--red);}
	.product p {
		font-family: var(--camptonBook);
		font-size: 17px;
	}
	.product p:last-child {font-size: 15px;}
	.product img {
		display: block;
		margin: 25px auto 10px auto;
	}
</style>



