Seed({
		name : "Mold.GUI.Lawn.Components.Loader",
		dna : "component",
		include : [
			"->Mold.DNA.Component",
			{ Element : "Mold.Lib.Element" }
		],
		directives : [
			{
				at : "attribute",
				name : "is",
				watchable : true,
				collect : {
					attribute : [
						 "is",
						 "has"
					]
				}
			},
			{
				at : "element",
				name : "x-loader",
				watchable : true,
				collect : {
					attribute : [
						 "is",
						 "has"
					]
				}
			}
		]
	},
	function(node, element, collection){
		if(collection.is === "loader" || element.tagName.toLowerCase() === "x-loader"){
			var bounceOne = new Element("span");
			bounceOne.setAttribute("is", "bounce-animation");

			element.append(bounceOne);

			var bounceTwo = new Element("span");
			bounceTwo.setAttribute("is", "bounce-animation");

			element.append(bounceTwo);

			var bounceThree = new Element("span");
			bounceThree.setAttribute("is", "bounce-animation");

			element.append(bounceThree);
		}
	}
);