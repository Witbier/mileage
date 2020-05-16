import pathFromString from "./.internal/pathFromString.js";

export const get = (obj, objPath, defaultVal) => {

	objPath = pathFromString(objPath);
	let currObject = obj;


	for (i = 0; i < objPath.length; i++) {
		if (!currObject[objPath[i]]) return defaultVal;	
		currObject = currObject[objPath[i]];
	}
	return currObject;

}


















