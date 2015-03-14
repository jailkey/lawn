Seed({
		name : "Mold.GUI.Lawn.Loading",
		dna : "component",
		include : [
			"->Mold.DNA.Component",
			{ Element : "->Mold.Lib.Element" }
		],
		directives : [
			{
				at : "attribute",
				name : "state",
				value : "loading",
				watchable : true,
				collect : {
					attribute : [
						 "state"
					]
				}
			}
		]
	},
	function(node, element, collection){

		var _loader = false;
		
		var test = function(){
			if(_loader){
				_loader.remove();
				_loader = false;
			}
			if(element.getAttribute('state') === "loading"){
				_loader = new Element("x-loader");
				_loader.setAttribute("state", "default");
				element.append(_loader);
			}
		}

		collection.on("state.changed", function(){
			console.log("state changed")
		})
	
		Mold.watch(collection, 'state', test);

		test();
	}
)