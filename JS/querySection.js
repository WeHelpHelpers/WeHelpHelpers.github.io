"use strict";

class QuerySection extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "container"
      },
      "For any queries related to our work or for suggestions, reach out to us at:",
      /*#__PURE__*/ React.createElement(
        "div",
        {
          class: "icons"
        },
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "mailto: wehelphelpers@gmail.com"
          },
          /*#__PURE__*/ React.createElement("i", {
            class: "fas fa-envelope"
          })
        ),
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "https://www.facebook.com/Wehelphelpers-101656681756147/"
          },
          /*#__PURE__*/ React.createElement("i", {
            class: "fab fa-facebook"
          })
        ),
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "https://twitter.com/wehelphelpers"
          },
          /*#__PURE__*/ React.createElement("i", {
            class: "fab fa-twitter"
          })
        ),
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "https://www.instagram.com/wehelphelpers/"
          },
          /*#__PURE__*/ React.createElement("i", {
            class: "fab fa-instagram"
          })
        )
      )
    );
  }
}

let querySection = document.querySelector(".querySection");
ReactDOM.render(
  /*#__PURE__*/ React.createElement(QuerySection, null),
  querySection
);
