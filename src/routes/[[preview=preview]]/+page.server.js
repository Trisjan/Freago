import { asText } from '@prismicio/client';
import { fail } from '@sveltejs/kit';
import { dev } from '$app/environment';

import { createClient } from '$lib/prismicio';

export async function load({ fetch }) {
	const client = createClient({ fetch });

	const page = await client.getByUID('page', 'home');

	return {
		page,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
}

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const email = data.get('email');
		const message = data.get('message');
		const access_key = data.get('access_key');

		console.log('Received form data:', { email, message, access_key });

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				access_key,
				email,
				message
			})
		});

		if (dev) {
			await new Promise((resolve) => setTimeout(resolve, 1000));
		}

		if (!response.ok) {
			const error = await response.json();
			console.error('Error from Web3Forms API:', error);
			return fail(response.status, { error: error.message || 'An error occurred' });
		}
 
		console.log('Form submitted successfully');
		return {
			success: true
		};
	}
};