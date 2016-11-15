define(['text!./cart.html','css!./cart.css'],function (html) {
	function render(){
		$("#container").html("");
		$("#container").html(html);
		$("#footer").show();
	}
	
	
	function storage(){
		
		var sum_price = 0;
		for(var keys in localStorage){
			var obj = JSON.parse(localStorage.getItem(keys));
			if(obj.name){
			var sump=0;
	
			if(obj.num==0){
				localStorage.removeItem(obj.name);
				continue;
			}
				
		
					sump = parseFloat((obj.price).substring(1))*obj.num;
				
				
			
		
			
			sum_price += sump;
			
			var str = ""; 
			str+="<li><div class='ck'><img class='cked' src='images/3_06.jpg'></div><img class='myimg' src='"+obj.img+"'>";
			str +="<div><p class='name'>"+obj.name+"</p><p class = 'price'>"+obj.price+"</p></div>";
			str+="<div class='sum'><span><img class ='min'src='images/3_09.jpg' ></span><span class='num'>"+ obj.num +"</span><span><img class='add' src='images/3_11.jpg'></span></div>"
			$("#list").prepend(str);
			}
			
		}
		$(".sum_price").html(parseFloat(sum_price).toFixed(2));
	}
	
	function addAndMin () {
		
			
			if($("#number").html()<=0){
			
				$("#number").css("display","none");
			}
			
		$.each($(".add"),function (i,ele) {
			
			$(ele).on("click",function () {
			var count = $(".num").eq(i).html();
			var count_num = parseInt($("#number").html());
			
			count++;
			count_num++;
			console.log(i,ele);
		
			$(".num").eq(i).html(count);
			
			$("#number").html(count_num);
			
			var info={
				img:$(".myimg").eq(i).attr("src"),
				name:$(".name").eq(i).html(),
				price:$(".price").eq(i).html(),
				num:count
			}
			
			localStorage.setItem(info.name,JSON.stringify(info));
			var sum_price = parseFloat($(".sum_price").html());
			var sump=parseFloat(info.price.substring(1));
			console.log(sum_price,sump)
			
			var sum = (sum_price+sump).toFixed(2);
			 $(".sum_price").html(sum);
		})
		})
		
		
		$.each($(".min"),function (i,ele) {
			
			$(ele).on("click",function () {
			var count = $(this).parent().next().html();
			var count_num = parseInt($("#number").html());
			console.log(count)
			count--;
			count_num--;
			
			var sum_price = parseFloat($(".sum_price").html());
			var sump=parseFloat($(this).parent().parent().prev().children(".price").html().substring(1));
			console.log(sum_price,sump)
			
			var sum = (sum_price-sump).toFixed(2);
			
			if(count <=0) {
				
				//console.log($(this).parent().parent().prev().children(".name").html());
				localStorage.removeItem($(this).parent().parent().prev().children(".name").html());
				$(this).parent().parent().parent().remove();
			}
			
			if(count_num <=0){
			$("#number").css("display","none");
			$("#number").html(0);
			
			}
			$(this).parent().next().html(count);
			
			$("#number").html(count_num);
			
			var info={
				img:$(".myimg").eq(i).attr("src"),
				name:$(".name").eq(i).html(),
				price:$(".price").eq(i).html(),
				num:count
			}
			
			console.log(info);
			 $(".sum_price").html(sum);
			localStorage.setItem(info.name,JSON.stringify(info));
			
			
			
		})
		})
		
		
		
	};
	
	function allChoose () {
		$(".ck").on("click",function(){
			
			if($(this).children().css("visibility")=="visible"){
				$(this).children().css("visibility","hidden");	
				$("#cked").css("visibility","hidden");
			var pri = parseFloat($(this).siblings("div:nth-of-type(2)").children(".price").html().substring(1));
			var n = $(this).siblings(".sum").children(".num").html();
			
			console.log(pri,n);
			var sum = pri*n;

			
			
			var sum_price = $(".sum_price").html();
			console.log(sum_price,sum);
			
			$(".sum_price").html((sum_price-sum).toFixed(2));
			console.log($(".cked:hidden").length,$(".cked").length)
			}else{
			
			
			
			$(this).children().css("visibility","visible");	
			console.log($(".cked:hidden").length,$(".cked").length);
//			if($(".cked:visible").length == $(".cked").length){
//				$("#cked").css("visibility","visible");
//			}
			var pri = parseFloat($(this).siblings("div:nth-of-type(2)").children(".price").html().substring(1));
			var n = $(this).siblings(".sum").children(".num").html();
			
			console.log(pri,n);
			var sum = pri*n;

			
			
			var sum_price = parseFloat($(".sum_price").html());
			console.log(sum_price,sum);
			
			$(".sum_price").html((sum_price+sum).toFixed(2));
		}
			
		})
		
		
		
	}
	
	return{
		render:render,
		storage:storage,
		addAndMin:addAndMin,
		allChoose:allChoose
		
	}
})
