import Loader from "react-loader-spinner";
import "./CustomLoader.scss";

function CustomLoader() {
  return (
    <div className="loader">
      <Loader type="Rings" color="#000000" />
    </div>
  );
}

export default CustomLoader;
