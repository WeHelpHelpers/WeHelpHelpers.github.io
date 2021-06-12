'use strict';


class ContactSection extends React.Component{
	render(){
      return(
	    <div className='container'>
		For any queries related to our work or for suggestions, reach out to us at:
        <div class="icons">
<a href="mailto: wehelphelpers@gmail.com"><i class="fas fa-envelope"></i></a>
<a href="https://www.facebook.com/Wehelphelpers-101656681756147/"><i class="fab fa-facebook"></i></a>
<a href="https://twitter.com/wehelphelpers"><i class="fab fa-twitter"></i></a>
<a href="https://www.instagram.com/wehelphelpers/"><i class="fab fa-instagram"></i></a>
        </div>
        </div>
      
      );
    }
}

let contactSection = document.querySelector('.contactSection');
ReactDOM.render(<ContactSection />, contactSection);