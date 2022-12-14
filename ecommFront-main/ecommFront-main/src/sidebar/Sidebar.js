import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


export default function Sidebar() {
  const auth = useSelector(state=>state.auth); 

	return (
		<div>
		<aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
      {/* Sidebar user panel */}
      <div className="user-panel">
        <div className="pull-left image">
          <img
            src="dist/img/admin.jpg"
            className="img-circle"
            alt="User Image"
          />
        </div>
        <div className="pull-left info">
          <p>{auth.user.fname} {auth.user.lname}</p>
          <a href="#">
            <i className="fa fa-circle text-success" /> Online
          </a>
        </div>
      </div>
      {/* search form */}
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input
            type="text"
            name="q"
            className="form-control"
            placeholder="Search..."
          />
          <span className="input-group-btn">
            <button
              type="submit"
              name="search"
              id="search-btn"
              className="btn btn-flat"
            >
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      {/* /.search form */}
      {/* sidebar menu: : style can be found in sidebar.less */}
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>

        <li>
          <Link to="/home">
            <i className="fa fa-dashboard" /> <span>Dashboard</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-green">new</small>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/managepatent">
            <i className="fa fa-tag" /> <span>Manage Patient </span>
            <span className="pull-right-container">
              {/*<small className="label pull-right bg-green">new</small>*/}
            </span>
          </Link>
        </li>

        <li>
          <Link to="/managevital">
            <i className="fa fa-tag" /> <span>Manage Vitals List </span>
            <span className="pull-right-container">
            </span>
          </Link>
        </li>

      </ul>
    </section>
    {/* /.sidebar */}
  </aside>
			
		</div>
	)
}