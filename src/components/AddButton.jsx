import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/add-chocolate">
      <button className="mt-16 rounded-lg border-[1px] border-[rgba(20, 20, 20, 0.15)] p-4">
        + New Chocolate
      </button>
    </Link>
  );
};

export default AddButton;
