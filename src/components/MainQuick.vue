<template>
	<div class="main-quick box">
		<div class="inner">
			<div class="hide-991">
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
				

			<div class="foot">
				<h4 class="js-scroll fade-bottom">INCLUDED WITH ALL PRESCRIPTIONS</h4>
				<h3 class="js-scroll fade-bottom">More Than Just <span>ED Treatments</span></h3>
				<p class="js-scroll fade-bottom">Your prescription comes with free medical<br>
				guidance. Message your Rex MD physician<br>
				anytime without co-pays or waiting rooms.</p>
				<img src="../assets/img/portal.png" alt="">
				<div>
					<p class="js-scroll fade-bottom">Message your assigned physician through<br>
	                the REX MD Member Portal any time.</p>
	                <div class="hide-991">
	                	<p class="small js-scroll fade-bottom">RexMD featured in</p>
	               		<img src="../assets/img/logos.png" alt="" class="js-scroll fade-bottom">
	                </div>	   
	                <div hidden class="show-991">
	                	<div class="group">
							<button class="btn shadow-pulse">CONTINUE TO FINAL STEP</button>
							<button class="btn back js-scroll fade-bottom">PREVIOUS STEP</button>
						</div>
	                </div>             
				</div>				
			</div>				
		</div>
	</div>
</template>

<style scoped>
	.main-quick {
	    padding: 25px 40px 15px 40px;
	    position: relative;
	}

	.main-quick h2 + p {
		font-size: 19px;
	}

	.main-quick .icons {
	    margin: 20px 0 30px 0;
	}

	.main-quick .icons li {
	    display: flex;
	    align-items: center;
	}

	.main-quick .icons li + li {
	    margin-top: 15px;
	}

	.main-quick .icons .icon {
	    min-width: 65px;
	    height: 65px;
	    margin-right: 15px;
	}

	.main-quick .icons p span {
	    color: #a20e1e;
	}

	.foot {margin-top: 33px;}
	.foot h4 {
		font-size: 13px;
		color: #8b8b8b;
		letter-spacing: 3px;
		text-transform: uppercase;
		font-weight: 300;
		margin-bottom: 10px;
	}
	.foot h3 {
		font-size: 23px;
		margin-bottom: 7px;
	}
	.foot h3 span {color: var(--red);}
	.foot h3 + p {font-size: 17px;}
	.foot > img {
		margin: 30px 0 20px 0;
		display: block;
		max-width: 305px;
	}
	.foot div {
		max-width: 305px;
		text-align: center;
	}
	.foot div p:not(.small) {
		font-size: 15px;
		margin-bottom: 20px;
		font-family: var(--camptonBook);
		line-height: 1.5;
	}
	.foot div p.small {
		font-size: 10px;
		color: #9e9e9e;
		margin-bottom: 5px;
	}
</style>