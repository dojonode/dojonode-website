<script async lang="ts">
	import HeaderImage from '$lib/images/Header.avif';
	import KamizaScrollIcon from '$lib/images/icons/KamizaScroll.svg';
	import ThemeSwitcher, { currentTheme } from '$lib/ThemeSwitcher.svelte';
	import WolfezProfileImage from '$lib/images/wolfez-profilepic.png';
	import HeliosProfileImage from '$lib/images/helios-profilepic.png';
  import GithubIcon from '$lib/images/icons/Github.avif';
	import TwitterIcon from '$lib/images/icons/Twitter.avif';
	import DiscordIcon from '$lib/images/icons/Discord.avif';

  // Change the document body data-theme value on theme changes
  currentTheme.subscribe((value) => {
    document.body.setAttribute('data-theme', value);
  });
</script>

<svelte:head>
	<title>kamiza</title>
	<meta name="description" content="TODO:" />
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
      <span class="text-[#5CAA80] font-bold">kamiza</span>
      <img src={KamizaScrollIcon} class="icon-big m-auto" alt="kamiza flag">
    </span>

    <div class="card md:absolute md:top-0 md:left-36 w-max text-balance md:text-left mt-8 mb-2 max-w-[20rem]">
      <h1 class="font-bold">about us</h1>
      <h2 class="-mt-2">highest seat for instructors</h2>
    </div>
  </div>
</section>

<section>
  <div
      id="cards"
      class="max-w-[920px] mt-8 flex flex-wrap justify-center overflow-y-clip"
    >
      <div class="modal flex flex-col">
        <img src={WolfezProfileImage} alt="wolfez icon" class="rounded-full w-[80px] mt-6 mb-2">
        <span class="font-bold">wolfez</span>

        <span class="description">
          Developer of dojonode.
        </span>

        <!-- <span class="description">
          Has been active since early testnets.
        </span> -->
        <span class="description">
          <!-- His journey started in the early testnets of Taiko, interested in the infrastructure and selfhosting aspect of crypto. -->
          Embarked on a journey during the early testnets of Taiko, interested in the infrastructure and self-hosting side of crypto and nodes.

          Passionate about running, cycling and cinema.
        </span>
        <span class="description">
        </span>

        <div class="flex items-center justify-center mb-2 gap-4 mt-auto">
          <a href="https://x.com/wolfez44" target="_blank">
            <img src={TwitterIcon} class="icon" alt="twitter icon" />
          </a>
          <a href="https://github.com/wolfderechter" target="_blank">
            <img src={GithubIcon} class="icon" alt="github icon" />
          </a>
          <a href="https://discord.gg/wolfez44" target="_blank">
            <img src={DiscordIcon} class="icon" alt="discord icon" />
          </a>
        </div>
      </div>


      <div class="modal flex flex-col">
        <img src={HeliosProfileImage} alt="helios icon" class="rounded-full w-[80px] mt-6 mb-2">
        <span class="font-bold">helios</span>

        <span class="description">
          Designer of dojonode.
        </span>

        <span class="description">
          Helios is dedicated to helping grow and build knowledge around Ethereum, and other defi infrastructure. With a natural inclination to community building, his crypto focus is more social than hardcore coding programming.  Designed multiple graphic  logos and glyphs, infographics, moderated a spirituality podcast for 2 years with weekly episodes, professional architect, designer and woodworker.
        </span>

        <div class="flex items-center justify-center mb-2 gap-4 mt-auto">
          <a href="https://x.com/77Helios" target="_blank">
            <img src={TwitterIcon} class="icon" alt="twitter icon" />
          </a>
          <a href="https://github.com/Eleleth77" target="_blank">
            <img src={GithubIcon} class="icon" alt="github icon" />
          </a>
          <a href="https://discord.gg/the77helios" target="_blank">
            <img src={DiscordIcon} class="icon" alt="discord icon" />
          </a>
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
	.icon {
		width: 20px;
	}

	.modal {
		align-items: center;
		padding: 10px 20px;
		margin: 6px;
		border: 1px solid hsl(var(--twc-cardBackgroundColor));
		border-radius: 20px;
		background-color: hsl(var(--twc-cardBackgroundColor));
		height: 700px;
    width: 250px;
	}

  .description{
    text-align: left;
    margin-top: 1.5rem;
    /* width: 100%; */
  }

	@media (max-width: 750px) {
		.modal {
			margin: 4px;
		}
	}
</style>
