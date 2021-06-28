import React from 'react'
import { css } from '@emotion/core'
import { size } from '@/styles/index'

type Props = {
  styles?: React.ReactNode
}

const Tag: React.FC<Props> = (props) => {
  const svgStyle = css({
    width: size(1.5),
  })
  const pathStyle = css({
    fill: '#4B4B4B',
  })

  return (
    <svg
      css={[svgStyle, props.styles as any]}
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g>
        <polygon
          css={pathStyle}
          points="433.198,205.503 433.198,86.669 363.908,86.669 363.908,136.267 308.912,81.341 256.09,28.323 0,284.219 37.929,322.123 256.09,104.142 474.072,322.123 512,284.219 	"
        />
        <polygon
          css={pathStyle}
          points="78.802,312.098 78.802,483.677 213.994,483.677 213.994,368.231 298.007,368.231 298.007,483.677 433.198,483.677 433.198,312.083 256.09,134.959 	"
        />
      </g>
    </svg>
  )
}

export default Tag
