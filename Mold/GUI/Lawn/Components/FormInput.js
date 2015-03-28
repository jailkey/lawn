Seed({
		name : "Mold.GUI.Lawn.Components.FormInput",
		dna : "component",
		include : [
			"->Mold.DNA.Component",
			"->Mold.Lib.CSS",
			{ Colors : "Mold.GUI.Lawn.Colors" },
		],
		directives : [
			{
				at : "element",
				name : "input"
			},
			{
				at : "element",
				name : "textarea"
			}
		]
	},
	function(node, element, collection){

		var hasAbreastParent = element.parent('[has~="abreast-labels"]');

		var newStyle = new Mold.Lib.CSS(function(){/*|

			{{selector}} {
				box-shadow: inset {{width}}px 0 0 0 #fff, inset -{{width}}px 0 0 0 #fff, inset 0 -2px 0 {{color}};
				transition: box-shadow 0.3s ease-in, border-color 0.3s ease-out;
			}

			{{selector}}:empty:focus {
				box-shadow: inset 0 0 0 0 #fff,  inset  0 0 0 0 #fff, inset 0 -2px 0  {{color}};
			}	

			|*/}
		);
		
		newStyle.append({
			width : (element.sizes().width / 2),
			color : Colors.primaryBackground,
			selector : element.getSelector()
		});

		if(!hasAbreastParent){
	
			var label = element.previous();
			if(label.nodeName.toLowerCase() === "label"){
				
				label.css({
					"opacity" : "0",
					"position" : "relative",
					"bottom" : "-5px"
				});

				element.on("focus", function(){
					label.animate({
						"opacity" : "1",
						"bottom" : "0px"
					}, 0.2, 'ease-in', 0.2)
				})

				element.on("blur", function(){
					label.animate({
						"opacity" : "0",
						"bottom" : "-5px"
					}, 0.2, 'ease-in', 0)
				})
			}
			//element.on("focuse")
		}


	}
)