import React from "react"
import styles from "../../css/blog-card.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const BlogCardNews = ({ blog }) => {
  const { slug, title, image, published } = blog
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} alt="single post" />
        <Link fade className={styles.link} to={`/vesti/${slug}`}>
          procitajte vise
        </Link>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <p className={styles.title}>{title}</p>
      </div>
    </article>
  )
}

export default BlogCardNews
