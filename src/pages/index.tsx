/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import SeoHead from "@/components/seohead";
import Link from "next/link";
import { client } from "../libs/client";
import type { Blog } from "../types/blog";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
import styles from "../styles/Home.module.css";

type Props = {
  blog: Blog[];
};

const Home: NextPage<Props> = ({ blog }) => {
  return (
    <div className={styles.container}>
      <SeoHead
        pageTitle={"Home"}
        tempTitle={"Next.js + TypeScript & microCMS Jamstack Blog Template"}
        pageDesc={
          "このテンプレートはNext.js + TypeScript & microCMSを使用したサイトになります。"
        }
        og_type={"website"}
        imgUrl={"/next.jpg"}
      />

      <main className={styles.main}>
        <div className={styles.posts}>
          <ul className={styles.grid}>
            {blog.map((blog) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a className={styles.postscard}>
                    <img
                      className={styles.eyecatch_img}
                      src={blog.eyecatch.url}
                      width={300}
                      height={175}
                      alt={blog.title}
                    />
                    <h5 className={styles.blogtitle}>{blog.title}</h5>
                    <p className={styles.publishedAt}>
                      投稿日：
                      {dayjs
                        .utc(blog.publishedAt)
                        .tz("Asia/Tokyo")
                        .format(
                          "YYYY" +
                            "年" +
                            "MM" +
                            "月" +
                            "DD" +
                            "日" +
                            "hh" +
                            ":" +
                            "mm"
                        )}
                    </p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
