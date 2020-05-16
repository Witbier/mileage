export const getPathFromString = str => {

    if (typeof str !== 'string') return path;
    let res = [];
	str.split('.').forEach(item => {
    item.split(/\[([^}]+)\]/g).forEach( i=> {if (i.length > 0) res.push(i)})
        })
	return res;

}

export const  get = (obj, objPath, defaultVal) => {

	objPath = getPathFromString(objPath);
	let currObject = obj;


	for (i = 0; i < objPath.length; i++) {
		if (!currObject[objPath[i]]) return defaultVal;	
		currObject = currObject[objPath[i]];
	}
	return currObject;

}


















