import NextHead from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

/**
 * Constants & Helpers
 */
export const WEBSITE_HOST_URL = 'https://thecreative.eth/'

/**
 * Prop Types
 */
export interface MetaProps {
  description?: string
  image?: string
  title: string
  type?: string
}

/**
 * Component
 */
const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter()
  const meta: MetaProps = {
    title: 'Creative Platform',
    description: 'NFT - DeFi - Gaming - Polygon',
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: 'website',
    ...customMeta,
  }

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Next.js Ethereum Starter" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@huntarosan" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <script src="/node_modules/@arkane-network/web3-arkane-provider/dist/web3-arkane-provider.js"></script>
    </NextHead>
  )
}

export default Head
