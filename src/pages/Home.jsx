

export const Home = () => {
    return(
        <main>
            <section className="bg-[url('/src/assets/home/mobile/image-header.jpg')] sm:bg-[url('/src/assets/home/tablet/image-header.jpg')] lg:bg-[url('/src/assets/home/desktop/image-hero.jpg')] bg-cover bg-center bg-no-repeat w-full h-screen flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-full lg:mx-40">
                    <span>new product</span>
                    <h1>xx99 mark ii headphones</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                </div>
            </section>
        </main>
    );
}