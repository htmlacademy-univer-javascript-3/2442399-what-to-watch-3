import { Link } from "react-router-dom";

export type MyListLinkProps = {
    count: number;
}

export function MyListLink({count} : MyListLinkProps): JSX.Element {
    return (
        <Link className="btn btn--list film-card__button" to={'/mylist'}>
            <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
            <span className="film-card__count">{count}</span>
        </Link>
    );
}