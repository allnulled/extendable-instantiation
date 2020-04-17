/**
 * 
 * ### `Instantiation($this:Object, $defaults:Object, $options:Object, $$mapper:Object|Boolean, $passDefault:Boolean)`
 * 
 * @name `Instantiation`
 * @type Function
 * @parameter
 * @parameter  - `$this:Object`. **Required**. Object to be extended or fixed. 
 * @parameter  - `$defaults:Object`. **Required**. Object that contains default values (among others).
 * @parameter  - `$options:Object`. **Required**. Object that contains optional values (among others).
 * @parameter  - `$$mapper:Object|Boolean`. **Optional**. Object that explains how to map default and optional values. 
 * @parameter  - `$passDefault:Boolean`. **Optional**. Whether or not to extend the basic object with the default algorythm of extension. Default: `true`.
 * @throws 
 * @throws  - `Error` when a property in `$$mapper` is not found, either in `$defaults` (on keys) or in `$options` (on values)
 * @throws  - `Error` when a property in `$$mapper` values could not be set to `$this`.
 * @returns `$this:Object`. The updated object.
 * @description 
 * 
 * 
 */
const Instantiation = ($this, $defaults, $options, $$mapper = false, $passDefaults = true) => {
    Object.assign($this, $options);
    let $mapper = (!$passDefaults )? {} : Object.getOwnPropertyNames($defaults).reduce((output, property) => {
        const propertyValue = $defaults[property];
        if ($passDefaults && property.startsWith("DEFAULT_")) {
            if (typeof propertyValue === "object") {
                output[property] = property.substr(8).toLowerCase()
                    .replace(/__/g, (match) => "/")
                    .replace(/_([A-Za-z])/g, (match, token) => token.toUpperCase());
            } else {
                output[property] = property.substr(8).toLowerCase()
                    .replace(/__/g, (match) => "/")
                    .replace(/_([A-Za-z])/g, (match, token) => token.toUpperCase());
            }
        }
        return output;
    }, {});
    $mapper = $$mapper ? Object.assign({}, $mapper, $$mapper) : $mapper;
    Object.keys($mapper).forEach(sourceProperty => {
        const destinationProperty = $mapper[sourceProperty];
        let defaultValue = getProperty($defaults, sourceProperty);
        let optionValue = getProperty($options, destinationProperty);
        let destinationValue = getProperty($this, destinationProperty);
        if (typeof defaultValue === "object") {
            setProperty($this, destinationProperty, Object.assign({}, destinationValue, defaultValue, optionValue || {}));
        } else {
            setProperty($this, destinationProperty, typeof optionValue !== "undefined" ? optionValue : defaultValue);
        }
    });
    return $this;
}
/**
 * 
 * ### `Instantiation.setProperty(base:Object, selector:Array<String>, value:Any, splitter:String)`
 * 
 * @name `Instantiation.setProperty`
 * @type Function
 * @parameter
 * @parameter  - `base:Object`. 
 * @parameter  - `selector:Array<String>`. 
 * @parameter  - `value:Any`. 
 * @parameter  - `splitter:String`. 
 * @throws 
 * @throws  - `error:Error`:
 * @throws  - `error:Error`:
 * @returns
 * @description 
 * 
 * 
 */
const setProperty = (base, selector, value, splitter = "/") => {
    let out = base;
    const selectorItems = selector.split(splitter);
    const max = selectorItems.length;
    for (var index = 0; index < selectorItems.length; index++) {
        const selectorItem = selectorItems[index];
        if (typeof out !== "object") {
            throw new Error(`Property <${selectorItems.splice(0, index).join("/")}> of argument 1 must be an object to <setProperty>`);
        }
        if (index === (max - 1)) {
            out[selectorItem] = value;
        } else if (!(selectorItem in out)) {
            throw new Error(`Missing property <${selectorItems.splice(0, index+1).join("/")}>`);
        } else {
            out = out[selectorItem];
        }
    }
}

/**
 * 
 * ### `Instantiation.getProperty(base:Object, selector:Array<String>, defaultValue:Any, splitter:String)`
 * 
 * @name `Instantiation.getProperty`
 * @type Function
 * @parameter
 * @parameter  - `base:Object`.
 * @parameter  - `selector:Array<String>`.
 * @parameter  - `defaultValue:Any`.
 * @parameter  - `splitter:String`.
 * @throws 
 * @throws  - `error:Error`:
 * @throws  - `error:Error`:
 * @returns
 * @description 
 * 
 * 
 */
const getProperty = (base, selector, defaultValue = undefined, splitter = "/") => {
    let out = base;
    const selectorItems = selector.split(splitter);
    for (var index = 0; index < selectorItems.length; index++) {
        const selectorItem = selectorItems[index];
        if (typeof out !== "object") {
            throw new Error(`Property <${selectorItems.splice(0, index).join("/")}> of argument 1 must be an object to <getProperty>`);
        }
        if (!(selectorItem in out)) {
            return defaultValue;
        }
        out = out[selectorItem];
    }
    return out;
}
Instantiation.getProperty = getProperty;
Instantiation.setProperty = setProperty;
module.exports = Instantiation;