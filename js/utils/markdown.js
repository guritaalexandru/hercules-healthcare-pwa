import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypeSlug from 'rehype-slug'

function markdownToHtml(markdown) {
  let tableOfContents = [];
  const contentHTML = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeSlug)
      .use(rehypeStringify)
      .use(() => (tree) => {
        tree.children.forEach((node) => {
          if (node.type === 'element' && node.tagName && node.tagName.startsWith('h')) {
            const headerLevel = parseInt(node.tagName.substring(1), 10);
            const headerText = node.children.map((child) => child.value).join('');
            const id = node.properties.id;
            tableOfContents.push({ level: headerLevel, text: headerText, id });
          }
        });
      })
      .processSync(markdown);

    return {
        contentHtml: contentHTML,
      tableOfContents,
    };
}

export {
  markdownToHtml,
};