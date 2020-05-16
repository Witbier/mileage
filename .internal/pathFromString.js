export const pathFromString = str => {

    if (typeof str !== 'string') return path;
    let res = [];
	str.split('.').forEach(item => {
    item.split(/\[([^}]+)\]/g).forEach( i=> {if (i.length > 0) res.push(i)})
        })
	return res;

}
