<script>
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import * as prismic from '@prismicio/client';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	import Heading from './Heading.svelte';

	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;
</script>

<section
	class="relative bg-slate-900 text-white"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if prismic.isFilled.image(slice.primary.backgroundImage)}
	
		<PrismicImage
			field={slice.primary.backgroundImage}
			alt=""
			class="absolute inset-0 h-full w-full pointer-events-none select-none object-cover opacity-40"
			loading="eager"
		/>
	{/if}
	<Bounded tag="div" yPadding="lg" class="relative">
		<div class="flex flex-col justify-center items-center gap-8">
			<div class="max-w-2xl text-center">
				<PrismicRichText
					field={slice.primary.text}
					components={{
						heading1: Heading
					}}
				/>
			</div>
			{#if prismic.isFilled.link(slice.primary.buttonLink)}
				<PrismicLink
					field={slice.primary.buttonLink}
					class="rounded px-5 py-3 font-medium text-slate-800"
				>
					{slice.primary.buttonText || 'Learn More'}
				</PrismicLink>
			{/if}
		</div>
	</Bounded>
</section>

<style>
	div > :global(a) {
		background-color: var(--primary-color-light);
		color: white;
		padding: 1rem 1.5rem;
		border-radius: 2rem;
		position: relative;
	}
</style>