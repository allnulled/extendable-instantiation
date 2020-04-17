
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




