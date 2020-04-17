# extendable-instantiation

Extend objects in a simple, reliable way

## Installation

`$ npm i -s extendable-instantiation`

## Get started

### Demonstration

This is a simple demonstrations of the default configurations:

```js
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
```

### Explanation

We pass 3 objects to the function: 
  - `base:Object`: the object to redefine.
  - `default:Object`: the object from which we pick default values.
  - `options:Object`: the object from which we pick the optional values.

Moreover, we have 2 parameters more to pass, optionally:
  - `mapper:Object`: object whose keys are properties of the `default` object, and whose values are properties of the `options` object.
  - `passDefaults:Boolean`: whether or not to apply the default algorythm to map `default` and `options`. Defaults to `true`.

The default mapper algorythm will pick the properties from `default` that start with `DEFAULT_`, and map them to the same property in `options`, but passed as `camelCase` instead. Also, the `__` can be used as array accessor to the next-level value, allowing property nesting just by the names of the variables in the `default` object.

This is how we get the demonstration work: with the default algorythm under the hood, doing some stuff for us.

## API

