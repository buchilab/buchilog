import React from 'react'
import Link from 'next/link'
import { metaData } from '@/const/metaData'
import { css } from '@emotion/core'
import { colors, size, media } from '@/styles/index'

const HeaderTitle: React.FC = () => {
  const headerTitleStyle = css({
    maxHeight: size(20),
    padding: `2.5% ${size(2)}`,
    background: '#5d2369 url("/img/headerTitle_bg.png")',
    backgroundBlendMode: 'darken',
    color: colors.white.main,
    textAlign: 'center',
  })
  const siteLogStyle = css({
    margin: size(1),
    'img': {
      width: '70%',
      maxWidth: 224,
    },
  })
  const descriptionStyle = css({
    fontSize: size(1.75),
    [media.up('phoneLarge')]: {
      fontSize: size(2),
    },
    [media.less(433)]: {
      width: '18em',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })

  return (
    <div css={headerTitleStyle}>
      <p css={siteLogStyle}>
        <Link href="/">
          <a>
            <img
              src="/img/logo.svg"
              width={224}
              height={51}
              alt={metaData.title}
            />
          </a>
        </Link>
      </p>
      <div css={descriptionStyle}>{metaData.description}</div>
    </div>
  )
}

export default HeaderTitle