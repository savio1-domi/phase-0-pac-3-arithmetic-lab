function add(a, b){
    const result = a + b
    return result;
}
function subtract(a, b){
    const result = a - b
    return result;
}
function multiply(a, b){
    const result = a * b
    return result;
}
function divide(a, b){
    const result = a / b
    return result;
}
// parses n as an integer and returns the parsed integer
// ✓ assumes base 10
// ✓ returns NaN as appropriate
function makeInt(n){
    const parsed =parseInt(`${n}`, 10);
    return `${parsed}`;
}
function increment(n){
    const nIncreament = (n+=1)
    return nIncreament
}
function decrement(n){
    const decrement = n - 1;
    return decrement
}
function preserveDecimal(n){
    return parseFloat(n)
}
preserveDecimal()