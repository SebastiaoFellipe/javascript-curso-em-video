var lista = []
function adicionar() {
    let num = document.querySelector("#txtnumber")
    if (num.value < 1 || num.value > 100 || num == 0) {
        window.alert('Digite um número válido')
        num.value = ''
        num.focus()
    } else {
        let select = document.querySelector("#lista")
        lista.push(Number(num.value))
        if (lista.length <= 10) {
            select.size = lista.length
        }
        select.innerHTML += `<option value="${num.value}">${num.value}</option>`
        num.value = ''
        num.focus()
    }
}
function analisar() {
    if (lista.length == 0) {
        window.alert('Não é possível analisar uma lista vazia.')
    } else {
        let res = document.querySelector("#resultado")
        res.innerHTML = ''
        if (lista.length == 1) {
            res.innerHTML += `<p>A lista possui ${lista.length} número</p>`
        } else {
            res.innerHTML += `<p>A lista possui ${lista.length} números</p>`
        }
        lista.sort((a, b) => a - b);
        console.log(lista)
        res.innerHTML += `<p>O maior número é o ${lista[lista.length - 1]}</p>`
        res.innerHTML += `<p>O menor número é o ${lista[0]}</p>`
    }
}
function limpar() {
    let select = document.querySelector("#lista")
    select.innerHTML = ''
    select.size = 0
    lista = []
    let res = document.querySelector("#resultado")
    res.innerHTML = ''
}