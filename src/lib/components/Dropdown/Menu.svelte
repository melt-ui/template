<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { dropdownCtx } from './Root.svelte';

	const {
		elements: { menu }
	} = dropdownCtx.get();
</script>

<div class="menu outline-none" use:melt={$menu}>
	<slot />
</div>

<style lang="postcss">
	.menu {
		@apply z-10 flex max-h-[300px] min-w-[220px] flex-col shadow-lg;
		@apply rounded-md bg-white p-1 shadow-neutral-900/30 lg:max-h-none;
		@apply ring-0 !important;
	}
</style>
