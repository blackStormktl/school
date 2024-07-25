import { IoMegaphoneOutline } from "react-icons/io5";
import './style.css'
export default function BannerItem(){
    return(
        <div className="BoxContainer">
            <div className="BannerCont">
                <h1 className='BannerTitle'>Explore o potencial ilimitado da tecnologia e da robótica conosco.</h1>
                <p className='BannerText'>Da automação inteligente à inteligência artificial, mergulhe em um universo de inovação e descubra como estamos moldando o amanhã. Junte-se à revolução tecnológica.</p>
                <button className='btnBanner'>
                    <span><IoMegaphoneOutline/></span>
                    <p>Aula Teste</p>
                </button>
            </div>
        </div>
    )
}