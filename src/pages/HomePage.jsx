import React from 'react';
import Main from "components/template/Main";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "services/user";
import { getCategory, deleteCategory } from "services/admin";
import Sidebar from "components/template/Sidebar";
import Loader from "components/modules/Loader";

const style = {display : "flex"}
const HomePage = () => {
     const { data : posts , isLoading : postsLoading } = useQuery(["post-list"], getAllPosts);
     const { data : categories , isLoading : categoryLoading } = useQuery(["get-categories"], getCategory);

     return (
          <>
               {postsLoading || categoryLoading ? <Loader/> :  <div style={style}>
                    <Sidebar categories={categories}/>
                    <Main posts={posts}/>
               </div>}
          </>
     )}
         

export default HomePage;
