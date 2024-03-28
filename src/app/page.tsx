'use client'

import dynamic from 'next/dynamic'

import { Grid } from '~components'

import mockData from '../mocks/formio-output.json'

const Form = dynamic(() => import('../formio/Form'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <Grid paddingBottom="large" paddingTop="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <Form form={mockData} />
      </Grid.Cell>
    </Grid>
  )
}
