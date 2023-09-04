import Cabeçalho from "./components/cabecalho"
import Conteudo from "./components/Conteudo"
import Rodapé from "./components/Rodape"

export default function App9(){
  return(
    <>
    <h1>APP</h1>
    <div>
      {/* Iniciando a área de cabeçalho */}
      <Cabeçalho/>
      
      {/* Iniciando a área de conteúdo */}
     <Conteudo/>
      {/* Iniciando a área de rodapé*/}
      <Rodapé/>

    </div>
    </>
  )
}