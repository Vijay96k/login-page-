// Simulating a simple database with usernames and passwords
const usersDatabase = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' }
];

function validateLogin() {
  // Prevent form from submitting immediately
  event.preventDefault();
  
  // Get username and password from form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Find user in the database
  const user = usersDatabase.find(user => user.username === username);
  
  // Check if user exists and the password matches
  if (user && user.password === password) {
    // Redirect to a new page or do something after successful login
    alert('Login successful');
    window.location.href = 'dashboard.html'; // Example redirect
  } else {
    // Show error message
    document.getElementById('error').textContent = 'Invalid username or password';
  }
}
