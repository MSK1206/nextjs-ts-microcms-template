import { NextPage } from "next";
import { client } from "../../libs/client";
import type { Blog } from "../../types/blog";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
import styles from "../../styles/Blogid.module.css";
import SeoHead from "@/components/seohead";

type Props = {
  blog: Blog[];
};

const BlogId: NextPage<Props> = ({ blog }: any) => {
  return (
    <div className={styles.container}>
      <SeoHead
        pageTitle={blog.title}
        tempTitle="Demo Site"
        pageDesc="Nextjs + microCMS"
        og_type="blog"
        imgUrl={blog.eyecatch.url}
      />
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.category}>
            {blog.category && `${blog.category.name}`}
          </p>
          <p className={styles.publishedAt}>
            投稿日：
            {dayjs
              .utc(blog.publishedAt)
              .tz("Asia/Tokyo")
              .format(
                "YYYY" + "年" + "MM" + "月" + "DD" + "日" + "hh" + ":" + "mm"
              )}
          </p>

          <div
            className={styles.post}
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />
        </div>
      </main>
    </div>
  );
};

export default BlogId;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const blog: Blog[] = data.contents;
  const paths = blog.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res: Blog = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: res,
    },
  };
};
