import React from 'react'
import { css } from '@emotion/core'
import { colors, size } from '@/styles/index'

const HeaderFollow: React.FC = () => {
  const headerFollowStyle = css({
    padding: `0 ${size(2)}`,
    textAlign: 'center',
  })
  const snsFollowStyle = css({
    position: 'relative',
    maxWidth: 320,
    margin: `${size(3)} auto`,
    padding: size(2),
    '&::before, &::after': {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'block',
      margin: 'auto',
      content: `""`,
    },
    '&::before': {
      zIndex: -2,
      width: '100%',
      height: '100%',
      background: 'url("/img/sns_follow_bg.png")',
    },
    '&::after': {
      zIndex: -1,
      width: `calc(100% - calc(6px * 2))`,
      height: `calc(100% - calc(6px * 2))`,
      backgroundColor: colors.white.main,
    }
  })
  const snsFollowListStyle = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: '6px 0 0',
    paddingLeft: 0,
    listStyle: 'none',
    'li': {
      overflow: 'hidden',
      height: 20,
      '&:not(:first-of-type)': {
        marginLeft: 4,
      }
    }
  })
  const fbLikeStyle = css({
    '& > span, & iframe': {
      width: '80px !important',
    },
  })

  return (
    <div css={headerFollowStyle}>
      <div css={snsFollowStyle}>
        <div>
          最新情報を受け取る
        </div>
        <ul css={snsFollowListStyle}>
          <li>
            <a
              href="https://twitter.com/buchiya4th"
              className="twitter-follow-button"
              data-related=""
              data-show-screen-name="false"
              data-lang="ja" data-dnt="true"
              data-show-count="false"
            />
          </li>
          <li>
            <div id="fb-root"></div>
            <div className="fb-like"
              css={fbLikeStyle}
              data-href="http://buchilog.com"
              data-width=""
              data-layout="button"
              data-action="like"
              data-size="small"
              data-share="false"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderFollow
