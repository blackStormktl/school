"use client";
import Link from "next/link";
import { useState } from "react";
import { FiAlignJustify,FiX  } from "react-icons/fi";
import Styles from  './style.module.css'


export default function Item(){
    const [btn, setBtn] = useState(false);

    const Action = () =>{
        setBtn(!btn);
    }


    function MenuItem(){
        return(
            <>
                <li><Link href="#galeria" onClick={Action}>Galeria</Link></li>
                <li><Link href='#'>Home</Link></li>
                <li><Link href='#'>Home</Link></li>
            </>
        );
    }

    function Btn(){
        return(
            <>            
                <button className={Styles.BtnMenu} onClick={Action}>

                    {btn?<FiX/>:<FiAlignJustify/>}

                </button>
            </>
        )
    }
    return (
        <div className={Styles.MBox}>
            {/*<img src="$" alt="logo" srcset="" />*/}
                {btn? 
                    <div className={Styles.showMenu}>
                        <Btn/>
                        <ul className={Styles.menu}>
                            <MenuItem/>
                        </ul>
                        
                    </div>  
                    :
                        <div className={Styles.mainMenu}>
                            
                            <ul className={Styles.menu}>
                                <MenuItem/>
                            </ul>
                            
                        </div>
                        

                    }
 
            
            <Btn/>
        </div>    
    );
}