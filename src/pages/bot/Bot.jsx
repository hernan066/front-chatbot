import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./bot.scss";

const Bot = () => {
  return (
    <div className="bot">
      <Sidebar />
      <div className="bot__container">
        <Navbar />
      </div>
    </div>
  );
};

export default Bot;
