"use strict";

class NavBar extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "container"
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "header"
        },
        /*#__PURE__*/ React.createElement("img", {
          src: "Images/whh.png"
        }),
        /*#__PURE__*/ React.createElement(
          "h1",
          {
            className: "name"
          },
          "We Help Helpers"
        )
      ),
      /*#__PURE__*/ React.createElement(NavLinks, null)
    );
  }
}

class NavLinks extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "nav",
      null,
      /*#__PURE__*/ React.createElement(
        "ul",
        null,
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "index.html"
          },
          /*#__PURE__*/ React.createElement("span", null),
          /*#__PURE__*/ React.createElement(
            "li",
            null,
            /*#__PURE__*/ React.createElement("p", null, "HOME")
          )
        ),
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "gallery.html"
          },
          /*#__PURE__*/ React.createElement("span", null),
          /*#__PURE__*/ React.createElement(
            "li",
            null,
            /*#__PURE__*/ React.createElement("p", null, "GALLERY")
          )
        ),
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "timeline.html"
          },
          /*#__PURE__*/ React.createElement("span", null),
          /*#__PURE__*/ React.createElement(
            "li",
            null,
            /*#__PURE__*/ React.createElement("p", null, "TIMELINE")
          )
        ),
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "contact.html"
          },
          /*#__PURE__*/ React.createElement("span", null),
          /*#__PURE__*/ React.createElement(
            "li",
            null,
            /*#__PURE__*/ React.createElement("p", null, "CONTACT US")
          )
        )
      ),
      /*#__PURE__*/ React.createElement(ToggleIcon, null)
    );
  }
}

class ToggleIcon extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "toggleIcon"
      },
      /*#__PURE__*/ React.createElement("div", {
        className: "line"
      }),
      /*#__PURE__*/ React.createElement("div", {
        className: "line"
      }),
      /*#__PURE__*/ React.createElement("div", {
        className: "line"
      })
    );
  }
}

let navbar = document.querySelector(".navbar");
ReactDOM.render(/*#__PURE__*/ React.createElement(NavBar, null), navbar);

const nav = document.querySelector(".navbar nav");
const toggleIcon = document.querySelector(".navbar nav .toggleIcon");
toggleIcon.addEventListener('click', function() {
  nav.classList.toggle('active');
})