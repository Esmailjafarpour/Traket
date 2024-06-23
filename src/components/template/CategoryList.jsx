import { useQuery } from "@tanstack/react-query";
import { getCategory, deleteCategory } from "services/admin";
import Loader from "components/modules/Loader";
import { RiDeleteBin5Line } from "react-icons/ri";
import styles from "components/template/CategoryList.module.css";

const CategoryList = () => {
  const { data, isLoading,isFetching,error } = useQuery(["get-categories"], getCategory);
  console.log({ data, isLoading, error ,isFetching });

  const deleteHandlerCategory = (id) => {
    deleteCategory(id);
  };
  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data?.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <p>slug : {i.slug}</p>
            <div className={styles.delete}>
              <RiDeleteBin5Line
                style={{ color: "red" }}
                onClick={() => deleteHandlerCategory(i._id)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryList;
