"use client";
import React, { useState, JSX } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollY } = useScroll();
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Transform values for the navbar container
    // Increased range to 500 to slow down the transition (as per user request reference)
    const width = useTransform(scrollY, [0, 500], ["100%", "50%"]);
    const marginTop = useTransform(scrollY, [0, 500], ["0px", "20px"]);
    const borderRadius = useTransform(scrollY, [0, 500], ["0px", "100px"]);
    const backgroundColor = useTransform(
        scrollY,
        [0, 500],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
    );
    const backdropFilter = useTransform(scrollY, [0, 500], ["blur(0px)", "blur(10px)"]);
    const border = useTransform(
        scrollY,
        [0, 500],
        ["1px solid rgba(0,0,0,0)", "1px solid rgba(0,0,0,0.1)"]
    );
    const paddingY = useTransform(scrollY, [0, 500], ["20px", "12px"]);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="fixed top-0 left-0 right-0 z-[5000] flex justify-center pointer-events-none">
            <motion.header
                style={{
                    width,
                    marginTop,
                    borderRadius,
                    backgroundColor,
                    backdropFilter,
                    border,
                    paddingTop: paddingY,
                    paddingBottom: paddingY,
                }}
                className={cn(
                    "pointer-events-auto transition-shadow duration-300 flex items-center justify-between dark:bg-black/90 dark:border-white/20",
                    className
                )}
            >
                <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 md:px-12">
                    {/* Brand Name */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <img src="/logo-clean.png" alt="GCA Construction Logo" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105" /><span>GCA Construction</span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((navItem: any, idx: number) => (
                            <Link
                                key={`link=${idx}`}
                                href={navItem.link}
                                className={cn(
                                    "text-sm font-medium transition-colors relative group text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
                                )}
                            >
                                <span className="flex items-center gap-1">
                                    {navItem.name}
                                </span>
                                {/* Underline animation */}
                                {pathname === navItem.link && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-xl md:hidden flex flex-col p-4 gap-4"
                        >
                            {navItems.map((navItem: any, idx: number) => (
                                <Link
                                    key={`mobile-link=${idx}`}
                                    href={navItem.link}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white block py-2"
                                >
                                    <div className="flex items-center gap-2">
                                        {navItem.icon}
                                        <span>{navItem.name}</span>
                                    </div>
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.header>
        </div>
    );
};
