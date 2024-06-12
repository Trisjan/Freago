<script>
	import { PrismicText } from '@prismicio/svelte';
	import * as prismic from '@prismicio/client';
	import clsx from 'clsx';

	/** @type {import("@prismicio/client").Content.QuoteSlice} */
	export let slice;

	
</script>

<section>
	{#if prismic.isFilled.richText(slice.primary.quote)}
		<figure class="grid gap-6">
			<blockquote>
				<p
					class={clsx(
						'text-4xl font-medium leading-tight md:text-5xl md:leading-tight',
						!prismic.isFilled.keyText(slice.primary.source) && 'text-center'
					)}
				>
					<span class="-ml-3.5 select-none text-slate-400 md:-ml-5"> &ldquo; </span>
					<PrismicText field={slice.primary.quote} />
					<span class="select-none text-slate-400">&rdquo;</span>
				</p>
			</blockquote>
			{#if prismic.isFilled.keyText(slice.primary.source)}
				<figcaption class="text-right">
					&mdash; {slice.primary.source}
				</figcaption>
			{/if}
		</figure>
	{/if}
</section>

<style>
	section {
		padding: 10rem 10vw;
		background-color: var(--accent-color);
	}
</style>