
## Getting Started

```bash
npm run dev
```

### Code Explained

#### getPostMetaData.js

To summarize, the code processes the filenames in the input list one by one, reads the content of each file, parses the metadata and content, and then creates a new list containing the parsed results.

markdownPosts is an array containing the file names of the Markdown posts.

The .map() function is used to iterate over each file name in the markdownPosts array and apply the provided function to each element.

For each file name, the function does the following:

1. fs.readFileSync(posts/${fileName}, "utf8") reads the contents of the file located in the posts/ directory with the current file name. The file is read using the "utf8" encoding.

2. The file contents are stored in the fileContents variable.

3. matter(fileContents) is called to parse the file contents. This function is typically used with the gray-matter library, which is a popular library for parsing front-matter (metadata) from Markdown files. Front-matter is usually written in YAML or JSON format and is placed at the beginning of a Markdown file, enclosed between triple-dashed lines (---).

4. The result of matter(fileContents) is stored in the matterResult variable. This result is an object containing two main properties: data, which holds the metadata (front-matter) as an object, and content, which contains the rest of the file (the actual Markdown content).

After processing each file, the .map() function creates a new array containing the matterResult objects for each Markdown file.

### app/page.jsx
This code snippet defines a React functional component called Home, which renders a grid of blog post previews using the metadata of each post.

The getPostMetadata() function is called to retrieve the metadata of all posts. The metadata is an array of objects containing information about each post, such as slug, title, and subtitle.

The .map() function is used to iterate over each metadata object in the array and convert it into a PostPreview component. The PostPreview component takes the following properties as input: key, slug, title, and subtitle. The key prop is used by React for efficient rendering and updates of components in a list.

The result is an array of PostPreview components called postPreviews, which contain the previews of all the posts.

The Home component renders a grid using the grid and gap utility classes from Tailwind CSS, a popular utility-first CSS framework. The grid has one column on small screens and two columns on medium and larger screens, thanks to the grid-cols-1 and md:grid-cols-2 classes.

Inside the grid, a div is used to render the postPreviews array, which contains all the PostPreview components.

In summary, the Home component fetches the metadata of all blog posts, creates a PostPreview component for each post, and renders them in a responsive grid layout using Tailwind CSS.

### app/posts/[slug]page.jsx

This code demonstrates how to fetch, process, and render a blog post from a Markdown file using Next.js. The code consists of three main parts: getPostContent, generateStaticParams, and the PostPage component.

**getPostContent(slug):** A function that takes a slug as an input, reads the content of the corresponding Markdown file (posts/${slug}.md), and parses the metadata and content using the gray-matter library. It returns an object containing the metadata and content.

**generateStaticParams():** An asynchronous function that retrieves the metadata of all posts by calling getPostMetadata() and returns an array of objects containing the slugs of each post. This function is typically used in Next.js to generate static pages for each blog post.

**PostPage:** A React component that receives the slug as a prop, fetches the content of the corresponding post using getPostContent(slug), and renders the post's title, date, and content on the page using the markdown-to-jsx library.

In summary, this code demonstrates how to read and render blog posts from Markdown files in a Next.js application. 


