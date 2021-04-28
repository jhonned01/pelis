import { Header } from "../components/Header";
import Navbar from "../components/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
        <Navbar />
      </header>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
