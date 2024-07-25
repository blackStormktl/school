import './style.css'
import { GiMaterialsScience,GiFountainPen ,GiSatelliteCommunication ,GiPerspectiveDiceSixFacesFive ,GiGuitar  } from "react-icons/gi";
export default function SideItem(){
    return(
        <ul className="itemSide">
            <li><span><GiSatelliteCommunication/></span>Tecnologia</li>
            <li><span><GiMaterialsScience/></span>Ciencia</li>
            <li><span><GiGuitar /></span>Arte</li>
            <li><span><GiPerspectiveDiceSixFacesFive/></span>Matematica</li>
            
        </ul>
    )
}