$(function(){

	$(".dropdown-toggle").bind('click',function(){
		alert("aaa")
		$(".dropdown-toggle").removeClass('active');
		$(this).addClass('active');
	})
})