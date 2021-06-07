window.addEventListener("scroll",function(){
  const landing = document.querySelector('.citiesPage');
  if (window.scrollY > 0){
      landing.style.top = "100px";
  }
  else{
      landing.style.top = "100vh";
  }
})

window.addEventListener("load",function(){
  const landing = document.querySelector('.citiesPage');
  if (window.scrollY > 0){
      landing.style.top = "100px";
  }
  else{
      landing.style.top = "100vh";
  }
})

"use strict";

const citiesList = [
  {
    img: "Images/citiesPage/anand.png",
    name: "ANAND",
    para1:
      "Our team at the milk capital of India believes in education par excellence.",
    para2:
      "Apart from everyday essentials and mid-day meals, our volunteers have distributed essential stationery amongst those in need."
  },
  {
    img: "Images/citiesPage/bharuch.png",
    name: "BHARUCH",
    para1:
      "Our enthusiastic team of volunteers in the city at the mouth of river Narmada never fails in showing kindness and compassion towards the poor.",
    para2:
      "The team distributed blankets and clothes to those who slept on footpaths in the winter and helped them get through the biting cold."
  },
  {
    img: "Images/citiesPage/bhavnagar.png",
    name: "BHAVNAGAR",
    para1:
      "Our high-spirited team of volunteers at Kathiawar or the land of the Gohils has never failed in giving back to the community, be it in any form.",
    para2:
      "They have strived hard to make the city clean and green, distribute everyday essentials amongst the needy, imbibe living values among children and support the police workforce."
  },
  {
    img: "Images/citiesPage/dakor.png",
    name: "Dakor",
    para1:
      "The city famous for its grand temple of Shree Ranchhodraiji, is one of the earliest to be coined with the title of a pilgrimage center in Gujarat.",
    para2:
      "Our volunteers residing here believe in animal care and welfare. They have come forward to provide the basic needs to animals - food and water, to fight the common cause of their death, i.e, starvation."
  },
  {
    img: "Images/citiesPage/rajkot.png",
    name: "Rajkot",
    para1:
      "The city of paintings is one of the most flourishing cities. It is the fourth largest city in Gujarat. More than 15% of the population lives below the poverty line.",
    para2:
      "Our volunteers in this city are striving to provide the poor with essentials that they can't afford."
  },
  {
    img: "Images/citiesPage/surat.png",
    name: "SURAT",
    para1:
      "The city of sun is one of the dynamic and fastest-growing cities in India. It has the most vibrant present and equally varied heritage of the past. It holds 8th place in the cities having the largest population. Along with the highest population, there comes a high rate of poverty - 40%.",
    para2: "The volunteers here are trying their best to eliminate poverty."
  },
  {
    img: "Images/citiesPage/vadodara.png",
    name: "Vadodara",
    para1:
      "The city of art/culture or the land of warriors is one of the most beautiful cities in Gujarat. It is the third-largest city in Gujarat and the 18th largest in India in terms of population.",
    para2:
      "Along with the brighter side of palaces and mansions, there comes the other side of poverty. 36% of the population lives below the poverty line. Our volunteers here work selflessly to fulfill their needs."
  },
  {
    img: "Images/citiesPage/valsad.png",
    name: "VALSAD",
    para1:
      "Our volunteers at the city famous for its mango orchards have helped those suffering due to the COVID-19 recession.",
    para2:
      "For instance, our volunteers got 100+ masks stitched by unemployed tailors and distributed those amongst the needy."
  },
  {
    img: "Images/citiesPage/vapi.png",
    name: "VAPI",
    para1:
      "Our energetic volunteers at the city of chemicals are leading the fight against hunger.",
    para2:
      "They have distributed ration kits, snacks, and refreshments so far amongst the undernourished to fight hunger. Also, they have taken a step forward towards imparting education as well as animal welfare."
  }
];

function AllCities() {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "containerMain"
    },
    citiesList.map((city) => {
      return /*#__PURE__*/ React.createElement(Cities, {
        name: city.name,
        para1: city.para1,
        para2: city.para2,
        img: city.img
      });
    })
  );
}

function Cities(props) {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "card"
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "box"
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "cityName"
        },
        /*#__PURE__*/ React.createElement("img", {
          src: props.img,
          alt: ""
        }),
        /*#__PURE__*/ React.createElement("h1", null, props.name.toUpperCase())
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "contentBx"
        },
        /*#__PURE__*/ React.createElement(
          "div",
          null,
          /*#__PURE__*/ React.createElement("p", null, props.para1),
          /*#__PURE__*/ React.createElement("p", null, props.para2)
        )
      )
    )
  );
}

let citiesContainer = document.querySelector(".citiesPage .container");
ReactDOM.render(
  /*#__PURE__*/ React.createElement(AllCities, null),
  citiesContainer
);
