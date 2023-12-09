<script>
	import SplashPageImage from '$lib/images/SplashPage.png';
	import ThemeSwitcher, { currentTheme } from '$lib/ThemeSwitcher.svelte';

	// Check if running on the client side
	if (typeof window !== 'undefined') {
		// Change the document body data-theme value on theme changes
		currentTheme.subscribe((value) => {
			document.body.setAttribute('data-theme', value);
		});
	}

	let showSplash = true;

	function hideSplash() {
		console.log('splash hided');
		showSplash = false;
	}
</script>

<svelte:head>
	<title>dojo node</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if showSplash}
	<button
		id="splashPage"
		on:click={hideSplash}
		style={`background: url(${SplashPageImage}) center/cover`}
	>
	</button>
{/if}
<ThemeSwitcher />
<header>
	<!-- Insert header image -->
</header>

<section>
	<h1>
		A user-friendly and visually pleasing dashboard for monitoring your Taiko node, proposer, or
		prover.
	</h1>
	<h2>Get real-time insights with ease, from anywhere in the world.</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	#splashPage {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		cursor: pointer;
	}
</style>
