import { Route, RouteProps, Routes } from "react-router-dom";
import City from "./City";
import Home from "./Home";

const Router = () => {
  const routerList: RouteProps[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/city/:id",
      element: <City />,
    },
  ];

  return (
    <Routes>
      {routerList.map((router, idx) => (
        <Route {...router} key={idx} />
      ))}
    </Routes>
  );
};

export default Router;
