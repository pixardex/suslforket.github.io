const canteens = [
    { id: 'hela', name: 'Hela Bojun Hala', icon: '🪑' },
    { id: 'main', name: 'Main Canteen (Matta)', icon: '🚀' },
    { id: 'juice', name: 'Juice Bar', icon: '🧃' },
    { id: 'mini', name: 'Mini Shop', icon: '🛒' },
    { id: 'other_canteen', name: 'Other Canteens', icon: '🏛️' },
    { id: 'other_shop', name: 'Other Shops', icon: '🏬' }
];

const menuData = {
    hela: {
        name: 'Hela Bojun Hala',
        description: 'Traditional Sri Lankan Food Market',
        categories: ['Rice & Curry', 'Short Eats', 'Fast Food', 'Juices', 'Sweet Buns'],
        items: [
            { name: 'Rice & Curry', category: 'Rice & Curry', price: 200, description: 'Fresh rice with 3-4 curries' },
            { name: 'Kottu Roti (Vegetable)', category: 'Fast Food', price: 180, description: 'Chopped roti with vegetables' },
            { name: 'Kottu Roti (Chicken)', category: 'Fast Food', price: 220, description: 'Chopped roti with chicken' },
            { name: 'Parata', category: 'Short Eats', price: 60, description: 'Layered flatbread' },
            { name: 'Vegetable Roll', category: 'Short Eats', price: 50, description: 'Fried vegetable pastry' },
            { name: 'Fish Patty', category: 'Short Eats', price: 60, description: 'Flaky pastry with fish filling' },
            { name: 'Samosa', category: 'Short Eats', price: 50, description: 'Triangular fried pastry' },
            { name: 'String Hoppers', category: 'Rice & Curry', price: 120, description: 'Rice noodles with curry' },
            { name: 'Hoppers', category: 'Rice & Curry', price: 100, description: 'Bowl-shaped rice cake' },
            { name: 'Fried Rice', category: 'Rice & Curry', price: 200, description: 'Vegetable or chicken fried rice' },
            { name: 'Fresh Juice', category: 'Juices', price: 80, description: 'Orange, pineapple, or mango' },
            { name: 'Sweet Bun', category: 'Sweet Buns', price: 40, description: 'Fresh baked sweet pastry' }
        ]
    },
    main: {
        name: 'Main Canteen (Matta)',
        description: 'University Main Canteen',
        categories: ['Rice & Curry', 'Short Eats', 'Breakfast', 'Drinks'],
        items: [
            { name: 'Rice & Curry', category: 'Rice & Curry', price: 200, description: 'Daily rice with curries' },
            { name: 'Fried Rice (Vegetable)', category: 'Rice & Curry', price: 150, description: 'Stir-fried rice with vegetables' },
            { name: 'Fried Rice (Chicken)', category: 'Rice & Curry', price: 200, description: 'Chicken fried rice' },
            { name: 'Parata', category: 'Short Eats', price: 60, description: 'Traditional flatbread' },
            { name: 'Vegetable Roll', category: 'Short Eats', price: 50, description: 'Crispy fried roll' },
            { name: 'Egg Roll', category: 'Short Eats', price: 60, description: 'Roll with egg filling' },
            { name: 'Kottu', category: 'Short Eats', price: 180, description: 'Shredded roti with vegetables' },
            { name: 'String Hoppers with Curry', category: 'Breakfast', price: 120, description: 'Rice noodles with gravy' },
            { name: 'Hoppers with Egg', category: 'Breakfast', price: 100, description: 'Bowl-shaped rice cake with egg' },
            { name: 'Tea', category: 'Drinks', price: 30, description: 'Hot or iced tea' },
            { name: 'Coffee', category: 'Drinks', price: 40, description: 'Fresh brewed coffee' }
        ]
    },
    juice: {
        name: 'Juice Bar',
        description: 'Fresh Juices & Beverages',
        categories: ['Fresh Juices', 'Smoothies', 'Cold Drinks'],
        items: [
            { name: 'Orange Juice', category: 'Fresh Juices', price: 100, description: 'Fresh squeezed orange' },
            { name: 'Pineapple Juice', category: 'Fresh Juices', price: 100, description: 'Tropical pineapple' },
            { name: 'Mango Juice', category: 'Fresh Juices', price: 120, description: 'Fresh mango blend' },
            { name: 'Watermelon Juice', category: 'Fresh Juices', price: 100, description: 'Refreshing watermelon' },
            { name: 'Papaya Juice', category: 'Fresh Juices', price: 100, description: 'Tropical papaya' },
            { name: 'Guava Juice', category: 'Fresh Juices', price: 100, description: 'Sweet guava juice' },
            { name: 'Mixed Fruit Smoothie', category: 'Smoothies', price: 150, description: 'Multi-fruit blend' },
            { name: 'Banana Smoothie', category: 'Smoothies', price: 120, description: 'Creamy banana shake' },
            { name: 'Cold Coffee', category: 'Cold Drinks', price: 80, description: 'Iced coffee' },
            { name: 'Iced Tea', category: 'Cold Drinks', price: 60, description: 'Chilled lemon tea' }
        ]
    },
    mini: {
        name: 'Mini Shop',
        description: 'Quick Snacks & Essentials',
        categories: ['Short Eats', 'Drinks', 'Snacks'],
        items: [
            { name: 'Vegetable Roll', category: 'Short Eats', price: 50, description: 'Quick snack' },
            { name: 'Egg Roll', category: 'Short Eats', price: 60, description: 'Protein-packed roll' },
            { name: 'Fish Cutlet', category: 'Short Eats', price: 70, description: 'Crispy fish cutlet' },
            { name: 'Samosa', category: 'Short Eats', price: 50, description: 'Spiced pastry' },
            { name: 'Fried Fish Ball', category: 'Snacks', price: 40, description: 'Savory balls' },
            { name: 'Vegetable Ball', category: 'Snacks', price: 35, description: 'Vegetable fritter' },
            { name: 'Vadai', category: 'Snacks', price: 40, description: 'Dhal doughnut' },
            { name: 'Tea', category: 'Drinks', price: 30, description: 'Hot tea' },
            { name: 'Coffee', category: 'Drinks', price: 40, description: 'Hot coffee' },
            { name: 'Bottled Water', category: 'Drinks', price: 20, description: 'Mineral water' }
        ]
    },
    other_canteen: {
        name: 'Other Canteens',
        description: 'Additional Campus Food Points',
        categories: ['Rice & Curry', 'Short Eats', 'Drinks'],
        items: [
            { name: 'Rice & Curry', category: 'Rice & Curry', price: 180, description: 'Daily special' },
            { name: 'Fried Rice', category: 'Rice & Curry', price: 150, description: 'Vegetable or meat' },
            { name: 'Kottu Roti', category: 'Short Eats', price: 180, description: 'Chopped flatbread' },
            { name: 'Parata', category: 'Short Eats', price: 60, description: 'Fresh parata' },
            { name: 'Vegetable Roll', category: 'Short Eats', price: 50, description: 'Crispy roll' },
            { name: 'Tea', category: 'Drinks', price: 30, description: 'Hot or iced' },
            { name: 'Juice', category: 'Drinks', price: 80, description: 'Fresh juice' }
        ]
    },
    other_shop: {
        name: 'Other Shops',
        description: 'Campus Shop Snacks',
        categories: ['Snacks', 'Drinks'],
        items: [
            { name: 'Vegetable Roll', category: 'Snacks', price: 50, description: 'Quick snack' },
            { name: 'Fish Ball', category: 'Snacks', price: 40, description: 'Savory ball' },
            { name: 'Samosa', category: 'Snacks', price: 50, description: 'Spiced pastry' },
            { name: 'Tea', category: 'Drinks', price: 30, description: 'Hot tea' },
            { name: 'Bottled Drinks', category: 'Drinks', price: 50, description: 'Various options' }
        ]
    }
};

