const {
	expect
} = require("chai");

describe("readme examples", function() {

	this.timeout(1000 * 2);

	it("first example works", function() {

		class X {

			static get DEFAULT_OPTIONS() {
				return {
					optionOne: "one",
					optionTwo: "two",
					optionThree: "three",
				};
			}

			static get DEFAULT_OPTIONS__SETTINGS() {
				return {
					configurationOne: "one",
					configurationTwo: "two",
					configurationThree: "three"
				};
			}

			static get DEFAULT_OPTIONS__SETTINGS__PREFERENCES() {
				return {
					preference1: "one",
					preference2: "two",
					preference3: "three",
				}
			}

			constructor(options = {}) {
				require(__dirname + "/../index.js")(this, this.constructor, options);
			}

		}

		const x = new X({
			options: {
				optionOne: "one hundred",
				settings: {
					configurationOne: "one thousand"
				}
			}
		});

		expect(x).to.deep.equal({
			options: {
				optionOne: "one hundred",
				optionTwo: "two",
				optionThree: "three",
				settings: {
					configurationOne: "one thousand",
					configurationTwo: "two",
					configurationThree: "three",
					preferences: {
						preference1: "one",
						preference2: "two",
						preference3: "three",
					}
				}
			}
		});

		console.log(JSON.stringify(x, null, 4));

	});

});