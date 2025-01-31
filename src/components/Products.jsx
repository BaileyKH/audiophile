import { Link } from "react-router"

import headphones from '/src/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '/src/assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphones from '/src/assets/shared/desktop/image-category-thumbnail-earphones.png'

export const Products = () => {
    return(
        <div className="flex justify-center items-center my-24 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="relative col-span-1 bg-prodAccent rounded-lg place-content-end h-36 px-16 py-4 text-center">
                    <img src={headphones} className="absolute -top-1/3 w-36"/>
                    <p className="uppercase">Headphones</p>
                    <Link to='/headphones'>Shop</Link>
                </div>
                <div className="relative col-span-1 bg-prodAccent rounded-lg place-content-end h-36 px-16 py-4 text-center">
                    <img src={speakers} className="absolute -top-1/3 w-36"/>
                    <p className="uppercase">Headphones</p>
                    <Link to='/speakers'>Shop</Link>
                </div>
                <div className="relative col-span-1 bg-prodAccent rounded-lg place-content-end h-36 px-16 py-4 text-center">
                    <img src={earphones} className="absolute -top-1/3 w-36"/>
                    <p className="uppercase">Headphones</p>
                    <Link to='/earphones'>Shop</Link>
                </div>
            </div>
        </div>
    );
}