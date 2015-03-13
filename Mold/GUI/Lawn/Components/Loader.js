Seed({
		name : "Mold.GUI.Lawn.Components.Loader",
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
				watchable : true,
				collect : {
					attribute : [
						 "is",
						 "has",
						 "state"
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
						 "has",
						 "state"
					]
				}
			}
		]
	},
	function(node, element, collection){

		if(collection.is === "loader" || element.tagName.toLowerCase() === "x-loader"){
			if(!element.getAttribute("state")){
				element.setAttribute("state", "default");
				console.log("set state", element.getAttribute("state"))
			}


			var setLoader = function(){
				var state = element.getAttribute("state");
				
				//reset
				new Elements('.bounce-animation').remove();

				switch(state){
					case "default":
						break;
					case "bounce":
						var bounceOne = new Element("span");
						bounceOne.setAttribute("is", "bounce-animation");
						element.append(bounceOne);
						var bounceTwo = new Element("span");
						bounceTwo.setAttribute("is", "bounce-animation");
						element.append(bounceTwo);
						var bounceThree = new Element("span");
						bounceThree.setAttribute("is", "bounce-animation");
						element.append(bounceThree);
						break;
				}


			}

			setLoader();
			Mold.watch(element, "state", setLoader);
		}
	}
);