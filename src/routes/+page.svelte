<script>
	import SplashPageImage from '$lib/images/SplashPage.png';
	import DashboardThumbnail from '$lib/images/TemporaryThumbnail.png';
	import DojoLight from '$lib/images/DojoLight.png';
	import DojoDark from '$lib/images/DojoDark.png';
	import TatamiDark from '$lib/images/TatamiDark.png';
	import TatamiLight from '$lib/images/TatamiLight.png';
	import HeaderImage from '$lib/images/Header.png';
	import KarateIcon from '$lib/images/icons/Karate.png';
	import GearIcon from '$lib/images/icons/Gear.png';
	import NoteIcon from '$lib/images/icons/Note.png';
	import FlagIcon from '$lib/images/icons/Flag.svg';
	import AbacusIcon from '$lib/images/icons/Abacus.png';
	import MapIcon from '$lib/images/icons/Map.png';
	import PackageIcon from '$lib/images/icons/Package.png';
	import LaptopIcon from '$lib/images/icons/Laptop.png';
	import ThemeSwitcher, { currentTheme } from '$lib/ThemeSwitcher.svelte';

  let currentThemeValue = '';

  // Change the document body data-theme value on theme changes
  currentTheme.subscribe((value) => {
    document.body.setAttribute('data-theme', value);
    currentThemeValue = value;
  });

	let showSplash = false;

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

<header class="flex justify-center w-[90%] m-auto">
  <img src={HeaderImage} class="max-w-full max-h-[20vh] w-auto h-auto my-8" alt="dojo node header with trees and the logo" />
</header>

<section>
	<ThemeSwitcher />
	<h1 class="text-[#5CAA80] text-2xl text-balance">
		A user-friendly and visually pleasing dashboard for monitoring your Taiko node, proposer, or
		prover.
	</h1>
	<h2 class="mt-2 text-[#E53325] text-base">
		Get real-time insights with ease, from anywhere in the world.
	</h2>

	<div class="flex md:flex-row flex-col items-center mt-16 gap-16">
		<div class="flex flex-col items-center">
      <a href="http://dashboard.dojonode.xyz" target="_blank">
        <span>
          <span class="text-[#5CAA80] font-bold">dojo</span>
          <img src={FlagIcon} class="icon-big" alt="dojo flag">
        </span>
      </a>

			<div class="card text-left mt-8 mb-2 max-w-[20rem]">
				<h1 class="font-bold">node dashboard</h1>
				<h2 class="-mt-2">the main training area</h2>

				<p class="mt-3 card-subbody">view the progress and health of your node using our visual dashboard</p>

				<div class="flex flex-col items-start mt-6 card-subbody">
					<span>made for:</span>
					<div class="flex flex-row items-start">
						<img src={LaptopIcon} class="icon-small mr-2" alt="red karate uniform icon" />
						<span class="">node operators</span>
					</div>

					<div class="flex flex-row items-start">
						<img src={PackageIcon} class="icon-small mr-2" alt="red karate uniform icon" />
						<span class="">proposers</span>
					</div>

					<div class="flex flex-row items-start">
						<img src={AbacusIcon} class="icon-small mr-2" alt="red karate uniform icon" />
						<span class="">provers</span>
					</div>
				</div>
			</div>
		</div>
    <!-- 7 top , left 3 -->
		<div class="stacked-thumbnails">
      <img src={DojoLight} class="md:w-[350px] w-[250px] absolute top-16 left-4 {currentThemeValue === "paper" ? 'z-10' : 'z-0'}" alt="dojo dashboard thumbnail in light mode">
      <img src={DojoDark} class="md:w-[350px] w-[250px] absolute top-28 left-28" alt="dojo dashboard thumbnail in dark mode">
		</div>
	</div>

	<h1 class="text-[#5CAA80] mt-16 text-2xl mb-4">get to know your node in 3 easy steps</h1>
	<div class="card">
		<div class="flex md:flex-row flex-col items-start">
			<!-- left -->
			<div class="text-left">
				<!-- 1 Line -->
				<div class="flex items-center my-6">
					<img src={KarateIcon} class="icon mr-4" alt="red karate uniform icon" />
					<div class="flex flex-col items-start">
						<span class="card-bold font-bold">enter the dojo</span>
						<span>to view the dashboard</span>
					</div>
				</div>

				<div class="flex items-center my-6">
					<img src={GearIcon} class="icon mr-4" alt="red karate uniform icon" />
					<div class="flex flex-col items-start">
						<span class="card-bold font-bold">click the gear icon</span>
						<span>to change your settings</span>
					</div>
				</div>

				<div class="flex items-center my-6">
					<img src={MapIcon} class="icon mr-4" alt="red karate uniform icon" />
					<div class="flex flex-col items-start">
						<span class="card-bold font-bold">enter your node’s IP address</span>
						<span>and let the dashboard do the rest</span>
					</div>
				</div>
			</div>

			<!-- right -->
			<!-- <div> -->
				<div class="flex items-start text-left my-6 md:max-w-[20vw]">
					<img src={NoteIcon} class="icon mr-4" alt="red karate uniform icon" />
					<div class="flex flex-col items-start">
						<span class="card-bold font-bold">bonus - get the full experience:</span>
						<span class="text-left md:max-w-[15vw]"
							>deploy our Docker app to access system metrics, and enjoy a bonus self-hosted dashboard!</span
						>
					</div>
				</div>
			<!-- </div> -->

		</div>

	</div>

	<!-- Buttons line -->
	<div class="mt-12 flex md:flex-row flex-col sm:gap-16 gap-5">
		<a href="http://dashboard.dojonode.xyz" target="_blank" class="button">start monitoring</a>
		<a href="https://github.com/dojonode" target="_blank" class="button">visit our github</a>
	</div>
