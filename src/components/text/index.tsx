import React, { ReactNode } from 'react'

import { TextAs, TextVariant } from './types'

interface Props {
  as?: TextAs
  children: ReactNode
  variant?: TextVariant
  className?: string
}

const Text = ({
  as = 'p',
  children,
  className = '',
  variant = 'label',
}: Props) => {
  return React.createElement(
    as,
    { className: `${className} ${variant}-text` },
    children
  )
}

export default Text
