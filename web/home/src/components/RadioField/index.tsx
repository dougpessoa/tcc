import React from "react";
import { Radio } from 'antd'

type RadioFieldProps = {
  options: {
    value: number
    label: string
    default?: boolean
  }[]
  onChange?: (val: any) => void
  value?: any
}

export function RadioField({ value, options, onChange }: RadioFieldProps) {
  return (
    <Radio.Group onChange={(e: any) => onChange && onChange(e.target.value)} value={value} >
      {
        options.map((option) => (
          <Radio key={option.value} value={option.value}>{option.label}</Radio>
        ))
      }
    </Radio.Group >
  )
}