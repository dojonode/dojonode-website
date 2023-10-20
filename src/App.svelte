<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import { currentTheme } from "./components/ThemeSwitcher.svelte";
  import ProverMarket from './routes/ProverMarket.svelte';

  export let url="";
  const routes = {
    "/": Home,
    "/provers": ProverMarket,
  };

  // Change the document body data-theme value on theme changes
  const body = document.body;
  currentTheme.subscribe((value) => {
    body.setAttribute("data-theme", value);
  });
</script>

<main class="px-2 md:px-6">
  <Router {url}>
    <div>
      <Route path="/"><Home /></Route>
      <Route path="provers" component={ProverMarket} />
    </div>
  </Router>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main {
    font-family: "Jost", sans-serif;
    background-color: hsl(var(--twc-backgroundColor));
  }
  body {
    background-color: hsl(var(--twc-backgroundColor));
  }
</style>
