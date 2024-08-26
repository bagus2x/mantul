'use client'

import { Map, MapMarker, MapPopup, MapTile } from '@mantul/components/map'

export default function MapLeaflet() {
  return (
    <Map zoom={19} center={[4.79029, -75.69003]}>
      <MapTile
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
      />
      <MapMarker position={[4.79029, -75.69003]} draggable={false}>
        <MapPopup>Hey ! I study here</MapPopup>
      </MapMarker>
    </Map>
  )
}
