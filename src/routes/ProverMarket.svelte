<script async script lang="ts">
  import PocketBase from "pocketbase";

  let records: any[] = [];
  let provers: any[] = [];
  async function fetchRecords() {
    const pb = new PocketBase("http://0.0.0.0:8090");
    const authData = await pb.admins.authWithPassword(
      "wolfez4444@gmail.com",
      "testing12345"
    );
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
    for (const record of records) {
      const result = await fetchDataForRecord(record);
      if(result != undefined)
        provers = [...provers, result];
    }
    provers.sort((a,b) => b.currentCapacity - a.currentCapacity);
  }
</script>

<div class="flex flex-col justify-center items-center mt-16">
  <h1 class="text-3xl mb-4">Prover market page</h1>

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
    <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2">Copy</button>
  </div>
</div>
<style>
</style>
