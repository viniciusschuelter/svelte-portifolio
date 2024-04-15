<script lang="ts">
	import Earth from '../canvas/Earth.svelte';
	import { socialMedias } from '../constants/info';
	import { fadeIn, textVariant } from '../utils/motion';
	import emailjs from '@emailjs/browser';

	emailjs.init({ publicKey: atob('Rmo3YWtKX2tJUlM2MXY1Z2I=') });

	let form = {
		name: '',
		email: '',
		message: ''
	};

	let loading = false;

	const handleChange = (e: any) => {
		const { target } = e;
		const { name, value } = target;

		form = { ...form, [name]: value };
		console.log(form);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		loading = true;

		emailjs
			.send(
				atob('c2VydmljZV9ncnRxMnR6'),
				atob('dGVtcGxhdGVfbHQyaHQzcQ=='),
				{
					from_name: form.name,
					to_name: 'Vinicius Schuelter',
					from_email: form.email,
					to_email: 'viniciusschuelter@gmail.com',
					message: form.message
				},
				atob('Rmo3YWtKX2tJUlM2MXY1Z2I=')
			)
			.then(
				() => {
					loading = false;
					alert('Thank you. I will get back to you as soon as possible.');

					form = {
						name: '',
						email: '',
						message: ''
					};
				},
				(error) => {
					loading = false;
					console.error(error);

					alert('Ahh, something went wrong. Please try again.');
				}
			);
	};
</script>

<div class={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}>
	<div
		use:fadeIn={{ delay: 0.5, duration: 1, direction: 'right' }}
		class="flex-[0.75] bg-black-100 p-8 rounded-2xl"
	>
		<div use:textVariant>
			<p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
			<h3 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
				Contact.
			</h3>
		</div>

		<form on:submit={handleSubmit} class="mt-12 flex flex-col gap-8">
			<label class="flex flex-col">
				<span class="text-white font-medium mb-4">Your Name</span>
				<input
					type="text"
					name="name"
					value={form.name}
					on:change={handleChange}
					placeholder="What's your good name?"
					class="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
				/>
			</label>
			<label class="flex flex-col">
				<span class="text-white font-medium mb-4">Your email</span>
				<input
					type="email"
					name="email"
					value={form.email}
					on:change={handleChange}
					placeholder="What's your web address?"
					class="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
				/>
			</label>
			<label class="flex flex-col">
				<span class="text-white font-medium mb-4">Your Message</span>
				<textarea
					rows={7}
					name="message"
					value={form.message}
					on:change={handleChange}
					placeholder="What you want to say?"
					class="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
				/>
			</label>

			<button
				type="submit"
				class="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
			>
				{loading ? 'Sending...' : 'Send'}
			</button>
		</form>
	</div>

	<div
		use:fadeIn={{ delay: 0.5, duration: 1, direction: 'left' }}
		class="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex flex-col justify-center items-center"
	>
		<!-- <Earth /> -->
		<div class="relative flex center mr-3 mr-md-0 flex-shrink-0">
			<img
				style="height:auto;"
				alt=""
				src="https://avatars.githubusercontent.com/u/48526428?v=4"
				width="260"
				height="260"
				class="rounded-full border"
			/>
		</div>
		<ul class="sm:text-[16px] text-[12px] text-secondary tracking-wider mt-5">
			{#each socialMedias as media}
				<li class="flex items-center pt-1">
					{#if media.type === 'facebook'}
						<a
							href={media.link}
							type="button"
							class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
							><svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="facebook"
								class="w-2 h-full mx-auto"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 320 512"
								><path
									fill="currentColor"
									d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
								/></svg
							></a
						>
					{:else if media.type === 'twitter'}
						<a
							href={media.link}
							type="button"
							class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
							><svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="twitter"
								class="w-4 h-full mx-auto"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								><path
									fill="currentColor"
									d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
								/></svg
							></a
						>
					{:else if media.type === 'google'}
						<a
							href={media.link}
							type="button"
							class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
							><svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="google"
								class="w-4 h-full mx-auto"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 488 512"
								><path
									fill="currentColor"
									d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
								/></svg
							></a
						>
					{:else if media.type === 'instagram'}
						<a
							href={media.link}
							type="button"
							class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
							><svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="instagram"
								class="w-4 h-full mx-auto"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								><path
									fill="currentColor"
									d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
								/></svg
							></a
						>
					{:else if media.type === 'linkedin'}
						<a
							href={media.link}
							type="button"
							class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
							><svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="linkedin"
								class="w-4 h-full mx-auto"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								><path
									fill="currentColor"
									d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
								/></svg
							></a
						>
					{:else if media.type === 'github'}
						<a
							href={media.link}
							type="button"
							class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
							><svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="github"
								class="w-4 h-full mx-auto"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 496 512"
								><path
									fill="currentColor"
									d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
								/></svg
							></a
						>
					{:else}
						<a
							href={media.link}
							type="button"
							class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 flex justify-center items-center"
						>
							<svg
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								width="16px"
								height="16px"
								viewBox="0 0 512 512"
								enable-background="new 0 0 512 512"
								xml:space="preserve"
							>
								<path
									fill="#fff"
									d="M459.654,233.373l-90.531,90.5c-49.969,50-131.031,50-181,0c-7.875-7.844-14.031-16.688-19.438-25.813
              l42.063-42.063c2-2.016,4.469-3.172,6.828-4.531c2.906,9.938,7.984,19.344,15.797,27.156c24.953,24.969,65.563,24.938,90.5,0
              l90.5-90.5c24.969-24.969,24.969-65.563,0-90.516c-24.938-24.953-65.531-24.953-90.5,0l-32.188,32.219
              c-26.109-10.172-54.25-12.906-81.641-8.891l68.578-68.578c50-49.984,131.031-49.984,181.031,0
              C509.623,102.342,509.623,183.389,459.654,233.373z M220.326,382.186l-32.203,32.219c-24.953,24.938-65.563,24.938-90.516,0
              c-24.953-24.969-24.953-65.563,0-90.531l90.516-90.5c24.969-24.969,65.547-24.969,90.5,0c7.797,7.797,12.875,17.203,15.813,27.125
              c2.375-1.375,4.813-2.5,6.813-4.5l42.063-42.047c-5.375-9.156-11.563-17.969-19.438-25.828c-49.969-49.984-131.031-49.984-181.016,0
              l-90.5,90.5c-49.984,50-49.984,131.031,0,181.031c49.984,49.969,131.031,49.969,181.016,0l68.594-68.594
              C274.561,395.092,246.42,392.342,220.326,382.186z"
								/>
							</svg>
						</a>
					{/if}
          <a rel="Follow me" class='ml-2' href={media.link}>{media.name}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
