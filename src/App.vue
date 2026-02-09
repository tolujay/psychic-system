<template>
	<main class="relative min-h-screen w-screen outer-bg overflow-hidden">
		<section class="relative h-screen w-screen inner-surface">
			<div class="relative h-full w-full overflow-hidden inner-surface">
				<!-- top “notch” -->
				<div
					class="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-[46%]"
				>
					<div class="notch animate-fade-in">
						<div
							class="flex items-center gap-3 px-6"
							style="margin-top: 1.8rem"
						>
							<!-- Logo -->
							<img
								:src="logoUrl"
								alt="Tolu Consulting LLC"
								class="brand-logo"
								draggable="false"
							/>
							<span class="font-semibold text-gray-900 text-lg"
								>Tolu Consulting</span
							>
						</div>
					</div>
				</div>

				<!-- decorative shapes -->
				<div class="pointer-events-none absolute inset-0 z-0">
					<!-- soft blobs -->
					<div class="blob blob-left" />
					<div class="blob blob-right" />

					<div class="decorative-shape shape-green"></div>
					<div class="decorative-shape shape-orange-wave"></div>
					<div class="decorative-shape shape-orange-blob"></div>
				</div>

				<!-- content -->
				<div
					class="relative z-10 flex h-full w-full flex-col items-center justify-center px-5 pb-32 text-center"
				>
					<div class="mb-5 text-4xl sm:text-5xl animate-bounce-slow">👍🏽</div>

					<div
						class="mb-2 text-[12px] font-semibold tracking-[0.28em] text-[#0F172A]/70"
					>
						WE’RE STILL
					</div>

					<h1
						class="max-w-3xl text-balance text-[40px] font-extrabold leading-[1.08] text-[#1D4ED8] sm:text-[54px] md:text-[64px]"
					>
						Cooking Our Website.
					</h1>

					<p
						class="mt-5 max-w-xl text-[16px] leading-7 text-[#0F172A]/55 sm:text-[18px]"
					>
						We are re-launching our website very soon.
						<br class="hidden sm:block" />
						Stay Tune.
					</p>

					<!-- CTA -->
					<a
						class="cta-spacing inline-flex items-center gap-4 rounded-full px-6 py-4 bg-[#0B1434] text-white shadow-[0_24px_50px_rgba(11,20,52,0.35)] hover:shadow-[0_28px_64px_rgba(11,20,52,0.40)] active:scale-[0.99] transition"
						:href="mailtoHref"
						aria-label="Notify me via email"
					>
						<span
							class="grid h-11 w-11 place-items-center rounded-full bg-white/95 shadow-[0_10px_26px_rgba(255,255,255,0.25)]"
						>
							<!-- mail icon -->
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								aria-hidden="true"
							>
								<path
									d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
									stroke="#1D4ED8"
									stroke-width="2"
								/>
								<path
									d="M6.5 7.5 12 12l5.5-4.5"
									stroke="#1D4ED8"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>

						<span class="text-[15px] font-semibold tracking-wide"
							>Notify Me</span
						>

						<span class="ml-1 opacity-90">
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								aria-hidden="true"
							>
								<path
									d="M9 18l6-6-6-6"
									stroke="white"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
					</a>
				</div>
			</div>
			<!-- fixed footer -->
			<footer
				class="fixed inset-x-0 bottom-1.5 z-20 flex flex-col items-center gap-4 pb-6"
			>
				<!-- socials -->
				<div
					class="flex items-center gap-3 animate-fade-in"
					style="animation-delay: 0.7s"
				>
					<a class="social-btn" href="#" aria-label="Website">
						<!-- globe icon -->
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
							<path
								d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Z"
								stroke="currentColor"
								stroke-width="2"
							/>
							<path d="M3 12h18" stroke="currentColor" stroke-width="2" />
							<path
								d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z"
								stroke="currentColor"
								stroke-width="2"
							/>
						</svg>
					</a>

					<a class="social-btn" href="#" aria-label="Instagram">
						<!-- instagram icon -->
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
							<path
								d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
								stroke="currentColor"
								stroke-width="2"
							/>
							<path
								d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
								stroke="currentColor"
								stroke-width="2"
							/>
							<path
								d="M17.5 6.5h.01"
								stroke="currentColor"
								stroke-width="3"
								stroke-linecap="round"
							/>
						</svg>
					</a>

					<a class="social-btn" href="#" aria-label="LinkedIn">
						<!-- linkedin icon -->
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
							<path
								d="M6.5 9.5V18"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<path
								d="M6.5 6.5h.01"
								stroke="currentColor"
								stroke-width="3"
								stroke-linecap="round"
							/>
							<path
								d="M10.5 18v-5.2c0-1.8 1-3 2.7-3
                 1.6 0 2.3 1.1 2.3 3V18"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M17.5 12.2V18"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</a>
				</div>

				<!-- copyright -->
				<div class="text-[12px] text-[#0F172A]/40">
					© {{ year }} Tolu Consulting LLC. All rights reserved.
				</div>
			</footer>
		</section>
	</main>
