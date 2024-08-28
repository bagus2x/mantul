'use client'

import Leaflet from 'leaflet'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'


interface MapIcon {
  className?: string
}

let mantulIcon = Leaflet.icon({
  iconUrl: 'mantul.svg',
  iconRetinaUrl: 'mantul.svg',
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [100, 100],
})

export const MapIcon = ({ className }: MapIcon) => {
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
      <Marker position={{ lat: -6.2, lng: 106.816666 }} draggable={true} icon={mantulIcon} />
    </MapContainer>
  )
}
