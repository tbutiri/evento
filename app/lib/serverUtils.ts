import "server-only"

import {unstable_cache} from "next/cache";
import prisma from "@/app/lib/db";
import {capitaliseString} from "@/app/lib/utils";
import {notFound} from "next/navigation";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
    const events = await prisma.eventoEvent.findMany({
        where: {
            city: city === "all" ? undefined : capitaliseString(city),
        },
        orderBy: {
            date: "asc",
        },
        take: 6,
        skip: (page - 1) * 6,
    });

    let totalCount;
    if (city === "all") {
        totalCount = await prisma.eventoEvent.count();
    } else {
        totalCount = await prisma.eventoEvent.count({
            where: {
                city: capitaliseString(city)
            },
        });
    }

    return {
        events,
        totalCount,
    };
});

export const getEvent= unstable_cache(async (slug: string) => {
    const event = await prisma.eventoEvent.findUnique({
        where: {
            slug: slug,
        },
    });

    if (!event) {
        return notFound();
    }

    return event;
});