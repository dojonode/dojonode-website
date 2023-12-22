<script>
	import KarateRedIcon from '$lib/images/icons/KarateRed.avif';
	import KarateBlueIcon from '$lib/images/icons/KarateBlue.avif';
	import KaratePinkIcon from '$lib/images/icons/KaratePink.avif';
	import KarateGreenIcon from '$lib/images/icons/KarateGreen.avif';
	import KarateYellowIcon from '$lib/images/icons/KarateYellow.avif';
	import TruckIcon from '$lib/images/icons/Truck.avif';
	import TicketIcon from '$lib/images/icons/Ticket.avif';
	import MapIcon from '$lib/images/icons/Map.avif';


	export let endpoint;
  let iconSrc

  $: {
    if (endpoint.currentCapacity === 0) {
      iconSrc = KarateRedIcon;
    } else if (endpoint.currentCapacity >= 1 && endpoint.currentCapacity <= 2) {
      iconSrc = KarateGreenIcon;
    } else if (endpoint.currentCapacity >= 3 && endpoint.currentCapacity <= 4) {
      iconSrc = KarateYellowIcon;
    } else if (endpoint.currentCapacity >= 5 && endpoint.currentCapacity <= 6) {
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

      <div class="flex flex-col items-start mt-4 w-[150px] ml-auto card-subbody overflow-clip gap-2">
        <div class="flex flex-row items-center">
          <img src={TruckIcon} class="icon-small w-8 mr-2" alt="red karate uniform icon" />
          <div class="flex flex-col text-left">
            <p class="">capacity</p>
            <p class="text-[hsl(var(--twc-cardSubBodyColor))]">{endpoint.currentCapacity}</p>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <img src={TicketIcon} class="icon-small w-8 mr-2" alt="red karate uniform icon" />
          <div class="flex flex-col text-left">
            <p class="">min proof fee</p>
            <p class="text-[hsl(var(--twc-cardSubBodyColor))]">{endpoint.minimumGas} wei</p>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <img src={MapIcon} class="icon-small w-8 mr-2" alt="red karate uniform icon" />
          <div class="flex flex-col text-left">
            <p class="">address</p>
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
    width: 300px;
	}

	.modal-sub-body {
		color: hsl(var(--twc-cardSubBodyColor));
		font-size: 14px;
	}

	@media (max-width: 750px) {
		.modal {
			margin: 4px;
		}
	}
</style>
