import css from '../../styles/Layout.module.css';
import Navigation from './Navigation';

function Layout({children}) {

    return (
        <div>
            <Navigation />
            <main className={css.main}>
                {children}
            </main>
        </div>
    )

}

export default Layout;