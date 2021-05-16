'use strict';

const citiesList = [
  	{
      	img: 'Images/anand.png',
		name: 'ANAND',
  		para1: 'Our team at the milk capital of India believes in education par excellence.',
      	para2: 'Apart from everyday essentials and mid-day meals, our volunteers have distributed essential stationery amongst those in need.'
	},
  	{
      	img: 'Images/bharuch.png',
		name: 'BHARUCH',
  		para1: 'Our enthusiastic team of volunteers in the city at the mouth of river Narmada never fails in showing kindness and compassion towards the poor.',
      	para2: 'The team distributed blankets and clothes to those who slept on footpaths in the winter and helped them get through the biting cold.'
	},
  	{
      	img: 'Images/bhavnagar.png',
		name: 'BHAVNAGAR',
  		para1: 'Our high-spirited team of volunteers at Kathiawar or the land of the Gohils has never failed in giving back to the community, be it in any form.',
      	para2: 'They have strived hard to make the city clean and green, distribute everyday essentials amongst the needy, imbibe living values among children and support the police workforce.'
	},
  	{
       	img: 'Images/rajkot.png',
		name: 'Rajkot',
  		para1: "The city of paintings is one of the most flourishing cities. It is the fourth largest city in Gujarat. More than 15% of the population lives below the poverty line.",
      	para2: "Our volunteers in this city are striving to provide the poor with essentials that they can't afford."
	},
  	{
      	img: 'Images/surat.png',
		name: 'SURAT',
  		para1: 'The city of sun is one of the dynamic and fastest-growing cities in India. It has the most vibrant present and equally varied heritage of the past. It holds 8th place in the cities having the largest population. Along with the highest population, there comes a high rate of poverty - 40%.',
      	para2: 'The volunteers here are trying their best to eliminate poverty.'
	},
  	{
      	img: 'Images/vadodara.png',
		name: 'Vadodara',
  		para1: 'The city of art/culture or the land of warriors is one of the most beautiful cities in Gujarat. It is the third-largest city in Gujarat and the 18th largest in India in terms of population.',
      	para2: 'Along with the brighter side of palaces and mansions, there comes the other side of poverty. 36% of the population lives below the poverty line. Our volunteers here work selflessly to fulfill their needs.'
	},
  	{
      	img: 'Images/valsad.png',
		name: 'VALSAD',
  		para1: 'Our volunteers at the city famous for its mango orchards have helped those suffering due to the COVID-19 recession.',
      	para2: 'For instance, our volunteers got 100+ masks stitched by unemployed tailors and distributed those amongst the needy.'
	},
  	{
      	img: 'Images/vapi.png',
		name: 'VAPI',
  		para1: 'Our energetic volunteers at the city of chemicals are leading the fight against hunger.',
      	para2: 'They have distributed ration kits, snacks, and refreshments so far amongst the undernourished to fight hunger. Also, they have taken a step forward towards imparting education as well as animal welfare.'
	},
]

function AllCities() {
	return (
    	<div className='containerMain'>
        	{citiesList.map((city) => {
				return <Cities name={city.name} para1={city.para1} para2={city.para2} img={city.img} />
        	})}
        </div>
    );
}

function Cities(props) {
	return (
		<div className='card'>
          <div className='box'>
            <div className='cityName'>
              <img src={props.img} alt="" />
              <h1>{props.name.toUpperCase()}</h1>
            </div>
            <div className='contentBx'>
				<div>
	            	<p>
                      {props.para1}
                    </p>
	            	<p>
                      {props.para2}
                    </p>
              	</div>
            </div>
          </div>
      	</div>
    );
}

let citiesContainer = document.querySelector('.citiesPage .container');
ReactDOM.render(<AllCities />, citiesContainer);