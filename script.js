function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('imagem')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[Erro] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança 
                img.src = "img/Menino.jpg"
                document.body.style.background = '#29b67b'
            } else if (idade < 21) {
                //Jovem
                img.src = "img/JovemM.jpg"
                document.body.style.background = '#61210B'
            } else if (idade < 50) {
                //Adulto
                img.src = "img/Homem.jpg"
                document.body.style.background = '#81DAF5'
            } else {
                //idoso
                img.src = "img/Maduro.jpg"
                document.body.style.background = '#58ACFA'
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança  
                img.src = "img/Menina.jpg"
                document.body.style.background = '#A9F5BC' 
            } else if (idade < 21) {
                //Jovem
                img.src = "img/JovemF.jpg"
                document.body.style.background = '#F2F2F2'
            } else if (idade < 50) {
                //Adulto
                img.src = "img/Mulher.jpg"
                document.body.style.background = '#D8F6CE'
            } else {
                //idoso
                img.src = "img/Madura.jpg"
                document.body.style.background = '#CED8F6'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} com ${idade} anos.`
        
    }
}