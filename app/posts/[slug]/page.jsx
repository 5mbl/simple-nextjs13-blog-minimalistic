
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "../../../lib/getPostMetaData";


// this could be a Markdown file or a database query, in our case it is a markdown
const getPostContent = (slug) => {
    const file = `posts/${slug}.md`;
    const content = fs.readFileSync(file, "utf8");

    const matterResult = matter(content);
    return matterResult;
  };


  export const generateStaticParams = async () => {
    const posts = getPostMetadata(); // called to retrieve the content of the post with the matching slug.
    
    return posts.map((post) => ({
      slug: post.slug,
    }));
  };



  export default function PostPage (props) {
    const slug = props.params.slug; // extracted from the URL using Next.js's routing system
    const post = getPostContent(slug); // This function retrieves the content of the post with the matching slug value from your blog's data source


    // The post object is now populated with the content of the matching post, including its title, date, and content.
    return (
      <div>
        <div className="my-12 text-center">
          <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
          <p className="text-slate-400 mt-2">{post.data.date}</p>
        </div>
  
        <article className="text-sm prose lg:prose-xl">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    );
  };