$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "80px","height":"60px", "transition": "1.5s"});

				$("header").css({"background-color": "#3c3c3c"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "250px","height":"250px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});

$(document).ready(function(){
console.log("index.php esta preparado para iniciar.");
});