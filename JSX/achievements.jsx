'use strict';

const achievementsList = [
  {
    img: 'Images/eatables.png',
    count: 1757,
    content: 'Eatables Distributed'
  },
  {
    img: 'Images/blanket.png',
    count: 503,
    content: 'Blankets to underprivileged'
  },
  {
    img: 'Images/clothes.png',
    count: 1952,
    content: 'Clothes to Poor/Workers'
  },
  {
    img: 'Images/plant.png',
    count: 68,
    content: 'Plants/Saplings Planted'
  },
  {
    img: 'Images/mask.png',
    count: 504,
    content: 'Masks Distributed'
  },
  {
    img: 'Images/steam.png',
    count: 206,
    content: 'Steam Vaporizers to Policemen'
  },
  {
    img: 'Images/refreshments.png',
    count: 71,
    content: 'refreshments to policemen'
  },
  {
    img: 'Images/toys.png',
    count: 249,
    content: 'toys and stationery to poor children'
  },
  {
    img: 'Images/animals.png',
    count: 4,
    content: 'CIty animals helped'
  },
  {
    img: 'Images/cleaning.png',
    count: 3,
    content: 'Cleaning Drives'
  },
  {
    img: 'Images/glucose.png',
    count: 193,
    content: 'Boxes to Poor'
  },
]

function Achievements() {
	return (
    	<div className='containerMain'>
        	{achievementsList.map((achievement) => {
        		return <Achievement img={achievement.img} count={achievement.count} content={achievement.content} />
        })}
      </div>
    );
}

function Achievement(props) {
	return (
		<div className='card'>
			<img src={props.img} />
			<span className="counter">{props.count}</span>	   		 	   <p>{props.content.toUpperCase()}</p>
        </div>
    );
}

let achievementsContainer = document.querySelector('.achievementsPage .container');
ReactDOM.render(<Achievements />, achievementsContainer);