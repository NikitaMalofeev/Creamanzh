// MainPage.tsx
import React from 'react';
import { delay, motion } from 'framer-motion';
import styles from './styles.module.scss';

import Icon1 from '../assets/instagram-svgrepo-com.svg';
import Icon2 from '../assets/telegram-svgrepo-com.svg';
import Icon3 from '../assets/whatsapp-svgrepo-com.svg';
import Mama from '../assets/mama.png';
import { Icon } from '../shared/ui/Icon';

const items = [
    { icon: Icon3, text: 'Заказать Whatsapp', link: 'https://wa.me/79243618998' },
    { icon: Icon1, text: 'Посмотреть Instagram', link: 'https://www.instagram.com/cafe_cremanzh?igsh=bjIyM2V1cW43a3g4' },
    { icon: Icon2, text: 'Заказать Telegram', link: 'https://t.me/Anzhelika_grosheva' }
] as const;

// Анимационные варианты
const wrapperV = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
};

// MainPage.tsx
const ROW_GAP = 0.35;               // шаг между строками

const rowV = {
    hidden: { width: 40 },
    visible: (i: number) => ({
        width: '95%',
        transition: { duration: 0.4, ease: 'easeOut', delay: 5 + i * ROW_GAP }
    })
};

const bgV = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 5 } }
};

const textContainerV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 5.2, when: 'beforeChildren', } }
};

const charV = {
    hidden: { opacity: 0, x: -8, filter: 'blur(6px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.3 } }
};

export const MainPage: React.FC = () => (
    <div className={styles.wrapper}>
        <div className={styles.frostingEdgeTop} />
        <div className={styles.frostingEdgeBottom} />

        <div className={styles.mama__container}>
            <img src={Mama} alt="" className={styles.mama} />
            <span className={styles.mama__title}>Cremanzh</span>
        </div>

        <motion.div
            className={styles.page}
            variants={wrapperV}
            initial="hidden"
            animate="visible"
        >
            {items.map(({ icon: Svg, text, link }, i) => {
                const letters = Array.from(text);
                return (
                    <motion.div
                        key={i}
                        custom={i}               // <── добавьте это
                        className={styles.row}
                        variants={rowV}
                        role="button"
                        tabIndex={0}
                        onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
                        onKeyDown={e => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                window.open(link, '_blank', 'noopener,noreferrer');
                            }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {/* фон-полоска */}
                        <motion.div
                            className={styles.rowBg}
                            variants={bgV}
                            style={{ transformOrigin: 'center' }}
                        />

                        {/* иконка сразу */}
                        <div className={styles.iconWrap}>
                            <Icon Svg={Svg} width={40} height={40} />
                        </div>

                        {/* текст по буквам */}
                        <motion.span className={styles.link} variants={textContainerV}>
                            {text}
                        </motion.span>
                    </motion.div>
                );
            })}
        </motion.div>
    </div>
);
