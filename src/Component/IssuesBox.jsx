import React, { Component } from "react";
import { Row, Col, Icon, Menu, Dropdown, Input, Button, Popover } from "antd";
import Pagination from "./Pagination";
import classes from "./Style/Issues.module.scss";
import axios from "axios";
import IssuesNav from "./IssuesNav";

class IssuesBox extends Component {
  state = {
    issues: [],
    currentPage: 1,
    issuesPerPage: 15
  };
  componentDidMount() {
    axios.get("https://api.github.com/repos/rails/rails/issues").then(res =>
      this.setState({
        issues: res.data
      })
    );
  }
  stateIssues = state => {
    switch (true) {
      case state === "open":
        return (
          <Icon type="exclamation-circle" style={{ color: "rgb(0,175,59)" }} />
        );
        break;
      case state === "closed":
        return (
          <Icon type="exclamation-circle" style={{ color: "rgb(219,0,23)" }} />
        );
    }
  };
  Lblcolor = bg => {
    switch (true) {
      case bg == "00E5FF":
        return "#383838";
        break;
      case bg == "FFF700":
        return "#383838";
        break;
      case bg == "bfd4f2":
        return "#383838";
        break;
      case bg == "bfdadc":
        return "#383838";
        break;
      default:
        return "#ffffff";
    }
  };
  itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };
  paginate = PageNumber => {
    this.setState({
      currentPage: PageNumber
    });
  };
  render() {
    const indexOfLastPost = this.state.currentPage * this.state.issuesPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.issuesPerPage;
    const currentissues = this.state.issues.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    const visibility = (
      <Menu>
        <Menu.Item
          key="0"
          disabled={true}
          style={{
            backgroundColor: "rgb(246,248,251)",
            paddingRight: 170,
            fontSize: 13
          }}
        >
          <span style={{ color: "#404040", fontWeight: 600 }}>
            Repository visibility
          </span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1" style={{ paddingLeft: 35, fontSize: 13 }}>
          <a href="#">Private repositories only</a>
        </Menu.Item>
        <Menu.Item key="3" style={{ paddingLeft: 35, fontSize: 13 }}>
          Public repositories only
        </Menu.Item>
      </Menu>
    );
    const organization = (
      <Menu>
        <Menu.Item
          key="0"
          disabled={true}
          style={{
            backgroundColor: "rgb(246,248,251)",
            paddingRight: 170,
            fontSize: 13,
            borderBottom: "1px solid #CECECE"
          }}
        >
          <span style={{ color: "#404040", fontWeight: 600 }}>
            Filter by organization or owner
          </span>
        </Menu.Item>
        <Menu.Item
          key="0"
          disabled={true}
          style={{
            backgroundColor: "rgb(246,248,251)",
            fontSize: 13,
            width: "100%"
          }}
        >
          <Input
            style={{ color: "#404040", fontWeight: 600, width: "100%" }}
            placeholder="Filter organization"
          />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1" style={{ paddingLeft: 30, fontSize: 13 }}>
          <a href="#" style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ paddingRight: 8 }}
              className={classes.userimg}
              src="https://avatars3.githubusercontent.com/u/53019728?s=40&v=4"
              height="20"
              width="20"
              alt=""
            />
            MohsenZed
          </a>
        </Menu.Item>
      </Menu>
    );
    const Sort = (
      <Menu>
        <Menu.Item
          key="0"
          disabled={true}
          style={{
            backgroundColor: "rgb(246,248,251)",
            paddingRight: 240,
            fontSize: 12
          }}
        >
          <span style={{ color: "#404040", fontWeight: 600 }}>Sort by</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1" style={{ paddingLeft: 35, fontSize: 13 }}>
          <a href="#">Newest</a>
        </Menu.Item>
        <Menu.Item key="2" style={{ paddingLeft: 35, fontSize: 13 }}>
          Oldest
        </Menu.Item>
        <Menu.Item key="3" style={{ paddingLeft: 35, fontSize: 13 }}>
          Most commented
        </Menu.Item>
        <Menu.Item key="4" style={{ paddingLeft: 35, fontSize: 13 }}>
          Least commented
        </Menu.Item>
        <Menu.Item key="5" style={{ paddingLeft: 35, fontSize: 13 }}>
          Recently updated
        </Menu.Item>
        <Menu.Item key="6" style={{ paddingLeft: 35, fontSize: 13 }}>
          Least recently updated
        </Menu.Item>
        <Menu.Item
          key="7"
          disabled={true}
          style={{
            backgroundColor: "rgb(246,248,251)",
            paddingRight: 240,
            fontSize: 12
          }}
        >
          <span style={{ color: "#404040", fontWeight: 600 }}>
            Most reactions
          </span>
        </Menu.Item>
        <Button style={{ margin: "10px 5px 10px 5px" }}>
          <Icon type="heart" theme="filled" style={{ color: "red" }} />
        </Button>
        <Button style={{ margin: "10px 5px 10px 5px" }}>
          <Icon type="smile" theme="filled" style={{ color: "#dea123" }} />
        </Button>
      </Menu>
    );
    console.log(this.state.PageNumber);
    return (
      <>
        <IssuesNav />
        <Col md={24} className={classes.mainBox}>
          <Row className={classes.HeaderBox}>
            <Col
              lg={12}
              md={24}
              sm={24}
              xs={24}
              className={classes.IssuesConditionHeader}
            >
              <div className={classes.HeaderCondition}>
                <a href="#">
                  <Icon type="exclamation-circle" />
                  3,792,362 Open
                </a>
                <a href="#">
                  <Icon type="check" />
                  12,470,150 Closed
                </a>
              </div>
            </Col>
            <Col lg={12} md={0} sm={0} xs={0} className={classes.issuesFilters}>
              <div className={classes.issuesFilter}>
                <Dropdown
                  placement="bottomRight"
                  overlay={visibility}
                  trigger={["click"]}
                  className={classes.visibilityIssuesFilter}
                >
                  <a href="#">
                    Visibility
                    <Icon
                      type="caret-down"
                      theme="filled"
                      className={classes.dropdownIcon}
                    />
                  </a>
                </Dropdown>
              </div>
              <div className={classes.issuesFilter}>
                <Dropdown
                  placement="bottomRight"
                  overlay={organization}
                  trigger={["click"]}
                  className={classes.organizationIssuesFilter}
                >
                  <a className="ant-dropdown-link" href="#">
                    Organization
                    <Icon
                      type="caret-down"
                      theme="filled"
                      className={classes.dropdownIcon}
                    />
                  </a>
                </Dropdown>
              </div>
              <div className={classes.issuesFilter}>
                <Dropdown
                  placement="bottomRight"
                  overlay={Sort}
                  trigger={["click"]}
                  className={classes.SortIssuesFilter}
                >
                  <a className="ant-dropdown-link" href="#">
                    Sort
                    <Icon
                      type="caret-down"
                      theme="filled"
                      className={classes.dropdownIcon}
                    />
                  </a>
                </Dropdown>
              </div>
            </Col>
          </Row>
          <Row>
            {currentissues.map(i => (
              <li className={classes.issues} key={i.id}>
                <Col lg={16} md={24} className={classes.IssuesName}>
                  <div className={classes.ConditionIcon}>
                    {i.state ? this.stateIssues(i.state) : null}
                  </div>
                  <div className={classes.Name}>
                    <div>
                      <a href="#">{i.user.login}</a>
                      <Popover
                        className={classes.Popover}
                        content={
                            <>
                                <span style={{fontSize:10,fontWeight:500,marginBottom:20,display:'block'}}>{i.user.login} on {i.created_at}</span>
                          <div
                            className={classes.PopoverTxt}
                            style={{ display: "flex" }}
                          >
                            <div style={{ paddingRight: 10 }}>
                              {i.state ? this.stateIssues(i.state) : null}
                            </div>
                            <div
                              style={{
                                width: "200px !important",
                                height: "100px !important",
                                overflow: "hidden"
                              }}
                            >
                              <h3>{i.title} <span style={{fontSize:13,fontWeight:400}}>#{i.number}</span></h3>
                              <p>{i.body}</p>
                            </div>
                          </div>
                          </>
                        }
                      >
                        <p style={{ cursor: "pointer" }}>{i.title}</p>
                      </Popover>
                      <span key={i.id}>
                        {i.labels.map(lbl => (
                          <span
                            key={i.id}
                            className={classes.lblIssues}
                            style={{
                              backgroundColor: `#${lbl.color}`
                            }}
                          >
                            <a
                              className={classes.lblIssuesLink}
                              href={lbl.url}
                              style={{
                                color: `${this.Lblcolor(lbl.color)}`
                              }}
                            >
                              {lbl.name}
                            </a>
                          </span>
                        ))}
                      </span>
                    </div>
                    <span>
                      <span>{i.state === "open" ? "opened" : "closed"}</span>{" "}
                      <span>{i.created_at}</span> by {i.user.login}
                    </span>
                  </div>
                </Col>
                <Col
                  xs={0}
                  sm={0}
                  md={0}
                  lg={8}
                  className={classes.FiltersConditions}
                >
                  <Col md={8} className={classes.FilterCondition}>
                    {}
                  </Col>
                  <Col md={8} className={classes.FilterCondition}>
                    {i.assignee ? (
                      <a href={i.assignee.html_url}>
                        <img
                          src={i.assignee.avatar_url}
                          alt="..."
                          style={{ height: 20, width: 20, borderRadius: 3 }}
                        />
                      </a>
                    ) : (
                      " "
                    )}
                  </Col>
                  <Col
                    md={8}
                    className={classes.FilterCondition}
                    style={{
                      float: "right",
                      display: "flex",
                      justifyContent: "flex-end",
                      paddingRight: 10
                    }}
                  >
                    {i.comments > 0 ? (
                      <span>
                        <Icon type="message" /> {i.comments}
                      </span>
                    ) : null}
                  </Col>
                </Col>
              </li>
            ))}
          </Row>
        </Col>
        <div
          className={classes.pagination}
        >
          <Pagination
            IssuesPerPage={this.state.issuesPerPage}
            totalIssues={this.state.issues.length}
            paginate={this.paginate}
            currentPage={this.state.currentPage}
          />
        </div>
        <div
          style={{
            marginTop: 5,
            paddingBottom: 40,
            width: "100%",
            display: "inline-flex",
            justifyContent: "center",
            fontSize: 15,
            borderBottom: "1px solid rgb(225,228,233)"
          }}
        >
          <span>
            <Icon style={{ fontSize: 16, paddingRight: 4 }} type="bulb" />
            <b>ProTip!</b> Updated in the last three days:{" "}
            <a href="#">updated:>2020-01-14</a>
          </span>
        </div>
        <Col lg={24} md={24} xs={24} className={classes.footer}>
          <Col lg={10} md={24} sm={24} xs={24} className={classes.footerLeft}>
            <ul>
              <span style={{fontSize:10}}>© 2020 GitHub, Inc</span>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Security</li>
              <li>Status</li>
              <li>Help</li>
            </ul>
          </Col>
          <Col lg={4} md={24} sm={24} xs={24} className={classes.footerCenter}>
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon type="github" style={{ color: "#c6cbd1", fontSize: 25 }} />
            </a>
          </Col>
          <Col lg={10} md={24} sm={24} xs={24} className={classes.footerRight}>
            <ul>
              <li>Contact GitHub</li>
              <li>Pricing</li>
              <li>API</li>
              <li>Training</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </Col>
        </Col>
      </>
    );
  }
}

export default IssuesBox;
