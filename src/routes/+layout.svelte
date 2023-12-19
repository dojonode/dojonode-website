<script>
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<div class="app">
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<Footer />
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
