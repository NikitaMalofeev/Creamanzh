import React, { memo } from 'react';
import cls from './styles.module.scss';
import { classNames } from '../helpers/classNames';


interface IconProps {
    className?: string;
    Svg?: React.FC<React.SVGProps<SVGSVGElement>> | string;
    width?: number | string;  // Поддержка % и px
    height?: number | string; // Поддержка % и px
    maxWidth?: number; // Ограничение ширины
    maxHeight?: number; // Ограничение высоты
    onClick?: () => void;
    objectFit?: 'contain' | 'cover' | 'fill'; // Контроль за fit
}

export const Icon = memo(({
    className,
    Svg,
    width = '100%',
    height = '100%',
    maxWidth,
    maxHeight,
    onClick,
    objectFit = 'contain',
}: IconProps) => {

    if (typeof Svg === 'string') {
        return (
            <img
                src={Svg}
                className={classNames(cls.Icon, {}, [className])}
                alt="icon"
                style={{
                    width,
                    height,
                    maxWidth,
                    maxHeight,
                    objectFit
                }}
                onClick={onClick}
            />
        );
    }

    if (Svg) {
        return (
            <Svg
                className={classNames(cls.Icon, {}, [className])}
                width={width}
                height={height}
                style={{
                    maxWidth,
                    maxHeight,
                    objectFit
                }}
                preserveAspectRatio={objectFit === 'cover' ? "none" : "xMidYMid meet"}
            />
        );
    }

    return null;
});
