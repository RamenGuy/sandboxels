function whenAvailable(names, callback) {
    var interval = 10; // ms
    window.setTimeout(function() {
		let bool = true;
		for(let i = 0; i < names.length; i++)
		{
			if(!window[names[i]])
			{
				bool = false;
			}
		}
        if (bool) {
            callback();
        } else {
            whenAvailable(names, callback);
        }
    }, interval);
}
var modName = "mods/ArgonMod.js";
whenAvailable(["runAfterAutogen"], function() {

    elements.argon = { 
        color: "#bababa",
        behavior: behaviors.GAS,
        colorOn: ["#ffaff8","#df88fc","#f842ff"],
        tempLow: -246,
        stateLow: "liquid_argon",
        category: "gases",
        density: 0.9002,
        state: "gas",
        conduct: 0.86,
    }
    
    elements.liquid_argon = {
        color: "#d1d1d1",
        behavior: behaviors.LIQUID,
        colorOn: ["#ffaff8","#df88fc","#f842ff"],
        temp: -247,
        tempHigh: -246,
        stateHigh: "argon",
        tempLow: -248.6,
        category: "states",
        hidden: true,
        density: 1207,
        state: "liquid",
        conduct: 0.83,
    }
});
