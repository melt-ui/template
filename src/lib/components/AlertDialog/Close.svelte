<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getAlertDialogCtx } from './AlertDialog.svelte';

	const {
		elements: { close }
	} = getAlertDialogCtx();
</script>

<button
	use:melt={$close}
	class="inline-flex items-center justify-center rounded-md bg-magnum-700 px-4 py-2
    font-medium leading-none text-white hover:opacity-75"
	on:m-click
	{...$$restProps}
>
	<slot />
</button>
