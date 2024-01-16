<script>
  import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<div class="app">
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

  {#if $page.route.id === '/'}
    <!-- Footer will not be included on the homepage -->
  {:else}
    <Footer />
  {/if}
</div>

<style>
	.app {
		font-family: 'Jost', sans-serif;
		background-color: hsl(var(--twc-backgroundColor));
		overflow: hidden;
	}
	main {
		min-height: 100vh;
	}
</style>
