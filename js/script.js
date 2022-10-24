function pesquisar () {
    var t1 = window.document.querySelector('#t1')
    var res = window.document.getElementById('res')
    var t = String(t1.value)
    
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(t.length==0) {
        window.alert('Digite o nome do torneio')
    }

    switch(t) {
        case '' :
            res.innerHTML = `<br><li>competição</li><br>`
        img.setAttribute('src', 'imagens/')
        break;
        case 'Mundial' :
            res.innerHTML = `<br><li></li><br>`
        img.setAttribute('src', 'imagens/')
        break;
        case 'Libertadores' :
            res.innerHTML = `<br><li></li><br>`
        img.setAttribute('src', 'imagens/')
        break;
        case 'Brasileirao' :
            res.innerHTML = `<br><li></li><br>`
        img.setAttribute('src', 'imagens/')
        break;
        case 'Copa do brasil' :
            res.innerHTML = `<br><li></li><br>`
        img.setAttribute('src', 'imagens/')
        break;
        case 'Recopa sul americana' :
            res.innerHTML = `<br><li></li><br>`
        img.setAttribute('src', 'imagens/')
        break;
        case '' :
            res.innerHTML = `<br><li></li><br>`
        img.setAttribute('src', 'imagens/')
        break;
        case 'Copa conmebol' :
            res.innerHTML = `<br><li></li><br>`
        img.setAttribute('src', 'imagens/')
        break;
        case 'Torneio rio-sp' :
            res.innerHTML = `<br><li></li><br>`
        img.setAttribute('src', 'imagens/')
        break;
        case '' :
            res.innerHTML = `<br><li></li><br>`
        img.setAttribute('src', 'imagens/')
        break;


    
    
    
    
    
    
    
    
    
    }







res.appendChild(img)

}