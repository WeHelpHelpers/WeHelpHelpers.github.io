'use strict';


class NavBar extends React.Component{
	render(){
      return(
	    <div className='container'>
          <div className='header'>
            <img src="Images/whh.png" />
            <h1 className='name'>We Help Helpers</h1>
          </div>
	   	<NavLinks />
        </div>
      );
    }
}

class NavLinks extends React.Component {
	render() {
      return(
          <nav>
          	<ul>
                        <a href="index.html"><span></span><li><p>HOME</p></li></a>
                        <a href="gallery.html"><span></span><li><p>GALLERY</p></li></a>
                        <a href="timeline.html"><span></span><li><p>TIMELINE</p></li></a>
                        <a href="contact.html"><span></span><li><p>CONTACT US</p></li></a>
              
            </ul>
          	<ToggleIcon />
          </nav>    	
      )
    }
}

class ToggleIcon extends React.Component {
	render(){
    	return(
        	<div className='toggleIcon'>
            	<div className='line'></div>
            	<div className='line'></div>
            	<div className='line'></div>
            </div>
        )
    }
}

let navbar = document.querySelector('.navbar');
ReactDOM.render(<NavBar />, navbar);