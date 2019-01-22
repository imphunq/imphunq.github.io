 $(function(){
 	vitricuaedu = $('#khoiedu').offset().top;
 	// console.log(vitricuaedu);
 	$('.xuong,.kn').click(function(){
 		$('html,body').animate({scrollTop:vitricuaedu},800)
 	})
})  
 