import matter from 'gray-matter';
import fs from "fs";
import getPostMetadata from '@/lib/getPostMetaData'
import Markdown from "markdown-to-jsx";
import PostPreview from '@/components/PostPreview'

const getHomePageContent = () => {
  const file = `posts/homepage-post/home.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
};


export default function Home() {
  const postPreviews = getPostMetadata().map((item)=>(
    <PostPreview key={item.slug} slug={item.slug} title={item.title} subtitle={item.subtitle}/>
  ));
  const homepagePost = getHomePageContent()

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>{postPreviews}</div>
      </div>
      <article className="text-sm prose lg:prose-xl">
          <Markdown>{homepagePost.content}</Markdown>
      </article>
    </>
  )
}
