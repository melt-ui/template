<script lang="ts">
	import { createCheckbox, melt } from '@melt-ui/svelte';

	export let name: string;

	const {
		elements: { root, input },
		helpers: { isChecked, isIndeterminate }
	} = createCheckbox({
		name,
		value: 'on'
	});
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
		<input id="checkbox" use:melt={$input} class="hidden" type="checkbox" />
	</div>
	Checkbox Str
</label>
