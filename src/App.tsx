import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

const pontoInicial = {
  descricao: 'Marcação do primeiro ponto',
  posicao: [40.505, -100.09]
}

const App = () => {
  const position = [40.505, -100.09];
  
  const [listOfPOI, setListOfPOI] = useState([pontoInicial]);

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