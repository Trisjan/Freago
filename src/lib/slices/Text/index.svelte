<script>
	import clsx from 'clsx';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	/** @type {import("@prismicio/client").Content.TextSlice} */
	export let slice;
</script>

<section>
	<div class={clsx(slice.variation === 'twoColumns' && 'md:columns-2 md:gap-6')}>
		<PrismicRichText field={slice.primary.text} />
	</div>
</section>

<style>
	section {
		margin: 5rem 10vw;
	}
</style>