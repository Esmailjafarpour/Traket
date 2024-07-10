import React, { useState, useEffect } from "react";
import Main from "components/template/Main";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "services/user";
import { getCategory, deleteCategory } from "services/admin";
import Sidebar from "components/template/Sidebar";
import Loader from "components/modules/Loader";

const style = { display: "flex" };
const HomePage = () => {
  const { data: posts, isLoading: postsLoading } = useQuery(
    ["post-list"],
    getAllPosts
  );
//   console.log("posts", posts?.data);
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  const [displayed, setDisplayed] = useState([]);
  const [showAll, setShowAll] = useState(false);


  useEffect(() => {
    setDisplayed(posts?.data?.posts);
  }, [posts]);

  const handleCategory = (id) => {
    console.log("poooost", posts.data.posts);
    const result = posts.data.posts.filter((post) => post.category === id);
    setDisplayed(result);
    setShowAll(true)
  };

  const handleShowAllCategory = () => {
     setDisplayed(posts?.data?.posts);
     setShowAll(false)
  };

  return (
    <>
      {postsLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <Sidebar
            categories={categories}
            chooseCategory={handleCategory}
            showAllCategory={handleShowAllCategory}
            displayed={displayed}
            showAll={showAll}
          />
          <Main posts={displayed} />
        </div>
      )}
    </>
  );
};

export default HomePage;
