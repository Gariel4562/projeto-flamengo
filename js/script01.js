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
    case 'Zico' :
        res.innerHTML = `<h1>Zico</h1>  <br>  Jogou no Flamengo profissionalmente 1971 - 1983, 1985 - 1989 </li>  fez 509 Gols pelo Flamengo... <br> <br> Titulos que Zico ganhou jogando pelo Flamengo : 4 Brasileiros, 1 Mundial, 1 Libertadores, 7 Campeonatos Cariocas.      
        `
        img.setAttribute('src', 'imagens/jogadores/Zico.png')
        break;
        
        case 'Junior' :
            res.innerHTML = `<h1>Junior</h1> <br> Jogou no Flamengo profissionalmente de 1974 - 1984, 1989 - 1993. <br> <br> Fez 78 Gols Pelo Flamengo. <br> <br> Titulos que Junior Ganhou jogando pelo Flamengo: 4 Brasileiros, 1 Mundial, 1 Libertadores, 7 Campeonatos Cariocas. `
            img.setAttribute('src', 'imagens/jogadores/junior.jpg')
            break;
            case '' :
                res.innerHTML = `<h1>nome</h1> Jogou no Flamengo profissionalmente de 1974 - 1984, 1989 - 1993.  `
                img.setAttribute('src', 'imagens/')
                break;
                case '' :
                    res.innerHTML = `<h1>Nome</h1> <ul> <br> <br> <br> <br> <li> Jogou no ... profissionalmente de </li>  <li> fez Gols pelo ... </li> <br> Titulos que ... ganhou jogando pelo ... :<br> <br> <li>  </li> <li> </li> <li>
                    </li> <li> 
                    </li> <li>  </li> <li>  </li>
                    <li>  </li>`
                    img.setAttribute('src', 'imagens/')
                    break;
                    case '' :
                        res.innerHTML = `<h1>Nome</h1> <ul> <br> <br> <br> <br> <li> Jogou no ... profissionalmente de </li>  <li> fez Gols pelo ... </li> <br> Titulos que ... ganhou jogando pelo ... :<br> <br> <li>  </li> <li> </li> <li>
                        </li> <li> 
                        </li> <li>  </li> <li>  </li>
                        <li>  </li>`
                        img.setAttribute('src', 'imagens/')
                        break;
                        case '' :
                            res.innerHTML = `<h1>Nome</h1> <ul> <br> <br> <br> <br> <li> Jogou no ... profissionalmente de </li>  <li> fez Gols pelo ... </li> <br> Titulos que ... ganhou jogando pelo ... :<br> <br> <li>  </li> <li> </li> <li>
                            </li> <li> 
                            </li> <li>  </li> <li>  </li>
                            <li>  </li>`
                        img.setAttribute('src', 'imagens/')
                        break;
                        case '' :
                            res.innerHTML = `<h1>Nome</h1> <ul> <br> <br> <br> <br> <li> Jogou no ... profissionalmente de </li>  <li> fez Gols pelo ... </li> <br> Titulos que ... ganhou jogando pelo ... :<br> <br> <li>  </li> <li> </li> <li>
                            </li> <li> 
                            </li> <li>  </li> <li>  </li>
                            <li>  </li> `
                            img.setAttribute('src', 'imagens/')
                            break;
                            case '' :
                                res.innerHTML = `<h1>Nome</h1> <ul> <br> <br> <br> <br> <li> Jogou no ... profissionalmente de </li>  <li> fez Gols pelo ... </li> <br> Titulos que ... ganhou jogando pelo ... :<br> <br> <li>  </li> <li> </li> <li>
                                </li> <li> 
                                </li> <li>  </li> <li>  </li>
                                <li>  </li>`
                                img.setAttribute('src', 'imagens/')
                                break;
                                case '' :
                                    res.innerHTML = `<h1>Nome</h1> <ul> <br> <br> <br> <br> <li> Jogou no ... profissionalmente de </li>  <li> fez Gols pelo ... </li> <br> Titulos que ... ganhou jogando pelo ... :<br> <br> <li>  </li> <li> </li> <li>
                                    </li> <li> 
                                    </li> <li>  </li> <li>  </li>
                                    <li>  </li>`
                                    img.setAttribute('src', 'imagens/')
                                    break;
                                    case '' :
                                    res.innerHTML = `<h1>Nome</h1> <ul> <br> <br> <br> <br> <li> Jogou no ... profissionalmente de </li>  <li> fez Gols pelo ... </li> <br> Titulos que ... ganhou jogando pelo ... :<br> <br> <li>  </li> <li> </li> <li>
                                    </li> <li> 
                                    </li> <li>  </li> <li>  </li>
                                    <li>  </li> `
                                    img.setAttribute('src', 'imagens/')
                                    break;
                                    case '' :
                                      res.innerHTML = `<h1>Nome</h1> <ul> <br> <br> <br> <br> <li> Jogou no ... profissionalmente de </li>  <li> fez Gols pelo ... </li> <br> Titulos que ... ganhou jogando pelo ... :<br> <br> <li>  </li> <li> </li> <li>
                                      </li> <li> 
                                      </li> <li>  </li> <li>  </li>
                                      <li>  </li>`
                                      img.setAttribute('src', 'imagens/')
                                      break;
                                      case '' :
                                      res.innerHTML = `<h1>Nome</h1> <ul> <br> <br> <br> <br> <li> Jogou no ... profissionalmente de </li>  <li> fez Gols pelo ... </li> <br> Titulos que ... ganhou jogando pelo ... :<br> <br> <li>  </li> <li> </li> <li>
                                      </li> <li> 
                                      </li> <li>  </li> <li>  </li>
                                      <li>  </li>`
                                      img.setAttribute('src', 'imagens/')
                                      break;
                                    
                        
    




}








res.appendChild(img)

}
