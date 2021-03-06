import Compare from "./components/Pages/Compare";
import Profile from "./components/Pages/Profile";
import MyStocks from "./components/Pages/MyStocks";
import Trending from "./components/Pages/Trending";
import Login from "./components/Pages/Login";
import NotFound from "./components/Pages/NotFound";

const wrappedPages = [
  {
    name:"Trending",
    component: <Trending />,
    path: "/trending",
    userOnly: false,
  },
  {
    name:"",
    component: <Login />,
    path: "/login",
    userOnly: false,
  },
  {
    name:"Profile",
    component: <Profile />,
    path: "/profile",
    userOnly: true,
  },
  {
    name:"Compare",
    component: <Compare />,
    path: "/compare",
    userOnly: false,
  },
  {
    name:"My Stocks",
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
