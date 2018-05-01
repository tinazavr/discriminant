// JavaScript File
const numberA = document.getElementById('numberA');
const numberB = document.getElementById('numberB');
const numberC = document.getElementById('numberC');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');

function discriminant(){
    const a = parseFloat(numberA.value);
    const b = parseFloat(numberB.value);
    const c = parseFloat(numberC.value);
    const d = b * b - 4 * a * c;
    if (d<0) {
        alert('А ми вас попереджали! :)');
    } else {
        result1.textContent = -b + Math.sqrt(d)/(2*a);
        result2.textContent = -b - Math.sqrt(d)/(2*a);
    }
}