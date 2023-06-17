import Categories from "../../components/categories/categories.component";
import Form from "../../components/form/form.component";
import Header from "../../components/header/header.component";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      {/* header ****** */}

      <span className="title">
        The whole world <br />
        awaits
      </span>
      <Form />
    </div>
  );
};

export default Home;
