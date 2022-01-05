<template>
	<div class="popup-overlay"></div>

	<div class="popup popup-video">
		<div class="popup-close">
			<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg>
		</div>
		<div class="inner">
			<iframe src="https://player.vimeo.com/video/604162360?h=117e32a015" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>
		</div>
	</div>
</template>

<script>
	/* 
	POPUP ------------------------------------ */
	function popup() {
	    let btn = document.querySelectorAll('.btn-popup');
	    let overlay = document.querySelector('.popup-overlay');
	    let popup = null;
	    let close = null;
	    let _this = this;
	    let player = null;

	    for (var i = 0; i < btn.length; i++) {
	        btn[i].addEventListener('click', function(e) {
	            e.preventDefault();

	            popup = document.querySelector('.' + this.getAttribute('data-popup'));
	            close = popup.querySelector('.popup-close');

	            if (this.getAttribute('data-popup') == 'popup-video') {
	                const iframe = popup.querySelector('iframe');
	                player = new Vimeo.Player(iframe);
	                player.play();
	            }  

	            if (this.getAttribute('data-popup') == 'popup-video-2') {
	                const iframe = popup.querySelector('iframe');
	                player = new Vimeo.Player(iframe);
	                player.play();
	            }                  

	            let top  = window.pageYOffset || document.documentElement.scrollTop,
	            left = window.pageXOffset || document.documentElement.scrollLeft;
	            
	            overlay.classList.add('active');
	            popup.classList.add('active');
	            popup.style.top = (top + 100) + 'px';

	            close.addEventListener('click', closePopup);
	            overlay.addEventListener('click', closePopup);
	        });
	    }

	    function closePopup(e) {
	        e.preventDefault();

	        overlay.classList.remove('active');
	        popup.classList.remove('active');

	        if (popup.classList.contains('popup-video')) {
	            player.pause();
	        }    

	        if (popup.classList.contains('popup-video-2')) {
	            player.pause();
	        }          
	    }
	}	

	window.addEventListener('load', function() {
		popup();
	});
</script>

<style scoped>
	.popup-overlay {
	    position: fixed;
	    top: 0;
	    right: 0;
	    left: 0;
	    bottom: 0;
	    opacity: 0;
	    transition: opacity 0.5s;
	    background: rgba(0,0,0,.8);
	    z-index: 999;
	    display: none;
	}
	.popup-overlay.active {
	    display: block;
	    animation: opacity 0.5s forwards;
	}

	.popup {
	    position: absolute;
	    left: 50%;
	    transform: translateX(-50%);
	    z-index: 9991;
	    opacity: 0;
	    transition: opacity 0.5s 0.5s;
	    display: none;
	}
	.popup.active {
	    display: block;
	    animation: opacity 0.5s forwards;
	}

	@keyframes opacity {
		0% {opacity: 0;}
		100% {opacity: 1;}
	}

	.popup-close {
	    position: absolute;
	    top: -50px;
	    right: -50px;
	    width: 35px;
	    height: 35px;
	    cursor: pointer;
	    border: 1px solid #fff;
	    border-radius: 50%;
	    transition: all .3s;
	    z-index: 999;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    background: #a10e20;
	    border-color: #a10e20;
	}
	.popup-close svg {
	    fill: #fff;
	    width: 30px;
	    height: 30px;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	}

	.popup iframe {
	    width: 800px;
	    height: 455px;
	}
</style>