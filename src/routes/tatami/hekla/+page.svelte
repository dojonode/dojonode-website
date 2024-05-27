<script async lang="ts">
  import PocketBase from 'pocketbase';
  import { SyncLoader } from 'svelte-loading-spinners';
	import HeaderImage from '$lib/images/Header.avif';
	import TatamiScrollIcon from '$lib/images/icons/TatamiScroll.svg';
	import ArrowIcon from '$lib/images/icons/Arrow.svg';
	import ArrowActiveIcon from '$lib/images/icons/ArrowActive.svg';
	import ThemeSwitcher, { currentTheme } from '$lib/ThemeSwitcher.svelte';
	import ProverCard from '$lib/ProverCard.svelte';
  import CheckMarkIcon from '$lib/images/icons/CheckMark.avif';
	import TicketIcon from '$lib/images/icons/Ticket.avif';
	import CopyIcon from '$lib/images/icons/Copy.avif';
	import SubmitIcon from '$lib/images/icons/Submit.avif';
  import { goto } from '$app/navigation';

  let provers = [];
  let newProverEndpoint = "";
  let newProverEndpointError = "";
  let newProverEndpointSuccess = "";
  let isDescending = false;
  let sortValue = "minimumGas";
  let isCopied = false;
  let proversLoading = false;
  let selected = "hekla"

  const pb = new PocketBase("https://provers.dojonode.xyz");

  async function fetchRecords() {
    // Show the loading spinner
    proversLoading = true;

    // reset the records array
    // records = [];
    // you can also fetch all records at once via getFullList
    // records = await pb.collection("prover_endpoints").getFullList({
    //   sort: "-created",
    // });
    provers = await pb.send('/validTestnetProvers', {});
    provers?.sort((a,b) => a.minimumGas - b.minimumGas);

    // disable the loading spinner
    proversLoading = false;
  }

  fetchRecords();

  async function addProverEndpoint(){
    try {
      if(newProverEndpoint === "") return;
      newProverEndpointError = "";

      // Remove trailing slashes
      newProverEndpoint = newProverEndpoint.replace(/\/+$/, '');
      // if endpoint already exists, just exit
      if(endpointExists(newProverEndpoint)) {
        newProverEndpointError = "endpoint already exists!";
        return;
      }
      // Add the prover to the DB
      await pb.collection('prover_endpoints').create({
        url: newProverEndpoint,
      });

      // Success: refresh data and show toast?
      fetchRecords();
      newProverEndpoint = '';
      newProverEndpointSuccess = 'endpoint successfully added!'
    } catch (error) {
      console.error(error);
      newProverEndpointError = "endpoint is not valid or reachable!"
    }
  }

  function endpointExists(url){
    return provers.find(prover => prover.url === url) !== undefined;
  }

  function copyProverEndpoints(){
    let proversCommaSeparated = provers.map(p => p.url).join(',');
    if (!navigator.clipboard){
        // use old commandExec() way
        const textArea = document.createElement("textarea");
        textArea.value = proversCommaSeparated;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        setCopiedState();
    } else{
        navigator.clipboard.writeText(proversCommaSeparated).then(() => setCopiedState())
          .catch(
            function() {
                // error
                console.error("could not copy to clipboard!");
          });
    }
  }

  function setCopiedState() {
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 3000);
  }

  function sortData(column) {
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
  }

  function handleNavigation() {
    if (selected === 'mainnet') {
      goto('/tatami');
    } else if (selected === 'hekla') {
      goto('/tatami/hekla');
    }
  }

  // Change the document body data-theme value on theme changes
  currentTheme.subscribe((value) => {
    document.body.setAttribute('data-theme', value);
  });


  let endpointExample = {
    url: 'https://example.com/api',
    minimumProofFee: 10,
  }
</script>

<svelte:head>
	<title>prover market page</title>
	<meta name="description" content="A prover marketplace of taiko provers where anyone can permissionless add their own prover." />
  <meta property="og:description" content="A prover marketplace of taiko provers where anyone can permissionless add their own prover.">
</svelte:head>

<header class="flex justify-center w-[90%] m-auto">
  <span>
    <a href="/shomen">
      <img src={HeaderImage} class="max-w-full max-h-[20vh] w-auto h-auto mt-2" alt="dojo node header with trees and the logo" />
    </a>
    <div class="w-[60px] ml-auto mr-8 lg:mb-6 md:mb-4 mb-2">
      <ThemeSwitcher />
    </div>
  </span>
</header>

