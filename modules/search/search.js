define(['text!./search.html','css!./search.css'],function (html) {
	function render () {
		$("#container").html(html);
		$("#footer").hide();
	};
	
	return{
		render:render
	}
})