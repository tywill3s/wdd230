// Load JSON data
fetch("json/data.json")
	.then(response => response.json())
	.then(data => {
		// Get HTML elements to display company info
		const info = document.getElementById("info");
		
		// Set HTML of corresponding elements to data
		info.innerHTML = "<h2>" + data.name;
	})
	.catch(error => console.error(error));
