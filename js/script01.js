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
    case 'nome' :
        res.innerHTML = `<h1>Nome jogador</h1> <ul> <br> <br> <br> <br> <li> Jogou no ... profissionalmente de </li>  <li> fez Gols pelo ... </li> <br> Titulos que ... ganhou jogando pelo ... :<br> <br> <li>  </li> <li> </li> <li>
        </li> <li> 
        </li> <li>  </li> <li>  </li>
        <li>  </li>


      </ul>
        </ul>`
        img.setAttribute('src', 'imagens/')
        break;
        case '' :
            res.innerHTML = `<h1></h1> <ul> <br> <br> <br> <br> <li> Jogou no ... profissionalmente de </li>  <li> fez Gols pelo ... </li> <br> Titulos que ... ganhou jogando pelo ... :<br> <br> <li>  </li> <li> </li> <li>
            </li> <li> 
            </li> <li>  </li> <li>  </li>
            <li>  </li> `
            img.setAttribute('src', 'imagens/')
            break;
            case '' :
                res.innerHTML = `<h1>nome</h1> <ul> <br> <br> <br> <br> <li> Jogou no ... profissionalmente de </li>  <li> fez Gols pelo ... </li> <br> Titulos que ... ganhou jogando pelo ... :<br> <br> <li>  </li> <li> </li> <li>
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
