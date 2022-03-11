function verificar () {
    var data = new Date // < Data atual
    var ano = data.getFullYear() //  < ano atual
    var fano = window.document.getElementById('txtano') // < chamei a parte txtano que está no html
    var res = window.document.querySelector('#res') // < chamei a parte res que está no html

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente.`)
    } // < Condição de erro, se caso não colocar as informações

    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'imagens/Garotinho.png')
            } else if (idade < 21) {
                //jovem
            img.setAttribute('src', 'imagens/Jovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/Homem.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/HomemV.png')
            }


        } // < Nesse If fica as condições para mostrar individuos dessas idades.



       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        res.style.textAlign = 'center' // centralizar com Dom
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>` // Vai mostrar váriaveis gênero e idade.
        res.appendChild(img) // Vai mostrar as imagens que coloquei de acordo com cada idade..
    }




















}