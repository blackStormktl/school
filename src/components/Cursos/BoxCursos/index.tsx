import CursosItems from "../CursosItems";
import './style.css'

export default function BoxCursos(){
    return(
        <div className="container-fluid boxCursos">
            <div className="BoxCursoText">
                <h1>
                    Prepare-se para criar, programar e controlar robôs que podem revolucionar
                </h1>
                <p>
                    Simplificar tarefas cotidianas e explorar ambientes inóspitos. Este curso não é apenas sobre aprender; é sobre explorar o potencial ilimitado da robótica. Você está pronto para construir o futuro?
                </p>
                
                
            </div>
            <CursosItems 
                curso='Programação'
                img='/img/htmlcss.svg'
                type='Inovação' 
                text='Inovação é mais que uma ideia; é a revolução silenciosa que redefine possibilidades, desafia normas e molda o futuro que todos compartilhamos'
            />



            <CursosItems 
                curso='Tecnologia'
                img='/img/terra.svg'
                type='Disrupção'
                text='O impulso que sacode indústrias, redefine expectativas e cria novas realidades. É o despertar do novo, transformando o ordinário em extraordinário.'
            />




            <CursosItems 
                curso='Maker'
                img='/img/estratégia.svg'
                type='Integração'
                text='a sinergia que une tecnologia, criatividade e cultura em uma dança harmoniosa de inovação. É o encontro de mentes e ideias, criando um novo horizonte de possibilidades.'
            />
        </div>
    );
}