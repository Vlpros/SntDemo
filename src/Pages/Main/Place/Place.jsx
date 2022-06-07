import { YMaps, Map } from 'react-yandex-maps';
import s from  "./Place.css"
const Place = () => (
  <div >
  <div className='mapper'>
  <YMaps>
    <div className='place'>
      <center>
        <Map defaultState={{ center: [56.323849, 38.071893], zoom: 14 }} height="400px" width="800px"/>
      </center>
      
    </div>
  </YMaps>
  </div >
  
  </div>
);
 export default Place;