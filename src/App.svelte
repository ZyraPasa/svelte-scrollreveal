<script lang="ts">
  import { onMount } from "svelte";
  import ScrollRevealComponent from "./components/ScrollReveal.svelte";
  import { ScrollReaval } from "./lib/ScrollReveal";
  import { styleHelper } from "./lib/styleHelper";
  let style = { height: "200px", width: "100%" };
  let options: scrollReveal.ScrollRevealObjectOptions = {
    distance: "400px",
    reset: true,
    opacity: 0.1,
    duration: 1000,
  };
  let customElement: HTMLElement;
  onMount(() => {
    new ScrollReaval(customElement, { ...options, origin: "right" });
  });
</script>

<div class="wrapper">
  <ScrollRevealComponent style={{ ...style, "background-color": "blue" }} options={{ ...options, origin: "right" }} />
  <ScrollRevealComponent style={{ ...style, "background-color": "red" }} options={{ ...options, origin: "left" }} />
  <ScrollRevealComponent style={{ ...style, "background-color": "yellow" }} options={{ ...options, origin: "right" }} />
  <ScrollRevealComponent style={{ ...style, "background-color": "black" }} options={{ ...options, origin: "left" }} />
  <ScrollRevealComponent style={{ ...style, "background-color": "green" }} options={{ ...options, origin: "right" }} />
  <ScrollRevealComponent style={{ ...style, "background-color": "gray" }} options={{ ...options, origin: "left" }} />
  <ScrollRevealComponent style={{ ...style, "background-color": "blue" }} options={{ ...options, origin: "right" }} />
  <ScrollRevealComponent style={{ ...style, "background-color": "red" }} options={{ ...options, origin: "left" }} />
  <ScrollRevealComponent style={{ ...style, "background-color": "yellow" }} options={{ ...options, origin: "right" }} />
  <ScrollRevealComponent style={{ ...style, "background-color": "black" }} options={{ ...options, origin: "left" }} />
  <ScrollRevealComponent style={{ ...style, "background-color": "green" }} options={{ ...options, origin: "right" }} />
  <ScrollRevealComponent style={{ ...style, "background-color": "gray" }} options={{ ...options, origin: "left" }} />
  <div
    class="custom-element"
    bind:this={customElement}
    style={styleHelper({ ...style, "background-color": "violet" })}
  />
</div>

<style>
  .wrapper {
    width: 500px;
    margin: 0 auto;
  }
</style>
