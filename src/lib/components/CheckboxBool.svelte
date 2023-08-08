<script lang="ts">
	import { createCheckbox, melt } from '@melt-ui/svelte';

	export let name: string;
	export let checked: boolean;

	const {
		elements: { root },
		helpers: { isChecked, isIndeterminate },
		states: { checked: localChecked }
	} = createCheckbox({
		name,
		onCheckedChange: ({ next }) => {
			if (typeof next === 'boolean') {
				checked = next;
			}
			return next;
		}
	});

	$: $localChecked = checked;
</script>

<label class="flex item-scenter gap-2">
	<div class="flex items-center justify-center">
		<button use:melt={$root} class="grid place-items-center bg-white rounded-md w-6 h-6">
			{#if $isIndeterminate}
				-
			{:else if $isChecked}
				✔
			{/if}
		</button>
	</div>
	Checkbox bool
</label>
