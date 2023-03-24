import { Link, useLocation } from "react-router-dom";
import s from './GoBack.module.css'

export const GoBack = () => {
    const location = useLocation();
    return <Link className={s.goBack} to={location.state?.from ?? "/all"}>Go back</Link>;
};

