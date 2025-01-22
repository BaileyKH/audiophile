import { ProdBtn } from "../components/ProdBtn";

export const Home = () => {
    return(
        <main>
            <section className="bg-[url('/src/assets/home/mobile/image-header.jpg')] sm:bg-[url('/src/assets/home/tablet/image-header.jpg')] lg:bg-[url('/src/assets/home/desktop/image-hero.jpg')] bg-cover bg-center bg-no-repeat w-full h-screen flex justify-center lg:justify-start items-center">
                <div className="flex flex-col justify-center items-center lg:items-start gap-y-8 text-center lg:text-left w-72 lg:mx-40 md:w-96 lg:w-96">
                    <span className="uppercase text-fontLight/30 font-thin tracking-[10px]">new product</span>
                    <h1 className="text-fontLight text-4xl sm:text-6xl font-bold uppercase">xx99 mark ii headphones</h1>
                    <p className="text-fontLight/60 font-light">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <ProdBtn 
                        to='/headphones'
                        text='see product'
                        className='text-fontLight bg-primAccent hover:bg-lightAccent'
                    />
                </div>
            </section>
        </main>
    );
}