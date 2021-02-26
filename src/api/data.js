export function getUsers() {
	return fetch('http://localhost:4000/users')
	  .then(data => data.json())
  }
