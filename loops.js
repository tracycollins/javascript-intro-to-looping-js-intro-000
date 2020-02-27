function forLoop(array) {
  for(var i=0; i<25; i++){
    const text = `I am ${i} strange loop${i<1?'':'s'}.`
    array.push(text)
  }
  return array
}
