import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'usk4j83m',
    useCdn: true,
    apiVersion: '2022-11-16',
    dataset: 'production',
    token: process.env.NEXT_SANITY_PROJECT_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)