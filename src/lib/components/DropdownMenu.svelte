<script lang="ts">
	import { createDropdownMenu } from '@melt-ui/svelte';

	const { trigger, menu, item, arrow } = createDropdownMenu();

	export let items: string[];
</script>

<button type="button" class="trigger" melt={$trigger} aria-label="Update dimensions"> Open </button>

<div class="menu" melt={$menu}>
	{#each items as it}
		<slot name="item" item={it} melted={$item}>
			<div class="item" melt={$item}>
				{it}
			</div>
		</slot>
	{/each}

	<div melt={$arrow} />
</div>

<style lang="postcss">
	.menu {
		@apply z-10 flex max-h-[300px] min-w-[220px] flex-col shadow-lg;
		@apply rounded-md bg-white p-1 shadow-neutral-900/30 lg:max-h-none;
		@apply ring-0 !important;
	}
	.subMenu {
		@apply min-w-[220px] shadow-md shadow-neutral-900/30;
	}

	.menu :global(.item) {
		@apply relative h-6 min-h-[24px] select-none rounded-sm pl-6 pr-1;
		@apply z-20 text-magnum-900 outline-none;
		@apply flex items-center text-sm leading-none;
		@apply ring-0 !important;
	}

	.menu :global(.item[data-highlighted]) {
		@apply bg-magnum-200 text-magnum-900;
	}

	.trigger {
		@apply inline-flex items-center justify-center  bg-white;
		@apply text-magnum-900 transition-colors hover:bg-white/90;
		@apply data-[highlighted]:ring-magnum-400 data-[highlighted]:ring-offset-2 !important;
		@apply px-2 py-1 rounded-md text-sm font-medium focus:ring data-[highlighted]:outline-none;
	}
	.check {
		@apply absolute left-2 top-1/2 text-magnum-500;
		translate: 0 calc(-50% + 1px);
	}

	.dot {
		@apply h-[4.75px] w-[4.75px] rounded-full bg-magnum-900;
	}

	.separator {
		@apply m-[5px] h-[1px] bg-magnum-200;
	}

	.rightSlot {
		@apply ml-auto pl-5;
	}

	.icon {
		@apply h-[13px] w-[13px];
	}
	.check {
		@apply absolute left-0 inline-flex w-6 items-center justify-center;
	}
	.text {
		@apply pl-6 text-xs leading-6 text-neutral-600;
	}
</style>
