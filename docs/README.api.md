
### `Instantiation($this:Object, $defaults:Object, $options:Object, $$mapper:Object|Boolean, $passDefault:Boolean)`



**Name**:  `Instantiation`


**Type**:  Function


**Parameter**: 


  - `$this:Object`. **Required**. Object to be extended or fixed. 


  - `$defaults:Object`. **Required**. Object that contains default values (among others).


  - `$options:Object`. **Required**. Object that contains optional values (among others).


  - `$$mapper:Object|Boolean`. **Optional**. Object that explains how to map default and optional values. 


  - `$passDefault:Boolean`. **Optional**. Whether or not to extend the basic object with the default algorythm of extension. Default: `true`.


**Throws**:  


  - `Error` when a property in `$$mapper` is not found, either in `$defaults` (on keys) or in `$options` (on values)


  - `Error` when a property in `$$mapper` values could not be set to `$this`.


**Returns**:  `$this:Object`. The updated object.


**Description**:  





### `Instantiation.setProperty(base:Object, selector:Array<String>, value:Any, splitter:String)`



**Name**:  `Instantiation.setProperty`


**Type**:  Function


**Parameter**: 


  - `base:Object`. 


  - `selector:Array<String>`. 


  - `value:Any`. 


  - `splitter:String`. 


**Throws**:  


  - `error:Error`:


  - `error:Error`:


**Returns**.


**Description**:  





### `Instantiation.getProperty(base:Object, selector:Array<String>, defaultValue:Any, splitter:String)`



**Name**:  `Instantiation.getProperty`


**Type**:  Function


**Parameter**: 


  - `base:Object`.


  - `selector:Array<String>`.


  - `defaultValue:Any`.


  - `splitter:String`.


**Throws**:  


  - `error:Error`:


  - `error:Error`:


**Returns**.


**Description**:  




