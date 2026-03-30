let hora = 6
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 6 && hora < 12) {
    console.log(`Tenha um Bom Dia!`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Tenha uma Boa Tarde!`)
} else if (hora >= 18 && hora < 24) {
    console.log(`Tenha uma Boa Noite!`)
} else {
    console.log(`Tenha uma Boa Madrugada!`)
}