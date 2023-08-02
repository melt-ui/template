<script lang="ts">
	import Pagination from './Pagination.svelte';

	const items = [] as string[];

	const firstNames = ['Thomas', 'Hunter', 'Rich', 'Sara', 'Nayara'];

	const lastNames = ['Lopes', 'Johnson', 'Harris', 'Silverberg', 'Oak'];

	const randomPick = <T>(arr: T[]) => {
		return arr[Math.floor(Math.random() * arr.length)];
	};

	for (let i = 0; i < 100; i++) {
		const firstName = randomPick(firstNames);
		const lastName = randomPick(lastNames);
		items.push(`${firstName} ${lastName}`);
	}
</script>

<Pagination {items} let:range>
	<ul>
		{#each items.slice(range.start, range.end) as item}
			<li>{item}</li>
		{/each}
	</ul>
</Pagination>
