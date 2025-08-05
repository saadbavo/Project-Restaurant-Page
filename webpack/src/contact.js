const contact = () => {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    const email = document.createElement('p');
    email.innerHTML = 'Email: <a href="ichibansushi@gmail.com">';
    const phone = document.createElement('p');
    phone.innerHTML = 'Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>';
    const address = document.createElement('p');
    address.textContent = 'Address: 123 Sushi Lane, Tokyo, Japan';
    contactDiv.appendChild(heading);
    contactDiv.appendChild(email);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(address);
    content.appendChild(contactDiv);
}
export default contact;


        
