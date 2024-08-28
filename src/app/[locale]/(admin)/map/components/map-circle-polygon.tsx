'use client'

import { Circle, MapContainer, Polygon, TileLayer } from 'react-leaflet'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'

interface MapCirclePolygonProps {
  className?: string
}

export const MapCirclePolygon = ({ className }: MapCirclePolygonProps) => {
  return (
    <MapContainer
      center={[-0.5022, 117.1536]}
      zoom={5}
      scrollWheelZoom={false}
      className={className}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Circle center={[-0.5022, 117.1536]} fillColor='red' radius={1000000} />
      <Polygon
        positions={[
          [-6.2, 106.816666], // Jakarta
          [-7.2575, 112.7521], // Surabaya
          [-0.5022, 117.1536], // Samarinda
        ]}
      />
    </MapContainer>
  )
}
