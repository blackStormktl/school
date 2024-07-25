import GaleryItem from '../GaleryItem';
import './style.css'
export default function GaleryBox(){
    return(
        <div className='galeryBox' id='galeria'>
            <h1>GAleria de Fotos</h1>
            <div className="Gbox">
                <GaleryItem/>
                <GaleryItem/>
                <GaleryItem/>
                <GaleryItem/>


                
            </div>


        </div>
    );
}