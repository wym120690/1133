define(['text!./supermarket.html','css!./supermarket.css'],function (html) {
	function render(){
		$("#container").html("");
		$("#container").html(html);
		$("#footer").show();
		
		
	};
	
	
	function getData(){
		
		$.ajax({
	type:"get",
	url:"http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php",
	async:true,
	success:function(req2){
		var dataArr = JSON.parse(req2).data;
		$.each(dataArr,function(i,ele){

			var str="";
			str += "<li indexx='"+i+"'><div><img class='myimg' src='"+ele.img+"'></div>";
			str += "<h3 class='name'>"+ele.name+"</h3>";
			
			
			if(ele.pm_desc ==""){
				str += "<p><span>精选</span><span style='display:none'></span></p>";
			}else{
				str += "<p><span>精选</span><span>"+ele.pm_desc+"</span></p>";
			}
			
			str +="<p>"+ele.specifics+"</p>";
			str +="<p><span class='price'>¥"+ele.price+"</span><span>¥"+ele.market_price+"</span>";
			for(var keys in localStorage){
				var obj = JSON.parse(localStorage.getItem(keys));
				if(obj.name){
				if(ele.name == obj.name&&obj.num!=0){
					console.log("same");
					str +="<span><img class='add' src='images/3_11.jpg' ></span><span class='num'>"+obj.num+"</span><span><img class='min' src='images/3_09.jpg'></span></p></li>"
					$(".sort2 ul").append(str);
					return;
				}
			}	
			}
		str +="<span ><img class='add' src='images/3_11.jpg' ></span><span style='display:none'class='num'>0</span><span ><img style='display:none' class='min' src='images/3_09.jpg'></span></p></li>";
			
			$(".sort2 ul").append(str);
			
			
		})

	}
})
		
		if($("#number").html()<=0){
				$("#number").css("display","none");
			}
		
		
	};
	function addAndMin () {
		
		$(".sort2 ul").on("click",".add",function(){
			var count = $(this).parent().next().html();
			var count_num = parseInt($("#number").html());
			
			count++;
			count_num++;
			$(this).parent().next().next().children().css("display","block");
			 $(this).parent().next().css("display","block");
			 $(this).parent().next().html(count);
			$("#number").css("display","block");
			$("#number").html(count_num);
			
			if($(this).parent().parent().prev().prev().prev().html()=="undefined"){
				return;
			}
			var info={
				//img:$(".myimg").eq(i).attr("src"),
				img:$(this).parent().parent().prev().prev().prev().prev().children().attr("src"),
				//name:$(".name").eq(i).html(),
				name:$(this).parent().parent().prev().prev().prev().html(),
				//price:$(".price").eq(i).html(),
				price:$(this).parent().prev().prev().html(),
				num:count
			}
			
			
			localStorage.setItem(info.name,JSON.stringify(info));
			
			
		})
		
		$(".sort2 ul").on("click",".min",function(){
			var count = $(this).parent().prev().html();
			var count_num = parseInt($("#number").html());
			
			count--;
			count_num--;
		
			if(count <=0) {
				$(this).css("display","none");$(this).parent().prev().css("display","none");
				$(this).parent().prev().html(0);
			}
			
			if(count_num <=0){
			$("#number").css("display","none");
			$("#number").html(0);
			
			}
			$(this).parent().prev().html(count);
			
			$("#number").html(count_num);
			
			if($(this).parent().parent().prev().prev().prev().html()=="undefined"){
				return;
			}
			var info={
				//img:$(".myimg").eq(i).attr("src"),
				img:$(this).parent().parent().prev().prev().prev().prev().children().attr("src"),
				//name:$(".name").eq(i).html(),
				name:$(this).parent().parent().prev().prev().prev().html(),
				
				//price:$(".price").eq(i).html(),
				price:$(this).parent().prev().prev().prev().prev().html(),
				
				num:count
			}
			console.log(info);
			localStorage.setItem(info.name,JSON.stringify(info));
			
		})
			
		
		
		
		
		
		
		
		
		
		/*$.each($(".add"),function (i,ele) {
			
			$(ele).on("click",function () {
			var count = $(".num").eq(i).html();
			var count_num = parseInt($("#number").html());
			
			count++;
			count_num++;
			console.log(i,ele);
			$(".min").eq(i).css("display","block");
			$(".num").eq(i).css("display","block");
			$(".num").eq(i).html(count);
			$("#number").css("display","block");
			$("#number").html(count_num);
			
			var info={
				img:$(".myimg").eq(i).attr("src"),
				name:$(".name").eq(i).html(),
				price:$(".price").eq(i).html(),
				num:count
			}
			
			localStorage.setItem(info.name,JSON.stringify(info));
		})
		})
		*/
		
		/*$.each($(".min"),function (i,ele) {
			
			$(ele).on("click",function () {
			var count = $(".num").eq(i).html();
			var count_num = parseInt($("#number").html());
			
			count--;
			count_num--;
			console.log(i,ele);
			if(count <=0) {
				$(".min").eq(i).css("display","none");$(".num").eq(i).css("display","none");
				$(".num").eq(i).html(0);
			}
			
			if(count_num <=0){
			$("#number").css("display","none");
			$("#number").html(0);
			
			}
			$(".num").eq(i).html(count);
			
			$("#number").html(count_num);
			var info={
				img:$(".myimg").eq(i).attr("src"),
				name:$(".name").eq(i).html(),
				price:$(".price").eq(i).html(),
				num:count
			}
			
			localStorage.setItem(info.name,JSON.stringify(info));
			
		})
		})*/
		
		
		
	};
	
	
	return {
		render:render,
		getData:getData,
		addAndMin:addAndMin
		
	}
})







//热卖
/**/

/*$.ajax({
	type:"get",
	url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php",
	data:"category",
	async:true,
	success:function(req4){
		console.log(req4);
		var dataArr = JSON.parse(req4).data;
		$.each(dataArr,function(i,ele){

			var str="";
			str += "<li><div><img src='"+ele.img+"'></div>";
			str += "<h3>"+ele.name+"</h3>";
			if(ele.pm_desc ==""){
				str += "<p><span>精选</span><span style='display:none'></span></p>";
			}else{
				str += "<p><span>精选</span><span>"+ele.pm_desc+"</span></p>";
			}
			
			str +="<p>"+ele.specifics+"</p>";
			str +="<p><span>¥"+ele.price+"</span><span>¥"+ele.market_price+"</span></p></li>";
			
			$(".sort2 ul").append(str);
		})

	}
})*/