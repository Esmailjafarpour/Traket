import React, { useState } from "react";
import styles from "components/template/categoryForm.module.css";

const CategoryForm = () => {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    icon: "",
  });

  const changeHandler = (event) => {
    setForm({...form, [event.target.name] : event.target.value})
  };

  const submitHandler = (event) => {
     event.preventDefault();
     console.log(form);
  }

  return (
    <form onChange={changeHandler} onSubmit={submitHandler} className={styles.form}>
      <h3>دسته بندی جدید</h3>
      {false ? <p></p> :""}
      <label htmlFor="name">اسم دسته بندی</label>
      <input id="name" type="text" name="name"/>

      <label htmlFor="slug">اسلاگ</label>
      <input id="slug" type="text" name="slug"/>

      <label htmlFor="icon">آیکون</label>
      <input id="icon" type="text" name="icon"/>

      <button type="submit">ایجاد</button>
    </form>
  );
};

export default CategoryForm;
