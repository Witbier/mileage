function delay(duration) {
 return new Promise(res => setTimeout(res, duration));
}

export default delay;