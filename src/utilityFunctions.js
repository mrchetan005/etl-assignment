export const getObjectFields = (obj, key, id, defaultValue = '') => {
    return obj?.[key]?.reduce((accum, current) => {
        accum[current[id]] = defaultValue;
        return accum;
    }, {});
}

export const generateObject = (obj) => {
    return Object.keys(obj).reduce((accum, key) => {
        accum[key] = getObjectFields(obj, key, 'name');
        return accum;
    }, {})
}

export const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}