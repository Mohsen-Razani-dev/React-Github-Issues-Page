import React, { Component } from "react";
import { Col, Icon, Input, Menu, Dropdown, Button } from "antd";
import classes from "./Style/Issues.module.scss";
import { Link } from "react-router-dom";
class IssuesPageNavBar extends Component {
  render() {
    const user = (
      <Menu style={{ marginRight: 20 }}>
        <Menu.Item
          key="0"
          style={{ display: "grid", padding: "5px 85px 5px 10px" }}
        >
          <span>Signed in as </span>
          <span>
            <b>MohsenZed</b>
          </span>
        </Menu.Item>
        <Menu.Divider />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "5px 15px"
          }}
        >
          <Button style={{ width: "100%" }} icon="smile">
            Search
          </Button>
        </div>
        <Menu.Divider />
        <Menu.Item key="1" style={{ paddingRight: 30, paddingLeft: 15 }}>
          Your profile
        </Menu.Item>
        <Menu.Item key="2" style={{ paddingRight: 30, paddingLeft: 15 }}>
          Your repositories
        </Menu.Item>
        <Menu.Item key="4" style={{ paddingRight: 30, paddingLeft: 15 }}>
          Your project
        </Menu.Item>
        <Menu.Item key="5" style={{ paddingRight: 30, paddingLeft: 15 }}>
          Your stars
        </Menu.Item>
        <Menu.Item key="6" style={{ paddingRight: 30, paddingLeft: 15 }}>
          Your gists
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="7" style={{ paddingRight: 30, paddingLeft: 15 }}>
          Feature preview
        </Menu.Item>
        <Menu.Item key="8" style={{ paddingRight: 30, paddingLeft: 15 }}>
          Help
        </Menu.Item>
        <Menu.Item key="9" style={{ paddingRight: 30, paddingLeft: 15 }}>
          Settings
        </Menu.Item>
        <Menu.Item key="10" style={{ paddingRight: 30, paddingLeft: 15 }}>
          Sign out
        </Menu.Item>
      </Menu>
    );
    const create = (
      <Menu>
        <Menu.Item key="0" style={{ paddingRight: 30, paddingLeft: 15 }}>
          New repository
        </Menu.Item>
        <Menu.Item key="1" style={{ paddingRight: 30, paddingLeft: 15 }}>
          import repository
        </Menu.Item>
        <Menu.Item key="3" style={{ paddingRight: 30, paddingLeft: 15 }}>
          new gist
        </Menu.Item>
        <Menu.Item key="4" style={{ paddingRight: 30, paddingLeft: 15 }}>
          new organization
        </Menu.Item>
        <Menu.Item key="5" style={{ paddingRight: 30, paddingLeft: 15 }}>
          new project
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Col md={24} className={classes.Navbar}>
          <Col lg={18} md={20} sm={12} xs={12} className={classes.leftColNavbar}>
            <div className={classes.logoContainer}>
              <Icon type="github" className={classes.logo} />
            </div>
            <div className={classes.searchBox}>
              <Input
                placeholder="error sort:created-desc is:public is:open"
                suffix={<Icon type="edit" />}
              />
            </div>
            <div className={classes.navLink}>
              <li>
                <Link to="/pullrequests">Pull requests</Link>
              </li>
              <li>
                <Link to="/Issues">Issues</Link>
              </li>
              <li>
                <Link to="/Marketplace">Marketplace</Link>
              </li>
              <li>
                <Link to="/Explore">Explore</Link>
              </li>
            </div>
          </Col>
          <Col lg={6} md={4} sm={12} xs={12} className={classes.rightColNavbar}>
            <a className={classes.alarm}>
              <Icon type="bell" theme="filled" />
            </a>
            <Dropdown
              placement="bottomRight"
              overlay={create}
              trigger={["click"]}
              className={classes.CreateNew}
            >
              <a className="ant-dropdown-link" href="#">
                <Icon type="plus" />
                <Icon
                  type="caret-down"
                  theme="filled"
                  className={classes.dropdownIcon}
                />
              </a>
            </Dropdown>
            <Dropdown
              placement="bottomRight"
              overlay={user}
              trigger={["click"]}
              className={classes.User}
            >
              <a className="ant-dropdown-link" href="#">
                <img className={classes.userimg} src="https://avatars3.githubusercontent.com/u/53019728?s=40&v=4" height="20" width="20" alt=""/><Icon type="caret-down" theme="filled" className={classes.dropdownIcon}/>
              </a>
            </Dropdown>
          </Col>
        </Col>
      </div>
    );
  }
}

export default IssuesPageNavBar;
