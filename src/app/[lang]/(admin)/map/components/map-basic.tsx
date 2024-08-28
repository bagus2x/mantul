'use client'

import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'

interface MapBasicProps {
  className?: string
}

export const MapBasic = ({ className }: MapBasicProps) => {
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
    </MapContainer>
  )
}
