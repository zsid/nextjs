import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";

import "../../styles/main.css";
class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main">{this.props.children}</main>
        <Footer />
        <style jsx>{`
          .main {
            margin-top: 64px;
          }

          @media screen and (max-width: 599px) {
            .main {
              margin-top: 54px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
