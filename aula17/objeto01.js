let pessoa = {
    nome:'Sebastião', 
    idade:19,
    peso:60,
    engordar(p=0){
        console.log(`Engordou ${p}Kg.`)
        this.peso += p
    },
    emagrecer(p=0){
        console.log(`Emagreceu ${p}Kg.`)
        this.peso -= p
    }
}
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg.`)
pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg.`)
pessoa.emagrecer(3)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg.`)