"use strict";

const achievementsList = [
  {
    img: "Images/achievementsPage/eatables.png",
    count: 1757,
    content: "Eatables Distributed"
  },
  {
    img: "Images/achievementsPage/blanket.png",
    count: 503,
    content: "Blankets to underprivileged"
  },
  {
    img: "Images/achievementsPage/clothes.png",
    count: 1952,
    content: "Clothes to Poor/Workers"
  },
  {
    img: "Images/achievementsPage/plant.png",
    count: 68,
    content: "Plants/Saplings Planted"
  },
  {
    img: "Images/achievementsPage/mask.png",
    count: 504,
    content: "Masks Distributed"
  },
  {
    img: "Images/achievementsPage/steam.png",
    count: 206,
    content: "Steam Vaporizers to Policemen"
  },
  {
    img: "Images/achievementsPage/refreshments.png",
    count: 251,
    content: "refreshments to policemen"
  },
  {
    img: "Images/achievementsPage/toys.png",
    count: 249,
    content: "toys and stationery to poor children"
  },
  {
    img: "Images/achievementsPage/animals.png",
    count: 4,
    content: "CIty animals helped"
  },
  {
    img: "Images/achievementsPage/cleaning.png",
    count: 3,
    content: "Cleaning Drives"
  },
  {
    img: "Images/achievementsPage/glucose.png",
    count: 193,
    content: "Glucose Boxes to Poor"
  }
];

function Achievements() {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "containerMain"
    },
    achievementsList.map((achievement) => {
      return /*#__PURE__*/ React.createElement(Achievement, {
        img: achievement.img,
        count: achievement.count,
        content: achievement.content
      });
    })
  );
}

function Achievement(props) {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "card"
    },
    /*#__PURE__*/ React.createElement("img", {
      src: props.img
    }),
    /*#__PURE__*/ React.createElement(
      "span",
      {
        className: "counter",
        "data-count": props.count
      },
      "0"
    ),
    "           ",
    /*#__PURE__*/ React.createElement("p", null, props.content.toUpperCase())
  );
}

let achievementsContainer = document.querySelector(".achievementsPage .container");
ReactDOM.render(
  /*#__PURE__*/ React.createElement(Achievements, null),
  achievementsContainer
);

function countUp() {
  $('.counter').each(function() {
    var $this = $(this);
    var oTop = $this.offset().top - window.innerHeight;
    var countTo = $this.attr('data-count');
    if ($this.text() == 0 && $(window).scrollTop() > oTop) {
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },
      {
        duration: 1000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    }
    else if ($this.text() == countTo && $(window).scrollTop() < oTop) {
      $this.text(0);
    }  
  });
}

$(window).scroll(countUp);

$(window).ready(countUp);

