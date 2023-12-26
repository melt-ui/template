<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { dropdownCtx } from './Root.svelte';

	export let asChild = false;

	const {
		elements: { item }
	} = dropdownCtx.get();
</script>

{#if asChild}
	<slot builder={$item} />
{:else}
	<div class="item" use:melt={$item}><slot builder={$item} /></div>
{/if}

<style lang="postcss">
	.item {
		@apply relative h-6 min-h-[24px] select-none rounded-sm pl-6 pr-1;
		@apply z-20 text-magnum-900 outline-none;
		@apply data-[highlighted]:bg-magnum-200 data-[highlighted]:text-magnum-900;
		@apply data-[disabled]:text-neutral-300;
		@apply flex items-center text-sm leading-none;
		@apply ring-0 !important;
	}
</style>
