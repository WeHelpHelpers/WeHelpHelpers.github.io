function showPage(page) {
    document.querySelectorAll(".timeline").forEach(div => {
        div.classList = 'timeline';
    })
    document.querySelector(`#${page}`).classList = 'timeline active';
}

document.querySelectorAll(".choiceBox button").forEach(button => {
    button.addEventListener("click",function() {
          document.querySelectorAll(".choiceBox button").forEach(button => {
            button.classList = '';
          });
          this.classList = 'active'
          showPage(this.dataset.page);
    })
}); 

/*---------------------------------------Drives Script------------------------------------- */
"use strict";

const drivesList = [
  {
    text: "14 May 2021",
    img: "Images/14May2021.jpeg",
    title: "Bhavnagar",
    desc: "Celebrated Eid with the destitute by serving 180+ hot, fresh and tasty food packed with fully sanitised dishes, along with sugarcane juice."
  },
  {
    text: "10 May 2021",
    img: "Images/10May2021.jpeg",
    title: "Bhavnagar",
    desc: "Distribution of Glucose boxes and Glucon-D to more than 100 pauperized families to make them aware of its importance for the energy generation and metabolism of the human body in the fight against COVID."
  },
  {
    text: "11 April 2021",
    img: "Images/11Apr2021.jpeg",
    title: "Anand",
    desc: "Served 100+ biscuit packets and puff to the impoverished to overcome their hunger and sugarcane juices to keep them hydrated in the hot weather."
  },
  {
    text: "07 April 2021",
    img: "Images/07Apr2021.jpeg",
    title: "Bhavnagar",
    desc: "Distribution of 50 fresh khichdi packets along with some clothes amongst the needy children."
  },
  {
    text: "15 March 2021",
    img: "Images/15Mar2021.jpeg",
    title: "Vapi",
    desc: "Interacted with young and bright minds and taught them some drawing/coloring basics to boost their imagination. Played fun-learning games and offered a meal along with milk and chocolates to 75+ children as a memorable goodbye."
  },
  {
    text: "01 March 2021",
    img: "Images/01Mar2021.jpeg",
    title: "Bhavnagar",
    desc: "Distribution of steam vaporizer machines along with a greeting card to the policemen, to applaud them for their courageous efforts to keep us safe 24x7 during the lockdown and ever through."
  },
  {
    text: "20 February 2021",
    img: "Images/20Feb2021.jpeg",
    title: "Vadodara",
    desc: "Distribution of 90+ notebooks and crayons amongst the poor children to let out their creative side and dream bigger."
  },
  {
    text: "December 2020",
    img: "Images/15Dec2020.jpeg",
    title: "Vadodara, Surat, Rajkot, Bharuch",
    desc: "Distribution of 200+ blankets amongst those who have no roof over their heads and zero protection against the biting cold. "
  },
  {
    text: "15 December 2020",
    img: "Images/15Dec2020.jpeg",
    title: "Valsad",
    desc: "We salute all the police officers who have been serving us throughout the pandemic, putting their lives at risk to maintain order during times like these."
  },
  {
    text: "November 2020",
    img: "Images/15Dec2020.jpeg",
    title: "Bhavnagar, Vapi Anand, Valsad",
    desc: "On the occasion of Diwali, we distributed 1770+ clothes and 300+ blankets amongst those pushed to Queer Streets across six cities of Gujarat. We tried to make their Diwali merrier by keeping them warm and protected against the frosty weather."
  }
];
const recognitionsList = [
  {
    text: "May 2021",
    img: "Images/20Feb2021.jpeg",
    title: "ZEE News Media",
    desc: "Our team has always served its best and always will. We were privileged to receive a prestigious award by Zee News 24x7, as an appreciation for our work as Corona Warriors. We owe this to each and every member of our team for their timely efforts, and most importantly, to our donors whose support has helped us to further our mission."
  },
  {
    text: "May 2021",
    img: "Images/20Feb2021.jpeg",
    title: "YOLO Foundation",
    desc: "Owing to the exceptional work in the past one year by our founders and all the volunteers throughout Gujarat, our story, idea and implementation of WeHelpHelpers since the start was shared on the social media handle of YOLO Foundation run by Jacqueline Fernandez."
  },
  {
    text: "May 2021",
    img: "Images/20Feb2021.jpeg",
    title: " HIGH ON LIFE FOUNDATION",
    desc: "High On Life Foundation has been working for many years to spread awareness against drug abuse and to stop the youth from falling to drug addiction. For our contribution towards their cause and artwork stating and implying the stop of drug abuse, HOL Foundation along with the Govt. of Gujarat appreciated us for the same."
  }
];

function Timeline() {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "timeline-container",
      id: "timeline-1"
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "timeline active",
        id: "page1"
      },
      drivesList.map((drive) => {
        return /*#__PURE__*/ React.createElement(TimilineItem, {
          text: drive.text,
          img: drive.img,
          title: drive.title,
          desc: drive.desc
        });
      })
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "timeline",
        id: "page2"
      },
      recognitionsList.map((recognition) => {
        return /*#__PURE__*/ React.createElement(TimilineItem, {
          text: recognition.text,
          img: recognition.img,
          title: recognition.title,
          desc: recognition.desc
        });
      })
    )
  );
}

function TimilineItem(props) {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "timeline-item",
      "data-text": props.text
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "timeline__content"
      },
      /*#__PURE__*/ React.createElement("img", {
        className: "timeline__img",
        src: props.img
      }),
      "                 ",
      /*#__PURE__*/ React.createElement(
        "h2",
        {
          class: "timeline__content-title"
        },
        props.title.toUpperCase()
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        {
          className: "timeline__content-desc"
        },
        props.desc
      )
    )
  );
}

let timelineContainer = document.querySelector(".dataBox");
ReactDOM.render(
  /*#__PURE__*/ React.createElement(Timeline, null),
  timelineContainer
);

(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" +
        selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
        ")"
    );
    $(".choiceBox button:first-of-type").click(function() {
      console.log(selectors.item.first());
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" +
          selectors.item
            .first()
            .find(selectors.img)
            .attr("src") +
          ")"
      );  
    });
    $(".choiceBox button:last-of-type").click(function() {
      console.log(selectors.item.first());
      selectors.item.eq(10).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" +
          selectors.item
            .eq(10)
            .find(selectors.img)
            .attr("src") +
          ")"
      );  
    });
    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .last()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min - 160) {
          selectors.id.css(
            "background-image",
            "url(" +
              $(this)
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();
