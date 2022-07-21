const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open('GET', './api/sample.txt');
xhr.onreadystatechange = function () {
	console.log(xhr);
	// status = 200 means it's loading or done
	// status = 404 means an error
	// readyState = 4 means it's done
	if (xhr.readyState === 4 && xhr.status === 200) {
		const text = document.createElement('p');
		// console.log(xhr.responseText);
		text.textContent = xhr.responseText;
		document.body.appendChild(text);
	} else {
		console.log({
			// make sure status is not 404
			status: xhr.status,
			text: xhr.statusText,
			state: xhr.readyState,
		});
	}
};
xhr.send();

// above runs asynchronously in the browser, allowing the below log to run before the above is able to run to completion
console.log('hello world');
