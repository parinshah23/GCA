"use client";
import React, { JSX, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";

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
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                    setIsOpen(false); // Close mobile menu on scroll down
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-5xl fixed top-4 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4 items-center justify-between space-x-4",
                    className
                )}
            >
                {/* Brand Name */}
                <Link href="/" className="text-xl font-bold text-neutral-800 dark:text-white mr-4">
                    GCA Construction
                </Link>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center space-x-4">
                    {navItems.map((navItem: any, idx: number) => (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                            )}
                        >
                            <span className="block sm:hidden">{navItem.icon}</span>
                            <span className="hidden sm:block text-sm">{navItem.name}</span>
                        </Link>
                    ))}

                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex sm:hidden items-center justify-between w-full">
                    <span className="font-bold text-sm">Menu</span>
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                        {isOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-xl sm:hidden flex flex-col p-4 gap-4"
                        >
                            {navItems.map((navItem: any, idx: number) => (
                                <Link
                                    key={`mobile-link=${idx}`}
                                    href={navItem.link}
                                    onClick={() => setIsOpen(false)}
                                    className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white block"
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

            </motion.div>
        </AnimatePresence>
    );
};
