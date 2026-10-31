import { onBeforeUnmount, onMounted } from 'vue'

export function usePageMetadata(title: string, description: string) {
  const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  const openGraphTitleMeta = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
  const openGraphDescriptionMeta = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')

  const previousTitle = document.title
  const previousDescription = descriptionMeta?.content
  const previousOpenGraphTitle = openGraphTitleMeta?.content
  const previousOpenGraphDescription = openGraphDescriptionMeta?.content

  onMounted(() => {
    document.title = title
    if (descriptionMeta) descriptionMeta.content = description
    if (openGraphTitleMeta) openGraphTitleMeta.content = title
    if (openGraphDescriptionMeta) openGraphDescriptionMeta.content = description
  })

  onBeforeUnmount(() => {
    document.title = previousTitle
    if (descriptionMeta && previousDescription !== undefined) descriptionMeta.content = previousDescription
    if (openGraphTitleMeta && previousOpenGraphTitle !== undefined) {
      openGraphTitleMeta.content = previousOpenGraphTitle
    }
    if (openGraphDescriptionMeta && previousOpenGraphDescription !== undefined) {
      openGraphDescriptionMeta.content = previousOpenGraphDescription
    }
  })
}