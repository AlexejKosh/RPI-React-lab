import React from 'react';
import { Header } from '../../components/header/header';
import { AppRoute } from '../../const';

function NotFoundPage(): React.JSX.Element {
    return (
        <div className="page">
            <Header />

            <main className="page__main page__main--not-found">
                                <div className="container" style={{padding: '40px 0', textAlign: 'center'}}>
                                        <h1 style={{fontSize: '48px'}}>404</h1>
                                        <p style={{fontSize: '20px'}}>Страница не найдена</p>
                                        <p style={{marginTop: '16px'}}>
                                            <a href={AppRoute.Main}>Перейдите на главную страницу</a>
                                        </p>
                                </div>
            </main>
        </div>
    );
}

export { NotFoundPage };
