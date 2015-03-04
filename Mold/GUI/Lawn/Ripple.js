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
		var helper = false,
			growToStart = "scale3d(0.8, 0.8, 0.8)",
			growToEnd = "scale3d(20, 20, 20)",
			growTime = "0.9",
			opacity = "0.9",
			shrinkTime = "0.3";

		element.on("mousedown", function(e){

			if(helper){
				helper.remove();
			}

			helper = new Element("span");
			
			var properties = element.getAttribute("has");
			
			if(
				element.getAttribute("state") !== "loading"
				&& element.getAttribute("disabled") == null
			){
				
				helper.css({
					left : (e.pageX - element.position().left - 10) ,
					top : (e.pageY - element.position().top - 10) 
				})

				if(properties){
					properties = properties.split(" ");
					
					if(Mold.contains(properties, "round-shapes")){
						
						growToEnd = "scale3d(3, 3, 3)";
						growTime = "0.3";
						opacity = "0.7";
					
						helper.css({
							left :  element.sizes().width / 2 - 10,
							top :  element.sizes().height / 2 - 10 
						})
					}
				}
				
				helper.addClass("ripple-helper");

				element.append(helper);

				helper.animate({
					"transform" : growToEnd,
					"opacity" : opacity
				}, growTime, "ease-out");

			}
			
		});
	
		element.on("mouseup", function(e){

			if(helper){
				console.log("mouseup")
				helper.animate({
					"transform" : growToStart,
					"opacity" : "0"
				}, shrinkTime, "ease-in").then(function(){
					
					helper.remove();
					helper = false;
				});
			}

		});
	

	}
)