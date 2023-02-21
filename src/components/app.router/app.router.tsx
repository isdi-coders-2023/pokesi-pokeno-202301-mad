import { lazy, Suspense } from "react";

import { MenuOption } from "../app/App";
import { Route, Routes } from "react-router-dom";
import { Error } from "../error/error";
import { Details } from "../details/details";

const Home = lazy(() => import("../home/home"));
// const Favorites = lazy (() => import ())
// const CreateTrainer = lazy(() => import("../form/form"));
// const YourTrainer = lazy (() => import())

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/home"} element={<Home></Home>}></Route>
        <Route path="/details/:id" element={<Details></Details>}></Route>
        {/* <Route path={menuOptions[0].path} element={<Favorites></Favorites>}>
        </Route> */}
        {/* <Route
          path={menuOptions[1].path}
          element={<CreateTrainer></CreateTrainer>}
        ></Route> */}
        {/* <Route  path={menuOptions[2].path} element={<YourTrainer></YourTrainer>}>
        </Route>  */}
        <Route path={"*"} element={<Error></Error>}></Route>
      </Routes>
    </Suspense>
  );
}
