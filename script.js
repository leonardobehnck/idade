function verificar () {
var year = document.getElementById('year')
var data = new Date()
var ano = data.getFullYear()
var res = document.getElementById('res')

    if (year.value.length == 0 || Number(year.value) > ano) {
        alert('Dados incorretos, insira novamente.')
    }
        else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(year.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
                if (fsex[0].checked) {
                    genero = 'Homem'
                    if (idade >= 0 && idade < 12){
                        img.setAttribute('src', 'imagens/criança_mas.png')
                        //Crianca
                    }
                    else if (idade < 21) {
                        img.setAttribute('src', 'imagens/jovem_mas.png')
                        //Jovem
                    }
                    else if (idade < 60){
                        img.setAttribute('src', 'imagens/adulto_mas.png')
                        //Adulto
                    }
                    else {
                        img.setAttribute('src', 'imagens/idoso_mas.png')
                        //idoso
                    }
                }
                    else if (fsex[1].checked){
                    genero = 'Mulher'
                    if (idade >= 0 && idade < 12){
                        img.setAttribute('src', 'imagens/criança_fem.png')
                        //Crianca
                    }
                    else if (idade < 21) {
                        img.setAttribute('src', 'imagens/jovem_fem.png')
                        //Jovem
                    }
                    else if (idade < 60){
                        img.setAttribute('src', 'imagens/adulto_fem.png')
                        //Adulto
                    }
                    else {
                        img.setAttribute('src', 'imagens/idoso_fem.png')
                        //idoso
                    }
                }
            res.style.textAlign = 'center' 
            //img.style.display = 'block'
            //img.style.margin = 'auto'    
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }
}