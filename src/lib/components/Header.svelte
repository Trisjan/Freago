<script>
	import { PrismicLink, PrismicText, PrismicImage } from '@prismicio/svelte';

	import Bounded from './Bounded.svelte';

	/** @type {import("@prismicio/client").Content.SettingsDocument} */
	/** @type {import("@prismicio/client").Content.NavigationDocument} */
	export let navigation;
</script>

<Bounded tag="header" yPadding="sm">
	<div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
		<PrismicLink field={navigation.data.home_link} class="text-xl font-semibold tracking-tight">
			<PrismicImage field={navigation.data.logo} width="200px" height="100%" />
		</PrismicLink>
		<nav>
			<ul class="flex flex-wrap gap-6 md:gap-10">
				{#each navigation.data?.links as item}
					<li class="font-semibold tracking-tight text-slate-800">
						<PrismicLink field={item.link}>
							<PrismicText field={item.label} />
						</PrismicLink>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</Bounded>

<style>
	div {
		position: fixed;
		z-index: 1;
		width: 100%;
	}
	
</style>