let currentCanteen = null;
let currentCategory = 'all';

function renderCanteens() {
    const grid = document.getElementById('canteenGrid');
    grid.innerHTML = canteens.map(canteen => `
        <div class="col-md-6 col-lg-4 mb-4">
            <button class="btn canteen-btn w-100 p-4 text-center" style="height: 100%;" onclick="selectCanteen('${canteen.id}')">
                <div class="icon-large">${canteen.icon}</div>
                <h5>${canteen.name}</h5>
                <p class="text-danger" style="font-weight: bold;">Browse Menu →</p>
            </button>
        </div>
    `).join('');
}

function selectCanteen(canteenId) {
    currentCanteen = canteenId;
    currentCategory = 'all';
    document.getElementById('canteenSelection').style.display = 'none';
    document.getElementById('menuContent').style.display = 'block';
    
    const data = menuData[canteenId];
    document.getElementById('canteenTitle').textContent = data.name;
    document.getElementById('canteenDesc').textContent = data.description;
    
    renderCategories();
    renderMenuItems();
}

function backToCanteens() {
    currentCanteen = null;
    document.getElementById('canteenSelection').style.display = 'block';
    document.getElementById('menuContent').style.display = 'none';
    document.getElementById('searchInput').value = '';
}

function renderCategories() {
    const container = document.getElementById('categoryContainer');
    const data = menuData[currentCanteen];
    
    let html = '<button class="btn category-btn active me-2 mb-2" onclick="filterByCategory(\'all\', this)">All Items</button>';
    
    data.categories.forEach(cat => {
        html += '<button class="btn category-btn inactive me-2 mb-2" onclick="filterByCategory(\'' + cat + '\', this)">' + cat + '</button>';
    });
    
    container.innerHTML = html;
}

function filterByCategory(category, btn) {
    currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(button => {
        button.classList.remove('active');
        button.classList.add('inactive');
    });
    btn.classList.remove('inactive');
    btn.classList.add('active');
    renderMenuItems();
}

function renderMenuItems() {
    const data = menuData[currentCanteen];
    let items = data.items;
    
    if (currentCategory !== 'all') {
        items = items.filter(item => item.category === currentCategory);
    }
    
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        items = items.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
    }
    
    const grid = document.getElementById('menuGrid');
    const noMsg = document.getElementById('noItemsMsg');
    
    if (items.length === 0) {
        grid.innerHTML = '';
        noMsg.style.display = 'block';
        return;
    }
    
    noMsg.style.display = 'none';
    grid.innerHTML = items.map(item => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card menu-card h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <h5 class="card-title">${item.name}</h5>
                        <span class="badge bg-warning text-dark">${item.category}</span>
                    </div>
                    <p class="card-text text-muted">${item.description}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="price-tag">Rs. ${item.price}</span>
                        <button class="btn btn-danger btn-sm">🛒 Add</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function filterItems() {
    renderMenuItems();
}

// Initial render
renderCanteens();
