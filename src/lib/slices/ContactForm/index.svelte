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

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.title} />
	<PrismicRichText field={slice.primary.description} />
	{#if formFeedback}
		<div class="popup">
			<div class="popup-content">
				<p>{formFeedback}</p>
				<button on:click={closePopup}>Sluiten</button>
			</div>
		</div>
	{/if}
	<form method="POST" action="/" on:submit|preventDefault={handleSubmit} use:enhance>
		<input type="hidden" name="access_key" value="4d59ea0f-13b8-4119-b6b8-b5cb5c38e663">
		<div class="group">
			<label for="email">Email</label>
			<input required type="email" id="email" name="email" />
		</div>
		<div class="group">
			<label for="message">Message</label>
			<textarea name="message" id="message" minlength="1" maxlength="1000" />
		</div>
		<div class="group">
			<button class:submitted class:loading disabled={submitted}>
				{$page.form?.success ? 'Thank you ✨' : loading ? 'Loading' : 'Submit'}
			</button>
		</div>
	</form>
</section>

<style>
	/* Je bestaande stijlregels */
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		margin: 0 1rem;
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
		background-color: #468686;
		color: #fff;
		border: none;
		cursor: pointer;
	}

	.popup button:hover {
		background-color: #336666;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		width: 100%;
		background: #468686;
		padding: 9px 10px 8px;
		border-radius: 1rem;
		box-shadow: 5px 5px 5px #000;
	}

	label {
		display: block;
		margin-bottom: 2rem;
	}

	label,
	button {
		font-weight: bold;
	}

	input,
	textarea {
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
		transition: box-shadow color 1s #00ff15, color 1s;
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
		section {
			margin: 0 3rem;
		}

		section > :global(h1) {
			justify-content: start;
		}
	}
</style>
