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
		
		element.on("mousedown", function(e){
			
			if(
				element.getAttribute("state") !== "loading"
				&& element.getAttribute("disabled") == null
			){
				var helper = new Element("span"),
					properties = element.getAttribute("has"),
					growToStart = "scale3d(5, 5, 5)",
					growToEnd = "scale3d(20, 20, 20)",
					growTime = "0.9s";

				helper.css({
					left : (e.pageX - element.position().left - 10) ,
					top : (e.pageY - element.position().top - 10) 
				})

				if(properties){
					properties = properties.split(" ");
					
					if(Mold.contains(properties, "round-shapes")){
						
						growToStart = "scale3d(0.8, 0.8, 0.8)";
						growToEnd = "scale3d(5, 5, 5)";
						growTime = "0.6s";
					
						helper.css({
							left :  element.sizes().width / 2 - 10,
							top :  element.sizes().height / 2 - 10 
						})
					}
				}
				
				helper.addClass("ripple-helper");
				
				

				element.append(helper);
				console.log("growTime", growTime);

		

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