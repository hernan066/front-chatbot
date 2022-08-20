/* eslint-disable jsx-a11y/anchor-is-valid */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getMessages } from "../../api/messages";
import Message from "./Message";

export const List = () => {
  const [init, setInit] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(["all-messages", init, limit], () => getMessages(init, limit));

  if (isLoading) return <p>Loading Messages...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  const lastPage = () => {
    setPage(Math.floor(data.total / limit));
    setInit(Math.floor(data.total / limit) * 10);
  };

  const firstPage = () => {
    setPage(1);
    setInit(0);
};

  const pagesArray = Array(Math.floor(data.total / limit))
    .fill()
    .map((_, index) => index + 1);

  return (
    <main>
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <h2 className="py-3 text-center font-bold font-up blue-text">
                  List of messages
                </h2>
              </div>
            </div>

            <table className="table table-hover table-bordered table-responsive  mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="row">#</th>
                  <th className="th-lg">Number</th>
                  <th className="th-lg">Message</th>
                  <th className="th-lg">Date</th>
                </tr>
              </thead>

              <tbody>
                {isFetching && <span className="loading">Loading...</span>}
                {data.messages.map((message, idx) => (
                  <Message message={message} idx={idx} key={idx} page={page}/>
                ))}
              </tbody>
            </table>

            <div className="d-flex justify-content-center">
              <nav className="my-4 pt-2">
                <ul className="pagination pagination-circle pg-blue mb-0">
                  <li className="page-item disabled clearfix d-none d-md-block">
                    <a className="page-link">First</a>
                  </li>

                  <li className="page-item disabled">
                    <a className="page-link" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>

                  {/* <li className="page-item active">
                    <a className="page-link">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">4</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">5</a>
                  </li> */}
                  <nav className="nav-ex2">
                    <button
                      onClick={firstPage}
                      disabled={isPreviousData || page === 1}
                    >
                      &lt;&lt;
                    </button>
                    {/* Removed isPreviousData from PageButton to keep button focus color instead */}
                    {pagesArray.map((pg) => (
                      <button
                        onClick={() => {
                          setPage(pg);
                          setInit(page * 10)
                        }}
                      >
                        {pg}
                      </button>
                    ))}
                    <button
                      onClick={lastPage}
                      disabled={isPreviousData || page === data.total}
                    >
                      &gt;&gt;
                    </button>
                  </nav>

                  <li className="page-item">
                    <a className="page-link" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>

                  <li className="page-item clearfix d-none d-md-block">
                    <a className="page-link">Last</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
