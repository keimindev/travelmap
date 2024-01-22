import React, { useState } from "react"
import { ComposableMap, Geographies, Geography, Marker , ZoomableGroup,} from "react-simple-maps";
import ImageBox from "../image";
import useFetch from "../../hooks/useFetch";

export default function Map() {

  const [ open, setOpen ] = useState(false);

  const { data, loading, errpr } = useFetch('/travel');

  return (
    <div>
      {loading &&  "loading"} 
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
        {data && 
         data.map((item) => (
          <>
          <Marker key={item.id} coordinates={[item.coordinates[0], item.coordinates[1]]} 
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
              y={item.markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" , fontSize: 6}}
            >
              {item.country}
            </text>
          </Marker>
          </>
        ))}
        </ZoomableGroup>
      </ComposableMap>
      {open && <ImageBox setOpen={setOpen} data={data[0]} />}
    </div>
  )
}
