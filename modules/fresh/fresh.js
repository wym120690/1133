define(['text!./fresh.html','css!./fresh.css'],function (html) {
	function render () {
		$("#container").html("");
		$("#container").html(html);
		$("#footer").show();
		
		
		
	}
	
	function getData(){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php",
			async:true,
			success:function(req){
				var productArr = JSON.parse(req).product;
				$.each(productArr, function(i,ele) {
					console.log(ele.name);
					var str="";
					str+="<li><div><img class='myimg' src='"+ele.img+"'></div>";
					str+="<p class='name'>"+ele.name+"</p>";
					str+="<p><span class='price'>¥"+ele.price+"</span><span>"+ele.market_price+"</span></p>";
					str+="<span><img class='add_num' src='images/8_06.jpg'></span></li>";
					
					$(".nice_fruits ul").append(str);
				});
			}
		});
		
		
		
		
		
		
		
		
		
		
		
		
			
		
	};
	
	
	
function add(){
			var count = 0;
				for(keys in localStorage){
					var obj = JSON.parse(localStorage.getItem(keys));
					if(obj.name){
						
				
					count+= obj.num;
					}
				}
				if(count==0){
						console.log("haha");
						$("#number").hide();
				}
			$("#number").html(count);
			$(".nice_fruits ul").on("click",".add_num",function () {
			var cut = 0;
			count++;
			$("#number").show();
			$("#number").html(count);
			
			for(var keys in localStorage){
				var obj =JSON.parse(localStorage.getItem(keys));
				if(obj.name){
					
				
				if($(this).parent().prev().prev().html()== obj.name){
					cut = obj.num;
				}
				}
			}
			cut++;
			var info={
				img:$(this).parent().prev().prev().prev().children().attr("src"),
				name:$(this).parent().prev().prev().html(),
				price:$(this).parent().prev().children("span:first-of-type").html(),
				num:cut
			}
			localStorage.setItem(info.name,JSON.stringify(info));
		})
			
		};

	return{
		render:render,
		getData:getData,
		add:add
	}
})