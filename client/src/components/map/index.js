import React, { useState } from "react"
import { ComposableMap, Geographies, Geography, Marker , ZoomableGroup,} from "react-simple-maps";
import ImageBox from "../image";


const markers = [
    {
      markerOffset: 5,
      name: "Portugal",
      coordinates: [-9.1393, 38.7223]
    },
    { markerOffset: 5, name: "Spain", coordinates: [-3.74922, 40.463667] },
    { markerOffset: 5, name: "UK", coordinates: [-1.1743197, 52.3555177] },
    { markerOffset: 5, name: "HongKong", coordinates: [114.109497, 22.396428] },
    { markerOffset: 5, name: "USA", coordinates: [-73.3070003, 41.2892984] },
    { markerOffset: 5, name: "Singapore", coordinates: [103.8509491, 1.2800945] },
    { markerOffset: -15, name: "Slovenia", coordinates: [14.995463, 46.151241] },
    { markerOffset: 5, name: "Dubai", coordinates: [55.2707828, 25.2048493] },
    { markerOffset: 5, name: "Austraila", coordinates: [ 133.775136, -25.274398] },
    { markerOffset: 5, name: "Iceland", coordinates: [-19.020835, 64.963051] },
    { markerOffset: 5, name: "France", coordinates: [2.3522219, 48.856614] },
    { markerOffset: 5, name: "Italy", coordinates: [12.4963655, 41.9027835] },
    { markerOffset: 5, name: "Japan", coordinates: [139.6917064, 35.6894875] },
];
     
export default function Map() {

  const [ open, setOpen ] = useState(false);

  return (
    <div>
    <ComposableMap>
     <ZoomableGroup center={[10, 10]} zoom={1.5}>
      <Geographies 
         geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography 
            key={geo.rsmKey} 
            geography={geo}
            style={{
                default: {
                    fill:"#D6D6DA",
                    stroke:"#FFFFFF",
                    outline: "none"
                },
                hover: {
                  fill: "#F53",
                  outline: "none"
                },
                pressed: {
                  outline:"none"
                }
              }}
             />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates} 
        onClick={() => { setOpen(true)}} 
        className="marker">
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-6, -13) scale(0.5)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" , fontSize: 6}}
          >
            {name}
          </text>
        </Marker>
      ))}
      </ZoomableGroup>
    </ComposableMap>
    {open && <ImageBox setOpen={setOpen}/>}
    </div>
  )
}
