<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getAlertDialogCtx } from './AlertDialog.svelte';
	const {
		elements: { description }
	} = getAlertDialogCtx();
</script>

<p use:melt={$description} class="mb-5 mt-2 leading-normal text-zinc-600">
	Make changes to your profile here. Click save when you're done.
</p>
