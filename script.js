function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 20
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#cf7d84'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#5a81a0'
    } else {
        //Boa noite!
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#332f2f'
    }
}



