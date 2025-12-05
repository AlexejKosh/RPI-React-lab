import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo/logo';

function NotFoundPage(): React.JSX.Element {
    return (
        <div className="page">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Logo />
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
