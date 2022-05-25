// api url
const api_url =
	" https://gorest.co.in/public/v1/users ";
const token = ' d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3'
// Defining async function
async function GetUser(url) {
	
	// Storing response
	const response = await fetch(url, {headers:{
		'authorization':`Bearer ${token}`
	}});
	
	// Storing data in form of JSON
	var data = await response.json();

	if (response) {
		hideloader();
	}
	ShowUser(data.data);
}
// Calling that async function
GetUser(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function ShowUser(users) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Email</th>
		<th>Gender</th>
		<th>Status</th>
		</tr>`;
	
	// Loop to access all rows
	for (let user of users) {
		tab += `<tr>
	<td>${user.name} </td>
	<td>${user.email}</td>
	<td>${user.gender}</td>
	<td>${user.status}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
