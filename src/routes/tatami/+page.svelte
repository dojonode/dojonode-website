<script async lang="ts">
  import PocketBase from 'pocketbase';
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
	import ArrowIcon from '$lib/images/icons/Arrow.svg';
	import ArrowActiveIcon from '$lib/images/icons/ArrowActive.svg';
	import ThemeSwitcher, { currentTheme } from '$lib/ThemeSwitcher.svelte';
	import ProverCard from '$lib/ProverCard.svelte';
  import TruckIcon from '$lib/images/icons/Truck.png';
	import TicketIcon from '$lib/images/icons/Ticket.png';
	import CopyIcon from '$lib/images/icons/Copy.png';
	import SubmitIcon from '$lib/images/icons/Submit.png';

  let records = [];
  let provers = [];
  let newProverEndpoint;
  let isDescending = true;
  let sortValue = "currentCapacity";

  const pb = new PocketBase("https://provers.dojonode.xyz");

  async function fetchRecords() {
    const authData = await pb.collection('users').authWithPassword("dojonode", "testing12345");

    // reset the records array
    records = [];
    // you can also fetch all records at once via getFullList
    // records = await pb.collection("prover_endpoints").getFullList({
    //   sort: "-created",
    // });
    provers = await pb.send('/validProvers', {});
    provers.sort((a,b) => b.currentCapacity - a.currentCapacity);
  }

  fetchRecords();

  async function addProverEndpoint(){
    try {
      // Remove trailing slashes
      newProverEndpoint = newProverEndpoint.replace(/\/+$/, '');
      // if endpoint already exists, just exit
      if(endpointExists(newProverEndpoint)) {
        // TODO: maybe show toast message?
        return;
      }
      // Add the prover to the DB
      await pb.collection('prover_endpoints').create({
        url: newProverEndpoint,
      });

      // Success: refresh data and show toast?
      fetchRecords();
      newProverEndpoint = '';
    } catch (error) {
      console.error(error);
      // Show error as a toast message
    }
  }

  function endpointExists(url){
    return provers.find(prover => prover.url === url) !== undefined;
  }

  function sortData(column) {
    console.log('sorting:', column, isDescending);
    console.log(provers);
    if (sortValue === column) {
      isDescending = !isDescending;
    } else {
      sortValue = column;
      isDescending = true;
    }

    provers = [...provers].sort((a, b) =>
    isDescending
    ? b[column] - a[column]
    : a[column] - b[column]
    );
    console.log(provers);
    console.log('sorting:', column, isDescending);
  }

  // Change the document body data-theme value on theme changes
  currentTheme.subscribe((value) => {
    document.body.setAttribute('data-theme', value);
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
  <span>
    <a href="/">
      <img src={HeaderImage} class="max-w-full max-h-[20vh] w-auto h-auto mt-8" alt="dojo node header with trees and the logo" />
    </a>
    <div class="w-[60px] ml-auto mr-8 lg:mb-12 md:mb-4 mb-2">
      <ThemeSwitcher />
    </div>
  </span>
</header>

<section>
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
  <div class="flex md:flex-row flex-col max-w-[820px] w-full justify-around items-center">
    <div class="flex md:flex-col w-full md:w-auto flex-row-reverse md:items-center items-start">
      <button class="flex flex-col items-center md:mb-6">
        <img src={SubmitIcon} class="w-8 mb-2" alt="red karate uniform icon" />
        <span class="hidden md:block">
          submit endpoint
        </span>
      </button>
      <input
      class="shadow appearance-none rounded-full text-[hsl(var(--twc-cardSubBodyColor))] bg-[hsl(var(--twc-settingsAccentColor))] w-full px-3 focus:outline-none focus:shadow-outline leading-none"
      type="text"
      bind:value={newProverEndpoint}
    />
    </div>
    <div class="flex md:flex-col items-center w-full md:w-auto justify-between">
      <div>
        <button class="flex flex-col items-center md:mb-6">
          <img src={CopyIcon} class="w-8 md:mb-2" alt="red karate uniform icon" />
          <span class="hidden md:block">
            copy all
          </span >
        </button>
      </div>
      <div class="flex gap-2">
        <button class="flex w-[65px] items-center bg-[hsl(var(--twc-settingsAccentColor))] rounded-full p-2" on:click={() => sortData("currentCapacity")}>
          <img src={TruckIcon} class="w-6 mr-2" alt="red karate uniform icon" />
          <img src={sortValue === "currentCapacity" ? ArrowActiveIcon : ArrowIcon} class="w-4 mr-2 {(isDescending && sortValue === "currentCapacity") ? 'rotate-180' : ''}" alt="red karate uniform icon" />
        </button>
        <button class="flex w-[65px] items-center bg-[hsl(var(--twc-settingsAccentColor))] rounded-full p-2" on:click={() => sortData("minimumGas")}>
          <img src={TicketIcon} class="w-6 mr-2" alt="red karate uniform icon" />
          <img src={sortValue === "minimumGas" ? ArrowActiveIcon : ArrowIcon} class="w-4 mr-2 {(isDescending && sortValue === "minimumGas") ? 'rotate-180' : ''}" alt="red karate uniform icon" />
        </button>
      </div>

    </div>
  </div>
</section>

<section>
  <div
      id="cards"
      class="max-w-[920px] mt-4 flex flex-wrap justify-center overflow-y-clip"
    >
      {#if provers.length > 0}
        {#each provers as prover}
        <ProverCard endpoint={prover} />
        {/each}
      {/if}
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
