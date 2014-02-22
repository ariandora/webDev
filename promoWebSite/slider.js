function Slider(){
	$(".imgHolder#1").show("fade", 500);
	$(".imgHolder#1").delay(5500).hide("slide", {direction: "left"},500);

	var sc = $(".imgHolder img").size();
	var count = 1;

	setInterval(function (){
		$(".imgHolder#"+count).show("slide",{direction: "right"}, 500);
		$(".imgHolder#"+count).delay(5500).hide("slide", {direction: "left"},500);

		if (count == sc) {
			count = 1;
		}else {
			count = count + 1;
		}
	}, 6500);
}