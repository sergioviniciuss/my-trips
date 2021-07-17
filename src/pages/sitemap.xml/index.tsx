import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  const fields = places.map(({ slug }) => ({
    loc: `https://my-trips-gamma.vercel.app/${slug}`,
    lastmod: new Date().toISOString(),
  })) 

  fields.push(
    {
      loc: `https://my-trips-gamma.vercel.app/`, // home
      lastmod: new Date().toISOString(),
    },
    {
      loc: `https://my-trips-gamma.vercel.app/about`, // about
      lastmod: new Date().toISOString(),
    },
  )

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => { }
