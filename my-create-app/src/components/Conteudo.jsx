import reactlogo from "../assets/react.svg"

export default function Conteudo(props){

    let reactlogoAlt = "React logo"

    return(
        <section>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident porro eligendi sint id. Nam, iusto quam ullam iste ab magni consequuntur voluptatum ducimus architecto sint modi culpa velit nihil nulla?</p>
          <p>Ex nobis distinctio doloribus, assumenda asperiores quidem aliquam quibusdam cum libero recusandae eum, voluptatem pariatur aspernatur alias neque itaque ab quod eos perferendis! Necessitatibus quam debitis tenetur, dolores distinctio nisi?</p>
          <p>Sit ipsam ipsa similique nobis, quisquam adipisci ab alias accusamus non minus sequi eos esse. Autem necessitatibus eveniet voluptas exercitationem delectus dolor ullam aperiam magni minus. In cumque ut doloribus.</p>
          <img src={reactlogo} alt={reactlogoAlt} />
          <img src={props.vitelogoProps} alt={props.vitelogoAltProps} />
        </div>
      </section> 
    )
}