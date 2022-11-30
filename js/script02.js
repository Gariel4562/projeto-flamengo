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
        case 'Flamengo53-61' :
            res.innerHTML = "<h1>Flamengo 53 - 61</h1> <br> <p> Uma Escalação de 55 : Pavão, Chamorro, Servilio, Tomires, Dequinha, Jordan, Joel, Duca, Indio, Dida, Zagallo. Nesse Periodo de tempo o Flamengo também teve jogadores como Evaristo. <p> </br> Conquistas nesse periodo : Tricampeão Carioca 1953, 1954, 1955. Campeão do Torneio rio-sp 1961. Campeão da taça dos Campeões Estaduais rio-sp 1955. </p>  " 
            img.setAttribute('src', 'imagens/times/flamengo53-61.jpg')
            break;
        case 'Flamengo78-83' :
          res.innerHTML = "<h1>Flamengo 78 - 83</h1> </br> <p> Time base 80 - 83 : Raul; Leandro, Marinho (Figueiredo), Mozer (Rondinelli) e Júnior; Andrade, Adílio e Zico; Tita, Nunes e Lico.</p> </br> <p> Conquistas nesse periodo : 1 Libertadores 1981. 1 Mundial 1981. 3 Campeonatos Brasileiros 1980, 1982, 1983. 4 Campeonatos Cariocas: 1978, 1979, 1979, 1981. </p> </br> <p> Grandes Feitos desse time: Ficou 52 Jogos invictos entre os anos de 1978 - 1979 o time dessa época era um pouco diferente. Triplice Coroa 1981 (3 Titulos Conquistados em um ano que se disputava poucos campeonatos.) </p>  "
          img.setAttribute('src', 'imagens/times/flamengo78-83.jpg')
          break;
        case 'Flamengo90-92' :
            res.innerHTML = "<h1>Flamengo 90 - 92</h1> <br> <p>Escalação 90 - 92 : Gélson, Gilmar, Gottardo, Charles, Piá, Junior, Júlio César, Gaúcho, Zinho, Fabinho, Uidemar.<p> </br> Conquistas nesse periodo : 1 Campeonato Brasileiro 1992, 1 Copa do Brasil 1990, 1 Campeonato Carioca 1991. </p>  " 
            img.setAttribute('src', 'imagens/times/flamengo90-92.jpg')
            break;
            case 'Flamengo19-21' :
                res.innerHTML = "<h1>Flamengo 19 - 21 </h1> <br> <p> Time : Diego Alves, Pablo Mari, Felipe Luis, Willian Arão, Rodrigo Caio, Gabriel Barbosa (Gabigol), Rafinha, Everton Ribeiro, De Arrascaeta, Gerson, Bruno Henrique. OBS: com o passar do tempo alguns jogadores foram saindo e outros chegando e o time foi mudando um pouco.  </p> </br> <p> Conquistas : 1 Libertadores 2019. 2 Brasileiros 2019, 2020. 1 Recopa sul americana 2020. 2 Supercopa do Brasil 2020, 2021. 3 Campeonatos Cariocas 2019, 2020, 2021. </p> </br> <p> Grandes Feitos: Ganhou um Brasileirão de 38 jogos Conquistando 90 pontos. (esse é o melhor aproveitamento da história do Campeonato.), Quádrupla Coroa 2020 (4 Titulos Oficiais conquistados no ano.), Triplice Coroa 2019 (3 Titulos Oficiais conquistados no ano.)  </p> " 
                img.setAttribute('src', 'imagens/times/flamengo19-20.webp')
                break;
            
    
    
    
    
    
    
    }
    
    
    
    
    
    res.appendChild(img)
    
    
    
    }