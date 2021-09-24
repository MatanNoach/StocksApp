import Compare from "./components/Pages/Compare";
import Profile from "./components/Pages/Profile";
import MyStocks from "./components/Pages/MyStocks";
import Trending from "./components/Pages/Trending";
import Login from "./components/Pages/Login";
import NotFound from "./components/Pages/NotFound";

const wrappedPages = [
  {
    component: <Trending />,
    path: "/trending",
    userOnly: false,
  },
  {
    component: <Login />,
    path: "/login",
    userOnly: false,
  },
  {
    component: <Profile />,
    path: "/profile",
    userOnly: true,
  },
  {
    component: <Compare />,
    path: "/compare",
    userOnly: true,
  },
  {
    component: <MyStocks />,
    path: "/myStocks",
    userOnly: true,
  },
  {
    component: <NotFound />,
    path: "*",
    userOnly: false,
  },
];

export default wrappedPages;
