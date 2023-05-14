import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const AddChocolate = () => {
  const handleAddChocolate = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const country = form.country.value;
    const category = form.category.value;
    const newChocolate = { name, photo, country, category };
    console.log(newChocolate);

    fetch("http://localhost:3000/chocolate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            text: "Data Inserted Successfully!",
            // iconHtml: '<img src="https://i.ibb.co/Vv5qJNt/star-1.png">',
            // customClass: {
            //   icon: "no-border",
            // },
            imageUrl: "https://i.postimg.cc/JnrpqK39/star-1.png",
            confirmButtonText: "Ok",
            confirmButtonColor: "#07CC66",
          });
        }
      });
  };
  return (
    <div>
      <div className="breadcrumbs mt-16">
        <Link to="/" className="flex">
          <FaArrowLeft className="mt-1" />
          <span className="ml-2">Home</span>
        </Link>
      </div>

      <hr className="my-8" />

      <div className="bg-gray-200 rounded-lg py-12 px-28">
        <h2 className="text-2xl font-bold text-center">New Chocolates</h2>
        <p className="text-center mt-2">
          Use the below form to create a new product
        </p>
        <form onSubmit={handleAddChocolate} className="mt-12">
          <div className="">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Hot Pick Chocolate"
              className="p-5 w-full mt-4 rounded-lg"
            />
          </div>
          <div className="mt-8">
            <label htmlFor="photo" className="font-bold">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Your Photo URL"
              className="p-5 w-full mt-4 rounded-lg"
            />
          </div>
          <div className="mt-8">
            <label htmlFor="country" className="font-bold">
              Country
            </label>
            <input
              type="text"
              name="country"
              placeholder="Enter Country Name"
              className="p-5 w-full mt-4 rounded-lg"
            />
          </div>
          <div className="mt-8">
            <label htmlFor="category" className="font-bold">
              Category
            </label>
            <div className="form-control mt-4 rounded-lg">
              <div className="input-group">
                <select
                  name="category"
                  className="select select-bordered w-full pl-5 h-[64px]"
                >
                  <option>Premium</option>
                  <option>Classic</option>
                </select>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Save"
            className="btn btn-block mt-8 btn-bg"
          />
        </form>
      </div>
    </div>
  );
};

export default AddChocolate;
