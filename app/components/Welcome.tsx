import Image from 'next/image';

export default function Welcome() {
    return (
        <section className="flex flex-col items-center w-full mt-2"> {/* Added mt-2 for small margin from the top */}
            {/* Full-width image container, height adjusts based on screen size */}
            <section className="w-full h-80 sm:h-96 md:h-[32rem] lg:h-[40rem] xl:h-[48rem] relative"> {/* Increased height */}
                <Image
                    src="/images/easyChat.svg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top" 
                    alt="Welcome Image"
                />
            </section>        
            <section className="w-full text-center mt-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8"> {/* Increased margin-bottom */}
                    Welcome To <strong>Easy Chat</strong>
                </h2>
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12"> {/* Increased margin-bottom */}
                    Connect with family and friends instantly
                </p>
            </section>
        </section>
    );
}