<script lang="ts">
	import HeaderImage from '$lib/images/Header.avif';
	import ZaScrollIcon from '$lib/images/icons/ZaScroll.svg';
	import WalletIcon from '$lib/images/icons/Wallet.avif';
	import PackageIcon from '$lib/images/icons/Package.avif';
	import ThemeSwitcher, { currentTheme } from '$lib/ThemeSwitcher.svelte';
	import DiamondIcon from '$lib/images/icons/Diamond.avif';
	import MicrophoneIcon from '$lib/images/icons/Microphone.avif';
	import PictureIcon from '$lib/images/icons/Picture.avif';
	import SproutIcon from '$lib/images/icons/Sprout.avif';
	import TreeIcon from '$lib/images/icons/Tree.avif';
	import SeedIcon from '$lib/images/icons/Seed.avif';

	// let searchValue = '';

	// function search() {}

  // Change the document body data-theme value on theme changes
  currentTheme.subscribe((value) => {
    document.body.setAttribute('data-theme', value);
  });
</script>

<svelte:head>
	<title>za</title>
</svelte:head>

<header class="flex justify-center w-[90%] m-auto">
	<span>
		<a href="/shomen">
			<img
				src={HeaderImage}
				class="max-w-full max-h-[20vh] w-auto h-auto mt-2"
				alt="dojo node header with trees and the logo"
			/>
		</a>
		<div class="w-[60px] ml-auto mr-8 lg:mb-6 md:mb-4 mb-2">
			<ThemeSwitcher />
		</div>
	</span>
</header>

<section>
	<div class="mx-auto relative">
		<span>
			<span class="text-[#5CAA80] font-bold">za</span>
			<img src={ZaScrollIcon} class="icon-big m-auto" alt="tatami flag" />
		</span>

		<div
			class="card md:absolute md:top-0 md:left-36 w-max text-balance md:text-left mt-8 mb-2 max-w-[20rem]"
		>
			<h1 class="font-bold">blockchain education</h1>
			<h2 class="-mt-2">a sitting area for discussion</h2>
		</div>
	</div>
</section>

<!-- <section>
	<div class="flex md:flex-row flex-col max-w-[820px] w-full justify-around items-center">
		<div class="flex flex-col">
			<div
				class="flex md:flex-col w-full md:w-auto flex-row-reverse md:items-center items-start md:mt-14 mt-8"
			>
				<button class="flex flex-col items-center md:mb-6" on:click={null}>
					<img src={SubmitIcon} class="w-8 mb-2" alt="submit postal icon" />
					<span class="hidden md:block"> search all </span>
				</button>
				<input
					class="shadow appearance-none rounded-full text-[hsl(var(--twc-cardSubBodyColor))] bg-[hsl(var(--twc-inputAccentColor))] w-full px-3 focus:outline-none focus:shadow-outline leading-none"
					on:submit|preventDefault={null}
					type="text"
					placeholder="wallet / blockchain / defi"
					bind:value={searchValue}
				/>
			</div>
		</div>
	</div>
</section> -->

