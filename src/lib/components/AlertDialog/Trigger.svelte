<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getAlertDialogCtx } from './AlertDialog.svelte';

	const {
		elements: { trigger }
	} = getAlertDialogCtx();
</script>

<button
	use:melt={$trigger}
	class="inline-flex items-center justify-center rounded-md bg-white px-4 py-2
    font-medium leading-none text-magnum-700 shadow-lg hover:opacity-75"
>
	<slot />
</button>
