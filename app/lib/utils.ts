import clsx, {ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import prisma from "@/app/lib/db";
import {notFound} from "next/navigation";
import {unstable_cache} from "next/cache";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
    return new Promise(resolve => {
        return setTimeout(resolve, ms);
    })
}

export function capitaliseString(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// export async function getEvents(city: string) {
//     const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
//         {
//             // cache: "no-cache",
//             // next: {
//             //     revalidate: 300,
//             // }
//         })
//     const events: EventoEvent[] = await response.json();
//     return events;
// }

