define(['text!./mine.html','css!./mine.css'],function (html) {
	function render(){
		$("#container").html("");
		$("#container").html(html);
		$("#footer").show();
		
	}
	
	return{
		render:render
	}
})
