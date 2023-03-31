import Image from 'next/image'
import getPostMetadata from '@/lib/getPostMetaData'
import PostPreview from '@/components/PostPreview'


export default function Home() {
  const postPreviews = getPostMetadata().map((item)=>(
    <PostPreview key={item.slug} slug={item.slug} title={item.title} subtitle={item.subtitle}/>
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div>{postPreviews}</div>
    </div>
  )
}
