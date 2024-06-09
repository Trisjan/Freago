<script>
	import { PrismicLink, PrismicImage, PrismicRichText } from "@prismicio/svelte";
  
	/** @type {import("@prismicio/client").Content.ListTableSlice} */
	export let slice;
	export let searchQuery = "";
  </script>
  
  <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="displayflex">
	<section class="filter">
	  <form method="get">
		<input
		  type="text"
		  name="search"
		  placeholder="Search titles..."
		  value={searchQuery}
		  class="search-bar"
		/>
		<button type="submit">Search</button>
	  </form>
	</section>
	<section class="cards">
	  {#each slice.primary.list_item as item}
		<section class="card">
		  <section class="info">
			<div>
			  <PrismicRichText field={item.title} />
			  <ul class="key_elements">
				<li><PrismicRichText field={item.stad} /></li>
				<li><PrismicRichText field={item.functie} /></li>
				<li>€{item.uurloon}/u</li>
			  </ul>
			</div>
			<PrismicRichText field={item.description} />
			<ul class="links">
			  <li><PrismicLink field={item.website_link}>Meer info</PrismicLink></li>
			  <li><PrismicLink field={item.page_link}>Website</PrismicLink></li>
			</ul>
		  </section>
		  <PrismicImage field={item.image_logo} />
		</section>
	  {/each}
	</section>
  </section>
  
  
  
  
  <style>
	.search-bar {
	  margin: 1rem;
	  padding: 0.5rem;
	  width: 100%;
	  max-width: 300px;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	}
  
	.displayflex {
	  display: flex;
	  flex-direction: column;
	  justify-content: center; /* Center elements horizontally */
	}
  
	.filter {
	  display: none;
	}
  
	.card {
	  display: flex;
	  flex-direction: column-reverse;
	  align-items: center;
	  text-align: center;
	  margin: 3rem 10vw;
	  background-color: var(--accent-color-dark);
	  height: 60vh;
	  max-width: 100%;
	}
  
	.card .info {
	  display: flex;
	  flex-direction: column;
	  text-align: center;
	  width: 100%;
	  max-height: 100%;
	  max-width: 100%;
	  padding: 0 5%;
	  justify-content: space-around; /* Ensure space-between is applied directly */
	  overflow: hidden;
	  height: 50%; /* Ensure it takes full height of the card */
	}
  
	.info :global(h1) {
	  font-size: 1.5rem;
	  font-weight: 800;
	  text-align: start;
	  text-overflow: ellipsis;
	  /* white-space: nowrap; */
	}
  
	.info :global(p) {
	  font-size: 1rem;
	  font-weight: 400;
	  line-height: 2rem;
	  text-align: start;
	}
  
	.key_elements {
	  list-style: none;
	  gap: 1rem;
	  display: flex;
	  color: var(--primary-color);
	  font-weight: 700;
	}
  
	.key_elements li:nth-of-type(2) {
	  border-right: 2px solid var(--primary-color);
	  border-left: 2px solid var(--primary-color);
	  padding: 0 1rem;
	}
  
	.links {
	  list-style: none;
	  display: flex;
	  gap: 1rem;
	}
  
	.links :global(a) {
	  text-decoration: none;
	  font-weight: 700;
	  margin: 0;
	  padding: 0;
	}
  
	.links li:first-child {
	  background-color: var(--primary-color-light);
	  color: white;
	  padding: 1rem 1.5rem;
	  border-radius: 2rem;
	}
  
	.links li:last-child {
	  color: white;
	  padding: 1rem 1.5rem;
	  border: 2px solid var(--primary-color);
	  border-radius: 2rem;
	}
  
	.card :global(img) {
	  width: 100%;
	  max-width: 100%;
	  max-height: 100%;
	  height: 50%;
	  object-fit: cover;
	}
  
	@media (min-width: 960px) {
	  .displayflex {
		flex-direction: column;
		justify-content: center; /* Center elements horizontally */
		align-items: center;
		flex-wrap: nowrap;
		margin: 3rem 8rem;
	  }
  
	  .filter {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		margin: 3rem 10vw;
		max-width: 100%;
		width: 100%;
		height: 60vh;
		background-color: var(--accent-color);
	  }
  
	  .card {
		display: flex;
		flex-direction: row;
		max-width: 100%;
		width: 100%;
		height: 40vh;
		margin: 3rem 0;
	  }
  
	  .card:first-child {
		margin: 0;
	  }
  
	  .card .info {
		width: 60%;
		height: 100%;
		object-fit: cover;
		/* padding: 3rem 4rem; */
	  }
  
	  .card :global(img) {
		width: 40%;
		height: 100%;
	  }
  
	  .info :global(h1) {
		font-size: 2rem;
		line-height: 3rem;
	  }
  
	  .info :global(p) {
		font-size: 1.2rem;
	  }
	}
  
	@media (min-width: 1200px) {
	  .displayflex {
		flex-direction: row;
	  }
  
	  .filter {
		position: sticky;
		justify-content: space-around;
		align-items: center;
		width: 20%;
		height: 60vh;
		margin: 0 2rem 0 0;
		top: 8rem;
		position: sticky;
		width: 20vw;
		align-self: start;
	  }
  
	  .cards {
		width: 70vw;
	  }
  
	  .info :global(h1) {
		font-size: 2rem;
		line-height: 3.5rem;
	  }
  
	  .info :global(p) {
		font-size: 1.2rem;
	  }
	}
  </style>
  