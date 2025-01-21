

export const Home = () => {
    return(
        <main>
            <section className="bg-[url('/src/assets/home/mobile/image-header.jpg')] sm:bg-[url('/src/assets/home/tablet/image-header.jpg')] lg:bg-[url('/src/assets/home/desktop/image-hero.jpg')] bg-cover bg-center bg-no-repeat w-full h-screen flex justify-center items-center">
                <div className="flex flex-col justify-center items-center lg:items-start space-y-6 text-center lg:text-left w-full px-10 lg:pl-20 sm:px-48 lg:mx-40">
                    <span className="uppercase text-fontLight/20 font-thin tracking-[10px]">new product</span>
                    <h1 className="text-fontLight text-4xl sm:text-6xl font-bold uppercase">xx99 mark ii headphones</h1>
                    <p className="text-fontLight/50 font-light">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                </div>
            </section>
        </main>
    );
}