Seed({
		name : "Mold.GUI.Lawn.Components.Checkbox",
		dna : "component",
		include : [
			"->Mold.DNA.Component",
			{ Element : "->Mold.Lib.Element" },
			{ Elements : "->Mold.Lib.Elements" }
		],
		directives : [
			{
				at : "attribute",
				name : "type",
				value : "checkbox",
				watchable : true,
				collect : {
					attribute : [
						"checked"
					]
				} 
			}
		]
	},
	function(node, element, collection){
		
		var overlay = new Mold.Lib.Element("span"),
			position = element.position(true),
			size = element.sizes();

		overlay.setAttribute("is", "checkbox-overlay");
		overlay.setAttribute("has", "icon-check")
		overlay.setAttribute("state", (element.checked) ? "checked" : "unchecked");

		overlay.css({
			left : position.left
		})

	
		overlay.on("click", function(){
			if(overlay.hasAttrValue("state", "unchecked")){
				overlay.setAttribute("state", "checked");
				element.setAttribute("checked", "checked");
			}else{
				overlay.setAttribute("state", "unchecked");
				element.removeAttribute("checked", "checked");
			}
		})

		var testButton = function(value){

			if(element.getAttribute("checked") === "true" || element.getAttribute("checked") === "checked" || value){
				overlay.setAttribute("state", "checked");
			}else{
				overlay.setAttribute("state", "unchecked");
			}
		}

		collection.on("checked.changed", function(e){
			testButton();
		})

		Mold.watch(element, "checked", function(obj, prop, oldVal, val){
			testButton(oldVal);
		}, true);

		element.before(overlay);
		element.css({
			display : "none"
		})
	}
);