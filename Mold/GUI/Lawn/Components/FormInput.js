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
		
		var highlighter = new Mold.Lib.Element("div");


		
		element.after(highlighter);

		var initHeightlighter = function(){
			console.log("init highlighter");

			var position = element.position(),
				sizes = element.sizes();


			highlighter.css({
				height : "3px",
				width : sizes.width + "px",
				position : "absolute",
				backgroundColor : Colors.primaryBackground,
				top : (position.top + sizes.height - (+element.css("marginBottom").replace("px", "")))+ "px",
				left : position.left + "px",
				transform : "scale3d(0, 1, 1)"
			});
		}

		var doc = new Mold.Lib.Element(window);

		doc.on("afterresize", function(){
			initHeightlighter();
		});

		doc.on("beforeresize", function(){
			highlighter.css({
				transform : "scale3d(0, 1, 1)"
			});
		})



		initHeightlighter();

		element.on("focus", function(){
			highlighter.animate({
				transform : "scale3d(1, 1, 1)"
			}, 0.4)
		});

		element.on("blur", function(){

			highlighter.animate({
				transform :  "scale3d(0, 1, 1)"
			}, 0.4)
		})

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