import Image from "next/image";

export default function Welcome() {
  return (
    <section className="flex flex-col items-center w-full ">
      <section className="w-full  py-14  ">
        <img
          src="/images/logo.png"
          alt="Welcome Image"
          className=" mx-auto "
        />
      </section>
      <section className="w-full text-center ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8">
          Welcome To <strong>Easy Chat</strong>
        </h2>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12">
          Connect with family and friends instantly
        </p>
      </section>
    </section>
  );
}
