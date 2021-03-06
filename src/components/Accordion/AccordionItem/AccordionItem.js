import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./AccordionItem.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";

const AccordionItem = (props) => {
  const [opened, setOpened] = useState(false);
  const { title, content } = props;
  const accordionItemClassName = classNames(
    "accordion",
    opened ? "accordion-item--opened" : false
  );
  const handleAccordionToggle = () => {
    setOpened(!opened);
  };

  let accordionItemComp = (
    <ThemeProvider theme={theme}>
      <Component
        className={accordionItemClassName}
        onClick={handleAccordionToggle}
      >
        <div className="accordion-item__line">
          <h3 className="accordion-item__title">{title}</h3>
          <span className="accordion-item__icon" />
        </div>
        <div className="accordion-item__inner">
          <div className="accordion-item__content">
            <p className="accordion-item__paragraph">{content}</p>
          </div>
        </div>
      </Component>
    </ThemeProvider>
  );
  return accordionItemComp;
};

AccordionItem.defaultProps = {};

AccordionItem.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default AccordionItem;
