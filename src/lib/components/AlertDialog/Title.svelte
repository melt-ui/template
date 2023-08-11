<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getAlertDialogCtx } from './AlertDialog.svelte';

	const {
		elements: { title }
	} = getAlertDialogCtx();
</script>

<h2 use:melt={$title} class="m-0 text-lg font-medium text-black"><slot /></h2>
