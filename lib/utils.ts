import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function LinkRoute(link: string) {
  if (link) {
    const newLink = link.split(" ").join("-");
    return `/exercise/${newLink}`;
  } else {
    return '';
  }
}
