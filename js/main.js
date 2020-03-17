window.onload = function(){
	$(document).ready(function(){
		//下载小米商城App二维码的显示和隐藏
		$(".header a:eq(11)").mouseenter(function(){
			$(".header ul img").slideDown(200)
		});
		$(".header a:eq(11)").mouseleave(function(){
			$(".header ul img").slideUp(200);
		});
		//导航栏经过购物车盒子的显示与隐藏,字体背景颜色图片的改变
		$(".divShopping").mouseenter(function(){
			$(this).css('background-color','whitesmoke');
			$(".divShopping span").css('color','orangered');
			$(".divShopping img").attr('src','img/购物车空 (8).png')
			$(".shoppContent").slideDown(300);
		});
		$(".divShopping").mouseleave(function(){
			$(this).css('background-color','#424242');
			$(".divShopping span").css('color','#b0b0b0');
			$(".divShopping img").attr('src','img/购物车空 (7).png')
			$(".shoppContent").slideUp(300);
		});
		//logo图标鼠标经过切换
		$(".headerNav img:eq(0)").mouseenter(function(){
			$(this).attr('src','img/小米logo2.png');
		});
		$(".headerNav img:eq(0)").mouseleave(function(){
			$(this).attr('src','img/小米logo1.png');
		});
		//搜索框下拉框的显示与隐藏
		$(".headerNav input").focus(function(){
			$(".headerNav a:eq(10)").hide();
			$(".headerNav a:eq(11)").hide();
		});
		$(".headerNav input").blur(function(){
			$(".headerNav a:eq(10)").show();
			$(".headerNav a:eq(11)").show();
		});
		$(".headerNav input").focus(function(){
			$(".searchUl").show();
		});
		$(".headerNav input").blur(function(){
			$(".searchUl").hide();
		});
		//导航栏菜单的显示与隐藏和图片的切换
		$(".headerNav a:eq(1)").mouseenter(function(){
			$(".navContent").slideDown(200);
			$(".divImg1 img:eq(0)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/be92bc4baa572bf467fc9e881fd4be2a.png?thumb=1&w=200&h=138&f=webp&q=90');
			$(".divImg1 img:eq(1)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41c566d825a3ae3b5751a78d4c7cffdb.png?thumb=1&w=200&h=138&f=webp&q=90');
			$(".divImg1 img:eq(2)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(3)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(4)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(5)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3b5e5829fdf92d54c167f4681531b535.png?thumb=1&w=200&h=138');
		});
		$(".headerNav a:eq(1)").mouseleave(function(){
			$(".navContent").slideUp(200);
		});
		
		$(".headerNav a:eq(2)").mouseenter(function(){
			$(".navContent").slideDown(200);
			$(".divImg1 img:eq(0)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=200&h=138&f=webp&q=90');
			$(".divImg1 img:eq(1)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90');
			$(".divImg1 img:eq(2)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/398311b2e6f47ac324ba0421a0ac1b80.png?thumb=1&w=200&h=138&f=webp&q=90');
			$(".divImg1 img:eq(3)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacd6a3d8440b7a038e9778702bd6db6.png?thumb=1&w=200&h=138&f=webp&q=90');
			$(".divImg1 img:eq(4)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1937ecb7e9b8e1aee11d6936e19d53c.png?thumb=1&w=200&h=138&f=webp&q=90');
			$(".divImg1 img:eq(5)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ee0af37bbd2f5a83c799e87dd791037.png?thumb=1&w=200&h=138&f=webp&q=90');
		});
		$(".headerNav a:eq(2)").mouseleave(function(){
			$(".navContent").slideUp(200);
		});
		
		$(".headerNav a:eq(3)").mouseenter(function(){
			$(".navContent").slideDown(200);
			$(".divImg1 img:eq(0)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=200&h=138&f=webp&q=90');
			$(".divImg1 img:eq(1)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(2)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a40904b6a053b73b631a152334388d0e.jpg?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(3)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(4)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bf72a3e9a6e799cb71ecfa7d80465351.jpg?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(5)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bd922870295a97a0972eaba5af92129e.jpg?thumb=1&w=200&h=138');
		});
		$(".headerNav a:eq(3)").mouseleave(function(){
			$(".navContent").slideUp(200);
		});
		
		$(".headerNav a:eq(5)").mouseenter(function(){
			$(".navContent").slideDown(200);
			$(".divImg1 img:eq(0)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03dc85cd792904ddc8027b2d781beed8.png?thumb=1&w=200&h=138&f=webp&q=90');
			$(".divImg1 img:eq(1)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e06b219c5bced9256467b17738a943c6.png?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(2)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c5d772b7c2a159c3ed7d4e31bd293f18.jpg?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(3)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11b8bca444aba2994fe852993eac9203.png?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(4)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/486a2a7359b6bda95b3dbd4e45b9c50a.jpg?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(5)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4ae019eebf10a55f8df2fee8d19b4e1f.jpg?thumb=1&w=200&h=138');
		});
		$(".headerNav a:eq(5)").mouseleave(function(){
			$(".navContent").slideUp(200);
		});
		
		$(".headerNav a:eq(6)").mouseenter(function(){
			$(".navContent").slideDown(200);
			$(".divImg1 img:eq(0)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa1e0a4860cf40d34e1192d86691c82c.png?thumb=1&w=200&h=138&f=webp&q=90');
			$(".divImg1 img:eq(1)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dd23c09b7eb6471968537fdce629194.png?thumb=1&w=200&h=138&f=webp&q=90');
			$(".divImg1 img:eq(2)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ec5be5f93ac0118aeec27b8df4337fc9.jpg?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(3)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/026a28fc18eff2cfa4d26a799a2da9cc.jpg?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(4)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28efac56ef4c4942077dac7e30e8c624.jpg?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(5)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3c3e9f61cc72ccd2a37fc90fed215b66.jpg?thumb=1&w=200&h=138');
		});
		$(".headerNav a:eq(6)").mouseleave(function(){
			$(".navContent").slideUp(200);
		});
		
		$(".headerNav a:eq(7)").mouseenter(function(){
			$(".navContent").slideDown(200);
			$(".divImg1 img:eq(0)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2a500be4264c692899b25d86c16403f7.jpg?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(1)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e3fb0886fdb13e5ae784b9713b9a0038.jpg?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(2)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5630aa997c82409ee33b2814c7eb2244.jpg?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(3)").attr('src','https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6e585a4bf5c0f744ca60f19ecd6fadf.jpg?thumb=1&w=200&h=138');
			$(".divImg1 img:eq(4)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17c0c91317ec0def3ecc072fa9480192.png?thumb=1&w=200&h=138&f=webp&q=90');
			$(".divImg1 img:eq(5)").attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff1254137246a22ad9eba80bd1c454c5.jpg?thumb=1&w=200&h=138&f=webp&q=90');
		});
		$(".headerNav a:eq(7)").mouseleave(function(){
			$(".navContent").slideUp(200);
		});
		
		//轮播图
		var index = 0;
		//自动轮播
		function autoplay(){
			var timer = setInterval(function(){
			index++;
			if(index > 4){
				index = 0;
			}
			$(".item").eq(index).fadeIn().siblings().fadeOut();
			$(".Dotlist ul li").eq(index).attr('id','apply').siblings().removeAttr('id');
		},5000);
	}
		autoplay();
		//右按钮
		$(".btnRight").click(function(){
			index++;
			if(index > 4){
				index = 0;
			}
			$('.item').eq(index).fadeIn(200).siblings().fadeOut(200);
			$(".Dotlist ul li").eq(index).attr('id','apply').siblings().removeAttr('id');
		});
		//左按钮
		$('.btnLeft').click(function(){
			index--;
			if(index < 0){
				index = 4
			}
			$('.item').eq(index).fadeIn().siblings(200).fadeOut(200);
			$(".Dotlist ul li").eq(index).attr('id','apply').siblings().removeAttr('id');
		});
		//点击底部按钮切换图片
		$('.Dotlist ul li').click(function(){
			index = $(this).index();
			$(this).attr('id','apply').siblings().removeAttr('id');
			$('.item').eq(index).fadeIn(200).siblings().fadeOut(200);
		});
	
		/*//鼠标悬停在图片上停止轮播
		$('.lunboBox').hover(function(){
			clearInterval(timer);      
		},autoplay);					//这里的参数是指鼠标移出轮播盒子后恢复轮播*/
		
		//轮播图左侧菜单栏内容的显示与隐藏
		$('.listMenu ul li:eq(0)').mouseenter(function(){
			$('.menuContent').show();
		});
		$('.listMenu ul li:eq(0)').mouseleave(function(){
			$('.menuContent').hide();
		});
		
		$('.listMenu ul li:eq(1)').mouseenter(function(){
			$('.menuContent1').show();
		});
		$('.listMenu ul li:eq(1)').mouseleave(function(){
			$('.menuContent1').hide();
		});
		
		$('.listMenu ul li:eq(2)').mouseenter(function(){
			$('.menuContent2').show();
		});
		$('.listMenu ul li:eq(2)').mouseleave(function(){
			$('.menuContent2').hide();
		});
		//右侧固定栏的颜色，图片，显示，隐藏操作
		$('.fixed1').mouseenter(function(){
			$('.fixedImg').show();
			$('.fixed1 img').attr('src','https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png');
			$('.fixed1 span').css('color','orangered');
		});
		$('.fixed1').mouseleave(function(){
			$('.fixedImg').hide();
			$('.fixed1 img').attr('src','https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png');
			$('.fixed1 span').css('color','gray');
		});
		$('.fixed2').mouseenter(function(){
			$('.fixed2 img').attr('src','https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png');
			$('.fixed2 span').css('color','orangered');
		});
		$('.fixed2').mouseleave(function(){
			$('.fixed2 img').attr('src','https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png');
			$('.fixed2 span').css('color','gray');
		});
		$('.fixed3').mouseenter(function(){
			$('.fixed3 img').attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png');
			$('.fixed3 span').css('color','orangered');
		});
		$('.fixed3').mouseleave(function(){
			$('.fixed3 img').attr('src','https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png');
			$('.fixed3 span').css('color','gray');
		});
		$('.fixed4').mouseenter(function(){
			$('.fixed4 img').attr('src','https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png');
			$('.fixed4 span').css('color','orangered');
		});
		$('.fixed4').mouseleave(function(){
			$('.fixed4 img').attr('src','https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png');
			$('.fixed4 span').css('color','gray');
		});
		$('.fixed5').mouseenter(function(){
			$('.fixed5 img').attr('src','https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png');
			$('.fixed5 span').css('color','orangered');
		});
		$('.fixed5').mouseleave(function(){
			$('.fixed5 img').attr('src','https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png');
			$('.fixed5 span').css('color','gray');
		});
		$('.fixed6').mouseenter(function(){
			$('.fixed6 img').attr('src','//i1.mifile.cn/f/i/2018/home/totop_hover.png');
			$('.fixed6 span').css('color','orangered');
		});
		$('.fixed6').mouseleave(function(){
			$('.fixed6 img').attr('src','//i1.mifile.cn/f/i/2018/home/totop.png');
			$('.fixed6 span').css('color','gray');
		});
		$(document).scroll(function(){				//给页面注册屏幕滚动事件
			var scroH = $(document).scrollTop();	//获得滚动条距顶部的距离
			if(scroH >= 1000){
				$('.fixed6').show();
			}else{
				$('.fixed6').hide();
			}
		});
		$('.fixed6').click(function(){				//注册点击事件回到顶部  
			$(document).body.scrollTop = document.documentElement.scrollTop = 0;//设置当前可见文档的滚动条距离顶部的距离为0
		});
		//闪购左右箭头切换
		$('.shangouBtnleft').mouseenter(function(){
			$('.shangouBtnleft img').attr('src','img/后退 (2).png');
		});
		$('.shangouBtnleft').mouseleave(function(){
			$('.shangouBtnleft img').attr('src','img/后退 (1).png');
		});
		$('.shangouBtnright').mouseenter(function(){
			$('.shangouBtnright img').attr('src','img/前进 (2).png');
		});
		$('.shangouBtnright').mouseleave(function(){
			$('.shangouBtnright img').attr('src','img/前进 (1).png');
		});
		$('.shangouBtnright').click(function(){
			$('.shangou1,.shangou2,.shangou3,.shangou4').hide(800);
			$('.shangou5,.shangou6,.shangou7,.shangou8').show(800);
		});
		$('.shangouBtnleft').click(function(){
			$('.shangou1,.shangou2,.shangou3,.shangou4').show(800);
			$('.shangou5,.shangou6,.shangou7,.shangou8').hide(800);
		});
		//闪购倒计时
			var timer1 = setInterval(function(){
			var date = new Date();     			//实例化一个时间日期对象
			var now = date.getTime();		  	//获取当前时间 总毫秒数
			var end = (new Date("2020/1/15 22:00:00")).getTime();//设置截止时间,将截至时间传参给日期函数并转换为毫秒赋值给变量
			var shicha = end - now;  						//获得时间差  ,总毫秒数
			var hours = Math.floor(shicha/1000/60/60%24);//进行取余取整，获得剩余小时
			var min  = Math.floor(shicha/1000/60%60);    //进行取余取整，获得剩余分钟
			var sec  = Math.floor(shicha/1000%60);		//进行取余取整，获得剩余秒数
			if(hours < 10){								//小时，分钟，秒数小于十进行补零
				hours = '0'+ hours;						
			}
			if(min < 10){								
				min = '0'+ min;
			}
			if(sec < 10){
				sec = '0'+ sec;
			}
			if(shicha > 0){
				$('.countDown a:eq(0)').html(hours);
				$('.countDown a:eq(1)').html(min);
				$('.countDown a:eq(2)').html(sec);
			}else{
				$('.endTitle').html('本场已结束')
				clearInterval(timer1);
			}
			},1000)
			$('.iphoneTitle a,img').mouseenter(function(){
				$('.iphoneTitle a').css('color','orangered');
				$('.iphoneTitle img').attr('src','img/309下一页、前进、查看更多-圆框 (1).png');
			});
			$('.iphoneTitle a,img').mouseleave(function(){
				$('.iphoneTitle a').css('color','#424242');
				$('.iphoneTitle img').attr('src','img/309下一页、前进、查看更多-圆框.png');
			});
			$('.shipinTitle a,img').mouseenter(function(){
				$('.shipinTitle a').css('color','#FF6700');
				$('.shipinTitle img').attr('src','img/309下一页、前进、查看更多-圆框 (1).png');
			});
			$('.shipinTitle a,img').mouseleave(function(){
				$('.shipinTitle a').css('color','#424242');
				$('.shipinTitle img').attr('src','img/309下一页、前进、查看更多-圆框.png');
			});
			//家电板块的鼠标移入移出操作
			$('.jiadianTitle ul li').mouseenter(function(){
				$(this).addClass('xuan1').siblings().removeClass('xuan1');
			});
			//视频模块
			$('.shipinli img:eq(1)').mouseenter(function(){
				$('.shipinli img:eq(1)').attr('src','img/播放 (1).png');
			});
			$('.shipinli img:eq(1)').mouseleave(function(){
				$('.shipinli img:eq(1)').attr('src','img/播放.png');
			});
			$('.shipinli img:eq(3)').mouseenter(function(){
				$('.shipinli img:eq(3)').attr('src','img/播放 (1).png');
			});
			$('.shipinli img:eq(3)').mouseleave(function(){
				$('.shipinli img:eq(3)').attr('src','img/播放.png');
			});
			$('.shipinli img:eq(5)').mouseenter(function(){
				$('.shipinli img:eq(5)').attr('src','img/播放 (1).png');
			});
			$('.shipinli img:eq(5)').mouseleave(function(){
				$('.shipinli img:eq(5)').attr('src','img/播放.png');
			});
			$('.shipinli img:eq(7)').mouseenter(function(){
				$('.shipinli img:eq(7)').attr('src','img/播放 (1).png');
			});
			$('.shipinli img:eq(7)').mouseleave(function(){
				$('.shipinli img:eq(7)').attr('src','img/播放.png');
			});
			
			$('#delete').mouseenter(function(){
				$(this).attr('src','img/删除 (1).png')
			});
			$('#delete').mouseleave(function(){
				$(this).attr('src','img/删除.png')
			});
			$('#delete').click(function(){
				$(this).hide();
				$('video').hide();
				$('video').load();
			});
			$('.shipinli img:eq(1)').click(function(){
				$('#video1').show();
				$('#delete').show();
			});
			$('.shipinli img:eq(3)').click(function(){
				$('#video2').show();
				$('#delete').show();
			});
			$('.shipinli img:eq(5)').click(function(){
				$('#video3').show();
				$('#delete').show();
			});
			$('.shipinli img:eq(7)').click(function(){
				$('#video4').show();
				$('#delete').show();
			});
			/*//底部的dom操作
			$('.foot1 img:eq(0),.foot1:eq(0)').mouseenter(function(){
				$('.foot1 img:eq(0)').attr('src','img/维修扳手 (1).png');
			});
			$('.foot1 img:eq(0),.foot1:eq(0)').mouseleave(function(){
				$('.foot1 img:eq(0)').attr('src','img/维修扳手.png');
			});*/
			$('.kefuBox').mouseenter(function(){
				$('.kefuBox span').css('color','white');
			});
			$('.kefuBox').mouseleave(function(){
				$('.kefuBox span').css('color','#ff6700');
			});
			$('.kefuBox').mouseenter(function(){
				$('.kefuBox img').attr('src','img/消息 (2).png');
			});
			$('.kefuBox').mouseleave(function(){
				$('.kefuBox img').attr('src','img/消息 (1).png');
			});
	});
}
