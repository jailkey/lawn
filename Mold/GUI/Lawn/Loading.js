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
			if(element.getAttribute('state') === "loading"){
				_loader = new Element("x-loader");
				element.append(_loader);
			}else{
				if(_loader){
					_loader.remove();
				}
			}
		}


		Mold.watch(collection, 'state', test);

		test();
	}
)