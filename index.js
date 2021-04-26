function takeANumber(line, name) {
 var katzDeliLine = [];

 for (let i = 0; i < name.length; i++) {
  katzDeliLine.push(`Welcome, ${name[i]}. You are number ${line} in line.`)
}
return katzDeliLine
}
