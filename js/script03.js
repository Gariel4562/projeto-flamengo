function pesquisar () {
    let t1 = window.document.getElementById('t1')
    let res = window.document.getElementById('res')
    let t = String(t1.value)
    
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if(t.length==0) {
        window.alert('Coloque o nome do Recorde')
    }
    switch(t) {
        case 'Torcida' :
          res.innerHTML = "<h1> Maior torcida do Mundo </h1> <br/> <p>Flamengo Possui a maior torcida do Brasil, sendo bem mais de 40 Milhões de torcedores. </p> "
          img.setAttribute('src', 'imagens/recordes/torcida.jpg')
          break;
        case 'Invicto' :
            res.innerHTML = "<h1>52 Jogos Invicto</h1> <br> <p> Flamengo ficou de outubro de 1978 até maio de 1979 sem perder, Foram 52 jogos invictos contando jogos oficiais e amistosos mais uma bela marca para o Flamengo de Zico e cia. </p> " 
            img.setAttribute('src', 'imagens/recordes/recorde.jpg')
            break;
        case 'Multiesportivo' :
            res.innerHTML = "<h1>Esportivo</h1> <br> <p> Além do futebol o Clube de Regatas do Flamengo também se destaca em vários outros esportes como por exemplo no Basquete onde foi até mesmo Bicampeão do mundo, conquistou dois dos três titulos que o pais tem. vôlei feminino onde foi campeão sul americano em 1981, e também tem atletas Olimpicos vitoriosos como por exemplo... na Ginastica artistica: Rebeca Andrade e Jade Barbosa, Diego Hypólito e etc.. na natação César Cielo entre outros... </p> " 
            img.setAttribute('src', 'imagens/recordes/esportes.jpg')
            break;
            
    
    
    
    
    
    
    }
    
    
    
    
    
    res.appendChild(img)
    
    
    
    }