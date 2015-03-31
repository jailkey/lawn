Seed({
		name : "Mold.GUI.Lawn.Components.OptionBar",
		dna : "component",
		include : [
			"->Mold.DNA.Component",
			{ Element : "->Mold.Lib.Element" },
			{ Elements : "->Mold.Lib.Elements" }
		],
		directives : [
			{
				at : "attribute",
				name : "is",
				value : "option-bar",
				watchable : true,
				collect : {
					attribute : [
						 "has"
					]
				}
			},
		]
	},
	function(node, element, collection){
		var buttons = new Elements('[is=button]', element);
	
		buttons.on("click", function(e){
			console.log("click")
			var selected =  new Element(this),
				state = selected.attr("state");

			if(selected.attr("disabled")){
				state = "disabled"
			}

			if(
				state !== "disabled" 
				&& state !== "loading"
			){

				if(element.hasAttrValue("has", "unique-values") || selected.hasAttrValue("has", "unique-values") ){

					buttons.removeAttrValue("state", "selected");
					selected.addAttrValue("state", "selected");
				}else{
					if(selected.hasAttrValue("state", "selected")){
						selected.removeAttrValue("state", "selected");
					}else{
						selected.addAttrValue("state", "selected");
					}
				}
			}
		});

		element.addMethod("getSelected", function(){
			var selected = [];
			Mold.each(buttons, function(button){
				var value = button.data("value");
				if(value){
					selected.push(value);
				}
			});
			return selected;
		});

	}
);

