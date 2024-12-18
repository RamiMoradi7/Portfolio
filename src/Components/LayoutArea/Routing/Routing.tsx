import { Route, Routes } from "react-router-dom";
import { useScrollTop } from "../../../hooks/useScrollTop";
import Main from "../../HomeArea/Home/Main";
import AMFitness from "../../Projects/AMFitness";
import Friendify from "../../Projects/Friendify";
import TrendyThreads from "../../Projects/TrendyThreads";
import VacationsManagment from "../../Projects/VacationsManagment";
import Page404 from "../page404/page404";

type Route = {
  path: string;
  element: JSX.Element;
};

const routes: Route[] = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/home",
    element: <Main />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
  {
    path: "/projects/am-fitness",
    element: <AMFitness />,
  },
  {
    path: "/projects/friendify",
    element: <Friendify />,
  },
  {
    path: "/projects/trendy-threads",
    element: <TrendyThreads />,
  },
  {
    path: "/projects/vacations-management",
    element: <VacationsManagment />,
  },
];

function Routing(): JSX.Element {
  useScrollTop();

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={element}
        />
      ))}
    </Routes>
  );
}

export default Routing;
