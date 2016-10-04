$(document).ready(function(){
	console.log('+');
	$('.clients_item').each(function(){
		$(this).hover(
			function(){
				$(this).find('.clients_card').addClass('flip');
			}, function(){
				$(this).find('.clients_card').removeClass('flip');
			}
		);
	});
});