</section>

<!-- Tatami section -->
<section>
	<div class="flex md:flex-row flex-col items-center mt-16 gap-16 mb-16">
		<div class="flex flex-col items-center">
      <div>
        <span class="text-[#5CAA80] font-bold">tatami</span>
        <object title="tatami flag" class="icon-big" type="image/svg+xml" data={FlagIcon}></object>
      </div>

			<div class="card text-left mt-8 mb-2 max-w-[20rem]">
				<h1 class="font-bold">prover market</h1>
				<h2 class="-mt-2">specialized competition</h2>

				<p class="mt-3 card-subbody">see current provers who have volunteered for proposers, or submit your own</p>

				<div class="flex flex-col items-start mt-6 card-subbody">
					<span>made for:</span>
					<div class="flex flex-row items-start">
						<img src={PackageIcon} class="icon-small mr-2" alt="red karate uniform icon" />
						<span class="">proposers</span>
					</div>

					<div class="flex flex-row items-start">
						<img src={AbacusIcon} class="icon-small mr-2" alt="red karate uniform icon" />
						<span class="">provers</span>
					</div>
				</div>
			</div>
		</div>

		<div class="stacked-thumbnails">
      <img src={TatamiLight} class="md:w-[350px] w-[250px] absolute top-16 left-4 {currentThemeValue === "paper" ? 'z-10' : 'z-0'}" alt="tatami provermarket thumbnail in light mode">
      <img src={TatamiDark} class="md:w-[350px] w-[250px] absolute top-28 left-28" alt="tatami provermarket thumbnail in dark mode">
		</div>
	</div>
</section>

<style>
	section {
    color: hsl(var(--twc-textColor));
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

  @media only screen and (max-width: 600px) {
    section {
      width: 90%;
    }
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
		background-color: hsl(var(--twc-cardBackgroundColor));
		border-radius: 30px;
		padding: 10px 20px;
	}

	.button {
		background-color: hsl(var(--twc-cardBackgroundColor));
		border-radius: 30px;
		padding: 10px 20px;
	}

	.icon {
		width: 30px;
	}

	.icon-small {
		width: 15px;
	}

	.icon-big {
		width: 100px;
	}

  .card-subbody{
    color: hsl(var(--twc-cardSubBodyColor));
    line-height: 1;
  }

  .stacked-thumbnails{
    width: 400px;
    height: 400px;
    position: relative;
    margin-bottom: 2rem;
    max-width: 100vw;
  }
  .stacked-thumbnails img{
    box-shadow: hsl(var(--twc-glowColor)) 0px 1px 1px 0px inset, hsl(var(--twc-glowColor)) 0px 15px 60px -30px;
    border-radius: 5px;
  }
</style>
