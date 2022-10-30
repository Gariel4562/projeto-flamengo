function pesquisar () {
let t1 = window.document.querySelector('#t1')
let res = window.document.querySelector('#res')
let t = String(t1.value)

let img = document.createElement('img')
img.setAttribute('id', 'foto')

if(t.length==0) {
    window.alert('Digite o nome do Jogador')
}

switch(t) {
    case 'Leônidas da Silva' :
    res.innerHTML = `<h1>Leônidas da Silva</h1> <br> Jogou no Flamengo profissionalmente 1936 - 1941. <br> <br> Fez 153 Gols pelo Flamengo... <br> <br> Titulos pelo Flamengo : 1 Campeonato Carioca.  `
        img.setAttribute('src', 'imagens/jogadores/leonidas.webp')
        break;

    case 'Zizinho' :
        res.innerHTML = `<h1>Zizinho</h1> <br> Jogou no Flamengo profissionalmente 1939 - 1950. <br> <br> Fez 146 Gols pelo Flamengo como meio campista... <br> <br> Titulos pelo Flamengo : 3 Campeonatos Cariocas.   `
        img.setAttribute('src', 'imagens/jogadores/zizinho.webp')
        break;

        case 'Evaristo de Macedo' :
            res.innerHTML = `<h1>Evaristo de Macedo</h1> <br> Jogou no Flamengo profissionalmente 1953 - 1957, 1965 - 1967. <br> <br> Fez 103 Gols pelo Flamengo.. <br> <br> Titulos pelo Flamengo : 4 Cariocas. `
            img.setAttribute('src', 'imagens/jogadores/evaristo.jpg')
            break;

        case 'Zico' :
           res.innerHTML = `<h1>Zico</h1>  <br>  Jogou no Flamengo profissionalmente 1971 - 1983, 1985 - 1989. <br> <br>  fez 509 Gols pelo Flamengo como meio campista... <br> <br> Titulos pelo Flamengo : 4 Brasileiros, 1 Mundial, 1 Libertadores, 7 Campeonatos Cariocas.      
           `
           img.setAttribute('src', 'imagens/jogadores/Zico.png')
           break;
        
        case 'Junior' :
            res.innerHTML = `<h1>Junior</h1> <br> Jogou no Flamengo profissionalmente 1974 - 1984, 1989 - 1993. <br> <br> Fez 78 Gols Pelo Flamengo como Lateral. <br> <br> Titulos pelo Flamengo: 4 Brasileiros, 1 Mundial, 1 Libertadores, 7 Campeonatos Cariocas. `
            img.setAttribute('src', 'imagens/jogadores/junior.jpg')
            break;

            case 'Leandro' :
                res.innerHTML = `<h1>Leandro</h1> <br> Jogou no Flamengo profissionalmente 1978 - 1990. <br> <br> fez 14 Gols pelo Flamengo como Lateral. <br> <br> Titulos pelo Flamengo: 4 Brasileiros, 1 Mundial, 1 Libertadores, 5 Campeonatos Cariocas.    `
                img.setAttribute('src', 'imagens/jogadores/Leandro.jpg')
                break;

                        case 'Sávio' :
                            res.innerHTML = `<h1>Sávio</h1> <br> <br> Jogou no Flamengo profissionalmente 1992 - 1997. <br> <br> Fez 95 gols pelo Flamengo. <br> <br> Titulos pelo flamengo : 1 Campeonato Brasileiro, 1 Carioca, 1 Copa ouro, 1 Copa do brasil.  `
                        img.setAttribute('src', 'imagens/jogadores/savio.jpg')
                        break;

                            case 'Romário' :
                                res.innerHTML = `<h1>Romário</h1> <br> Jogou no Flamengo profissionalmente 1995 - 1996, 1997, 1998 - 1999. <br> <br> Fez 204 Gols pelo Flamengo. <br> <br> Titulos pelo Flamengo : 2 Cariocas, 1 Copa Mercosul.    `
                                img.setAttribute('src', 'imagens/jogadores/Romário.jpg')
                                break;

                                case 'Adriano Imperador' :
                                    res.innerHTML = `<h1>Adriano Imperador</h1> <br> Jogou no Flamengo profissionalmente 2000 - 2001, 2009 - 2010, 2012. <br><br> fez 46 Gols pelo Flamengo. <br><br> Titulos pelo Flamengo : 1 Brasileirão, 1 Copa dos Campeões, 2 Cariocas.`
                                    img.setAttribute('src', 'imagens/jogadores/Adriano.jpg')
                                    break;

                                    case 'Dejan Petković' :
                                    res.innerHTML = `<h1>Dejan Petković</h1> <br> Jogou no Flamengo profissionalmente 2000 - 2002, 2009 - 2011. <br> <br> fez 57 Gols pelo Flamengo como meio campista. <br> <br> Titulos pelo Flamengo : 1 Brasileiro, 2 Cariocas, 1 Copa dos campeões.`
                                    img.setAttribute('src', 'imagens/jogadores/pet.webp')
                                    break;

                                    case 'Gabigol' :
                                    res.innerHTML = `<h1>Gabigol</h1> <br><br> Jogou no Flamengo profissionalmente 2019 - e continua jogando.. <br><br> fez mais de 130 Gols pelo Flamengo e deu mais de 35 assistências. <br><br> Titulos pelo Flamengo : 2 Brasileiros, 2 Libertadores, 3 Cariocas, 2 Supercopa do Brasil, 1 Copa do Brasil, 1 Recopa sul americana.  `
                                    img.setAttribute('src', 'imagens/jogadores/gabigol.webp')
                                    break;

                                    case 'Arrascaeta' :
                                    res.innerHTML = `<h1>Giorgian De Arrascaeta</h1> <br> <br> Jogou no Flamengo profissionalmente 2019 - e continua jogando.. <br> <br> fez mais de 50 gols pelo Flamengo e deu mais de 60 assistências. <br> <br> Titulos pelo Flamengo : 2 Brasileiros, 2 Libertadores, 3 Cariocas, 2 Supercopa do Brasil, 1 Copa do Brasil, 1 Recopa sul americana.  `
                                    img.setAttribute('src', 'imagens/jogadores/arrasca.webp')
                                    break;

                                      case 'Everton Ribeiro' :
                                      res.innerHTML = `<h1>Everton Ribeiro</h1> <br> Jogou no Flamengo profissionalmente 2017 - e continua jogando.. <br> <br> Fez mais de 40 gols pelo Flamengo e deu mais de 30 Assistências como meio campista. <br> <br> Titulos pelo Flamengo : 2 Libertadores, 2 Brasileiros, 1 Copa do Brasil, 2 Supercopa do brasil, 1 Recopa sul americana, 3 Cariocas.  `
                                      img.setAttribute('src', 'imagens/jogadores/evertonR.jpg')
                                      break;
                                    
                        
    




}








res.appendChild(img)

}
