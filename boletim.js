// const aluno = "Gabriel";
// const media = 8;

// if( media >= 7){
//     console.log("Aprovado")
// } else{
//     console.log("Reprovado")
// }

// const aluno1 = "Rafael";
// const media1 = 8;

// if( media1 >= 7){
//     console.log("Aprovado")
// } else{
//     console.log("Reprovado")
// }

// const aluno2 = "Jurema";
// const media2 = 4;

// if( media2 >= 7){
//     console.log("Aprovado")
// } else{
//     console.log("Reprovado")
// }

// const aluno3 = "juju";
// const media3 = 6;

// if( media3 >= 7){
//     console.log("Aprovado")
// } else{
//     console.log("Reprovado")
// }
const mediaDaEscola = 7
const nomes = [
    "Ana", "Bruno", "Carla", "Diego", "Elisa", "Fábio"
]

const medias = [
    8, 6.5 , 7, 5.8, 9, 4
]

console.log("Aluno: " + nomes[3] + " Média: " + medias[3])

for (let i = 0; i < medias.length; i++){
    if (medias[i] >= mediaDaEscola) {
        console.log(nomes[i] + ": Aprovado")       
    } else{
        console.log(nomes[i] + ": Reprovado")
    }
}