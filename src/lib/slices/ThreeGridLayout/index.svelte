<script>
	import { PrismicLink, PrismicRichText } from "@prismicio/svelte";
	/** @type {import("@prismicio/client").Content.ThreeGridLayoutSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="grid">
	<PrismicLink field={slice.primary.top_left}>
		<PrismicRichText field={slice.primary.top_left_text} />
	</PrismicLink>
	<PrismicLink field={slice.primary.top_right}>
		<PrismicRichText field={slice.primary.top_right_text} />
	</PrismicLink>
	<PrismicLink field={slice.primary.bottom}>
		<PrismicRichText field={slice.primary.bottom_text} />
	</PrismicLink>
</section>

<style>
	.grid {
		display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .grid > :global(a) {
        height: 33.333333vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s ease-in;
        text-decoration: none;
		color: #680686;
		font-weight: bold;
		font-size: 2rem;
    }

	.grid > :global(a):nth-of-type(1) {
		border-bottom: #680686 solid 1px;
	}

	.grid > :global(a):nth-of-type(2) {
		border-top: #680686 solid 1px;
		border-bottom: #680686 solid 1px;
	}

	.grid > :global(a):last-child {
		border-top: #680686 solid 1px;
	}

    .grid > :global(a):hover {
		font-size: 2.1rem;
		color: #fff;
		background-color: #680686;
    }

    @media (min-width: 768px) {
        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
        }
        .grid > :global(a) {
            height: 50vh;
        }

		.grid > :global(a):nth-of-type(1) {
			border-right: #680686 solid 1px;
			border-bottom: #680686 solid 1px;
		}

		.grid > :global(a):nth-of-type(2) {
			border-top: none;
			border-left: #680686 solid 1px;
			border-bottom: #680686 solid 1px;
		}

		.grid > :global(a):last-child {
			border-top: #680686 solid 1px;
		}

        :global(a):nth-of-type(1) {
            grid-area: 1 / 1 / 2 / 2;
        }
        :global(a):nth-of-type(2) {
            grid-area: 1 / 2 / 2 / 3;
        }
        :global(a):last-child {
            grid-area: 2 / 1 / 3 / 3; 
        }
    }
</style>