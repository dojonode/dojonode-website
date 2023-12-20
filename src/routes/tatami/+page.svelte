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
	import DojoScrollIcon from '$lib/images/icons/DojoScroll.svg';
	import KamizaScrollIcon from '$lib/images/icons/KamizaScroll.svg';
	import TatamiScrollIcon from '$lib/images/icons/TatamiScroll.svg';
	import ZaScrollIcon from '$lib/images/icons/ZaScroll.svg';
	import AbacusIcon from '$lib/images/icons/Abacus.png';
	import MapIcon from '$lib/images/icons/Map.png';
	import PackageIcon from '$lib/images/icons/Package.png';
	import LaptopIcon from '$lib/images/icons/Laptop.png';
	import ThemeSwitcher, { currentTheme } from '$lib/ThemeSwitcher.svelte';
	import ProverCard from '$lib/ProverCard.svelte';

  let currentThemeValue = '';

  // Change the document body data-theme value on theme changes
  currentTheme.subscribe((value) => {
    document.body.setAttribute('data-theme', value);
    currentThemeValue = value;
  });

  let endpointExample = {
    url: 'https://example.com/api',
    capacity: 100,
    minimumProofFee: 10,
  }
</script>

<svelte:head>
	<title>prover market page</title>
	<meta name="description" content="TODO:" />
</svelte:head>

<header class="flex justify-center w-[90%] m-auto">
  <a href="/">
    <img src={HeaderImage} class="max-w-full max-h-[20vh] w-auto h-auto my-8" alt="dojo node header with trees and the logo" />
  </a>
</header>

<section>
	<ThemeSwitcher />
  <div class="mx-auto relative">
    <span>
      <span class="text-[#5CAA80] font-bold">tatami</span>
      <img src={TatamiScrollIcon} class="icon-big m-auto" alt="tatami flag">
    </span>

    <div class="card md:absolute md:top-0 md:left-36 w-max text-balance md:text-left mt-8 mb-2 max-w-[20rem]">
      <h1 class="font-bold">taiko prover market</h1>
      <h2 class="-mt-2">specialized competition</h2>
    </div>
  </div>
</section>

<section>
  <div
      id="cards"
      class="max-w-[920px] mt-4 flex flex-wrap justify-center overflow-y-clip"
    >
      <ProverCard
      endpoint={endpointExample}
      />
      <ProverCard
      endpoint={endpointExample}
      />
      <ProverCard
      endpoint={endpointExample}
      />
      <ProverCard
      endpoint={endpointExample}
      />
      <ProverCard
      endpoint={endpointExample}
      />
      <ProverCard
      endpoint={endpointExample}
      />
      <ProverCard
      endpoint={endpointExample}
      />
      <ProverCard
      endpoint={endpointExample}
      />
      <ProverCard
      endpoint={endpointExample}
      />
      <div class="invisible h-5">
        <ProverCard endpoint={endpointExample}/>
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
  @media only screen and (max-width: 1260px) {
    section {
      width: 75%;
    }
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
</style>
