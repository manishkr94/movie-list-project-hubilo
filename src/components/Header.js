import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

export const Header = () => {

    const { watched, watchlist } = useContext(GlobalContext);

    return (
        <div>
            <header>
                <div className="container">
                    <div className="inner-content">
                        <div className="brand">
                            <Link to="/">MovieList</Link>
                        </div>

                        <ul className="nav-links">
                            <li>
                                <Link to="/watchlist">Watch List <span className='watched-number'>{watchlist.length}</span></Link>

                            </li>

                            <li>
                                <Link to="/watched">Watched <span className='watched-number'>{watched.length}</span></Link>
                            </li>

                            <li>
                                <Link to="/add" className="btn btn-main">
                                    + Add
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            {/* <Movielist /> */}
        </div>
    )
}
