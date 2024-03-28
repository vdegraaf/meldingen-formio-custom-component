import { ReactComponent } from '@formio/react'
import React from 'react'
import { createRoot } from 'react-dom/client'

import { MapInputComponent } from './MapInputComponent'

export default class MapInput extends ReactComponent {
  static schema() {
    return ReactComponent.schema({
      type: 'mapInputComponent',
      label: 'Default Label',
    })
  }

  attachReact(element: any) {
    const root = createRoot(element)

    return root.render(<MapInputComponent value={this.dataValue} onChange={this.updateValue} />)
  }
}
