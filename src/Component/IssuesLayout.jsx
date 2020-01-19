import React, { Component } from "react";
import { Row, Col, Radio } from "antd";
import { Switch, Route } from "react-router-dom";
import classes from "./Style/Issues.module.scss";
import IssuesBox from "./IssuesBox";
import IssuesNav from "./IssuesNav";

class IssuesLayout extends Component {
  render() {
    return (
      <>
        <Row>
          <Col xl={{span:16,offset:4}} lg={{ span: 18, offset: 2 }} md={{span:22,offset:1}} sm={24} className={classes.main}>
            <Switch>
              <Route path="/Issues" component={IssuesBox} />
              <Route path="/Issues/Created" component={null} />
              <Route path="/Issues/Assigned" component={null} />
              <Route path="/Issues/Mentioned" component={null} />
            </Switch>
          </Col>
        </Row>
      </>
    );
  }
}

export default IssuesLayout;
