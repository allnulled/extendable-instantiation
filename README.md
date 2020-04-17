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



#### `Instantiation(this:Object, defaults:Object, options:Object, mapper:Object|Boolean, passDefault:Boolean)`



**Name**:  `Instantiation`


**Type**:  Function


**Parameter**: 


  - `this:Object`. **Required**. Object to be extended or fixed. 


  - `defaults:Object`. **Required**. Object that contains default values (among others).


  - `options:Object`. **Required**. Object that contains optional values (among others).


  - `mapper:Object|Boolean`. **Optional**. Object that explains how to map default and optional values. 


  - `passDefault:Boolean`. **Optional**. Whether or not to extend the basic object with the default algorythm of extension. Default: `true`.


**Throws**:  


  - `Error` when a property in `mapper` is not found, either in `defaults` (on keys) or in `options` (on values)


  - `Error` when a property in `mapper` values could not be set to `this`.


**Returns**:  `this:Object`. The updated object.


**Description**:  





#### `Instantiation.setProperty(base:Object, selector:String, value:Any, splitter:String)`



**Name**:  `Instantiation.setProperty`


**Type**:  Function


**Parameter**: 


  - `base:Object`. **Required**. Object to alter.


  - `selector:String`. **Required**. Property to alter. Property `splitter` determines the splitter token.


  - `value:Any`. **Required**. Value to set.


  - `splitter:String`. **Optional**. Token to split the selector into parts. By default: `/`


**Throws**:  


  - `Error` when a property should be accessible as object, and it is not.


  - `Error` when a property should exist in object, and it does not.


**Returns**:  `undefined`


**Description**:  Sets the property selected (by `selector`) to the value passed (by `value`) in base object (`base`). The selector can be customized (by `splitter`).




#### `Instantiation.getProperty(base:Object, selector:String, defaultValue:Any, splitter:String)`



**Name**:  `Instantiation.getProperty`


**Type**:  Function


**Parameter**: 


  - `base:Object`. **Required**. Object from which to get the data.


  - `selector:String`. **Required**. Property to get.


  - `defaultValue:Any`. **Required**. Default value, when a property is not found.


  - `splitter:String`. **Optional**. Token to split the selector into parts. By default: `/`


**Throws**:  


  - `Error` when a property should be accessible as object, and it is not.


**Returns**:  `selection:Any`


**Description**:  Gets the property selected (by `selector`) from the base object (`base`) or the value passed (by `defaultValue`). The selector can be customized (by `splitter`).






## License

This project is under [WTFPL or *What The Fuck Public License*](), which means *do whatever you want with it*.

## Issues

Plese, address your issues and suggestions at the [Issues](#) form of the Github project.
