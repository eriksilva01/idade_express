function verificar() {
    var data = new Date() // DATA ATUAL
    var ano = data.getFullYear() // ANO ATUAL
    var fano = document.getElementById('txtano') // ANO INFORMADO NO FORM
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Reveja os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // CRIANDO ELEMENTO IMG
        img.setAttribute('id', 'foto') // ATRIBUINDO ID AO ELEMENTO IMG
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 10) {
                //crianca
                img.setAttribute('src', './assets/bebe-menino.png')
            } else if (idade >= 11 & idade <= 17) {
                // jovem
                img.setAttribute('src', './assets/jovem-homem.png')
            } else if (idade > 18 & idade <= 59) {
                //adulto
                img.setAttribute('src', './assets/adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', './assets/senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <= 10) {
                img.setAttribute('src', './assets/bebe-menina.png')
                //crianca
            } else if (idade >= 11 & idade <= 17) {
                // jovem
                img.setAttribute('src', './assets/jovem-mulher.png')
            } else if (idade > 18 & idade <= 59) {
                //adulto
                img.setAttribute('src', './assets/adulta-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', './assets/senhora.png')
            }
        }res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${genero} com exatamente ${idade} anos`
        res.appendChild (img) // ACRESCENTAR TIPO IMAGEM
    }
}