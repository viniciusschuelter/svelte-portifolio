<script lang="ts">

    let hovered = false;

    const map = (val: number, minA: number, maxA: number, minB: number, maxB: number) => {
        return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
    }

    const card3DAnimation = (ev: MouseEvent) => {
        const card = ev.target as any;
        let mouseX = ev.offsetX;
        let mouseY = ev.offsetY;
        let rotateY = map(mouseX, 0, 180, -25, 25);
        let rotateX = map(mouseY, 0, 250, 25, -25);
        
        // card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1)`;
    }

    const onMouseLeave = (ev: MouseEvent) => {
        hovered = false;
        const card = ev.target as any;
        card.style.transform = `transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
</script>


<section class="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
    <span class="hash-span" id="about">&nbsp;</span>
    <div style="opacity: 1; transform: none">
        <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
    </div>
    <p class="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" style="opacity: 1; transform: none">
        I'm a skilled software developer with experience building web applications. I specialize in Angular and have
        professional experience working with Typescript, RxJs, NgRx, Css and Html. I also have knowledge to work with
        Vue, React, or any framework JS based. I'm a quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
    </p>
    <div class="mt-20 flex flex-wrap gap-10">
        <div class="xs:w-[250px] w-full"
        style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
        on:mousemove={(ev) => hovered && card3DAnimation(ev)}
        on:mouseenter={(ev) => hovered = true}
        on:mouseleave={(ev) => onMouseLeave(ev)}>
            <div
                class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                style="opacity: 1; transform: none"
            >
                <div
                    class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <!-- <img src="/assets/web-0d05165f.png" alt="Web Developer" class="w-16 h-16 object-contain" /> -->
                    <h3 class="text-white text-[20px] font-bold text-center">Frontend Developer</h3>
                </div>
            </div>
        </div>
        <div class="xs:w-[250px] w-full">
            <div
                class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                style="opacity: 1; transform: none"
            >
                <div
                    class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <!-- <img
                        src="/assets/mobile-896ef2f5.png"
                        alt="React Native Developer"
                        class="w-16 h-16 object-contain"
                    /> -->
                    <h3 class="text-white text-[20px] font-bold text-center">Angular Specialist</h3>
                </div>
            </div>
        </div>
        <div
            class="xs:w-[250px] w-full"
            style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
        >
            <div
                class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                style="opacity: 1; transform: none"
            >
                <div
                    class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <!-- <img src="/assets/backend-565fc01f.png" alt="Backend Developer" class="w-16 h-16 object-contain" /> -->
                    <h3 class="text-white text-[20px] font-bold text-center">Backend Developer</h3>
                </div>
            </div>
        </div>
        <div
            class="xs:w-[250px] w-full"
            style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
        >
            <div
                class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                style="opacity: 1; transform: none"
            >
                <div
                    class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <!-- <img src="/assets/creator-dbbffaec.png" alt="Content Creator" class="w-16 h-16 object-contain" /> -->
                    <h3 class="text-white text-[20px] font-bold text-center">Frameworks Javascript</h3>
                </div>
            </div>
        </div>
    </div>
</section>
<style>
</style>
