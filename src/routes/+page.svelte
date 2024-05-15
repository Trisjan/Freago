<script>
</script>

<section class="grid">
    <a href="" class="work-search">Ik zoek werk</a>
    <a href="" class="work-with">Werk met ons</a>
    <a href="" class="about-us">Over ons</a>
</section>

<style>
    .grid {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .grid > a {
        height: 33.333333vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s ease-in;
        text-decoration: none;
    }

    .grid > .work-with:hover {
        padding: 0 2rem 2rem 0;
        z-index: 1;
    }

    .grid > .work-search:hover {
        scale: 1.1;
        z-index: 1;
    }

    .grid > .about-us:hover {
        scale: 1.1;
        z-index: 1;
    }

    .work-with {
        background-color: #376996;
    }

    .work-search {
        background-color: #6290C8;
    }

    .about-us {
        background-color: #829CBC;
    }

    @media (min-width: 768px) {
        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
        }

        .grid > a {
            height: 50vh;
        }

        .work-with {
            grid-area: 1 / 1 / 2 / 2;
        }

        .work-search {
            grid-area: 1 / 2 / 2 / 3;
        }

        .about-us {
            grid-area: 2 / 1 / 3 / 3; 
        }
    }
</style>