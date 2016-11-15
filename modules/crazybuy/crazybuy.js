define(['text!./crazybuy.html','css!./crazybuy.css'],function (html) {
	function render(){
		$("#container").html(html);
		$("#footer").hide();
	};
	
	return{
		render:render
	}
	
	
})