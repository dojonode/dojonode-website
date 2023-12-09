<script context="module">
  // import { Themes } from "../domain/enums";
  import { writable } from "svelte/store";
  import {
    setLocalStorageItem,
    getLocalStorageItem,
  } from "$lib/localstorage.ts";

  const Themes = {
    Dark: "dark",
    Paper: "paper",
  };


  // Create a svelte store with the theme found in localstorage or the paper default theme
  let foundTheme = getLocalStorageItem("theme");
  export const currentTheme = writable(foundTheme ? foundTheme : Themes.Paper);

  /**
   * Change the theme and store in localstorage
	 * @param {string} newTheme
	 */
  function changeTheme(newTheme) {
    currentTheme.set(newTheme);
    setLocalStorageItem("theme", newTheme);
  }
</script>

<div class="settings flex flex-col justify-between items-center font-bold">
  theme
  <div class="mt-2 inline-flex text-black">
    <button
      class:active={$currentTheme === Themes.Paper}
      on:click={() => changeTheme(Themes.Paper)}
      class="theme bg-[#FFF9EB] py-[2px] mx-1 rounded-full"
    >
      paper
    </button>
    <button
      class:active={$currentTheme === Themes.Dark}
      on:click={() => changeTheme(Themes.Dark)}
      class="theme bg-[#1a1b1b] text-[#F4F4F4] py-[2px] mx-1 rounded-full"
    >
      dark
    </button>
  </div>
</div>

<style>
  .theme.active {
    border: 2.1px solid hsl(var(--twc-primaryColor));
  }
  .theme {
    border: 2.1px solid hsl(var(--twc-cardBackgroundColor));
    width: 75px;
    font-weight: 400;
    line-height: 1;
  }
</style>
