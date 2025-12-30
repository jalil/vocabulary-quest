import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'success' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', children, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-primary-foreground border-b-4 border-violet-700 hover:bg-violet-600 active:border-b-0 active:translate-y-1",
            secondary: "bg-secondary text-secondary-foreground border-b-4 border-amber-600 hover:bg-amber-500 active:border-b-0 active:translate-y-1",
            accent: "bg-accent text-accent-foreground border-b-4 border-pink-700 hover:bg-pink-600 active:border-b-0 active:translate-y-1",
            success: "bg-success text-success-foreground border-b-4 border-green-700 hover:bg-green-600 active:border-b-0 active:translate-y-1",
            outline: "bg-white text-slate-700 border-4 border-slate-200 hover:bg-slate-50 active:border-b-0 active:translate-y-1",
            ghost: "bg-transparent text-slate-500 hover:bg-slate-100 border-0 shadow-none p-2 active:scale-95 transition-transform"
        };

        return (
            <motion.button
                ref={ref as any}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "rounded-2xl px-6 py-4 font-black text-xl uppercase tracking-wide transition-colors w-full flex items-center justify-center gap-2",
                    variants[variant],
                    className
                )}
                {...props as any}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
