// 密码隐藏展示功能
function showHidePsw(){
	var type = $("#login_form #password").val();
	var $img = $("#login_form #eye");
	var $pw = $("#login_form #password");
	if (type=='password') {
		$pw.attr('type', 'text');
		$img.attr('src', './static/picture/visible.jpg');
	}else{
		$pw.attr('type', 'password');
		$img.attr('src', './static/picture/invisible.jpg');
	}
}