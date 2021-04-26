function takeANumber(line, name) {
 line.push(name)
 return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
 katzDeliLine.shift()
 if (katzDeliLine == 0) {
 return "There is nobody waiting to be served!"
}}
