import { Outlet } from "react-router";
import Navbar from "../../components/sharedComponents/Navbar";

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <footer>
        <h1>Footer will be here.</h1>
      </footer>
    </>
  );
};

export default RootLayout;
