function chunk (array, chunkSize = 1){
  let arrayChunks = [];
  for (let i = 0; i < array.length; i+=chunkSize ){
    let arrayChunk = array.slice(i, i+chunkSize);
    arrayChunks.push(arrayChunk);  
  }
  return arrayChunks;
};

export default chunk;
