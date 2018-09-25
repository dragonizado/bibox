
const position_cloud = [
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

const postion_stars = [
	{
		"left":"78",
		"top":"495"
	},
	{
		"left":"266",
		"top":"370"
	},
	{
		"left":"660",
		"top":"561"
	},
	{
		"left":"1199",
		"top":"437"
	},
	{
		"left":"342",
		"top":"159"
	},
	{
		"left":"975",
		"top":"43"
	},
];

$(document).ready(function(){
	$("#canvas_video img").each(function(index,data){
		// var l = Math.floor(Math.random() * $("#canvas_video").width());
		// var t = Math.floor(Math.random() * $("#canvas_video").height());
		var	l = position_cloud[index].left+"px";
		var	t = position_cloud[index].top+"px";

		$(this).css("left", l);
		$(this).css("top", t);
	});

	$("#canvas_video_stars img").each(function(index,data){
		// var l = Math.floor(Math.random() * $("#canvas_video_stars").width());
		// var t = Math.floor(Math.random() * $("#canvas_video_stars").height());

		var	l = postion_stars[index].left+"px";
		var	t = postion_stars[index].top+"px";

		$(this).css("left", l);
		$(this).css("top", t);
	});
});
