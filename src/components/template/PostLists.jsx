import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "services/user";
import {sp} from "utils/numbers"
import Loader from "components/modules/Loader";
import styles from "./PostLists.module.css"

const PostLists = () => {
  const { data, isLoading } = useQuery(["my-post-list"], getPosts);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log("data", data);
  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>اگهی های شما</h3>
          {data.data.posts?.map((post) => (
            <div key={post._id} className={styles.post}>
              <img src={`${baseUrl}${post.images[0]}`} />
              <div>
                <p>{post.options.title}</p>
                <span>{post.options.content}</span>
              </div>
              <div className={styles.price}>
                <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                <p>{sp(post.amount)}  تومان</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PostLists;
