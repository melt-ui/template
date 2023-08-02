<script lang="ts">
	import { createPagination, melt } from '@melt-ui/svelte';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';

	export let items: unknown[];

	const {
		elements: { prevButton, nextButton, pageTrigger, root },
		states: { pages, range, page: value }
	} = createPagination({
		count: items.length,
		perPage: 10,
		defaultPage: $page.params.page ? Number($page.params.page) : 1,
		siblingCount: 1
	});

	onDestroy(
		value.subscribe(async (v) => {
			if (!browser) return;
			await goto(`/${v}`);
			console.log(window.location.href);
		})
	);
</script>

<nav class="flex flex-col items-center gap-4" aria-label="pagination" use:melt={$root}>
	<slot range={$range} />
	<div class="flex items-center gap-2">
		<button
			class="grid h-8 items-center rounded-sm bg-white px-3 text-sm text-magnum-700 shadow-sm
      hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 data-[selected]:bg-magnum-900
      data-[selected]:text-white"
			use:melt={$prevButton}><ChevronLeft /></button
		>
		{#each $pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<span>...</span>
			{:else}
				<button
					class="grid h-8 items-center rounded-sm bg-white px-3 text-sm text-magnum-700 shadow-sm
          hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 data-[selected]:bg-magnum-900
        data-[selected]:text-white"
					use:melt={$pageTrigger(page)}>{page.value}</button
				>
			{/if}
		{/each}
		<button
			class="grid h-8 items-center rounded-sm bg-white px-3 text-sm text-magnum-700 shadow-sm
      hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 data-[selected]:bg-magnum-900
    data-[selected]:text-white"
			use:melt={$nextButton}><ChevronRight /></button
		>
	</div>
</nav>
