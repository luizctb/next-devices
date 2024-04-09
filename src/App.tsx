import React, { useState } from "react";
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

const baseURL = "http://localhost:3000/geo";

const App = () => {
  const position = [40.505, -100.09];
  
  const [listOfPOI, setListOfPOI] = useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setListOfPOI(response.data);
    });
  }, []); 

const MapEvents = () => {
  useMapEvents({
    click(coordenadas) {
      const novoPonto = {
        descricao: 'Alguma descricao para a marcação?',
        posicao: [coordenadas.latlng.lat, coordenadas.latlng.lng]
      }
      setListOfPOI(listOfPOI.concat(novoPonto));
    },
  });
  return false;
}

  // Criar código de remover um item do array, baseado no index
  //   i=0     i =1    i =2   i=3
  //arr[a,     b,      c,     d]
  
  // para remover elemento do array //pop (remove fo fim fo array) - // shift (remove do começo do array) - // splice (remove pelo índice do elemento)

const remover = (index) => {
  
  const novaListaPOI = [...listOfPOI];
    novaListaPOI.splice(index, 1);
    setListOfPOI(novaListaPOI);
}

  return (
    <div>
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents />
      /**
      essa lista é quem faz aparecer no mapa, é um array de objetos
       */
      {listOfPOI.map((poi, posicaoNoArray) => (
        <Marker position={poi.posicao}>
        <Popup>
          {poi.descricao}

          <button onClick={() => remover(posicaoNoArray)}>-</button>
          
        </Popup>
      </Marker>
      ))}
      
    </MapContainer>
    </div>
  );
};

export default App;

window.alert('Marque seu ponto de Interesse')