document.getElementById('loadUsers').addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(users => {
      const userList = document.getElementById('userList');
      userList.innerHTML = '';

      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Company:</strong> ${user.company.name}</p>
        `;
        userList.appendChild(userCard);
      });
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
});