<section>
  <div class="mx-auto relative">
    <span>
      <span class="text-[#5CAA80] font-bold">tatami</span>
      <img src={TatamiScrollIcon} class="icon-big m-auto" alt="tatami flag">
      <div>
        <select class="mt-2 px-3 py-1 rounded-full" bind:value={selected} on:change={handleNavigation}>
          <option value="mainnet">mainnet</option>
          <option value="hekla">hekla</option>
        </select>
      </div>
    </span>

    <div class="card md:absolute md:top-0 md:left-36 w-max text-balance md:text-left mt-8 mb-2 max-w-[20rem]">
      <h1 class="font-bold">taiko prover market</h1>
      <h2 class="-mt-2">specialized competition</h2>
    </div>
  </div>
</section>

<section>
  <div class="flex md:flex-row flex-col max-w-[820px] w-full justify-around items-center">
    <div class="flex flex-col">
      <div class="flex md:flex-col w-full md:w-auto flex-row-reverse md:items-center items-start">
        <button class="flex flex-col items-center md:mb-6" on:click={addProverEndpoint}>
          <img src={SubmitIcon} class="w-8 mb-2" alt="submit postal icon" />
          <span class="hidden md:block">
            submit endpoint
          </span>
        </button>
        <input
        class="shadow appearance-none rounded-full text-[hsl(var(--twc-cardSubBodyColor))] bg-[hsl(var(--twc-inputAccentColor))] w-full px-3 focus:outline-none focus:shadow-outline leading-none"
        on:submit|preventDefault={addProverEndpoint}
        type="text"
        bind:value={newProverEndpoint}
        />
      </div>

      {#if newProverEndpointError != ""}
      <span class="text-[#E53325] text-sm mb-3 md:mt-2 -mt-2">{newProverEndpointError}</span>
      {/if}
      {#if newProverEndpointSuccess != ""}
      <span class="text-[#5CAA80] text-sm mb-3 md:mt-2 -mt-2">{newProverEndpointSuccess}</span>
      {/if}
    </div>
    <div class="flex md:flex-col items-center w-full md:w-auto justify-between">
      <div>
        <button class="flex flex-col items-center md:mb-6" on:click={copyProverEndpoints}>
          {#if isCopied}
            <img src={CheckMarkIcon} class="w-8 md:mb-2" alt="check mark icon" />
          {:else}
            <img src={CopyIcon} class="w-8 md:mb-2" alt="red karate uniform icon" />
          {/if}
          <span class="hidden md:block">
            {isCopied ? 'copied!' : 'copy all'}
          </span>
        </button>
      </div>
      <div class="flex gap-2">
        <!-- <button class="flex w-[65px] items-center bg-[hsl(var(--twc-inputAccentColor))] rounded-full p-2" on:click={() => sortData("currentCapacity")}>
          <img src={TruckIcon} class="w-6 mr-2" alt="truck icon" />
          <img src={sortValue === "currentCapacity" ? ArrowActiveIcon : ArrowIcon} class="w-4 mr-2 sorting-arrow {(isDescending && sortValue === "currentCapacity") ? 'rotate-180' : ''}" alt="sorting arrow icon" />
        </button> -->
        <button class="flex w-[65px] items-center bg-[hsl(var(--twc-inputAccentColor))] rounded-full p-2" on:click={() => sortData("minimumGas")}>
          <img src={TicketIcon} class="w-6 mr-2" alt="ticket icon" />
          <img src={sortValue === "minimumGas" ? ArrowActiveIcon : ArrowIcon} class="w-4 mr-2 sorting-arrow {(isDescending && sortValue === "minimumGas") ? 'rotate-180' : ''}" alt="sorting arrow icon" />
        </button>
      </div>

    </div>
  </div>
</section>

<section>

  {#if proversLoading}
    <!-- Show spinner -->
    <span class="mt-12 mb-1">checking endpoints for realtime data</span>
    <SyncLoader size="50" unit="px" />
  {:else}
    <div
        id="cards"
        class="max-w-[920px] mt-4 flex flex-wrap justify-center overflow-y-clip"
      >
          {#if provers?.length > 0}
            {#each provers as prover}
            <ProverCard endpoint={prover} />
            {/each}
          {:else if provers === null || provers?.length === 0 }
            <div class="w-full mt-4 ">No provers found yet, maybe you can be the first :)</div>
          {/if}
          <div class="invisible h-5">
            <ProverCard endpoint={endpointExample}/>
          </div>
        </div>
    {/if}
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

	.icon-big {
		width: 100px;
	}

  .sorting-arrow{
    transition: transform 0.3s;
  }

</style>
