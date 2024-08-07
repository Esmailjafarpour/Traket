import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { sp } from "utils/numbers";
import styles from "./Main.module.css";

const Main = ({ posts }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    console.log("searchParams", searchParams);
  }, [searchParams]);

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post._id} className={styles.card}>
          <div className={styles.info}>
            <p>{post?.options?.title}</p>
            <div>
              <p>{sp(post.amount)}</p>
              <span>{post.options?.city}</span>
            </div>
          </div>
          <img src={`${baseUrl}${post.images[0]}`} />
        </div>
      ))}
    </div>
  );
};

export default Main;
