import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import styles from "components/template/Sidebar.module.css";

const Sidebar = ({ categories, chooseCategory, showAllCategory ,showAll}) => {
  //  const { data } = useQuery(["get-categories"], getCategory);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={styles.sidebar}>
      <h4>
        <BiCategory />
        دسته ها
      </h4>
      {showAll && (
        <div>
          <IoIosArrowRoundForward />
          <p onClick={showAllCategory}>همه ی آگهی ها</p>
        </div>
      )}
      <ul>
        {categories.data.map((category) => (
          <li key={category._id} onClick={()=> chooseCategory(category._id)}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
