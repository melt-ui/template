<script>
	import Dropdown from '$lib/components/Dropdown';
</script>

<Dropdown.Root>
	<Dropdown.Trigger />
	<Dropdown.Menu>
		<Dropdown.Item>Item 1</Dropdown.Item>
		<Dropdown.Item asChild let:builder>
			<div
				class="text-black text-sm pl-6 focus:bg-black focus:text-white"
				{...builder}
				use:builder.action
			>
				As Child
			</div>
		</Dropdown.Item>
		<Dropdown.CheckboxItem checked={true}>Checkbox Item 1</Dropdown.CheckboxItem>
	</Dropdown.Menu>
</Dropdown.Root>
