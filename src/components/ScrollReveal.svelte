<script lang="ts">
  import { onMount } from "svelte";
  import { ScrollReaval } from "../lib/ScrollReveal";
  import { styleHelper } from "../lib/styleHelper";
  export let style = {};
  export let options: scrollReveal.ScrollRevealObjectOptions = {};
  let element: HTMLElement;
  onMount(() => {
    new ScrollReaval(element, options);
  });
</script>

<div bind:this={element} class="scroll-reveal" style={styleHelper(style)}>
  <slot />
</div>
