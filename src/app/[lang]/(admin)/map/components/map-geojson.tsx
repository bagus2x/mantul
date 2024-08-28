'use client'

import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import { GeoJSON, MapContainer, TileLayer } from 'react-leaflet'

import data from '@mantul/app/[lang]/(admin)/map/components/indonesia-en.json'

interface MapGeoJsonProps {
  className?: string
}

export const MapGeoJson = ({ className }: MapGeoJsonProps) => {
  return (
    <MapContainer center={[0, 109.3333]} zoom={4} scrollWheelZoom={false} className={className}>
      <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png' />
      <GeoJSON data={data as unknown as any} />
    </MapContainer>
  )
}
