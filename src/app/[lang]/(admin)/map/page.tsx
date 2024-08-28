import dynamic from 'next/dynamic'

import { MapGeoJson } from '@mantul/app/[lang]/(admin)/map/components/map-geojson'
import { MapIcon } from '@mantul/app/[lang]/(admin)/map/components/map-icon'
import { Card } from '@mantul/components/ui/card'

const MapBasic = dynamic(
  () =>
    import('@mantul/app/[lang]/(admin)/map/components/map-basic').then((module) => module.MapBasic),
  { ssr: false },
)

const MapCirclePolygon = dynamic(
  () =>
    import('@mantul/app/[lang]/(admin)/map/components/map-circle-polygon').then(
      (module) => module.MapCirclePolygon,
    ),
  { ssr: false },
)

const MapMarker = dynamic(
  () =>
    import('@mantul/app/[lang]/(admin)/map/components/map-marker').then(
      (module) => module.MapMarker,
    ),
  { ssr: false },
)

export default async function Page() {
  return (
    <main className='mx-auto flex w-full max-w-screen-2xl flex-col gap-4 p-4'>
      <Card asChild>
        <section className='flex flex-col gap-4 p-4'>
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>Basic</h4>
          <div className='h-96 w-full'>
            <MapBasic className='z-0 h-full w-full' />
          </div>
        </section>
      </Card>
      <Card asChild>
        <section className='flex flex-col gap-4 p-4'>
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>Circle and Polygon</h4>
          <div className='h-96 w-full'>
            <MapCirclePolygon className='z-0 h-full w-full' />
          </div>
        </section>
      </Card>
      <Card asChild>
        <section className='flex flex-col gap-4 p-4'>
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>Marker</h4>
          <div className='h-96 w-full'>
            <MapMarker className='z-0 h-full w-full' />
          </div>
        </section>
      </Card>
      <Card asChild>
        <section className='flex flex-col gap-4 p-4'>
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>Custom Icon</h4>
          <div className='h-96 w-full'>
            <MapIcon className='z-0 h-full w-full' />
          </div>
        </section>
      </Card>
      <Card asChild>
        <section className='flex flex-col gap-4 p-4'>
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>Geo Json</h4>
          <div className='h-96 w-full'>
            <MapGeoJson className='z-0 h-full w-full' />
          </div>
        </section>
      </Card>
    </main>
  )
}
