import React from "react";
import { YMaps } from 'react-yandex-maps';
import Contacts from "./Contacts/Contacts";
import s from "./Main.css"
import Place from "./Place/Place";


const Main = () => {

    return (
        <div className="filter-box" >
          <video  muted autoplay className="video" >
              <source src="https://rivelty.ru/upload/iblock/1fb/1fb8be657f18a7685e8b18cfe2ff65ef.mp4" type="video/mp4"></source>
          </video>
            
              <Place/>  
             <h1> Добро пожаловать в СНТ Планета! </h1>
                
              
              <Contacts/>
            
            

        </div>
    )
}
export default Main