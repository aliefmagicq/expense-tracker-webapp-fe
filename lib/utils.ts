import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFirstPathname(pathname: string) {
  return pathname
    .split('/')
    .filter(item => item !== '')
    .at(0);
}

export function getAllPathname(pathname: string) {
  return pathname.split('/').filter(item => item !== '');
}
