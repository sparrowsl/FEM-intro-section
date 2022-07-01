<script>
	import Nav from '../components/Nav.svelte';
</script>

<section class="container mx-auto grid h-screen">
	<Nav />
	<div class="font-epilogue grid grid-cols-2 items-center px-20">
		<div class="flex max-w-[60ch] flex-col gap-6">
			<h1 class="text-almost_black max-w-lg text-7xl font-bold">Make remote work</h1>
			<!-- intro text -->
			<p class="text-medium_gray text-lg">
				Get your team in sync, no matter your location. Streamline processes, create team rituals,
				and watch productivity soar.
			</p>
			<!-- learn more -->
			<a
				href="/"
				class="bg-almost_black text-almost_white hover:text-almost_black border-almost_black
        block w-fit rounded-xl border-[1px] px-6 py-3 font-semibold transition-colors hover:bg-transparent"
			>
				Learn more
			</a>

			<!-- Clients logo -->
			<div class="flex gap-5">
				<img src="/images/client-databiz.svg" alt="" class="h-fit w-20" />
				<img src="/images/client-audiophile.svg" alt="" class="h-fit w-20" />
				<img src="/images/client-meet.svg" alt="" class="h-fit w-20" />
				<img src="/images/client-maker.svg" alt="" class="h-fit w-20" />
			</div>
		</div>

		<!-- Hero Image -->
		<div class="mx-auto max-w-sm">
			<img src="/images/image-hero-desktop.png" alt="hero pic" class="" />
		</div>
	</div>
</section>
