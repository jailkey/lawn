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
		
		element.on("click", function(e){
			
			if(
				element.getAttribute("state") !== "loading"
				&& element.getAttribute("disabled") == null
			){
				var helper = new Element("span"),
					properties = element.getAttribute("has"),
					growToStart = "scale3d(5, 5, 5)",
					growToEnd = "scale3d(20, 20, 20)",
					growTime = "0.9s",
					position = element.position(),
					sizes = element.sizes();

				helper.css({
					width : (sizes.width / 10) + "px",
					height : (sizes.width / 10) + "px",
					left : (e.pageX - position.left - 10) ,
					top : (e.pageY - position.top - 10) 
				});

				if(properties){
					properties = properties.split(" ");
					
					if(Mold.contains(properties, "round-shapes")){
						growTime = "0.6s";
					}
				};
				
				helper.addClass("ripple-helper");

				element.append(helper);

				helper.animate([
					{
						step : '10%',
						style : {
							"transform" : growToStart,
							"opacity" : "0.9"
						},
					},
					{
						step : '100%',
						style : { 
							"transform" : growToEnd,
							"opacity" : "0"
						}
					}
				], growTime , "ease-out")
				.then(function(){
					helper.remove();	
				});
			}
			
		});

	}
)