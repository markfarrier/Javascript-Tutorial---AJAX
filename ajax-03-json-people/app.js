// JSON Javascript Object Notation
const btn = document.querySelector('.btn');
const url = './api/people.json';
btn.addEventListener('click', () => {
	getData(url);
});

function getData(url) {
	const xhr = new XMLHttpRequest();
	console.log(xhr);

	xhr.open('GET', url);
	xhr.onreadystatechange = function () {
		// console.log(xhr);
		if (xhr.readyState === 4 && xhr.status === 200) {
			// returns string
			console.log(typeof xhr.responseText);
			// therefore must be parsed into JSON

			// parse
			// stringify - if you're sending the data
			const data = JSON.parse(xhr.responseText);
			console.log(typeof data);
			console.log(data);
			const displayData = data
				.map((item) => {
					return `<p>${item.name}</p>`;
				})
				.join('');
			const element = document.createElement('div');
			element.innerHTML = displayData;
			document.body.appendChild(element);
		} else {
			console.log({
				status: xhr.status,
				text: xhr.statusText,
				state: xhr.readyState,
			});
		}
	};
	xhr.send();
}
