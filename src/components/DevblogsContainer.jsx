import React from 'react'
import { getCollection, getEntry } from 'astro:content';


export default function DevblogsContainer() {

  const allBlogPosts = await (getCollection("devblog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  return (
    <>
    <div>
      <ul>
        {allBlogPosts.map(post => (
          <li><a href={`/devblogs/${post.id}`}>{post.data.title}</a></li>
        ))}
      </ul>
    </div>
    </>
  )
}
