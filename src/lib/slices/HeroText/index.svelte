<script>
	import PrismicRichText from "$lib/components/PrismicRichText.svelte";

	/** @type {import("@prismicio/client").Content.HeroTextSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.title} />
	<PrismicRichText field={slice.primary.description} />
</section>

<style>
	section {
		margin: 3rem 10vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	section :global(h1) {
		font-size: 3rem;
	}


	@media (min-width: 880px) {
		section {
			margin: 6rem 10vw;
		}

		section :global(h1) {
			font-size: 4rem;
		}

		
		section :global(p) {
			max-width: 80%;
		}
	}
</style>