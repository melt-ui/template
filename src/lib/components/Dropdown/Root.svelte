<script lang="ts" context="module">
	const CTX_KEY = Symbol('dropdownMenu');

	export const dropdownCtx = {
		get() {
			return getContext<DropdownMenu>(CTX_KEY);
		},
		set(ctx: DropdownMenu) {
			setContext(CTX_KEY, ctx);
		}
	};
</script>

<script lang="ts">
	import { createDropdownMenu, type DropdownMenu } from '@melt-ui/svelte';
	import { getContext, setContext } from 'svelte';

	const ctx = createDropdownMenu({
		loop: true
	});

	dropdownCtx.set(ctx);
</script>

<slot />
