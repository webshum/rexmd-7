<template>
	<div class="main-real box">
		<lottie-animation
		    path="lottie/crown-2.json"
		    :loop="true"
		    :autoPlay="true"
		    :speed="1"
		    class="crown"
		/>

		<div class="banner-dots" id="rexmd-dots-wrapper" style="width:230px;height:230px;">
			<canvas class="dot-pattern-2" id="dot-pattern-2" width="230" height="230"></canvas>
		</div>

		<div class="inner">
			<div class="real-head">
				<div>
					<p>ORDER DETAILS</p>
					<h3>50mg Sildenafil</h3>
					<div>3 Month Supply, 60 tablets<br>
	                Every 3 Months</div>
				</div>
				
                <img src="../assets/img/pill.png" alt="">
			</div>

			<form action="#" class="form-real">
				<div class="field">
					<input type="text" placeholder="Promo Code FREEGIFT has been applied!">
					<lottie-animation
					    path="lottie/checkbox.json"
					    :loop="true"
					    :autoPlay="true"
					    :speed="1"
					/>
				</div>
				<p>ORDER SUMMARY</p>
				<ul>
					<li>
						<div class="title">Free Bonus Gift <span class="throw">($39 Value)</span></div>
						<div class="price f-500">FREE</div>
					</li>
					<li>
						<div class="title">Physician Consultation <span class="throw">($40 Value)</span></div>
						<div class="price f-500">FREE</div>
					</li>
					<li>
						<div class="title">ED Treatment Total</div>
						<div class="price f-500">$120.00</div>
					</li>
					<li class="c-red f-500">
						<div class="title">XX% Instant Savings</div>
						<div class="price c-red f-500">-$18.00</div>
					</li>
					<li>
						<div class="title">2-Day Rush Delivery <span class="throw">($15 Value)</span></div>
						<div class="price f-500">FREE</div>
					</li>
				</ul>

				<div class="total">
					<div class="title">Today’s Discounted Total</div>
					<div class="price"><span>USD</span> $102.00</div>
				</div>

				<div class="group">
					<button class="btn shadow-pulse">
						<div class="arr animationend"></div>
						CONTINUE TO FINAL STEP
					</button>
					<button class="btn back">PREVIOUS STEP</button>
				</div>
			</form>

			<div class="foot-real">
				<lottie-animation
				    path="lottie/trust.json"
				    :loop="true"
				    :autoPlay="true"
				    :speed="1"
				    class="trust"
				/>

				<ul>
					<li>
						<lottie-animation
						    path="lottie/pharmacy.json"
						    :loop="true"
						    :autoPlay="true"
						    :speed="1"
						/>
					</li>
					<li>
						<lottie-animation
						    path="lottie/hippa.json"
						    :loop="true"
						    :autoPlay="true"
						    :speed="1"
						/>
					</li>
					<li>
						<lottie-animation
						    path="lottie/physicians.json"
						    :loop="true"
						    :autoPlay="true"
						    :speed="1"
						/>
					</li>
				</ul>

				<div class="product">
					<h3>Satisfaction <span>Guaranteed.</span></h3>
					<p>Improve your symptoms & lifestyle, worry-free.</p>
					<img src="../assets/img/product.png" alt="">
					<p>If you’re not crazy about your results, just<br>
					contact us and we’ll take care of you. SImple!</p>
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
		}
	}
	function animateDots(){
	    var stageWidth;
	    var stageHeight;
	    var dotPatternCanvas2 = document.getElementById("dot-pattern-2");
	    var context2 = dotPatternCanvas2.getContext("2d");
	    var objectList;
	    var timeout;
	    var smallDotSize = 1;
	    var bigDotSize = 2;
	    var prms = { fps: 6, objectDistance: 15, objectWidth: bigDotSize, objectRotationV: Math.PI * 0.09, objectRadius: 0 };
	    var xAngle = 25;
	    var yAngle = 65;
	    //$(window).resize(reset);
	    window.addEventListener('resize', reset);
	    reset();
	    function reset() {
	        //stageWidth = $("#rexmd-dots-wrapper").width();
	        //stageHeight = $("#rexmd-dots-wrapper").height();
	        stageWidth  = document.querySelector("#rexmd-dots-wrapper").clientWidth;
	        stageHeight = document.querySelector("#rexmd-dots-wrapper").clientHeight;
	        //$("#rexmd-dots-wrapper canvas").attr("width", stageWidth);
	        document.querySelector('#rexmd-dots-wrapper canvas').setAttribute("width", stageWidth);
	        //$("#rexmd-dots-wrapper canvas").attr("height", stageHeight);
	        document.querySelector('#rexmd-dots-wrapper canvas').setAttribute("height", stageHeight);
	        objectList = [];
	        var x = 4;
	        var y = 4;
	        while (x < stageWidth + prms.objectDistance * 0.5) {
	            y = 4;
	            while (y < stageHeight + prms.objectDistance * 0.5) {
	                var xDistance = x - stageWidth * xAngle;
	                var yDistance = y - stageHeight * yAngle;
	                var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
	                var circleRotation = Math.PI * 0.005 * distance;
	                objectList.push(new Circle(x, y, circleRotation));
	                y += prms.objectDistance;
	            }
	            x += prms.objectDistance;
	        }
	        if (timeout) {
	            clearTimeout(timeout);
	        }
	        timeout = setTimeout(onEnterFrame, 1000 / prms.fps);
	    }
	    function Circle(_x, _y, _rotation) {
	        this.x = _x;
	        this.y = _y;
	        this.vx = 0;
	        this.vy = 0;
	        this.ax = 0;
	        this.ay = 0;
	        this.rotation = _rotation;
	        this.cx = _x;
	        this.cy = _y;
	    }
	    Circle.prototype.width = prms.objectWidth;
	    Circle.prototype.rotationV = prms.objectRotationV;
	    Circle.prototype.radius = prms.objectRadius;
	    Circle.prototype.tick = function () {
	        this.rotation += this.rotationV;
	        this.x = this.radius * Math.cos(this.rotation) + this.cx;
	        this.y = this.radius * Math.sin(this.rotation) + this.cy;
	        this.width = (smallDotSize + Math.cos(this.rotation)) * Circle.prototype.width;
	    };
	    Circle.prototype.draw = function (_context) {
	        _context.beginPath();
	        _context.arc(this.x, this.y, this.width * 0.4, 0, Math.PI * 2, false);
	        _context.fill();
	        _context.closePath();
	    };
	    function onEnterFrame() {
	        var len = objectList.length;
	        var object;
	        while (len > 0) {
	            len -= 1;
	            object = objectList[len];
	            object.tick();
	        }
	        context2.clearRect(0, 0, stageWidth, stageHeight);
	        context2.fillStyle = "#c0c4ce";
	        len = objectList.length;
	        while (len > 0) {
	            len -= 1;
	            object = objectList[len];
	            object.draw(context2);
	        }
	        timeout = setTimeout(onEnterFrame, 1000 / prms.fps);
	    }
	};

	window.addEventListener('load', function() {
	 	animateDots();
	});
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
	    position: absolute;
	    bottom: 100%;
	    left: 50%;
	    transform: translateX(-50%);
	    margin: 0 0 -15px !important;
	}

	.main-real .banner-dots {
	    position: absolute;
	    top: -50px;
	    right: -50px;
	    z-index: -2;
	}

	.real-head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
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

	.form-real {margin-top: 30px;}
	.form-real .field {position: relative;}
	.form-real .field input {
		min-height: 57px;
		border: 1px solid #4d5a69;
		padding: 0 80px 0 20px;
		width: 100%;
		font-size: 16px;
		color: var(--blue);
	}
	.form-real .field input::placeholder {color: var(--blue);}
	.form-real .field > div {
		max-width: 60px;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
	}

	.form-real p {
		font-size: 13px;
		color: #8b8b8b;
		text-transform: uppercase;
		letter-spacing: 3px;
		margin-top: 30px;
		margin-bottom: 20px;
	}

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
		font-weight: normal;
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

	.foot-real .trust {
		margin: 40px auto 25px auto !important;
		display: block;
		max-width: 370px;
	}
	.foot-real ul {
	    display: flex;
	    justify-content: center;
	    margin-bottom: 30px;
	}
	.foot-real ul li {
	    display: flex;
	    align-items: center;
	}
	.foot-real ul li + li {
	    margin-left: 30px;
	}
	.foot-real ul li div {
		max-width: 180px;
	}
	.foot-real ul li:last-child i {
	    position: relative;
	    top: -3px;
	}
	.foot-real ul li p {
	    font: 500 10px/12px 'Gotham', sans-serif;
	    color: #8a8d96;
	    text-transform: uppercase;
	    text-align: left;
	}
	.foot-real ul li i {
	    margin-right: 5px;
	}
	.ic-rx {
	    display: inline-block;
	    vertical-align: middle;
	    min-width: 32px;
	    height: 35px;
	    background: url(../assets/img/ic-rx.png) no-repeat;
	}
	.ic-hippa {
	    display: inline-block;
	    vertical-align: middle;
	    min-width: 51px;
	    height: 37px;
	    background: url(../assets/img/ic-hipaa.png) no-repeat;
	}
	.ic-licensed {
	    display: inline-block;
	    vertical-align: middle;
	    min-width: 44px;
	    height: 44px;
	    background: url(../assets/img/ic-licensed.png) no-repeat;
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

	@media (max-width: 1550px) {
		.main-real {max-width: 580px;}
	}
</style>



