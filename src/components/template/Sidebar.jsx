import { useQuery } from "@tanstack/react-query";
// import { getCategory, deleteCategory } from "services/admin";
import styles from "components/template/Sidebar.module.css";

const Sidebar = ({categories}) => {
//  const { data } = useQuery(["get-categories"], getCategory);
  return <div className={styles.sidebar}>
     <h4>دسته ها</h4>
     <ul>
          {categories.data.map((category => <li key={category._id}>
               <img src={`${category.icon}.svg`}/>
               <p>{category.name}</p>
          </li>))}
     </ul>
  </div>;
};

export default Sidebar;
