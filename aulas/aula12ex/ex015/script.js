function verificar() {
    let data =  new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let formSex = document.getElementsByName('radsex')
        let idade = ano - Number(formAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formSex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'BebeMenino.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemHomem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'HomemAdulto.jpg')
            } else {
                img.setAttribute('src', 'IdosoHomem.jpg')
                //Idoso
            }

        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
            img.setAttribute('src', 'BebeMenina.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemMulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'MulherAdulta.jpg')
            } else {
                img.setAttribute('src', 'IdosaMulher.jpg')
                //Idoso
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}