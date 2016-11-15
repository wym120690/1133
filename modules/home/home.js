define(['text!./home.html','css!./home.css'],function (html) {
	function render (){
		$("#container").html("");
		$("#container").html(html);
		$("#footer").show();
	
	}
	
	function getData(){
			
			$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
			async:true,
			success:function(req1){
		
			var obj1 =JSON.parse(req1);
		
			var slideArr = obj1.data.slide;
	
			//轮播图图片获取
			$.each(slideArr,function(i,ele){
				
				if(i==5){
					$("#banner").prepend("<img src='"+ele.activity.img+"' class='lb lb'>"+(i+1)+"' le = '-100'/>");
				}else{
					$("#banner").prepend("<img src='"+ele.activity.img+"' class='lb lb'>"+(i+1)+"' le = '" +i*100+"'/>");
				}
			})//遍历
	
			//菜单图片获取
			var menuArr = obj1.data.menu;
			$.each(menuArr,function(i,ele){
				// console.log(ele.activity.img);
				$("#menu ul li").eq(i).prepend("<img src='"+ele.activity.img+"'/>");
			})//遍历
	
		}//success
	})
	};
	
	function swiper(){
		var index = 0;
		var arr=[-100,0,100,200,300,400];
		clearInterval(timer);
		var timer = setInterval(function(){
			for (var i = 0; i < $(".lb").length; i++) {
				 $(".lb").eq(i).attr("le",arr[i]);
				 $(".lb").eq(i).css("left",arr[i]+"%");
				 arr[i] -= 100;
					if(arr[i]<-100){
						arr[i] = 300;
					}
				};
				console.log(arr);
			$("#lunbo_btn span").removeClass("lbbtnactive");
			if(index == 4) {
				index = -1;
			}
			index++;
			$("#lunbo_btn span").eq(index).addClass("lbbtnactive");
			flag=true;
		},3000)
		//zpeto 
		$("#banner").on("swipeLeft",function(){
			console.log("to left");
			clearInterval(timer);
			console.log("to right");
		if(flag2) {
			for (var i = 0; i < arr.length; i++) {
				 arr[i]-=100;
				if(arr[i]<-100){
						arr[i] = 300;
					}
				};
				flag2 = false;
			}
			for (var i = 0; i < arr.length; i++) {
				 $(".lb").eq(i).attr("le",arr[i]);
				 $(".lb").eq(i).css("left",arr[i]+"%");
				 	arr[i]-=100;
					if(arr[i]<-100){
						arr[i] = 300;
					}
			};
			$("#lunbo_btn span").removeClass("lbbtnactive");
			
			if(index == 4) {
				index = -1;
			}
			index++;
			$("#lunbo_btn span").eq(index).addClass("lbbtnactive");
			flag1=true;
		})

		var flag1 = true;
		var flag2 =false;
		$("#banner").on("swipeRight",function(){
			console.log("to right");
		if(flag1) {
			for (var i = 0; i < arr.length; i++) {
				
				 arr[i]+=100;
				if(arr[i]>300){
						arr[i] = -100;
					}
				};
				flag1 = false;
		}
			
			for (var j = 0; j < arr.length; j++) {
				 arr[j]+=100;
				if(arr[j]>300){
						arr[j] = -100;
					}	
				 $(".lb").eq(j).attr("le",arr[j]);
				 $(".lb").eq(j).css("left",arr[j]+"%");
			};
			console.log(arr);
			$("#lunbo_btn span").removeClass("lbbtnactive");
			
			if(index == 0) {
				index = 5;
			}
			index--;
			$("#lunbo_btn span").eq(index).addClass("lbbtnactive");
			flag2=true;
			
		})
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
			
			
			
			$.each($(".add_num"),function (i,ele) {
			
			$(ele).on("click",function () {
			var cut = 0;
			count++;
			$("#number").show();
			$("#number").html(count);
			
			for(var keys in localStorage){
				var obj =JSON.parse(localStorage.getItem(keys));
				if(obj.name){
					if($(".name").eq(i).html()== obj.name){
					cut = obj.num;
					
				}
				}
				
				
			}
			cut++;
			
			var info={
				img:$(".myimg").eq(i).attr("src"),
				name:$(".name").eq(i).html(),
				price:$(".price").eq(i).html(),
				num:cut
			}
			
			localStorage.setItem(info.name,JSON.stringify(info));
			
		})
		})
		
			
			
			
		};
	
	return{
		render:render,
		getData:getData,
		swiper:swiper,
		add:add
	}
})

