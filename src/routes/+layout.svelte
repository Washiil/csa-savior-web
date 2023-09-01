<script lang="ts">
	import '../app.postcss';
	import { goto } from '$app/navigation';
	import { AppShell, AppBar, TreeView, TreeViewItem, type TreeViewNode, LightSwitch } from '@skeletonlabs/skeleton';

	let questions: Record<string, number[]> = {
			'2021': [1],
			'2022': [1, 2, 3, 4],
	}
</script>

<!-- App Shell -->
<AppShell slotHeader='p-2 rounded'>
	<svelte:fragment slot="header">
			<!-- App Bar -->
			<AppBar background='variant-soft-tertiary'>
					<svelte:fragment slot="lead">
							<strong class="text-xl uppercase">CSA-Savior</strong>
					</svelte:fragment>
					<svelte:fragment slot="trail">
							<a
									class="btn btn-sm variant-ghost-surface"
									href="https://github.com/skeletonlabs/skeleton"
									target="blank"
									rel="noreferrer"
							>
									GitHub
							</a>
							<LightSwitch />
					</svelte:fragment>
			</AppBar>
	</svelte:fragment>
	<!-- This is the sidebar -->
	<svelte:fragment slot="sidebarLeft">
			<!-- Hidden below Tailwind's large breakpoint -->
			<div id="sidebar-left" class="hidden lg:block variant-soft-tertiary m-2 rounded w-48 no-scrollbar" style='height: 98%'>
					<TreeView>
							{#each Object.entries(questions) as [key, value]}
									<TreeViewItem>
									{key}
									<svelte:fragment slot="children">
											{#each questions[key] as question}
													<TreeViewItem on:click={() => goto(`/${key}/Question_${question}`)}>
															Question {question}
													</TreeViewItem>
											{/each}
									</svelte:fragment>
									</TreeViewItem>
							{/each}
					</TreeView>
			</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class='variant-soft-tertiary m-2 rounded p-4' style='height: 98%'>
			<slot />
	</div>
</AppShell>

<style>
.no-scrollbar::-webkit-scrollbar {
	display: none;
}
</style>