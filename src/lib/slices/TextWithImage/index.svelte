<script>
	import { PrismicImage } from '@prismicio/svelte';
	import * as prismic from '@prismicio/client';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	/** @type {import("@prismicio/client").Content.TextWithImageSlice} */
	export let slice;
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
		<div>
			<PrismicRichText field={slice.primary.text} />
		</div>
		<div>
			{#if prismic.isFilled.image(slice.primary.image)}
				<div class="bg-gray-100">
					<PrismicImage field={slice.primary.image} sizes="100vw" class="w-full" loading="lazy" />
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	section {
		margin: 5rem 10vw;
	}
</style>