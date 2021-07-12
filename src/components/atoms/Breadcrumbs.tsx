import React from 'react'
import { css } from '@emotion/core'
import HomeIcon from '@/src/components/icon/Home'
import { colors, size, media } from '@/styles/index'

type Props = {
  list: ({
    title: string
    path: string
  } | {
    title: string
    path?: undefined
  })[]
}

const Breadcrumbs: React.FC<Props> = (props) => {
  const breadcrumbsStyle = css({
    margin: `0 0 ${size(0.5)}`,
    padding: '0 0 0 1em',
    listStyle: 'none',
    textIndent: '-1em',
    fontSize: size(1.5),
    'li': {
      display: 'inline',
      textIndent: 0,
      [media.up('tablet')]: {
        fontSize: size(1.5),
      },
      '&:not(:first-of-type)::before': {
        display: 'inline-block',
        width: size(0.75),
        height: size(0.75),
        borderRight: `1px solid ${colors.gray.darker}`,
        borderBottom: `1px solid ${colors.gray.darker}`,
        margin: '0 0.5em',
        transform: 'rotate(-45deg) translate(-50%, -20%)',
        transformOrigin: 'top left',
        content: "''",
      }
    },
  })
  const homeIconStyle = css({
    marginRight: size(0.5),
  })
  const iconStyle = css({
    width: size(1.125),
    [media.up('tablet')]: {
      width: size(1.25),
    },
  })

  return (
    <ol aria-label="breadcrumb" css={breadcrumbsStyle}>
      {props.list.map(({title, path}, index) => (
        <li key={index}>
          {index === 0
            ?
              <>
                <span css={homeIconStyle}>
                  <HomeIcon styles={iconStyle} />
                </span>
                <a href={path}>{title}</a>
              </>
            :
              props.list.length - 1 !== index
                ? <a href={path}>{title}</a>
                : <span aria-current="page">{title}</span>
          }
        </li>
      ))}
    </ol>
  )
}

export default Breadcrumbs
