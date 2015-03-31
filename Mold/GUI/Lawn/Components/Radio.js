Seed({
		name : "Mold.GUI.Lawn.Components.Radio",
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
				value : "radio",
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
		overlay.setAttribute("state", (element.checked) ? "checked" : "unchecked");

		overlay.css({
			left : position.left
		})

		var resetRadioGroup = function(){
			var name = element.getAttribute("name");
			var group = new Elements('input[name="' + name + '"][type="radio"]');
			
			group.each(function(selected){
				if(selected !== element){
					selected.removeAttribute("checked");
					selected.checked = false;
				}
			})
		}

		overlay.on("click", function(){
			resetRadioGroup();
			if(overlay.hasAttrValue("state", "unchecked")){
				overlay.setAttribute("state", "checked");
				element.setAttribute("checked", "checked");
			}
		})

		var testButton = function(value){
			console.log(element.getAttribute("checked"), element.getAttribute("checked"), value);
			if(element.getAttribute("checked") === "true" || element.getAttribute("checked") === "checked" || value){
				resetRadioGroup();
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

	}
);