import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./flow.scss";
import NewFlow from "./newFlow/NewFlow";
import NewResponse from "./newResponse/NewResponse";

const Flow = () => {
  const [initial, setInitial] = useState([]);
  const [response, setResponse] = useState([]);
  const [udateData, setUdateData] = useState(false);

  useEffect(() => {
    const getInitial = async () => {
      try {
        const res = await axios.get(`http://localhost:3030/api/initial`);

        setInitial(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getResponse = async () => {
      try {
        const res = await axios.get(`http://localhost:3030/api/response`);

        setResponse(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getInitial();
    getResponse();
  }, [udateData]);

  const handleDelete = async (id, type) => {
    try {
      setUdateData(true);
      await axios.delete(`http://localhost:3030/api/${type}/${id}`);
      setUdateData(false);
    } catch (error) {
      console.log(error);
    } 
  };

  return (
     <section className="flow__container">
      <h2>Flow of data</h2>
      <article className="flow__initial">
          <NewFlow  />
        <header className="flow__header">
          <h3>Initial</h3>
         

        </header>

        <div className="flow__initial__title">
          <div className="flex__1">Key</div>
          <div className="flex__3">Keyword</div>
          <div className="flex__1">Edit</div>
          <div className="flex__1">Delete</div>
        </div>
        <div className="flow__initial__content">
          {initial.map((element) => (
            <div className="flow__initial__content__row" key={element._id}>
              <div className="flex__1">{element.option_key}</div>
              <div className="flex__3">{element.keywords}</div>
              <div className="flex__1">
                <button className="flow__edit">Edit</button>
              </div>
              <div className="flex__1">
                <button
                  className="flow__delete"
                  onClick={() => handleDelete(element._id, "initial")}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </article>
      <article className="flow__initial">
            <NewResponse />
        <header className="flow__header">
          <h3>Response</h3>
          <button className="flow__add">Add new</button>
        </header>
        <div className="flow__initial__title">
          <div className="flex__1">Key</div>
          <div className="flex__3">Reply Message</div>
          <div className="flex__2">Media</div>
          <div className="flex__2">Trigger</div>
          <div className="flex__2">List</div>
          <div className="flex__1">Edit</div>
          <div className="flex__1">Delete</div>
        </div>
        <div className="flow__initial__content">
          {response.map((element) => (
            <div className="flow__initial__content__row" key={element._id}>
              <div className="flex__1">{element.option_key}</div>
              <div className="flex__3">{element.replyMessage}</div>
              <div className="flex__2">{element.media}</div>
              <div className="flex__2">{element.trigger}</div>
              <div className="flex__2">{element.list}</div>
              <div className="flex__1">
                <button className="flow__edit">Edit</button>
              </div>
              <div className="flex__1">
                <button
                  className="flow__delete"
                  onClick={() => handleDelete(element._id, "response")}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </article>
      <article className="flow__response"></article>
    </section> 
    
  );
};

export default Flow;
