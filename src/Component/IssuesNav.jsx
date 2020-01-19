import React, { Component } from "react";
import { Col, Radio, Input, Icon } from "antd";
import { Link, NavLink } from "react-router-dom";
import classes from "./Style/Issues.module.scss";

class IssuesNav extends Component {
  render() {
    return (
      <div className={classes.IssuesNav}>
        <Col lg={8} md={24} style={{ overflowWrap: "break-word" }}>
          <div className={classes.NavLinkGroup}>
            <NavLink
              to="/Issues/Created"
              activeStyle={{
                backgroundColor: "#0366d6",
                color: "white",
                border: "none"
              }}
            >
              Created
            </NavLink>
            <NavLink
              to="/Issues/Assigned"
              activeStyle={{
                backgroundColor: "#0366d6",
                color: "white",
                border: "none"
              }}
            >
              Assigned
            </NavLink>
            <NavLink
              to="/Issues/Mentioned"
              activeStyle={{
                backgroundColor: "#0366d6",
                color: "white",
                border: "none"
              }}
            >
              Mentioned
            </NavLink>
          </div>
        </Col>
        <Col lg={16} md={0} sm={0} xs={0} className={classes.issuesNavSearchBox}>
          <Input
            placeholder="error sort:created-desc is:public is:open"
            prefix={<Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </Col>
      </div>
    );
  }
}

export default IssuesNav;