</template>

<script setup lang="ts">
import logoUrl from "./assets/logo.png"

const year = new Date().getFullYear()

// opens default mail app and sets the "to" field
const mailtoHref =
	"mailto:info@toluconsulting.com?subject=Notify%20me&body=Hi%20Tolu%20Consulting%20LLC,%0A%0APlease%20notify%20me%20when%20the%20website%20launches.%0A"
</script>

<style scoped>
/* OUTER PAGE BACKGROUND (lavender/blue like the template) */
.outer-bg {
	background:
		radial-gradient(
			900px 500px at 10% 15%,
			rgba(255, 170, 220, 0.35),
			transparent 60%
		),
		radial-gradient(
			900px 500px at 90% 30%,
			rgba(140, 200, 255, 0.45),
			transparent 65%
		),
		linear-gradient(180deg, #b9badf 0%, #b7d3e6 100%);
}

/* INNER SURFACE (soft white, subtle gradient, rounded) */
.inner-surface {
	background:
		radial-gradient(
			900px 520px at 12% 18%,
			rgba(255, 170, 220, 0.18),
			transparent 62%
		),
		radial-gradient(
			900px 520px at 88% 42%,
			rgba(140, 200, 255, 0.22),
			transparent 66%
		),
		#f7f9ff;
	box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.04);
}

/* top “notch” container */
.notch {
	height: 90px;
	width: 420px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.92);
	box-shadow: 0 22px 60px rgba(16, 24, 40, 0.12);
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
}

/* mimic the slightly scooped sides */
.notch::before,
.notch::after {
	content: "";
	position: absolute;
	top: 34px;
	width: 120px;
	height: 120px;
	border-radius: 999px;
	background: rgba(247, 249, 255, 1);
}
.notch::before {
	left: -58px;
}
.notch::after {
	right: -58px;
}

.cta-spacing {
	margin-top: 2.5rem !important;
}

/* Logo sizing so it sits cleanly like the template */
.brand-logo {
	height: 42px;
	width: auto;
	object-fit: contain;
	filter: drop-shadow(0 10px 20px rgba(15, 23, 42, 0.12));
}

/* Responsive notch */
@media (max-width: 640px) {
	.notch {
		width: 320px;
		height: 84px;
	}
	.brand-logo {
		height: 38px;
	}
}

/* soft blobs */
.blob {
	position: absolute;
	border-radius: 999px;
	filter: blur(20px);
	opacity: 0.25;
}
.blob-left {
	left: -140px;
	top: -120px;
	width: 460px;
	height: 360px;
	background: radial-gradient(
		circle at 30% 30%,
		rgba(255, 170, 220, 1),
		rgba(255, 170, 220, 0)
	);
}
.blob-right {
	right: -160px;
	bottom: -160px;
	width: 520px;
	height: 420px;
	background: radial-gradient(
		circle at 40% 40%,
		rgba(140, 200, 255, 1),
		rgba(140, 200, 255, 0)
	);
}

/* Decorative Shapes */
.decorative-shape {
	position: absolute;
	border-radius: 50%;
	opacity: 0.6;
}

.shape-green {
	width: 120px;
	height: 120px;
	background: linear-gradient(135deg, #86efac 0%, #4ade80 100%);
	bottom: 25%;
	left: 8%;
	border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
	animation: float 6s ease-in-out infinite;
}

.shape-orange-wave {
	width: 140px;
	height: 80px;
	background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
	top: 35%;
	right: 10%;
	border-radius: 50% 50% 60% 40% / 70% 70% 30% 30%;
	animation: float 7s ease-in-out infinite;
	animation-delay: 1s;
}

.shape-orange-blob {
	width: 180px;
	height: 180px;
	background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
	bottom: 5%;
	right: 5%;
	border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
	animation: float 8s ease-in-out infinite;
	animation-delay: 2s;
}

/* social icon buttons */
.social-btn {
	width: 44px;
	height: 44px;
	border-radius: 999px;
	display: grid;
	place-items: center;
	background: rgba(255, 255, 255, 0.75);
	color: rgba(15, 23, 42, 0.45);
	box-shadow: 0 18px 40px rgba(16, 24, 40, 0.1);
	border: 1px solid rgba(15, 23, 42, 0.05);
	transition:
		transform 160ms ease,
		box-shadow 160ms ease,
		background 160ms ease;
}
.social-btn:hover {
	transform: translateY(-1px);
	background: rgba(255, 255, 255, 0.9);
	box-shadow: 0 22px 52px rgba(16, 24, 40, 0.12);
}

/* Animations */
@keyframes float {
	0%,
	100% {
		transform: translateY(0) rotate(0deg);
	}
	50% {
		transform: translateY(-20px) rotate(5deg);
	}
}

@keyframes bounce-slow {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-10px);
	}
}

@keyframes fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.animate-bounce-slow {
	animation: bounce-slow 2s ease-in-out infinite;
}

.animate-fade-in {
	animation: fade-in 0.8s ease-out;
}
</style>
