import './styles.css';
import './imges/background.jpg';

import home from './home';
import menu from './menu';
import contact from './contact';
home(); // Load the home page by default
const tabButtons = document.querySelectorAll('.tab-buttons');
const content = document.getElementById('content');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        content.innerHTML = ''; // Clear the content area
        if (button.textContent === 'Home') {
            home();
        } else if (button.textContent === 'Menu') {
          
          menu();
        } else if (button.textContent === 'Contact') {
           contact();
            
        }
    });
}
);


