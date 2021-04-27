import { Header } from "../components/Header";
import Navbar from "../components/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
        <Navbar />
      </header>
      <body>{children}</body>
    </div>
  );
};

export default Layout;
