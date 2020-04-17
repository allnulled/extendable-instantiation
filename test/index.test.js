const { expect } = require("chai");
const API = require(__dirname + "/../index.js");

describe("extendable-instantiation API", function() {
	
	this.timeout(1000 * 2);

	it("can inherit default properties and custom properties mixed", function() {
		this.timeout(1000 * 2);
		let o = {};
		API(o, {
			DEFAULT_OPTIONS: {opt1:1},
			DEFAULT_MESSAGE1: "Message",
			DEFAULT_MESSAGE: "Message",
			DEFAULT_OPTIONS__SETTINGS: {
				sets1:1,
				sets2:2
			},
			MY_CUSTOM_DEFAULTS: {
				msg1: "msg1",
				msg2: "msg2"
			}
		}, {
			message: "Otra cosa",
			options: {
				opt1:2,
				settings: {
					sets1: 2,
					sets3: 3
				}
			},
		}, {
			MY_CUSTOM_DEFAULTS: "customDefaults"
		}, true);
		expect(o).to.deep.equal({
			message1: "Message",
			message: "Otra cosa",
			options: {
				opt1: 2,
				settings: {
					sets1: 2,
					sets2: 2,
					sets3: 3,
				}
			},
			customDefaults: {
				msg1: "msg1",
				msg2: "msg2"
			}
		});
	});

});