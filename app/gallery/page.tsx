"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Footer } from "@/components/footer";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { IconHome, IconUser, IconMessage, IconTool } from "@tabler/icons-react";

export default function GalleryPage() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "/#about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Services",
            link: "/#services",
            icon: <IconTool className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "/#contact",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];

    const images = [
        "/gallery/IMG-20260103-WA0026.jpg",
        "/gallery/IMG-20260103-WA0027.jpg",
        "/gallery/IMG-20260103-WA0028.jpg",
        "/gallery/IMG-20260103-WA0029.jpg",
        "/gallery/IMG-20260103-WA0030.jpg",
        "/gallery/IMG-20260103-WA0031.jpg",
        "/gallery/IMG-20260103-WA0032.jpg",
        "/gallery/IMG-20260103-WA0033.jpg",
        "/gallery/IMG-20260103-WA0034.jpg",
        "/gallery/IMG-20260103-WA0035.jpg",
        "/gallery/IMG-20260103-WA0036.jpg",
        "/gallery/IMG-20260103-WA0037.jpg",
        "/gallery/IMG-20260103-WA0038.jpg",
        "/gallery/IMG-20260103-WA0039.jpg",
        "/gallery/IMG-20260103-WA0040.jpg",
        "/gallery/IMG-20260103-WA0041.jpg",
        "/gallery/IMG-20260103-WA0042.jpg",
        "/gallery/IMG-20260103-WA0043.jpg",
        "/gallery/IMG-20260103-WA0044.jpg",
        "/gallery/IMG-20260103-WA0045.jpg",
        "/gallery/IMG-20260103-WA0046.jpg",
        "/gallery/IMG-20260103-WA0047.jpg",
        "/gallery/IMG-20260103-WA0048.jpg",
        "/gallery/IMG-20260103-WA0049.jpg",
        "/gallery/IMG-20260103-WA0050.jpg",
        "/gallery/IMG-20260103-WA0051.jpg",
        "/gallery/IMG-20260103-WA0052.jpg",
        "/gallery/IMG-20260103-WA0053.jpg",
        "/gallery/IMG-20260103-WA0054.jpg",
        "/gallery/IMG-20260103-WA0055.jpg",
        "/gallery/IMG-20260103-WA0056.jpg",
        "/gallery/IMG-20260103-WA0057.jpg",
        "/gallery/IMG-20260103-WA0058.jpg",
        "/gallery/IMG-20260103-WA0059.jpg",
        "/gallery/IMG-20260103-WA0060.jpg",
        "/gallery/IMG-20260103-WA0061.jpg",
        "/gallery/IMG-20260103-WA0062.jpg",
        "/gallery/IMG-20260103-WA0063.jpg",
        "/gallery/IMG-20260103-WA0064.jpg",
        "/gallery/IMG-20260103-WA0065.jpg",
        "/gallery/IMG-20260103-WA0066.jpg",
        "/gallery/IMG-20260103-WA0067.jpg",
        "/gallery/IMG-20260103-WA0068.jpg",
        "/gallery/IMG-20260103-WA0069.jpg",
        "/gallery/IMG-20260103-WA0070.jpg",
        "/gallery/IMG-20260103-WA0071.jpg",
        "/gallery/IMG-20260103-WA0072.jpg",
        "/gallery/IMG-20260103-WA0073.jpg",
        "/gallery/IMG-20260103-WA0074.jpg",
        "/gallery/IMG-20260103-WA0075.jpg",
        "/gallery/IMG-20260103-WA0076.jpg",
        "/gallery/IMG-20260103-WA0077.jpg",
        "/gallery/IMG-20260103-WA0078.jpg",
        "/gallery/IMG-20260103-WA0079.jpg",
        "/gallery/IMG-20260103-WA0080.jpg",
        "/gallery/IMG-20260103-WA0081.jpg",
        "/gallery/IMG-20260103-WA0083.jpg",
        "/gallery/IMG-20260103-WA0084.jpg",
        "/gallery/IMG-20260103-WA0085.jpg",
        "/gallery/IMG-20260103-WA0086.jpg",
        "/gallery/IMG-20260103-WA0088.jpg",
        "/gallery/IMG-20260103-WA0089.jpg",
        "/gallery/IMG-20260103-WA0090.jpg",
        "/gallery/IMG-20260103-WA0091.jpg",
        "/gallery/IMG-20260103-WA0092.jpg",
        "/gallery/IMG-20260103-WA0093.jpg",
        "/gallery/IMG-20260103-WA0094.jpg",
        "/gallery/IMG-20260103-WA0095.jpg",
        "/gallery/IMG-20260103-WA0096.jpg",
        "/gallery/IMG-20260103-WA0097.jpg",
        "/gallery/IMG-20260103-WA0098.jpg",
        "/gallery/IMG-20260103-WA0099.jpg",
        "/gallery/IMG-20260103-WA0100.jpg",
        "/gallery/IMG-20260103-WA0101.jpg",
        "/gallery/IMG-20260103-WA0102.jpg",
        "/gallery/IMG-20260103-WA0103.jpg",
        "/gallery/IMG-20260103-WA0104.jpg",
        "/gallery/IMG-20260103-WA0105.jpg",
        "/gallery/IMG-20260103-WA0106.jpg",
        "/gallery/IMG-20260103-WA0107.jpg",
        "/gallery/IMG-20260103-WA0108.jpg",
        "/gallery/IMG-20260103-WA0109.jpg",
        "/gallery/IMG-20260103-WA0110.jpg",
        "/gallery/IMG-20260103-WA0111.jpg",
        "/gallery/IMG-20260103-WA0112.jpg",
        "/gallery/IMG-20260103-WA0113.jpg",
        "/gallery/IMG-20260103-WA0114.jpg",
        "/gallery/IMG-20260103-WA0115.jpg",
        "/gallery/IMG-20260103-WA0121.jpg",
    ];

    return (
        <main className="relative bg-white dark:bg-black min-h-screen w-full overflow-hidden pt-32">
            <FloatingNav navItems={navItems} />

            <div className="pt-20 px-6">
                <div className="max-w-7xl mx-auto text-center mb-10">
                    <h1 className="text-4xl md:text-7xl font-bold text-neutral-800 dark:text-white mb-4">
                        Project Gallery
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
                        A showcase of our recent projects, from large-scale industrial installations to intricate residential plumbing solutions.
                    </p>
                </div>

                <ParallaxScroll images={images} />
            </div>

            <Footer />
        </main>
    );
}
