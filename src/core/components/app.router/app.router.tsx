import { lazy, Suspense } from "react";
import { Home } from "../../../features/home/home";
import { MenuOption } from "../app/App";
import { Navigate, Route, Routes } from "react-router-dom";
const Home = lazy (() => import('../../../features/home/home'))
const Favorites = lazy (() => import ())
const CreateTrainer = lazy (() => import())
const YourTrainer = lazy (() => import())

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route>
          path = {"/"} element= {<Home></Home>}
        </Route>
        <Route>
          path = {menuOptions[0].path} element= {<Favorites></Favorites>}
        </Route>
        <Route>
          path = {menuOptions[1].path} element=
          {<CreateTrainer></CreateTrainer>}
        </Route>
        <Route>
          path = {menuOptions[2].path} element= {<YourTrainer></YourTrainer>}
        </Route>
        <Route
          path={"*"}
          element={<Navigate to={"/home"} replace={true} />}
        ></Route>
      </Routes>
    </Suspense>
  );
}
