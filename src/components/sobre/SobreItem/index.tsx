import Link from 'next/link';
import './style.css'

export default function SobreItem(){
    return(
        <div className='sobreItem'>
             
            <div>
            <h1>quem Somos</h1>
            <p>
               
               Na Bits e Blocos, nós acreditamos que aprender tecnologia pode ser uma aventura lúdica e transformadora. 
               Nossas atividades práticas são cuidadosamente planejadas para desenvolver não apenas habilidades acadêmicas,
                mas também competências essenciais como liderança, criatividade, trabalho em equipe e resolução de problemas. 
                Atendendo crianças e adolescentes dos 4 aos 17 anos, fazemos parte da <Link  href="https://ensinoip.com.br/" >EnsinoIP</Link> , uma empresa com 25 anos de 
                experiência em soluções educacionais para escolas particulares. Nosso compromisso vai além de ensinar conceitos; 
                é preparar jovens para um futuro digital dinâmico, capacitando-os a se destacarem como líderes criativos e inovadores. 
                Venha descobrir como estamos moldando mentes curiosas e preparando os líderes do amanhã
           </p>
           
            </div>
            <img src="./img/casas.svg" alt="" />
        </div>
    );
}