import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import cake1 from '../../assets/cake2.svg';
import cake2 from '../../assets/cake1.svg';
import cake3 from '../../assets/cake7.svg';
import { Icon } from '../../shared/ui/Icon';

// Cover.tsx
export const Cover = () => {
    const [isMounted, setIsMounted] = useState(true);

    // useEffect(() => {
    //     /* 4 с ожидание + 0,55 с сама анимация ≈ 4,6 с */
    //     const hideTimer = setTimeout(() => setIsMounted(false), 4600);
    //     return () => clearTimeout(hideTimer);
    // }, []);

    // if (!isMounted) return null;

    useEffect(() => {
        /* 4 с ожидание + 0,55 с сама анимация ≈ 4,6 с */
        const hideTimer = setTimeout(() => setIsMounted(false), 4600);
        return () => clearTimeout(hideTimer);
    }, []);

    if (!isMounted) return null;


    return (
        <div className={styles.cover}>
            {/* верхний и нижний канты */}
            <div className={`${styles.frostingEdge} ${styles.frostingEdgeTop}`} />
            <div className={`${styles.frostingEdge} ${styles.frostingEdgeBottom}`} />

            {/* вся прежняя внутрянка */}
            <div className={styles.Cover}>
                <div className={styles.frostingTop} />

                <div className={styles.logo}>
                    <span className={styles.logo__title}>Creamanzh</span>
                </div>

                <Icon Svg={cake1} width={120} height={120}
                    className={`${styles.cake} ${styles.cake1} ${styles.cakeShadow}`} />
                <Icon Svg={cake2} width={80} height={80}
                    className={`${styles.cake} ${styles.cake2} ${styles.cakeShadow}`} />
                <Icon Svg={cake3} width={80} height={80}
                    className={`${styles.cake} ${styles.cake3} ${styles.cakeShadow}`} />
            </div>
        </div>
    );
};

