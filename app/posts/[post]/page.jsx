"use client";
import React, { useEffect, useState } from "react";
import { getPost } from "@/sanity/sanity.query";
import { FaCalendarAlt, FaArrowLeft, FaShareAlt } from "react-icons/fa";
import styles from "../Post.module.css";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/sanity/sanity.client";
import Marousel from "../../component/Carousel/Marousel";

// Helper for images
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source).url();
}

export default function Post({ params }) {
  const slug = params.post;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getPost(slug)
      .then((data) => {
        if (mounted) setPost(data);
      })
      .catch(() => {
        if (mounted) setPost(null);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingContent}>
          <div className={styles.spinner}></div>
          <h1 className={styles.loadingTitle}>Loading…</h1>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingContent}>
          <div className={styles.spinner}></div>
          <h1 className={styles.notFoundTitle}>Post Not Found</h1>
          <p className={styles.notFoundText}>
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <button
            className={styles.navButton}
            onClick={() => window.history.back()}
          >
            <FaArrowLeft size={18} />
            <span>Back</span>
          </button>

          <button
            className={styles.navButton}
            onClick={() =>
              navigator.share?.({
                title: post.title,
                url: window.location.href,
              })
            }
          >
            <FaShareAlt size={18} />
            <span>Share</span>
          </button>
        </div>
      </nav>

      {/* Main Article */}
      <article className={styles.article}>
        <h1 className={styles.title}>{post.title}</h1>

        {post.description && <p className={styles.excerpt}>{post.description}</p>}

        {/* Meta Info */}
        <div className={styles.meta}>
          {post.publishedAt && (
            <div className={styles.metaItem}>
              <FaCalendarAlt size={16} />
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          )}
        </div>

        {/* Author Card */}
        {post.name && (
          <div className={styles.authorCard}>
            {post.authorImage && (
              <Image
                src={urlFor(post.authorImage)}
                alt={post.name}
                className={styles.authorImage}
                width={48}
                height={48}
                priority
              />
            )}
            <div>
              <div className={styles.authorName}>{post.name}</div>
            </div>
          </div>
        )}

        {/* Featured Image */}
        {post.mainImage && (
          <div className={styles.featuredImage}>
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              layout="responsive"
              width={1200}
              height={630}
              priority
            />
          </div>
        )}

        {/* Content */}
        {post.body && (
          <div className={styles.content}>
            <PortableText value={post.body} />
          </div>
        )}

        {/* Footer Actions */}
        <div className={styles.footer}>
          <div className={styles.footerActions}>
            <button className={styles.subscribeButton}>Subscribe</button>
            <button className={styles.saveButton}>Save for Later</button>
          </div>
        </div>
      </article>
      <Marousel />
    </div>
  );
}
