import React, { useState } from "react";
import styles from "components/template/categoryForm.module.css";
import {useMutation ,useQueryClient} from "@tanstack/react-query";
import {addCategory} from "services/admin";

const CategoryForm = () => {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    icon: "",
  });

  const queryClient = useQueryClient();

  const {mutate,isLoading,error,data} = useMutation(addCategory,{
    onSuccess : ()=> queryClient.invalidateQueries("get-categories")
  })
  console.log({isLoading,error,data});

  const changeHandler = (event) => {
    setForm({...form, [event.target.name] : event.target.value})
  };

  const submitHandler = (event) => {
     event.preventDefault();
     if (!form.name && !form.slug && !form.icon) return
     mutate(form)
  }

  return (
    <form onChange={changeHandler} onSubmit={submitHandler} className={styles.form}>
      <h3>دسته بندی جدید</h3>
      {data?.status === 201 && <p>دسته بندی با موفقیت اضافه شد</p>}
      {!!error && <p>مشکلی پیش آمده است</p>}
      <label htmlFor="name">اسم دسته بندی</label>
      <input id="name" type="text" name="name"/>

      <label htmlFor="slug">اسلاگ</label>
      <input id="slug" type="text" name="slug"/>

      <label htmlFor="icon">آیکون</label>
      <input id="icon" type="text" name="icon"/>

      <button type="submit" disabled={isLoading}>ایجاد</button>
    </form>
  );
};

export default CategoryForm;
