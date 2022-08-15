
import { List } from "../../components/messages/List";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

export const Messages = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
      <List />
       
      </div>
    </div>
  );
};
