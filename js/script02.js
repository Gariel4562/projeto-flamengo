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
        case 'Flamengo78-83' :
          res.innerHTML = "<h1>Flamengo 78 - 83</h1> </br> <p> Time base 80 - 83 : Raul; Leandro, Marinho (Figueiredo), Mozer (Rondinelli) e Júnior; Andrade, Adílio e Zico; Tita, Nunes e Lico.</p> </br> <p> Conquistas nesse periodo : 1 Libertadores 1981. 1 Mundial 1981. 3 Campeonatos Brasileiros 1980, 1982, 1983. 4 Campeonatos Cariocas: 1978, 1979, 1979, 1981. </p> </br> <p> Recordes desse time: Ficou 52 Jogos invictos entre os anos de 1978 - 1979 o time dessa época era um pouco diferente. </p> </br>  "
          img.setAttribute('src', 'imagens/times/flamengo78-83.jpg')
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