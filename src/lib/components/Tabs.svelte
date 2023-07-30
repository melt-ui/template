<script lang="ts">
	import { createTabs } from '@melt-ui/svelte';

	export let tabs: string[];
	export let disabledTabs: string[] = [];
	export let value: string;

	const {
		root,
		list,
		content,
		trigger,
		value: localValue
	} = createTabs({
		value
	});

	localValue.subscribe((v) => {
		value = v;
	});

	$: localValue.set(value);
</script>

<div
	melt={$root}
	class="flex max-w-[25rem] flex-col overflow-hidden rounded-md shadow-lg
  data-[orientation=vertical]:flex-row"
>
	<div
		melt={$list}
		class="flex shrink-0 overflow-x-auto border-b border-magnum-100 bg-white
    data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-r"
		aria-label="Manage your account"
	>
		{#each tabs as tab}
			<button melt={$trigger({ value: tab, disabled: disabledTabs.includes(tab) })} class="trigger"
				>{tab}</button
			>
		{/each}
	</div>
	{#each tabs as tab}
		<div melt={$content(tab)} class="grow bg-white text-neutral-900 p-5">
			<slot {tab} />
		</div>
	{/each}
</div>

<style lang="postcss">
	.trigger {
		display: flex;
		height: theme(spacing.11);
		flex: 1;
		cursor: default;
		user-select: none;
		align-items: center;
		justify-content: center;
		border-radius: 0;
		background-color: theme(colors.white);
		padding-inline: theme(spacing.2);
		line-height: 1;
		color: theme(colors.magnum.900);

		&:focus {
			position: relative;
		}

		&[data-orientation='vertical'] {
			@apply w-full flex-grow-0 rounded-none border-b border-r-2;
			@apply border-transparent border-b-magnum-100 py-4 last:border-b-0;
		}

		&[data-state='active'] {
			@apply text-magnum-700 focus:relative;
		}

		&[data-state='active'][data-orientation='horizontal'] {
			@apply shadow-[inset_0_-1px_0_0,0_1px_0_0] shadow-current focus:relative;
		}

		&[data-state='active'][data-orientation='vertical'] {
			@apply border-r-magnum-500;
		}

		&[data-disabled] {
			@apply opacity-50 cursor-not-allowed;
		}
	}

	input {
		height: theme(spacing.8);
		flex-shrink: 0;
		flex-grow: 1;
		border-radius: theme(borderRadius.md);
		border: 1px solid theme(colors.neutral.200);
		padding-inline: theme(spacing[2.5]);
		line-height: 1;
		color: theme(colors.magnum.900);

		&:focus {
			border-color: theme(colors.magnum.400);
		}
	}

	.save {
		display: inline-flex;
		height: theme(spacing.8);
		cursor: default;
		align-items: center;
		justify-content: center;
		border-radius: theme(borderRadius.md);
		background-color: theme(colors.green.100);
		padding-inline: theme(spacing.4);
		line-height: 1;
		font-weight: theme(fontWeight.semibold);
		color: theme(colors.green.900);

		&:hover {
			background-color: theme(colors.green.200);
		}

		&:focus {
			@apply !ring-green-600;
		}
	}
</style>
