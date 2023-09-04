import Cabeçalho from "./components/cabecalho"
import Conteudo from "./components/Conteudo"
import Rodapé from "./components/Rodape"
import vitelogo from "./assets/vite.svg"

export default function App(){

  let vitelogoAlt = "Vite logo"

  return(
    <>
    <h1>APP</h1>
    <div>
      {/* Iniciando a área de cabeçalho */}
      <Cabeçalho/>
      
      {/* Iniciando a área de conteúdo */}
     <Conteudo vitelogoProps={vitelogo} 
     vitelogoAltProps={vitelogoAlt} />
      {/* Iniciando a área de rodapé*/}
      <Rodapé/>

    </div>
    </>
  )
}