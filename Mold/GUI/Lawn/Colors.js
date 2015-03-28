Seed({
		name : "Mold.GUI.Lawn.Colors",
		dna : "static",
		include : [
			"->Mold.Lib.CSS"
		]
	},
	function(){

		var css = new Mold.Lib.CSS();
		var primaryBackground = css.getRule('[has~="primary-color"]').style.color;

		return {
			"primaryBackground" : primaryBackground
		}
	}
)