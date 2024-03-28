import L from 'leaflet'
import { useCallback, useEffect, useState } from 'react'

import styles from './MapInputComponent.module.css'

/* eslint-disable react/function-component-definition */
export const MapInputComponent = ({ onChange }: any) => {
  const [mapInitialized, setMapInitialized] = useState(false)
  const [dialogeOpen, setDialogeOpen] = useState(false)

  const handleOnChange = useCallback(
    (e: any) => {
      onChange(e.latlng)
    },
    [onChange],
  )

  useEffect(() => {
    if (dialogeOpen && !mapInitialized) {
      const map = L.map('map').setView([51.505, -0.09], 13)
      setMapInitialized(true)

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)

      map.on('click', handleOnChange)
    }
  }, [dialogeOpen, handleOnChange, mapInitialized])

  return (
    <>
      <button type="button" onClick={() => setDialogeOpen(!dialogeOpen)}>
        OPEN MAP
      </button>
      <dialog open={dialogeOpen} className={`${styles.dialog}`}>
        <div id="map" />
      </dialog>
    </>
  )
}
