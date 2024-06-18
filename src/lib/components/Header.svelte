<script>
	import { PrismicLink, PrismicText, PrismicImage } from '@prismicio/svelte';
    import { HamburgerWhite } from '$lib/index';
	import { onMount } from 'svelte';

    import { gsap } from "gsap";

	/** @type {import("@prismicio/client").Content.SettingsDocument} */
	/** @type {import("@prismicio/client").Content.NavigationDocument} */
	export let navigation;

	onMount(() => {
		const tl = gsap.timeline();
		const duration = 2;
		
		tl.from(".Header__link", {
			duration,
			opacity: 0,
            yPercent: -400
		})
		.from("details", {
			duration,
            opacity: 0,
            xPercent: 300,
			ease: 'power3.out',
		}, `-=${duration * 0.3}`)

		const checkWindowSize = () => {
			const detailsElement = document.querySelector('nav > details');
			if (detailsElement) {
				if (window.innerWidth >= 925) {
					detailsElement.setAttribute('open', '');
				} else {
					detailsElement.removeAttribute('open');
				}
			}
		};

		// Run once on mount
		checkWindowSize();
	});
</script>

	<header>
		<PrismicLink field={navigation.data.home_link} class="Header__link text-xl font-semibold tracking-tight" aria-label="terug naar home">
			<PrismicImage field={navigation.data.logo} width="200px" height="100%" alt="logo"/>
		</PrismicLink>
		<nav>
			<details open>
				<summary>
					<img src={HamburgerWhite} alt="Hamburger menu">
				</summary>
				<ul class="flex flex-wrap gap-6 md:gap-10">
					{#each navigation.data?.links as item}
						<li class="font-semibold tracking-tight text-slate-800">
							<PrismicLink field={item.link} aria-label="link naar {item.label}">
								<PrismicText field={item.label} />
							</PrismicLink>
						</li>
					{/each}
				</ul>
			</details>
		</nav>
	</header>

<style>

header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 10vw;  
        background-color: var(--primary-color);
        position: sticky;
        top: 0;
        overflow: hidden;
}

header > :global(a > img) {
    pointer-events: none;
}

header > :global(a) {
    user-select: none;
    -webkit-user-drag: none;
}

nav{
    display: flex;
    justify-content: space-between;
}

summary {
    list-style: none;
}

summary::-webkit-details-marker {
  display: none; 
}

ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    position: absolute;
    width: 100vw;
    padding: 0.75em 0;
    top: 7rem;
    left: 0;
    background: var(--primary-color);
    z-index: 999;
}



li > :global(a){
    text-decoration: none;
    color: #ffffff;
    display: block;
    padding: 0.5rem 2rem;
    text-align: center;
    position: relative;
}


/* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
/* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
/* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */


@media  (min-width: 925px) {

	header{
            padding: 1rem 10vw;
            z-index: 1;
	}

    summary{
        display: none;
    }

    ul{
        display: flex;
        flex-direction: row;
        position: relative;
        top: 0;
        width: auto;
        align-items: center;
    }

    li > :global(a)::after{
        content: "";
        opacity: 0;
        background-color: #ffffff;
        transition: all 400ms ease-out;
        position: absolute;
        height: 2px;
        width: calc(100% - 3rem);
        left: 0;
        top: 2rem;
        box-sizing: border-box;
        transform: translateX(1.5rem);
    }

    li > :global(a):hover::after{
        opacity: .8;
    }
}
</style>