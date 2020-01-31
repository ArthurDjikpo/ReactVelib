import React, { createContext, useState, useEffect } from "react";
import {getLocationAsync} from './exercice6-geo'

// const API = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel'
export const VelibContext = createContext(1);

const VelibProvider = ({ children }) => {

  const distance = 1000
  const [velibs, setVelibs] = useState();
// recup la position

// recup les velibs
   async function fetchVelibs(){
    const position = await getLocationAsync().catch(error => console.log(error));
    const url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=20&geofilter.distance=${position.coords.latitude},${position.coords.longitude},${distance}`;
   
    return fetch(url).then(response => response.json()).then(data =>  data).catch((error) => console.log('ERROR fetch', error))
  };
  
    useEffect(() => {
       fetchVelibs().then(datas => {
        setVelibs(datas)
      }).catch((error) => console.log("ERROR IN USEFFECT(): "+ error));
   
    },[]);
  
    return (
      <VelibContext.Provider value={{ velibs, getLocationAsync }}>
        {children} 
      </VelibContext.Provider>
    );
  };

  export default VelibProvider