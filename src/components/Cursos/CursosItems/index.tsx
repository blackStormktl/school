import './style.css'
export default function CursosItems(props:any){
    return(
        <div className='mainBoxCard'>
            <div className="cursoCard">
                <div className="cardBox">
                    <img src={props.img} alt="" />
                    
                    <h1>{props.curso}</h1>
                    <h2>{props.type}</h2>

                    <div className="cardText">
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    );
}