<script async script lang="ts">
  import PocketBase from "pocketbase";

  let records: any[] = [];
  let provers: any[] = [];
  let newProverEndpoint;
  const pb = new PocketBase(import.meta.env.VITE_PB_URI);

  async function fetchRecords() {
    const authData = await pb.collection('users').authWithPassword(
      import.meta.env.VITE_PB_USER,
      import.meta.env.VITE_PB_PASSWORD
    );

    // reset the records array
    records = [];
    // you can also fetch all records at once via getFullList
    records = await pb.collection("prover_endpoints").getFullList({
      sort: "-created",
    });
    fetchAllData();
  }
  fetchRecords();

  // Define an async function to fetch data for a single record
  async function fetchDataForRecord(record) {
    try {
      const response = await fetch(`${record.url}/status`);
      if (response.ok) {
        const data = await response.json();
        return {
          url: record.url,
          minimumGas: data.minProofFee,
          currentCapacity: data.currentCapacity,
        };
      } else {
        throw new Error(`Request failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Iterate through records and fetch data for each
  async function fetchAllData() {
    // reset the previous array
    provers = [];

    for (const record of records) {
      const result = await fetchDataForRecord(record);
      if(result != undefined)
        // stores the provers in a set, so only unique values are stored
        provers = [...provers, result];
    }
    provers.sort((a,b) => b.currentCapacity - a.currentCapacity);
  }

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
      const newProverRecord = await pb.collection('prover_endpoints').create({
        url: newProverEndpoint,
      });

      // Success: refresh data and show toast?
      fetchRecords();
      newProverEndpoint = '';

      // Moved to database hook
      // const response = await fetch(`${newProverEndpoint}/status`);
      // if (response.ok) {
      //   const data = await response.json();

      //   // Check if the endpoint is valid and contains the minProofFee and currentCapacity
      //   if('minProofFee' in data && 'currentCapacity' in data){
      //     console.log('creating the prover');
      //     // Add the prover to the DB
      //     const newProverRecord = await pb.collection('prover_endpoints').create({
      //       url: newProverEndpoint,
      //     });

      //     // Success: refresh data and show toast?
      //     fetchRecords();
      //     newProverEndpoint = '';
      //   }else {
      //     // Show user error
      //     console.log('cant create the prover');
      //   }
      // } else {
      //   // show user error?
      // }
    } catch (error) {
      console.error(error);
      // Show error as a toast message
    }
  }

  function endpointExists(url){
    return provers.find(prover => prover.url === url) !== undefined;
  }
</script>

<div class="flex flex-col justify-center items-center mt-16">
  <h1 class="text-3xl mb-4">Prover market page</h1>

  <form class="flex flex-col my-16" on:submit|preventDefault={addProverEndpoint}>
    <h1 class="text-xl">Add new prover endpoint</h1>
    <input bind:value={newProverEndpoint} class="my-3 py-1 text-center" placeholder="http://192.168.20.1:9876">
    <button class="bg-slate-500 text-white px-4 py-2 rounded mt-2">
      Add
    </button>
  </form>

  <ul>
    {#if provers.length > 0}
      {#each provers as prover}
        <li>
          {prover.url} -- minimum proof fee of {prover.minimumGas} -- current capacity
          is {prover.currentCapacity}
        </li>
      {/each}
    {/if}
  </ul>

      <!-- PROVER_ENDPOINTS={provers.filter(p => p.currentCapacity > 0).map(p => p.url).join(',')} -->

  <div class="p-4 rounded-lg">
    <h1 class="text-lg">One liner of prover endpoints that currently have capacity:</h1>
    <pre class="bg-gray-800 text-white pt-6 rounded pr-16">
      <code>PROVER_ENDPOINTS={provers.filter(p => p.currentCapacity > 0).map(p => p.url).join(',')}</code>
    </pre>
  </div>
</div>
<style>
</style>
