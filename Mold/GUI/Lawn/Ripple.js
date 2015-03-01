Seed({
		name : "Mold.GUI.Lawn.Ripple",
		dna : "component",
		include : [
			"->Mold.DNA.Component",
			{ Element : "->Mold.Lib.Element" }
		],
		directives : [
			{
				at : "style-property",
				name : "-mold-ripple",
				collect : {
					attribute : [
						 "-mold-ripple"
					]
				}
			}
		]
	},
	function(node, element, collection){
		var _animation = false;
		
		element.on("mouseup", function(e){

			var helper = new Element("span");
			
			helper.addClass("ripple-helper");
			
			helper.css({
				left : (e.pageX - element.position().left - 10) ,
				top : (e.pageY - element.position().top - 10) 
			})

			element.append(helper);

			helper.animate({
				"transform" : "scale3d(5, 5, 5)",
				"opacity" : "1"
			}, 0.2, "ease-in").then(function(){
				helper.animate({
					"transform" : "scale3d(20, 20, 20)",
					"opacity" : "0"
				}, 1, "ease-out").then(function(){
					helper.remove();
					_animation = false;
				});
			});
			
		});

	}
)