<section>
	<div id="cards" class="max-w-[920px] mt-12 flex flex-wrap justify-center overflow-y-clip">
    <!-- 101 wallets -->
		<div class="modal shadow-md flex flex-row">
      <div class="flex flex-row items-start w-[400px] justify-evenly pt-[50px]">
        <div class="w-[70px] mr-6">
          <img src={WalletIcon} alt="icon" />
          <h3 class="modal-title font-bold text-base text-[#E53325] m-auto">
            <span>101</span>
            <span>wallets</span>
          </h3>
        </div>
        <a href="https://www.dailymotion.com/video/k3IrB4qqGmVUJfzSjZe" target="_blank" class="w-[55px] source">
          <img src={PictureIcon} alt="icon" />
          <h3 class="modal-title">
            video
          </h3>
        </a>
        <a href="https://podcasters.spotify.com/pod/show/-dojo-node-/episodes/101---Wallets-e2en33s" target="_blank" class="w-[55px] source">
          <img src={MicrophoneIcon} alt="icon" />
          <h3 class="modal-title">
            audio
          </h3>
        </a>
      </div>

      <div class="flex flex-col items-start mt-4 md:ml-10 w-[100px] overflow-clip gap-6">
        <div class="flex flex-row items-center">
          <img src={SeedIcon} class="icon-small w-8 mr-4" alt="red karate uniform icon" />
          <div class="flex flex-col text-left category">
            <p class="active">seed</p>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <img src={SproutIcon} class="icon-small w-8 mr-4" alt="red karate uniform icon" />
          <div class="flex flex-col text-left category">
            <p class="">sprout</p>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <img src={TreeIcon} class="icon-small w-8 mr-4" alt="red karate uniform icon" />
          <div class="flex flex-col text-left category">
            <p class="">tree</p>
          </div>
        </div>
      </div>
		</div>

    <!-- 202 blockchains   -->
		<div class="modal shadow-md flex flex-row">
      <div class="flex flex-row items-start w-[400px] justify-evenly pt-[50px]">
        <div class="w-[70px] mr-6">
          <img src={PackageIcon} alt="icon" />
          <h3 class="modal-title font-bold text-base text-[#E53325] m-auto">
            <span>102</span>
            <span>blockchains</span>
          </h3>
        </div>
        <a href="https://www.dailymotion.com/video/k6IzEjprotogfuAspeo" target="_blank" class="w-[55px] source">
          <img src={PictureIcon} alt="icon" />
          <h3 class="modal-title">
            video
          </h3>
        </a>
        <a href="https://podcasters.spotify.com/pod/show/-dojo-node-/episodes/102---Blockchains-e2g3ls7" target="_blank" class="w-[55px] source">
          <img src={MicrophoneIcon} alt="icon" />
          <h3 class="modal-title">
            audio
          </h3>
        </a>
      </div>

      <div class="flex flex-col items-start mt-4 md:ml-10 w-[100px] overflow-clip gap-6">
        <div class="flex flex-row items-center">
          <img src={SeedIcon} class="icon-small w-8 mr-4" alt="red karate uniform icon" />
          <div class="flex flex-col text-left category">
            <p class="">seed</p>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <img src={SproutIcon} class="icon-small w-8 mr-4" alt="red karate uniform icon" />
          <div class="flex flex-col text-left category">
            <p class="active">sprout</p>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <img src={TreeIcon} class="icon-small w-8 mr-4" alt="red karate uniform icon" />
          <div class="flex flex-col text-left category">
            <p class="">tree</p>
          </div>
        </div>
      </div>
		</div>

    <!-- 103 de-fi -->
		<div class="modal shadow-md flex flex-row">
      <div class="flex flex-row items-start w-[400px] justify-evenly pt-[50px]">
        <div class="w-[70px] mr-6">
          <img src={DiamondIcon} alt="icon" />
          <h3 class="modal-title font-bold text-base text-[#E53325] m-auto">
            <span>103</span>
            <span>de-fi</span>
          </h3>
        </div>
        <a href="/"  target="_blank" class="w-[55px] source disabled">
          <img src={PictureIcon} alt="icon" />
          <h3 class="modal-title">
            video
          </h3>
        </a>
        <a href="https://podcasters.spotify.com/pod/show/-dojo-node-/episodes/103---DeFi-e2g3jsi" target="_blank" class="w-[55px] source">
          <img src={MicrophoneIcon} alt="icon" />
          <h3 class="modal-title">
            audio
          </h3>
        </a>
      </div>

      <div class="flex flex-col items-start mt-4 md:ml-10 w-[100px] overflow-clip gap-6">
        <div class="flex flex-row items-center">
          <img src={SeedIcon} class="icon-small w-8 mr-4" alt="red karate uniform icon" />
          <div class="flex flex-col text-left category">
            <p class="active">seed</p>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <img src={SproutIcon} class="icon-small w-8 mr-4" alt="red karate uniform icon" />
          <div class="flex flex-col text-left category">
            <p class="">sprout</p>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <img src={TreeIcon} class="icon-small w-8 mr-4" alt="red karate uniform icon" />
          <div class="flex flex-col text-left category">
            <p class="">tree</p>
          </div>
        </div>
      </div>
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

	.icon-big {
		width: 100px;
	}

  .modal {
		align-items: center;
		padding: 10px 20px;
		margin: 6px;
		border: 1px solid hsl(var(--twc-cardBackgroundColor));
		border-radius: 20px;
		background-color: hsl(var(--twc-cardBackgroundColor));
		height: 200px;
    width: 600px;
	}

  .modal-title{
    display: flex;
    flex-direction: column;
    margin-top: 4px;
  }

	@media (max-width: 750px) {
		.modal {
			margin: 4px;
		}
	}

  .category{
    color: hsl(var(--twc-tertiaryColor));
  }

  .category >.active{
    color: hsl(var(--twc-textColor));
  }
  .source{
    cursor: pointer;
  }
  .source.disabled{
    filter: grayscale(100%);
    opacity: 0.5; /* Optional: Adjust opacity as needed */
    cursor: not-allowed;
    pointer-events: none;
  }
</style>
