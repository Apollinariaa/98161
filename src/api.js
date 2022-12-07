/*jshint esversion: 8 */

async function getDescription(id) {
	let response = await fetch(`https://api.hh.ru/vacancies/${id}?host=hh.ru`, {
					method: "GET",
					headers: {
							"user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Mobile Safari/537.36"
					}
				});
	let content = await response.json();
	return content.description;
}

async function getResponse(i = 0) {
let response = await fetch(`https://api.hh.ru/vacancies/?per_page=5&page=${i}`, {
					method: "GET",
					headers: {
							"user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Mobile Safari/537.36"
					}
				});
let content = await response.json();
content = content.items;
return content;
}

export {getDescription, getResponse};