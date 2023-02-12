<script lang="ts">
	import Card from '../components/card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="pt-6 flex flex-col gap-20">
	<h1 class="text-5xl font-bold uppercase text-center">cotizaciones</h1>
	<div class="flex justify-center flex-wrap gap-10 items-stretch mx-auto mb-10">
		{#if data.dolarInfo}
			{#each data.dolarInfo as cotizacionData}
				{#if cotizacionData.variacion}
					<Card info={cotizacionData} />
				{/if}
			{/each}
		{/if}
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
