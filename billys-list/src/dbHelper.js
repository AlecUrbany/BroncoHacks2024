import { API } from 'aws-amplify';

async function fetchData(query) {
	try {
		const response = await API.graphql({ query: query });
	} catch (error) {
		console.error('Error fetching data:', error);
	}

	return response.data;
}

function fetchAllItems() {
	var query = `query {
		Item {
			id
			name
			description
			location
			category
			userID
		}
	}`;
}