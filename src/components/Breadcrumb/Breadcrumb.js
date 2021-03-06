import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Breadcrumb.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

const Breadcrumb = (props) => {
  const { className, light, uppercase, bold, ...attributes } = props;

  const classes = classNames("breadcrumb", className);

  let children;

  if (bold) {
    children = React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        bold: true,
      });
    });
  } else {
    children = props.children;
  }

  let breadcrumbComponent = (
    <ThemeProvider theme={theme}>
      <nav data-test="breadcrumb">
        <Component {...attributes} className={classes}>
          {children}
        </Component>
      </nav>
    </ThemeProvider>
  );
  return breadcrumbComponent;
};

Breadcrumb.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  light: PropTypes.bool,
  uppercase: PropTypes.bool,
};

export default Breadcrumb;
export { Breadcrumb as CDBBreadcrumb };
