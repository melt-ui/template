<script lang="ts">
	import Tabs from '$lib/components/Tabs.svelte';

	const tabList = [
		{ id: 'feed', label: 'For you' },
		{ id: 'club', label: 'Following' },
		{ id: 'challenges', label: 'Challenges' }
	];
</script>

<Tabs {tabList} let:contentId>
	{#if contentId === 'feed'}
		Feed
	{:else if contentId === 'club'}
		Club
	{:else if contentId === 'challenges'}
		Challenges
	{/if}
</Tabs>
