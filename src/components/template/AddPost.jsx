import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import { getCookie } from "utils/cookie";
import toast from "react-hot-toast";
import styles from "components/template/addPost.module.css";
const AddPost = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null,
  });
  const { data } = useQuery(["get-categories"], getCategory);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
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
    console.log("form", form);
    for (let i in form) {
      formData.append(i, form[i]);
    }

    console.log("formData", formData);
    const token = getCookie("accessToken");
    // console.log("token",token);
    axios
      .post(`${baseUrl}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => toast.success(res.data.message))
      .catch((error) => toast.error("مشکلی پیش آمده است"));
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
      <label htmlFor="images">عکس اگهی</label>
      <input id="images" name="images" type="file" />
      <button onClick={addHandler}>ایجاد</button>
    </form>
  );
};

export default AddPost;
