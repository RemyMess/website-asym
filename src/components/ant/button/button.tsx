import Link from 'next/link';
import React from 'react';

import styles from './button.module.scss';

interface ICommonProps {
  children: React.ReactNode;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  size?: 'menu' | 'mini' | 'small' | 'medium' | 'large';
  variant?: 'cta' | 'gradient' | 'outline' | 'ghost';
  type?: 'button' | 'submit' | 'reset';
  href?: {
    pathname: string;
    isInternal?: boolean;
    rel?: string;
    target?: string;
  };
  onClick?: () => void;
}

const Button = ({
  children,
  leftIcon,
  rightIcon,
  variant = 'cta',
  size = 'medium',
  href,
  disabled = false,
  type = 'button',
  onClick = undefined,
  ...props
}: ICommonProps) => {
  if (href && !href.isInternal) {
    return (
      <a
        href={href.pathname}
        target={href.target ? '_self' : '_blank'}
        rel={href.rel ? href.rel : 'noreferrer'}
        {...props}
        className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      >
        {leftIcon && <img src={leftIcon} alt="presentation" />}
        {children}
        {rightIcon && <img src={leftIcon} alt="presentation" />}
      </a>
    );
  }

  if (href && href.isInternal) {
    return (
      <Link
        href={href.pathname}
        {...props}
        className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      >
        {leftIcon && <img src={leftIcon} alt="presentation" />}
        {children}
        {rightIcon && <img src={leftIcon} alt="presentation" />}
      </Link>
    );
  }

  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      onClick={() => onClick && onClick()}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
    >
      {leftIcon && <img src={leftIcon} alt="presentation" />}
      {children}
      {rightIcon && <img src={leftIcon} alt="presentation" />}
    </button>
  );
};

export default Button;
