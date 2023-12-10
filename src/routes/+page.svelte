<script>
	import SplashPageImage from '$lib/images/SplashPage.png';
	import HeaderImage from '$lib/images/Header.png';
	import KarateIcon from '$lib/images/icons/Karate.png';
	import GearIcon from '$lib/images/icons/Gear.png';
	import MapIcon from '$lib/images/icons/Map.png';
	import ThemeSwitcher, { currentTheme } from '$lib/ThemeSwitcher.svelte';

	// Check if running on the client side
	if (typeof window !== 'undefined') {
		// Change the document body data-theme value on theme changes
		currentTheme.subscribe((value) => {
			document.body.setAttribute('data-theme', value);
			// TODO: switch/animate the app thumbnails
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
	<meta name="description" content="TODO:" />
</svelte:head>

{#if showSplash}
	<button
		id="splashPage"
		on:click={hideSplash}
		style={`background: url(${SplashPageImage}) center/cover`}
	>
	</button>
{/if}

<header class="flex justify-center">
	<img src={HeaderImage} class="w-[50%] my-8" alt="dojo node header with trees and the logo" />
</header>

<section>
	<!-- <ThemeSwitcher /> -->
	<h1 class="text-[#5CAA80] text-2xl">
		A user-friendly and visually pleasing dashboard for monitoring your Taiko node, proposer, or
		prover.
	</h1>
	<h2 class="mt-2 text-[#E53325] text-base">
		Get real-time insights with ease, from anywhere in the world.
	</h2>

	<!-- node dashboard -->
  <div>

  </div>

  <h1 class="text-[#5CAA80] mt-16 text-2xl mb-4">get to know your node in 3 easy steps</h1>
	<div class="card">
    <!-- 1 Line -->
		<div class="flex items-center my-6">
			<img src={KarateIcon} class="icon mr-4" alt="red karate uniform icon" />
			<div class="flex flex-col items-start">
				<span class="card-bold font-bold">enter the dojo</span>
				<span class="">to view the dashboard</span>
			</div>
		</div>

		<div class="flex items-center my-6">
			<img src={GearIcon} class="icon mr-4" alt="red karate uniform icon" />
			<div class="flex flex-col items-start">
				<span class="card-bold font-bold">click the gear icon</span>
				<span class="">to change your settings</span>
			</div>
		</div>

		<div class="flex items-center my-6">
			<img src={MapIcon} class="icon mr-4" alt="red karate uniform icon" />
			<div class="flex flex-col items-start">
				<span class="card-bold font-bold">enter your node’s IP address</span>
				<span class="">and let the dashboard do the rest</span>
			</div>
		</div>
	</div>

  <!-- Buttons line -->
  <div class="mt-16 mb-20">
    <a href="http://dashboard.dojonode.xyz" target="_blank" class="button mr-2">start monitoring</a>
    <a href="https://github.com/dojonode" target="_blank" class="button ml-2">visit our github</a>
  </div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}

	#splashPage {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		cursor: pointer;
	}

	.card {
		/* TODO: use twc-colors */
		background-color: #f4f4f4;
		border-radius: 30px;
    padding: 10px 50px;
	}

	.button {
		/* TODO: use twc-colors */
		background-color: #f4f4f4;
		border-radius: 30px;
    padding: 10px 20px;
	}

	.icon {
    width: 30px;
	}
</style>
