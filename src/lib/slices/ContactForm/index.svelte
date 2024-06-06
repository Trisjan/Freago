<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	/** @type {import("@prismicio/client").Content.ContactFormSlice} */
	export let slice;

	let submitted = false;
	let loading = false;
	let formFeedback = '';

	async function handleSubmit() {
		loading = true;
		submitted = true; // Zet submitted op true zodra het formulier is ingediend

		// Reset submitted en loading na een korte vertraging (bijvoorbeeld 1 seconde)
		setTimeout(() => {
			loading = false;
			submitted = false;
			formFeedback = 'Bedankt! Het formulier is succesvol verzonden.';
		}, 1000);
	}

	function closePopup() {
		formFeedback = ''; // Sluit de pop-up door de feedback te verwijderen
	}
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="main">
	<PrismicRichText field={slice.primary.title} />
	<PrismicRichText field={slice.primary.description} />
	{#if formFeedback}
		<section class="popup">
			<article class="popup-content">
				<p>{formFeedback}</p>
				<button on:click={closePopup}>Sluiten</button>
			</article>
		</section>		
	{/if}
	<form method="POST" action="/" on:submit={handleSubmit} use:enhance>
		<!-- <input type="hidden" name="access_key" value="4d59ea0f-13b8-4119-b6b8-b5cb5c38e663"> -->
		<section class="group">
			<label for="email">Email</label>
			<input required type="email" id="email" name="email" />
		</section>
		<section class="group">
			<label for="message">Message</label>
			<input required type="text" name="message" id="message" minlength="4" maxlength="500" />
		</section>
		<section class="group">
			<button class:submitted class:loading disabled={submitted}>
				{loading ? 'Loading' : 'Submit'}
			</button>
		</section>
	</form>
</section>

<style>
	/* Je bestaande stijlregels */
	.main {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		gap: 3rem;
		margin: 0 10vw;
	}

	section > :global(h1) {
		font-size: 2.5rem;
		font-weight: bold;
	}

	.popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5); /* Half-transparante achtergrond */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.popup-content {
		background-color: #fff;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}

	.popup button {
		margin-top: 10px;
		padding: 8px 16px;
		border-radius: 4px;
		background-color: var(--primary-color-light);
		color: #fff;
		border: none;
		cursor: pointer;
	}

	.popup button:hover {
		background-color: hotpink;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		width: 100%;
		background: var(--primary-color-light);
		padding: 9px 10px 8px;
		border-radius: 1rem;
		box-shadow: 5px 5px 5px #000;
	}

	form label {
		font-weight: bold;
		color: white;
	}

	form button {
		color: #fff;
	}

	#email:invalid,
	#message:invalid {
		outline: #ff0000 solid 2px;
	}

	#email:valid,
	#message:valid {
		outline: #00ff15 solid 2px;
	}


	label {
		display: block;
		margin-bottom: 2rem;
	}

	label,
	button {
		font-weight: bold;
	}

	input {
		display: block;
		width: 100%;
		resize: none;
	}

	button {
		border-radius: 1.5rem;
		padding: 2rem 3.5rem;
		margin-left: auto;
		margin-right: auto;
		display: block;
		background: #5f5f5f;
		box-shadow: #000;
	}

	button:hover {
		box-shadow: #000;
	}

	@keyframes loading {
		from {
			background: #5a5a5a;
		}
		to {
			background: #3d3d3d;
		}
	}

	button.loading {
		animation: loading 2s alternate infinite;
	}

	button.submitted {
		background: #468686;
		box-shadow: none;
		cursor: default;
	}

	@media (min-width: 768px) {
		.main {
			margin: 0 10vw;
		}

		.main > :global(h1) {
			justify-content: start;
		}
	}
</style>
