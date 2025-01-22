import { Link } from "react-router";

export const ProdBtn = ({ text, className, to }) => {
    return(
        <Link to={to} className={`${className} px-8 py-4 transition-colors duration-200 ease-in-out uppercase tracking-wider`}>{text}</Link>
    );
}