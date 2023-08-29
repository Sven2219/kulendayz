import React, { ReactNode } from 'react'

import styles from './index.module.scss'
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
  const dynamicClassName = styles[`${variant}-text`]

  return React.createElement(
    as,
    { className: `${className} ${dynamicClassName}` },
    children
  )
}

export default Text
