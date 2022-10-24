function pesquisar () {
    let t1 = window.document.getElementById('t1')
    let res = window.document.getElementById('res')
    let t = String(t1.value)
    
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if(t.length==0) {
        window.alert('Digite o nome do jogador')
    }
    switch(t) {
        case '' :
          res.innerHTML = "<h1> Nome <br> <br> </h1> <ul>  <li> </li>  </ul> <br> "
          img.setAttribute('src', 'imagens/')
          break;
        case '' :
            res.innerHTML = "<h1> Nome <br> <br> </h1> <ul> <li> </li> </ul> <br> " 
            img.setAttribute('src', 'imagens/')
            break;
        case '' :
            res.innerHTML = "<h1> Nome : <br> <br> </h1> <ul> <li> </li> </ul> <br> " 
            img.setAttribute('src', 'imagens/')
            break;
        case '' :
            res.innerHTML = "<h1>Nome : </h1> <br> <br> </h1> <ul> <li> </li> </ul> <br> "
            img.setAttribute('src', 'imagens/')
            break;
            
    
    
    
    
    
    
    }
    
    
    
    
    
    res.appendChild(img)
    
    
    
    }