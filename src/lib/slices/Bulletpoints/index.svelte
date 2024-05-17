<script>
	import PrismicRichText from "$lib/components/PrismicRichText.svelte";

	/** @type {import("@prismicio/client").Content.BulletpointsSlice} */
	export let slice;
	console.log(slice.primary.title);
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	Placeholder component for {slice.slice_type} (variation: {slice.variation}) Slices

	<PrismicRichText field={slice.primary.title} />
	<ul>
		{#each slice.items as bedrijf}
			<li>{bedrijf.points}</li>
		{/each}
	</ul>
</section>

<style>
	section {
		background: hotpink;
	}
</style>


