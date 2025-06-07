import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import cake1 from '../../assets/cake2.svg';
import cake2 from '../../assets/cake1.svg';
import cake3 from '../../assets/cake7.svg';
import { Icon } from '../../shared/ui/Icon';

// Cover.tsx
export const Cover = () => {
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        const hideTimer = setTimeout(() => setIsMounted(false), 115_000);
        return () => clearTimeout(hideTimer);
    }, []);

    if (!isMounted) return null;

    return (
        <div className={styles.cover}>
            {/* Верхний кант */}
            <div className={`${styles.frostingEdge} ${styles.frostingEdgeTop}`} />
            {/* Нижний кант (повёрнут на 180°, чтобы «завиток» смотрел в заливку) */}
            <div className={`${styles.frostingEdge} ${styles.frostingEdgeBottom}`} />

            <div className={styles.Cover}>
                {/* Глазурь сверху */}
                <div className={styles.frostingTop} />

                {/* Центральный логотип-круг */}
                <div className={styles.logo}>
                    <span className={styles.logo__title}>Creamanzh</span>
                </div>

                {/* Три «коржа», вращающиеся вокруг центра */}
                <Icon Svg={cake1} width={120} height={120} className={`${styles.cake} ${styles.cake1} ${styles.cakeShadow}`} />
                <Icon Svg={cake2} width={80} height={80} className={`${styles.cake} ${styles.cake2} ${styles.cakeShadow}`} />
                <Icon Svg={cake3} width={80} height={80} className={`${styles.cake} ${styles.cake3} ${styles.cakeShadow}`} />
            </div>
        </div>
    );
};
