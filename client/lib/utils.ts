import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-variants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
