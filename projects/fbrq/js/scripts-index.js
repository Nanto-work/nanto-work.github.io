var simpleSlider;

(function($){

	/* –––––––––––––––––––––––––––––––––––——————————————————— */
	/* —————SCRIPTS for Index Page ONLY—————————————————————— */
	/* —————SCRIPT for All Pages Located in SCRIPTS-ALL.JS——— */
	/* –––––––––––––––––––––––––––––––––––——————————————————— */


	$(document).ready(function(){
		if( $('body').hasClass('index') ){
	
			function setPromoHeight(){
			var promoHeight = $('.promo_item.promo_item_big').width();
			$('.promo_item.promo_item_big').height( promoHeight );
			$('.promo_item.promo_item_small').height( promoHeight / 2 );
			$('#content').height(promoHeight);
		}
				
				/* masonry index */
				$('#content').masonry({
				  
				  gutter: 0,
				  itemSelector: '.itemer',
				  columnWidth: 1,
				  transitionDuration: 0,
				  isOriginTop: true,
				  isOriginLeft: true,
				});
				
				var msnry = new Masonry( '#content' );
				
				$('#content').masonry( 'on', 'layoutComplete', function( msnryInstance, laidOutItems ) {
					/* resize elements height with their width; */
					setPromoHeight();
				} )
				
				function onLayout() {
				  console.log('layout done');
				}
				// bind event listener
				msnry.on( 'layoutComplete', onLayout );
				// un-bind event listener
				msnry.off( 'layoutComplete', onLayout );
				// return true to trigger an event listener just once
				msnry.on( 'layoutComplete', function() {
				  console.log('layout done, just this one time');
				  return true;
				});
				
				setPromoHeight();
				
				/* ––––––––––––––––––––––––––––––––––––– */
				/* global SIMPLE BXslider initialisation */
				/* ––––––––––––––––––––––––––––––––––––– */
				simpleSlider = $('.simple-slider');
				simpleSlider.bxSlider({
					auto: false,
					pager: false,
				});
				
				/* ––––––––––––––––––––––––––––––––––––– */
				/* BlogSLider */
				/* ––––––––––––––––––––––––––––––––––––– */
				blogSLider = $('.articles');
				blogSLider.bxSlider({
					auto: false,
					pager: false,
					slideWidth: 400,
					minSlides: 2,
					maxSlides: 4,
					moveSlides: 1,
					slideMargin: 50,
				});
				
		};
	
	});
	

 })(jQuery); 