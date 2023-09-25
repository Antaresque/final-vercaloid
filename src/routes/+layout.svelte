<script lang='ts'>
	import Header from './Header.svelte';
	import '../lib/styles/styles.css';
	import '../lib/styles/background-anim.css'

	import play from '../lib/images/icon-play.svg'

	let overlay: HTMLElement;

	function reveal() {
		overlay.classList.add('overlay-disappear');
		setTimeout(() => overlay.parentNode?.removeChild(overlay), 2000);
	}
</script>

<div class='overlay' bind:this={overlay}>
	<img alt="Play" src={play} on:click={reveal}/>
</div>

<div class="app">
	<div class="area">
		<ul class="circles">
			{#each Array(10) as _, __}
				<li></li>
			{/each}		
		</ul>
	</div>

	<div class="context">
		<slot />
	</div>
</div>

<style>
</style>
