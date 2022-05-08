import client from 'graphql/client'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql';
import { GET_PAGES, GET_PAGES_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

export default function Page( { heading, body }: PageTemplateProps) {
  const router = useRouter();

  //TODO: return loading...
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export const getStaticPaths = async () => {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 10 })

  const paths = pages.map(({ slug }) => ( {
    params: { slug }
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGES_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    revalidate: 60,
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
