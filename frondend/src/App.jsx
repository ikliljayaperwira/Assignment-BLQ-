import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PinjamBuku from "./pages/PinjamBuku/PinjamBukuPage";
import HompePage from "./pages/home/HomePage";


export default class app extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <div className="wrapper">
            <div className="content-wrapper">
              <div className="countent-header">
                <div className="container-fluid">
                  <Routes>
                    <Route exact path="/" element={<HompePage/>}></Route>
                    <Route path="/PinjamBuku" element={<PinjamBuku/>}></Route>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </>
    );
  }
}
