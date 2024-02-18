<script lang="ts">
	import Earth from "../canvas/Earth.svelte";
	import { fadeIn, textVariant } from "../utils/motion";
    import emailjs from "@emailjs/browser";

    emailjs.init({ publicKey: atob('Rmo3YWtKX2tJUlM2MXY1Z2I=') });

    let form = {
        name: "",
        email: "",
        message: "",
    }

    let loading = false

    const handleChange = (e: any) => {
        const { target } = e
        const { name, value } = target

        form = { ...form, [name]: value }
        console.log(form)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        loading = true

        emailjs
        .send(
            atob('c2VydmljZV9ncnRxMnR6'),
            atob('dGVtcGxhdGVfbHQyaHQzcQ=='),
            {
                from_name: form.name,
                to_name: "Vinicius Schuelter",
                from_email: form.email,
                to_email: "viniciusschuelter@gmail.com",
                message: form.message
            },
            atob('Rmo3YWtKX2tJUlM2MXY1Z2I=')
        )
        .then(
            () => {
                loading = false
                alert("Thank you. I will get back to you as soon as possible.")

                form = {
                    name: "",
                    email: "",
                    message: "",
                }
                },
                (error) => {
                loading = false
                console.error(error);

                alert("Ahh, something went wrong. Please try again.");
            }
        );
    }

</script>

<div
      class={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        use:fadeIn={{delay: 0.5, duration: 1, direction: 'right'}}
        class='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <div use:textVariant>
            <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
            <h3 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Contact.
            </h3>
        </div>

        <form
          on:submit={handleSubmit}
          class='mt-12 flex flex-col gap-8'
        >
          <label class='flex flex-col'>
            <span class='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              on:change={handleChange}
              placeholder="What's your good name?"
              class='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label class='flex flex-col'>
            <span class='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              on:change={handleChange}
              placeholder="What's your web address?"
              class='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label class='flex flex-col'>
            <span class='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              on:change={handleChange}
              placeholder='What you want to say?'
              class='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            class='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div
        use:fadeIn={{delay: 0.5, duration: 1, direction: 'left'}}
        class='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <!-- <Earth /> -->
      </div>
    </div>