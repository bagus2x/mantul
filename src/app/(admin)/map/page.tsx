import { Map, MapMarker, MapPopup, MapTile } from '@mantul/components/map'

export default async function Page() {
  return (
    <>
      <div className='bg-white-700 mx-auto my-5 h-[480px] w-[98%]'>
        <Map zoom={19} center={[4.79029, -75.69003]}>
          <MapTile
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
          />
          <MapMarker position={[4.79029, -75.69003]} draggable={false}>
            <MapPopup>Hey ! I study here</MapPopup>
          </MapMarker>
        </Map>
      </div>
    </>
  )
}
