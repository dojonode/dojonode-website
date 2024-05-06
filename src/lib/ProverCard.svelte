<script>
	import KarateRedIcon from '$lib/images/icons/KarateRed.avif';
	import KarateBlueIcon from '$lib/images/icons/KarateBlue.avif';
	import KaratePinkIcon from '$lib/images/icons/KaratePink.avif';
	import KarateGreenIcon from '$lib/images/icons/KarateGreen.avif';
	import KarateYellowIcon from '$lib/images/icons/KarateYellow.avif';
	import TicketIcon from '$lib/images/icons/Ticket.avif';
	import MapIcon from '$lib/images/icons/Map.avif';
  import convert from "ethereum-unit-converter";

	export let endpoint;
  let iconSrc

  $: {
    const random = Math.floor(Math.random() * 10);
    if (random === 0) {
      iconSrc = KarateRedIcon;
    } else if (random >= 1 && random <= 2) {
      iconSrc = KarateGreenIcon;
    } else if (random >= 3 && random <= 4) {
      iconSrc = KarateYellowIcon;
    } else if (random >= 5 && random <= 7) {
      iconSrc = KarateBlueIcon;
    } else {
      iconSrc = KaratePinkIcon;
    }
  }
</script>

<div class="modal shadow-md flex content-between items-center justify-around flex-row">
			<div class="w-[85px]">
				<h3 class="modal-title font-bold text-xl text-[#E53325]">prover</h3>
				<img src={iconSrc} alt="icon" />
			</div>

      <div class="flex flex-col items-start mt-4 w-[225px] ml-auto card-subbody overflow-clip gap-2">
        <div class="flex flex-col items-start">
          <div class="flex flex-col items-start">
            <img src={TicketIcon} class="icon-small w-8 mr-2" alt="red karate uniform icon" />
            <p class="">min proof fee</p>
          </div>
          <div class="flex flex-col text-left">
            {#if endpoint.minimumGas !== undefined}
              <p class="truncate text-[hsl(var(--twc-cardSubBodyColor))]">
                  {convert(endpoint.minimumGas, "wei", "gwei")} gwei
              </p>
            {/if}
          </div>
        </div>
        <div class="flex flex-col items-start">
          <div class="flex flex-col items-start">
            <img src={MapIcon} class="icon-small w-8 mr-2" alt="red karate uniform icon" />
            <p class="">address</p>
          </div>
          <div class="flex flex-col text-left">
            <p class="truncate text-[hsl(var(--twc-cardSubBodyColor))]">{endpoint.url}</p>
          </div>
        </div>
      </div>
</div>

<style>
	.modal {
		align-items: center;
		padding: 10px 20px;
		margin: 6px;
		border: 1px solid hsl(var(--twc-cardBackgroundColor));
		border-radius: 20px;
		background-color: hsl(var(--twc-cardBackgroundColor));
		height: 200px;
    width: 375px;
	}

	@media (max-width: 750px) {
		.modal {
			margin: 4px;
		}
	}
</style>
