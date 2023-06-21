import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import HomeScreen from "../Pages/HomeScreen";
import FindTalentPage from "../Pages/FindTalentPage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FindTalentPage />,
      },
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
