<script>
	// @ts-nocheck

	import KarateIcon from '$lib/images/icons/Karate.png';
	import TruckIcon from '$lib/images/icons/Truck.png';
	import TicketIcon from '$lib/images/icons/Ticket.png';
	import MapIcon from '$lib/images/icons/Map.png';

	// type Endpoint = {
	//   url: string;
	//   capacity: number;
	//   minimumProofFee: number;
	// };

	// @ts-ignore
	export let endpoint;
</script>

<div class="modal shadow-md flex content-between items-center justify-around flex-row">
			<div class="w-[85px]">
				<h3 class="modal-title font-bold text-[#E53325]">prover</h3>
				<img src={KarateIcon} alt="icon" />
			</div>

      <div class="flex flex-col items-start mt-4 w-[150px] ml-auto card-subbody overflow-clip">
        <div class="flex flex-row items-center">
          <img src={TruckIcon} class="icon-small w-8 mr-2" alt="red karate uniform icon" />
          <div class="flex flex-col text-left">
            <p class="">capacity</p>
            <p class="text-[hsl(var(--twc-cardSubBodyColor))]">7</p>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <img src={TicketIcon} class="icon-small w-8 mr-2" alt="red karate uniform icon" />
          <div class="flex flex-col text-left">
            <p class="">min proof fee</p>
            <p class="text-[hsl(var(--twc-cardSubBodyColor))]">9 wei</p>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <img src={MapIcon} class="icon-small w-8 mr-2" alt="red karate uniform icon" />
          <div class="flex flex-col text-left">
            <p class="">address</p>
            <p class="truncate text-[hsl(var(--twc-cardSubBodyColor))]">https://192.168.20.1:9876</p>
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
