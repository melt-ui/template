<script lang="ts">
	import { createTabs, melt } from '@melt-ui/svelte';

	const {
		elements: { root, list, content, trigger }
	} = createTabs();

	type TabItem = {
		id: string;
		label: string;
	};

	export let tabList: TabItem[];
</script>

<div use:melt={$root} class="max-w-[500px] border border-neutral-500 p-4 rounded-md">
	<ul use:melt={$list} class="flex items-center border-b border-neutral-500 pb-1">
		{#each tabList as tab}
			<li class="list-option w-full">
				<button
					class="w-full opacity-50 hover:opacity-75 data-[state=active]:opacity-100 text-left"
					use:melt={$trigger(tab.id)}
				>
					{tab.label}
				</button>
			</li>
		{/each}
	</ul>
	{#each tabList as tab}
		<div class="pt-2" use:melt={$content(tab.id)}>
			<slot contentId={tab.id} />
		</div>
	{/each}
</div>
