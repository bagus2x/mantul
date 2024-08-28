'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'

interface MapMarker {
  className?: string
}

export const MapMarker = ({ className }: MapMarker) => {
  const [latLng, setLatLng] = useState<{ lat: number; lng: number }>({ lat: -6.2, lng: 106.816666 })

  return (
    <MapContainer
      center={[-6.2, 106.816666]}
      zoom={19}
      scrollWheelZoom={false}
      className={className}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker
        position={latLng}
        draggable={true}
        eventHandlers={{ drag: (ev) => setLatLng(ev.target._latlng) }}>
        <Popup>
          {latLng ? `Hey! I am here [${latLng.lat}, ${latLng.lng}]` : 'Hey! I live here'}
        </Popup>
      </Marker>
    </MapContainer>
  )
}
