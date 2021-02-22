import { Blogs } from "../Blogs/Blog";
import {
  AllNews,
  Sport,
  Business,
  Technology,
  Politics,
} from "../News/AllNews";
import { Subscription } from "../Subscription/Subscription";
import { Pagination } from "../Pagination/Pagination";
import { CarouselMain } from "../CarouselMain";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import React, { useState } from "react";

export function MainBody(props) {
  const { type } = useParams();
  return (
    <div className="container">
      <div className="row">
        <CarouselMain />
        <div className="col-7">
          <h4>All News</h4>
          {props.isAuth === true ? (
            <Link to="/addNews" className="btn btn-success">
              +ADD NEWS
            </Link>
          ) : (
            <></>
          )}
          {/* <Route path="/politics">
            <Politics />
          </Route>
          <Route path="/sports">
            <Sport />
          </Route>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/technologies">
            <Technology />
          </Route>
          <Route path="/">
            <AllNews />
          </Route> */}
          <AllNews
            type={type}
            userObj={props.userObj}
            setUser={props.setUser}
          />
        </div>
        <div className="col-5">
          <h4>Blogs</h4>
          {props.isAuth === true ? (
            <Link to="/addBlogs" className="btn btn-success">
              +ADD BLOGS
            </Link>
          ) : (
            <></>
          )}
          <Blogs />
          <Subscription />
        </div>
      </div>
      <Pagination />
    </div>
  );
}
