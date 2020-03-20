// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let heron = (a, b, c) => {
    const s = (a + b + c)/2

    const area = Math.sqrt(s*(s - a)*(s - b)*(s - c))

    return `Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${area}.`
}
console.log( heron(b, c, h) );