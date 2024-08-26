'use client'

import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import * as ReactLeaflet from 'react-leaflet'

const Map = ({ style, ...props }: ReactLeaflet.MapContainerProps) => {
  return (
    <ReactLeaflet.MapContainer style={{ height: '100%', width: '100%', ...style }} {...props} />
  )
}

const MapTile = ReactLeaflet.TileLayer

const MapMarker = ReactLeaflet.Marker

const MapPopup = ReactLeaflet.Popup

export { Map, MapMarker, MapTile, MapPopup }
