import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewFlow from "../components/flow/newFlow/NewFlow";
import { productInputs, userInputs } from "../formSource";
import Bot from "../pages/bot/Bot";
import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Login from "../pages/login/Login";
import { Messages } from "../pages/messages/Messages";
import New from "../pages/new/New";
import Single from "../pages/single/Single";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
          <Route path="bot">
            <Route index element={<Bot />} />
          </Route>
          <Route path="messages">
            <Route index element={<Messages />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
