$(function(){

	var position = 0; //current status of side menu, 0 = closed, 1 = open
	var speed = 150; //in ms

	$('#responsive-btn').click(function(){
		if(position == 0){
			$('nav#left').animate({"left": '+=240px'}, speed);
			$('#wrapper').animate({"left": '+=240px'}, speed);
			$('#responsive-btn').animate({"left": '+=240px'}, speed);
			position = 1;
		}else{
			$('nav#left').animate({"left": '-=240px'}, speed);
			$('#wrapper').animate({"left": '-=240px'}, speed);
			$('#responsive-btn').animate({"left": '-=240px'}, speed);
			position = 0;
		}
	});
});