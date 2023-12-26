<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { Check } from 'lucide-svelte';
	import { dropdownCtx } from './Root.svelte';

	export let checked = false;
	export let asChild = false;

	const {
		builders: { createCheckboxItem }
	} = dropdownCtx.get();

	const {
		elements: { checkboxItem },
		states: { checked: localChecked }
	} = createCheckboxItem({
		onCheckedChange({ next }) {
			if (typeof next !== 'string') {
				checked = next;
			}
			return next;
		}
	});

	$: localChecked.set(checked);
</script>

{#if asChild}
	<slot builder={$checkboxItem} />
{:else}
	<div class="item" use:melt={$checkboxItem}>
		<div class="check">
			{#if checked}
				<Check class="square-4" />
			{/if}
		</div>
		<slot builder={$checkboxItem} />
	</div>
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

	.check {
		@apply absolute left-2 top-1/2 text-magnum-500;
		translate: 0 calc(-50% + 1px);
	}
</style>
