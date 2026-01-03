import Link from "next/link";
import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconMapPin, IconPhone, IconMail, IconClock } from "@tabler/icons-react";

export function Footer() {
    return (
        <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-4">GCA Construction Ltd</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                        Your trusted partner in plumbing, pipefitting, and welding solutions. We deliver precision and quality for both residential and commercial projects.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-4">Contact Info</h3>
                    <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 text-sm">
                        <li className="flex items-start gap-2">
                            <IconMapPin className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                            <span>15 Holgate Road, London RM10 8LX</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <IconPhone className="w-5 h-5 text-neutral-500" />
                            <span>+44 07424304664</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <IconMail className="w-5 h-5 text-neutral-500" />
                            <span>gcaconstruction16@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <IconClock className="w-5 h-5 text-neutral-500" />
                            <span>Mon - Fri, 9:00 am - 7:00 pm</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <Link href="#" className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-blue-500 hover:text-white transition">
                            <IconBrandFacebook className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-sky-500 hover:text-white transition">
                            <IconBrandTwitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-blue-700 hover:text-white transition">
                            <IconBrandLinkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500">
                &copy; {new Date().getFullYear()} GCA Construction Ltd. All rights reserved.
            </div>
        </footer>
    );
}
