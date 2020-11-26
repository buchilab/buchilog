import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Date from '@/src/components/atoms/Date'
import LinkList from '@/src/components/molecules/LinkList'
import { css } from '@emotion/core'
import { colors, size, fonts } from '@/styles/index'

type Props = {
  articleList: {
    date: string
    title: string
    id: string
    category: string
    tags: [string]
    image: string
  }[]
}

const ArticleListItem: React.FC<Props> = (props) => {
  const articleListStyle = css({
    margin: 0,
    padding: 0,
    listStyle: 'none',
  })
  const itemStyle = css({
    display: 'grid',
    gridTemplate:
      `"title image" auto
       "data image" auto /
        1fr ${size(18)}`,
    paddingTop: size(2),
    paddingBottom: size(2),
    borderBottom: `1px solid ${colors.gray.lighter}`,
  })
  const titleStyle = css(
    fonts.fontHeading,
    {
      gridArea: 'title',
      fontSize: size(3),
      'a': {
        textDecoration: 'none',
      }
    }
  )
  const dataStyle = css({
    gridArea: 'data',
    alignSelf: 'end',
    display: 'flex',
    'a': {
      textDecoration: 'none',
    },
  })
  const linkListStyle = css({
    marginLeft: size(1),
  })
  const imageStyle = css({
    gridArea: 'image',
    marginLeft: size(1),
  })

  return (
    <ul css={articleListStyle}>
      {props.articleList.map(({ id, date, title, image, category, tags }) => (
        <li css={itemStyle} key={id}>
          <div css={titleStyle}>
            <Link
              href="/posts/[id]"
              as={`/posts/${id}`}
              passHref
            >
              <a>{title}</a>
            </Link>
          </div>
          <div css={dataStyle}>
            <span><Date datestring={date} /></span>
            <span css={linkListStyle}>
              <LinkList
                items={[category]}
                itemName="categories"
                iconStyles={linkListStyle}
              />
            </span>
            <span css={linkListStyle}>
              <LinkList
                items={tags}
                itemName="tags"
              />
            </span>
          </div>
          <div css={imageStyle}>
            <Image
              src={`/img/posts/${image}`}
              width={136}
              height={81.6}
              alt=""
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ArticleListItem
