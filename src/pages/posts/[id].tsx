import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { getAllPostIds, getPostData, getCategories, getTags } from '@/lib/posts'
import Layout from '@/src/components/global/Layout'
import 'highlight.js/styles/monokai.css'
import { metaData } from '@/const/metaData'
import Date from '@/src/components/atoms/Date'
import LinkList from '@/src/components/molecules/LinkList'
import { css } from '@emotion/core'
import { colors, size, fonts } from '@/styles/index'

type Props = {
  categories: [string]
  tags: [string]
  postData: {
    title: string
    description: string
    date: string
    category: string
    tags: [string]
    image: string
    contentHtml: string
  }
}

const Post: React.FC<Props> = (props) => {
  const titleStyle = css(
    fonts.fontHeading,
    {
      fontSize: size(3),
      letterSpacing: '0.05em',
      textDecoration: 'none',
    }
  )
  const dataStyle = css({
    marginBottom: '0.25em',
  })
  const linkListStyle = css({
    marginLeft: size(1),
  })
  const bodyStyle = css({
    'h2': {
      marginTop: size(5),
      paddingBottom: 4,
      borderBottom: `1px solid ${colors.gray.lighter}`,
      fontFamily: fonts.fontFamily.heading,
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: size(2.75),
    },
    'h3': {
      marginTop: size(5),
      marginBottom: size(1),
      fontFamily: fonts.fontFamily.heading,
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: size(2.5),
    },
    'h4': {
      marginTop: size(3),
      marginBottom: size(1),
      fontFamily: fonts.fontFamily.heading,
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: size(2.25),
    },
    'p': {
      lineHeight: 2.2,
      whiteSpace: 'pre-wrap',
    },
    'ul': {
      paddingLeft: '1em',
      lineHeight: 1.8,
    },
    'ol': {
      display: 'table',
      paddingLeft: 0,
      counterReset: 'li',
      listStyle: 'none',
      lineHeight: 1.8,
      '& > li': {
        display: 'table-row',
        counterIncrement: 'li',
        '&::before': {
          display: 'table-cell',
          paddingRight: '0.4em',
          textAlign: 'right',
          content: 'counter(li) "."',
        },
      },
    },
    'th, td': {
      padding: size(1),
      borderLeft: `1px solid ${colors.gray.lighter}`,
      '&:first-child': {
        borderLeft: 'none',
      }
    },
    'tr + tr > td': {
      borderTop: `1px solid ${colors.gray.lighter}`,
    },
    'thead > tr > th': {
      borderBottom: `2px solid ${colors.gray.lighter}`,
    },
    'blockquote': {
      position: 'relative',
      margin: '1em 0',
      padding: `${size(3)} ${size(2)} ${size(2)}`,
      backgroundColor: colors.white.smoke,
      fontStyle: 'italic',
      '&::before': {
        position: 'absolute',
        top: size(2),
        left: size(2),
        width: 30,
        height: 20,
        background: 'url(/img/icon_quote.svg)',
        content: '""',
      },
      'p': {
        margin: '1em 0 0',
        color: colors.gray.dark,
      }
    }
  })

  const router = useRouter()

  return (
    <Layout
      categories={props.categories}
      tags={props.tags}
    >
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <title>{props.postData.title} | {metaData.title}</title>
        <meta name="description" content={props.postData.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${props.postData.title} | ${metaData.title}`} key="og:title" />
        <meta property="og:description" content={props.postData.description} />
        <meta property="og:url" content={`${process.env.DOMAIN}${router.asPath}`} />
        <meta property="og:image" content={`${process.env.DOMAIN}/img/posts/${props.postData.image}`} />
      </Head>

      <article id="article">
        <div css={dataStyle}>
          <span><Date datestring={props.postData.date} /></span>
          <span css={linkListStyle}>
            <LinkList
              items={[props.postData.category]}
              itemName="categories"
            />
          </span>
          <span css={linkListStyle}>
            <LinkList
              items={props.postData.tags}
              itemName="tags"
            />
          </span>
        </div>
        <h1 css={titleStyle}>{props.postData.title}</h1>
        {props.postData.image &&
          <Image
            src={`/img/posts/${props.postData.image}`}
            width={800}
            height={480}
            alt=""
          />
        }
        <div
          css={bodyStyle}
          dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }}
        />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categories = getCategories()
  const tags = getTags()
  if (!params) return {props: {}}
  const postData = await getPostData(params.id as string)
  return {
    props: {
      categories,
      tags,
      postData,
    }
  }
}

export default Post
