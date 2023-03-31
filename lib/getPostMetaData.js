import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = ()=> {

  // setting important variables
  const folder = "posts/";
  const files = fs.readdirSync(folder);

  const markdownPosts = files.filter((file) => file.endsWith(".md")); // creates an array with Markdown Posts


  const posts = markdownPosts.map((fileName) => {

    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8"); // fs.readFileSync reads the contents of the file located in the "posts/ xxx "directory with the current file name.
    const matterResult = matter(fileContents); //Get gray-matter data from each item (file).

  

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  console.log(posts)

  return posts;
};

export default getPostMetadata;