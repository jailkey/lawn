Seed({
		name : "Mold.GUI.Lawn.Components.FormInput",
		dna : "component",
		include : [
			"->Mold.DNA.Component",
			{ Element : "->Mold.Lib.Element" },
			{ Elements : "->Mold.Lib.Elements" }
		],
		directives : [
			{
				at : "element",
				name : "input",
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
	function(){

	}
)