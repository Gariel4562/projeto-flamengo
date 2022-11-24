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
        case 'Mundial' :
            res.innerHTML = `<br><h1>Mundial de Clubes</h1><br> Flamengo ganhou o Mundial de clubes em 1981 no Japão. <br><br>`
        img.setAttribute('src', 'imagens/titulos/mundial.jpg')
        break;
        case 'Libertadores' :
            res.innerHTML = `<br><h1>Libertadores</h1><br> Flamengo é Tricampeão da Libertadores 1981 Montevidéu Uruguai, 2019 Lima no Peru, 2022 em Guaiaquil Equador. <br><br>`
        img.setAttribute('src', 'imagens/titulos/libertadores.jpg')
        break;
        case 'Brasileirão' :
            res.innerHTML = `<br><h1>Brasileirão</h1><br> Flamengo é Octacampeão Brasileiro 1980, 1982, 1983, 1987, 1992, 2009, 2019, 2020. <br><br>`
        img.setAttribute('src', 'imagens/titulos/brasileirão.jpg')
        break;
        case 'Copa do Brasil' :
            res.innerHTML = `<br><h1>Copa do Brasil</h1><br> Flamengo é Tetracampeão da Copa do Brasil 1990, 2006, 2013, 2022. <br><br>`
        img.setAttribute('src', 'imagens/titulos/Copa-do-Brasil.jpg')
        break;
        case 'Supercopa do Brasil' :
            res.innerHTML = `<br><h1>Supercopa do Brasil</h1><br> Flamengo é Bicampeão da Supercopa do Brasil 2020, 2021. <br><br>`
        img.setAttribute('src', 'imagens/titulos/supercopa do brasil.jpg')
        break;
        case 'Recopa Sul Americana' :
            res.innerHTML = `<br><h1>Recopa Sul Americana</h1><br> Flamengo foi Campeão da Recopa sul americana 2020. <br> <br>`
        img.setAttribute('src', 'imagens/titulos/recopa.jpg')
        break;
        case 'Copa Mercosul' :
            res.innerHTML = `<br><h1>Copa Mercosul</h1> <br> Flamengo foi Campeão da Copa Mercosul no ano de 1999. <br> <br>`
        img.setAttribute('src', 'imagens/titulos/copa mercosul.jpg')
        break;
        case 'Copa Ouro Nicolás Leoz' :
            res.innerHTML = `<br><h1>Copa Ouro</h1> <br> Flamengo foi Campeão da Copa Ouro Nicolás Leoz no ano de 1996. <br> <br>`
        img.setAttribute('src', 'imagens/titulos/copa ouro.jpg')
        break;
        case 'Copa dos Campeões' :
            res.innerHTML = `<br><h1>Copa dos Campeões</h1> <br> Flamengo foi Campeão da Copa dos Campeões em 2001. <br> <br>`
        img.setAttribute('src', 'imagens/titulos/copa dos campeões.jpg')
        break;
        case 'Torneio Rio–São Paulo' :
            res.innerHTML = `<br><h1>Torneio Rio–São Paulo</h1><br> Flamengo foi Campeão do Torneio Rio-Sp em 1961. <br>`
        img.setAttribute('src', 'imagens/titulos/torneio rio sp.png')
        break;
        case 'Taça dos Campeões Rio-São Paulo' :
            res.innerHTML = `<br><h1>Taça dos Campeões Rio-São Paulo</h1><br> Flamengo foi Campeão da Taça dos Campeões Rio-São Paulo no ano de 1955. <br> <br>`
        img.setAttribute('src', 'imagens/titulos/taça dos campeões rio-sp.jpg')
        break;
        case 'Campeonato Carioca' :
            res.innerHTML = `<br><h1>Campeonato Carioca</h1> <br> Flamengo Foi Campeão do Campeonato Carioca nos anos de 1914, 1915, 1920, 1921, 1925, 1927, 1939, 1942, 1943, 1944, 1953, 1954, 1955, 1963, 1965, 1972, 1974, 1978, 1979, 1979, 1981, 1986, 1991, 1996, 1999, 2000, 2001, 2004, 2007, 2008, 2009, 2011, 2014, 2017, 2019, 2020 e 2021. <br> <br>`
        img.setAttribute('src', 'imagens/titulos/campeonato carioca.jpg')
        break;


    
    
    
    
    
    
    
    
    
    }







res.appendChild(img)

}