import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage(): React.JSX.Element {
    return (
        <div className="page">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Link className="header__logo-link" to="/">
                                <img className="header__logo" src="img/logo.svg" alt="Rent service logo" width="81" height="41" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--not-found">
                <div className="container" style={{padding: '40px 0', textAlign: 'center'}}>
                    <h1 style={{fontSize: '48px'}}>404</h1>
                    <p style={{fontSize: '20px'}}>Страница не найдена</p>
                </div>
            </main>
        </div>
    );
}

export { NotFoundPage };
