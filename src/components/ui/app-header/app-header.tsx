import React, { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@zlden/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
    <header className={styles.header}>
        <nav className={`${styles.menu} p-4`}>
            <div className={styles.menu_part_left}>
                <>
                    <BurgerIcon type={'primary'} />
                    <Link to='/' className={clsx(styles.link, location.pathname === '/' ? styles.link_active : '')}>
                        <p className='text text_type_main-default ml-2 mr-10'>Конструктор</p>
                    </Link>
                </>
                <>
                    <ListIcon type={'primary'} />
                    <Link
                        to='/feed'
                        className={clsx(styles.link, location.pathname.includes('feed') ? styles.link_active : '')}
                    >
                        <p className='text text_type_main-default ml-2'>Лента заказов</p>
                    </Link>
                </>
            </div>
            <div className={styles.logo}>
                <Link to='/'>
                    <Logo className='' />
                </Link>
            </div>
            <div className={styles.link_position_last}>
                <ProfileIcon type={'primary'} />
                <Link
                    to='/profile'
                    className={clsx(styles.link, location.pathname.includes('profile') ? styles.link_active : '')}
                >
                    <p className='text text_type_main-default ml-2'>{userName || 'Личный кабинет'}</p>
                </Link>
            </div>
        </nav>
    </header>
);
