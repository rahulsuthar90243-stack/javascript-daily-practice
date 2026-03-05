// 1. Save data to localStorage
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('theme', 'dark');

// 2. Retrieve data from localStorage
const username = localStorage.getItem('username');
console.log('Username:', username); // Output: Username: JohnDoe

// 3. Remove a specific item
localStorage.removeItem('theme');

// 4. Clear all items
// localStorage.clear();