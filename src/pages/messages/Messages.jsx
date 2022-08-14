import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

export const Messages = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

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

                  <tbody >
                    <tr>
                      <th scope="row">1</th>
                      <td>5493413436676@c.us</td>
                      <td>Hola</td>
                      <td>2022-08-03T17:28:47.893Z</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>5493413436676@c.us</td>
                      <td>
                        Hola! Bienvenido a *Distribuidora Ringo*. Este es un
                        sistema automatico de pedidos. Presiona el numero
                        correpondiente de cada menu: 1. Realizar pedido. *2.*
                        Consultar zonas de envio. *3.* Ubicacion de nuestro
                        local. *4.* Consultar ofertas. *5.* Salir.{" "}
                      </td>
                      <td>2022-08-03T17:28:47.893Z</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Paul</td>
                      <td>Topolski</td>
                      <td>@P_Topolski</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
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

                      <li className="page-item active">
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
                      </li>

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
      </div>
    </div>
  );
};
