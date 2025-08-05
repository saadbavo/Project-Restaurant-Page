const home = () => {
const content = document.getElementById('content');
const h1 = document.createElement('h1');
h1.classList.add('title');
h1.textContent = ' Ichiban ';
const h2 = document.createElement('h2');
h2.classList.add('subtitle');
h2.textContent = 'Sushi';
const p = document.createElement('p');
p.classList.add('description');
p.textContent = 'Welcome to Ichiban Sushi, where we serve the freshest and most delicious sushi in town. Our chefs are dedicated to bringing you an authentic Japanese dining experience with a wide variety of sushi rolls, sashimi, and more. Whether you are a sushi lover or trying it for the first time, we have something for everyone. Come and enjoy our cozy atmosphere and friendly service.'; 
content.appendChild(h1);
content.appendChild(h2);
content.appendChild(p);
}
export default home;
