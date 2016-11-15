define(['text!./history.html','css!./history.css'],function (html) {
	function render(){
		$("#container").html(html);
		$("#footer").hide();
	};
	
	function input(){
		$("#btn").on("click",function () {
			$("#history p").append("<span>"+$("#cnt").val()+"</span>");
			
			
			var info={
			date:new Date(),
			cnt:$("#cnt").val()
		}
		localStorage.setItem(info.date,JSON.stringify(info));
		
		for(var keys in localStorage){
			
			console.log(localStorage.getItem(keys));
		}
		
		
		
		})
		
		
		
	}
	
	
	return{
		render:render,
		input:input
	}
	
	
}) 