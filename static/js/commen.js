$(function{
	/*bootstrap下拉框选中样式*/
	$(".dropdown-toggle").bind('click',  function(event) {
		$(".dropdown-toggle").removeClass('active');
		$(this).addClass('active');
	});
})