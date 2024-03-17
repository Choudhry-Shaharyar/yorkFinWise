import React from "react"
import Backfour from "../common/back/Backfour"

import BlogCard from "./BlogCard"
import "./blog.css"

const Blog = () => {
  return (
    <>
    <Backfour title='On-Campus Banking' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
