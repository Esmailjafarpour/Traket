import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";
const AddPost = () => {
     const { data } = useQuery(["get-categories"], getCategory);
     const addHandler = (event) => {
          event.preventDefault()
          console.log("send");
     }
     return (
          <form>
               <h3>افزودن آگهی</h3>
               <label htmlFor="title">عنوان</label>
               <input id="title" name="title" type="text" />
               <label htmlFor="content">توضیحات</label>
               <input id="content" name="content" type="text" />
               <label htmlFor="amount">قیمت</label>
               <input id="amount" name="amount" type="text" />
               <label htmlFor="city">شهر</label>
               <input id="city" name="city" type="text" />
               <label htmlFor="category">دسته بندی</label>
               <select name="category" id="category">
                    {data?.data.map((i) => <option key={i._id} value={i._id}>{i.name}</option>)}
               </select>
               <label htmlFor="image">عکس اگهی</label>
               <input id="image" name="image" type="file" />
               <button onClick={addHandler}>ایجاد</button>
          </form>
     );
}

export default AddPost;
