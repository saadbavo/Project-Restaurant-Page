const menu = ()=> {
    const content = document.getElementById('content');
    const table = document.createElement('table');
    table.classList.add('menu-table');
    const headerRow = document.createElement('tr');
    const header1 = document.createElement('th');
    header1.textContent = 'Dish';
    const header2 = document.createElement('th');
    header2.textContent = 'Price';
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    table.appendChild(headerRow);
    const dishes = [
        { name: 'California Roll', price: '$8.99' },
        { name: 'Spicy Tuna Roll', price: '$9.99' },
        { name: 'Salmon Sashimi', price: '$12.99' },
        { name: 'Tempura Udon', price: '$10.99' },
        { name: 'Miso Soup', price: '$3.99' }
    ];
    dishes.forEach(dish => {
        const row = document.createElement('tr');
        const dishCell = document.createElement('td');
        dishCell.textContent = dish.name;
        const priceCell = document.createElement('td');
        priceCell.textContent = dish.price;
        row.appendChild(dishCell);
        row.appendChild(priceCell);
        table.appendChild(row);
    });
    content.appendChild(table);
}
export default menu;