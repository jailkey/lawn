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
						 "is",
						 "has",
						 "state"
					]
				}
			},
		]
	},
	function(node, element, collection){


	}
);

