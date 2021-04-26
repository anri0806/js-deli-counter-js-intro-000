function takeANumber(line, name) {
 line.push(name)
 return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
 if (line == 0) {
  return "There is nobody waiting to be served!"
}
 return `Currently serving, ${line.shift}.`
}
