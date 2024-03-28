'use client'

import { Components } from '@formio/react'

const FormioButton = (Components as any).components.button

export class Button extends FormioButton {
  get inputInfo() {
    const inputInfo = super.inputInfo
    inputInfo.attr.class += ' utrecht-button utrecht-button--primary-action amsterdam-button'
    return inputInfo
  }
}
