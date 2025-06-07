import { motion } from 'framer-motion';
import styles from './styles.module.scss';

import Icon1 from '../assets/instagram-svgrepo-com.svg';
import Icon2 from '../assets/telegram-svgrepo-com.svg';
import Icon3 from '../assets/whatsapp-svgrepo-com.svg';
import { Icon } from '../shared/ui/Icon';

import Mama from '../assets/mama.png'

const items = [
    { icon: Icon3, text: 'Заказать Whatsapp', link: 'https://wa.me/79243618998' },
    { icon: Icon1, text: 'Посмотреть Instagram', link: 'https://www.instagram.com/cafe_cremanzh?igsh=bjIyM2V1cW43a3g4' },
    { icon: Icon2, text: 'Заказать Telegram', link: 'https://t.me/Anzhelika_grosheva' }
];

// ──────────────────────────────────────────────────────────────
// анимационные варианты
// ──────────────────────────────────────────────────────────────
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.35, delayChildren: 5 }      // очередность выезда
    }
};

const row = {
    hidden: { x: '100vw', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 0.8, ease: 'easeOut' }
    }
};

// иконка едет быстрее + «покачивание» после остановки
const icon = {
    hidden: { x: '100vw', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        rotate: [0, 0, 0, 8, -8, 5, -5, 2, -2, 0], // лёгкое покачивание
        transition: {
            x: { type: 'tween', duration: 0.55 },
            rotate: { delay: 0.55, duration: 0.55, ease: 'easeInOut' }
        }
    }
};

export const MainPage = () => (
    <div style={{ height: '100dvh', background: 'rgb(155 29 29)' }} className={styles.wrapper}>
        {/* декоративные полукруги сверху/снизу */}
        <div className={styles.frostingEdgeTop} />
        <div className={styles.frostingEdgeBottom} />
        <div className={styles.mama__container}>
            <img src={Mama} alt="" className={styles.mama} />
            <span className={styles.mama__title}>Cremanzh</span>
        </div>
        {/* контент-контейнер */}
        {/* контейнер-анимация оставляем как был */}
        <motion.div
            className={styles.page}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {items.map(({ icon: Svg, text, link }, idx) => (
                <motion.div
                    /* ⬇️   было:  component={motion.a} href=… target=…  */
                    /* ⬆️   стало: обычный div + onClick */
                    key={idx}
                    className={styles.row}
                    variants={row}
                    /* ---------- открываем в новой вкладке по клику ---------- */
                    onClick={() => {
                        window.open(link, '_blank', 'noopener,noreferrer');
                    }}
                    /* -------------------------------------------------------- */
                    role="button"     /* чтобы табался и озвучивался как кнопка */
                    tabIndex={0}      /* ↑ даст возможность навигации с клавы  */
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            window.open(link, '_blank', 'noopener,noreferrer');
                        }
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    {/* иконка (анимация «быстрее + качание») */}
                    <motion.div variants={icon} className={styles.iconWrap}>
                        <Icon Svg={Svg} width={text === 'Заказать Whatsapp' ? 40 : 40} height={text === 'Заказать Whatsapp' ? 40 : 40} />
                    </motion.div>

                    <span className={styles.link}>{text}</span>
                </motion.div>
            ))}
        </motion.div>

    </div>
);
