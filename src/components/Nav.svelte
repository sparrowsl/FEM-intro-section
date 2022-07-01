<script>
	let featureArrowUp = false;
	let companyArrowUp = false;
</script>

<header class="font-epilogue flex items-center gap-10">
	<div class="text-almost_black text-3xl font-bold">snap</div>
	<nav class="flex w-full">
		<ul class="text-medium_gray mr-auto flex gap-5">
			<li class="relative">
				<a href="/" class="hover:text-almost_black flex items-center justify-center gap-1">
					<span> Features </span>
					<img
						src={featureArrowUp ? '/images/icon-arrow-up.svg' : '/images/icon-arrow-down.svg'}
						alt=""
						class="h-fit"
					/>
				</a>
				<!-- items to display on hover -->
				<ul
					class="{featureArrowUp
						? 'block absolute'
						: 'hidden'} top-full right-0 mx-auto mt-1 flex w-36 flex-col
            gap-2 rounded-sm bg-white p-4 shadow-md"
				>
					<li><a href="/" class="text-sm">Todo List</a></li>
					<li><a href="/" class="text-sm">Calendar</a></li>
					<li><a href="/" class="text-sm">Reminders</a></li>
				</ul>
			</li>
			<li class="relative">
				<a
					href="/"
					on:focus={() => (companyArrowUp = true)}
					on:mouseover={() => (companyArrowUp = true)}
					on:mouseout={() => (companyArrowUp = false)}
					on:blur={() => (companyArrowUp = false)}
					class="hover:text-almost_black flex items-center justify-center gap-1"
				>
					<span> Company </span>
					<img
						src={companyArrowUp ? '/images/icon-arrow-up.svg' : '/images/icon-arrow-down.svg'}
						alt=""
						class="h-fit"
					/>
				</a>
				<!-- items to display on hover -->
				{#if companyArrowUp}
					<ul
						class="absolute top-full left-0 mt-1 flex w-28 flex-col gap-2 rounded-sm bg-white p-4 shadow-md"
					>
						<li><a href="/" class="text-sm">History</a></li>
						<li><a href="/" class="text-sm">Our Team</a></li>
						<li><a href="/" class="text-sm">Blog</a></li>
					</ul>
				{/if}
			</li>
			<li><a href="/" class="hover:text-almost_black">Careers</a></li>
			<li><a href="/" class="hover:text-almost_black">About</a></li>
		</ul>

		<!-- login and register -->
		<ul class="text-medium_gray flex gap-5">
			<li><a href="/" class="hover:text-almost_black">Login</a></li>
			<li>
				<a
					href="/"
					class="hover:text-almost_black hover:border-almost_black border-medium_gray
          rounded-xl border-[1px] px-4 py-2"
				>
					Register
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
</style>
