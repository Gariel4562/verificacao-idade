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
        var estado = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'imagens/Garotinho.png')
            estado = 'Vivo'
            } else if (idade < 21) {
                //jovem
            img.setAttribute('src', 'imagens/Jovem.png')
            estado = 'Vivo'
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/Homem.png')
            estado = 'Vivo'
            } else if (idade < 130) {
                // idoso
                img.setAttribute('src', 'imagens/HomemV.png')
            estado = 'Vivo'
            } 
            else {
                // morto
                img.setAttribute('src', 'imagens/meme.png.png')
            estado = 'Morto'
            }

        


        } // < Nesse If fica as condições para mostrar individuos homens dessas idades.

        else if(fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'imagens/Garotinha.png')
            estado = 'Viva'
            } else if (idade < 21) {
                //jovem
            img.setAttribute('src', 'imagens/JovemM.png')
            estado = 'Viva'
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/Mulher.png')
            estado = 'Viva'
            } else if (idade < 130) {
                // idoso
                img.setAttribute('src', 'imagens/MulherV.png')
            estado = 'Viva'
            } 
            else {
                // morto
                img.setAttribute('src', 'imagens/meme.png.png')
                estado = 'Morta'
            }

            

        

        }

        





       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        res.style.textAlign = 'center' // centralizar com Dom
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos e encontra-se ${estado} </p> ` // Vai mostrar váriaveis gênero e idade.
        res.appendChild(img) // Vai mostrar as imagens que coloquei de acordo com cada idade..

        
    }

    

}




















