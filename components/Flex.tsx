import React, {CSSProperties} from 'react'
import {Property} from 'csstype'

const getFlexDirection = (column: boolean, reverse: boolean): Property.FlexDirection =>
  `${column ? 'column' : 'row'}${reverse ? '-reverse' : ''}`

type FlexProps = {
  style?: CSSProperties
  column?: boolean
  reverse?: boolean
} & React.PropsWithChildren

const Flex = ({ style = {}, column = false, reverse = false, children }: FlexProps): JSX.Element => {

  const flex: CSSProperties = {
    display: 'flex',
    flexDirection: getFlexDirection(column, reverse)
  }

  return (
    <div
      style={{
        ...style,
        ...flex,
      }}
    >
      {children}
    </div>
  )
}

export default Flex
