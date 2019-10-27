import Head from "next/head";

import "./Layout.scss";

const Header = () => (
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand">Sahmwanga</a>
  </nav>
);

const Layout = props => {
  return (
    <>
      <Header />
      <div className="Layout">{props.children}</div>
    </>
  );
};

export default Layout;
