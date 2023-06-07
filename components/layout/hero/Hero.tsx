import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero">
      <div className="flex w-full flex-col items-center justify-center sm:flex-row">
        <div className="flex flex-col items-center justify-center py-4 sm:py-0">
          <h1 className="text-center text-5xl font-bold text-main-text dark:text-main-textDark sm:text-left md:text-6xl lg:text-7xl">
            Hi, I&#39;m Igor!
          </h1>
          <p className="w-full px-3 pt-4 text-center text-lg font-semibold text-main-text dark:text-main-textDark sm:w-[17rem] sm:px-0 sm:pt-2 sm:text-left md:w-[20rem] lg:w-[24rem]">
            I&#39;m <span className="text-main-primary">Software Engineer</span>{" "}
            and I <span className="text-main-secondary">love</span> to create,
            develop and improve all kind of software <br /> and also myself.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="relative z-30 w-[20rem] drop-shadow-2xl sm:w-[20rem] md:w-[25rem] lg:w-[35rem]"
            src="/images/fox.webp"
            alt=""
            width={500}
            height={450}
          />
          <div className="gradient-for-logo absolute -z-10 h-72 w-72 rounded-full blur-[80px] md:h-[25rem] md:w-[25rem] lg:h-[35rem] lg:w-[35rem]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
