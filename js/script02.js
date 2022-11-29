function pesquisar () {
    let t1 = window.document.getElementById('t1')
    let res = window.document.getElementById('res')
    let t = String(t1.value)
    
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if(t.length==0) {
        window.alert('Digite o nome do time')
    }
    switch(t) {
        case '' :
          res.innerHTML = "<h1>  </h1> <br/> <p> </p> "
          img.setAttribute('src', 'imagens/')
          break;
        case '' :
            res.innerHTML = "<h1></h1> <br> <p>  </p> " 
            img.setAttribute('src', 'imagens/')
            break;
        case 'Flamengo90-92' :
            res.innerHTML = "<h1></h1> <br> <p>  </p> " 
            img.setAttribute('src', 'imagens/')
            break;
            
    
    
    
    
    
    
    }
    
    
    
    
    
    res.appendChild(img)
    
    
    
    }