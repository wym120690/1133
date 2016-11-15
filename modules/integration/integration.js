define(['text!./integration.html','css!./integration.css'],function (html) {
	function render(){
		$("#container").html(html);
		$("#footer").hide();
	};
	
	return{
		render:render
	}
	
	
})