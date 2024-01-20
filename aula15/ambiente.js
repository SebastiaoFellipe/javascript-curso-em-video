let num = [5,6,7,8]
num.push(1)
num.sort()
console.log(`O vetor: ${num}. Tem ${num.length} números.`)

// formas de mostrar o vetor
num.forEach(element => {
    console.log(element)
});
console.log('-----')

for (let key in num) {
    console.log(num[key])
}