function operacao(){

    var numUm = window.document.querySelector("input#num1")
    var numDois = window.document.querySelector("input#num2")

    var num1 = parseFloat(numUm.value)
    var num2 = parseFloat(numDois.value)

    var opr = document.getElementsByName('operacao')
    var res

    var resposta = window.document.querySelector("div#res")

    if(opr[0].checked){
       //SOMA
        res = num1 + num2
        resposta.innerHTML = res
        resposta.style.color = 'white'
    }

    else if(opr[1].checked){
        //SUBTRAÇÃO
        res = num1 - num2
        resposta.innerHTML = res
        resposta.style.color = 'white'
    }

    else if(opr[2].checked){
        //MULTIPLICAÇÃO
        res = num1 * num2
        resposta.innerHTML = res
        resposta.style.color = 'white'
    }

    else if(opr[3].checked){
        //DIVISÃO
        res = num1 / num2
        resposta.innerHTML = res
        resposta.style.color = 'white'
    }

}