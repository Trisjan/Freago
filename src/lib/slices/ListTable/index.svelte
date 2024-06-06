<script>
	import { PrismicLink, PrismicImage, PrismicRichText } from "@prismicio/svelte"; 

	/** @type {import("@prismicio/client").Content.ListTableSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.primary.list_item as item}
	<section class="card">
		<section class="info">
			<PrismicRichText field={item.title} />
			<ul class="key_elements">
				<li><PrismicRichText field={item.stad} /></li>
				<li>{item.uurloon}</li>
				<li><PrismicRichText field={item.functie} /></li>
			</ul>
			<PrismicRichText field={item.description} />
			<ul class="links">
				<li><PrismicLink field={item.page_link}>Website</PrismicLink></li>
				<li><PrismicLink field={item.website_link}>Meer info</PrismicLink></li>
			</ul>
		</section>
		<PrismicImage field={item.image_logo} />
	</section>
	{/each}
</section>

<style>
	.card {
		display: flex;
		align-items: center;
		text-align: center;
		margin: 3rem 10vw;
		/* padding: 2rem; */
		background-color: #FFF;
		height: 40vh;
	}

	.card .info {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 60%;
	}

	.card .info :global(h1) {
		font-size: 3rem;
		font-weight: 800;
	}

	.card .info .key_elements {
		list-style: none;
		gap: 1rem;
		display: flex;
		color: var(--primary-color);
		font-weight: 700;
	}

	.card .info .links {
		list-style: none;
		display: flex;
		gap: 1rem;
	}

	.card .info .links :global(a) {
		text-decoration: none;
		color: var(--primary-color);
		font-weight: 700;
		padding: 1rem;
		background-color: black;
	}

	.card :global(img) {
		width: 40%;
		max-width: 100%;
		max-height: 100%;
		height: auto;
		object-fit: cover;
	}
</style>