
let position = [
	{
		"left":"466",
		"top":"380",
	},
	{
		"left":"513",
		"top":"38",
	},
	{
		"left":"1042",
		"top":"516",
	},
	{
		"left":"187",
		"top":"474",
	},
	{
		"left":"1279",
		"top":"454",
	},
	{
		"left":"73",
		"top":"83",
	},
	{
		"left":"168",
		"top":"613",
	},
	{
		"left":"961",
		"top":"171",
	},
	{
		"left":"22",
		"top":"288",
	},
	{
		"left":"676",
		"top":"280",
	},
	{
		"left":"1214",
		"top":"15",
	},
	{
		"left":"910",
		"top":"605",
	},
	{
		"left":"1196",
		"top":"285",
	}
];

$(document).ready(function(){
	$("#canvas_video img").each(function(index,data){
		var l = Math.floor(Math.random() * $("#canvas_video").width());
		var t = Math.floor(Math.random() * $("#canvas_video").height());
		// var	l = position[index].left+"px";
		// var	t = position[index].top+"px";

		// alert("left="+l+"  top="+t);



		$(this).css("left", l);
		$(this).css("top", t);
	});
});
