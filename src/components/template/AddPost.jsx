import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import { getCookie } from "utils/cookie";
import styles from "components/template/addPost.module.css";
const AddPost = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: "",
    city: "",
    image: "",
  });
  const { data } = useQuery(["get-categories"], getCategory);

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "image") {
      setForm({
        ...form,
        [name]: event.target.value,
      });
    } else {
      setForm({
        ...form,
        [name]: event.target.files[0],
      });
    }
  };
  const addHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }

    const token = getCookie("accessToken");
    console.log("token",token);
    axios.post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      }).then((res) => console.log("res",res)).catch((error) => console.log("error",error));
      
      
      
  };
  return (
    <form onChange={changeHandler} className={styles.form}>
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input id="title" name="title" type="text" />
      <label htmlFor="content">توضیحات</label>
      <input id="content" name="content" type="text" />
      <label htmlFor="amount">قیمت</label>
      <input id="amount" name="amount" type="number" />
      <label htmlFor="city">شهر</label>
      <input id="city" name="city" type="text" />
      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="image">عکس اگهی</label>
      <input id="image" name="image" type="file" />
      <button onClick={addHandler}>ایجاد</button>
    </form>
  );
};

export default AddPost;
