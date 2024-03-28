import { Components, Templates, Form } from '@formio/react'

import { Button, Textarea, MapInput } from '~formio/components'
import { template } from '~formio/template'

Components.setComponents({ button: Button, textarea: Textarea, mapInputComponent: MapInput })
Templates.current = template

export function FormComp({ form }: any) {
  return <Form form={form} onSubmit={(results: any) => console.log('results', results)} />
}

export default FormComp
