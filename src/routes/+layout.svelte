<script>
  import "../app.css";
</script>

<div class="app">
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>

<style>
  .app {
    font-family: "Jost", sans-serif;
    background-color: hsl(var(--twc-backgroundColor));
  }
  main {
    min-height: 100vh;
  }
</style>
