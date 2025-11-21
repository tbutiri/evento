import React, {Suspense} from 'react'
import H1 from "@/app/components/h1";
import EventsList from "@/app/components/events-list";
import LoadingSkeleton from "@/app/events/[city]/loadingSkeleton";
import {capitaliseString} from "@/app/lib/utils";
import {Metadata} from "next";
import {z} from "zod";

type Props = {
    params: {
        city: string;
    }
}

type EventsPageProps = Props & {
    searchParams: { [key: string]: string | string[] | undefined };
}

export function generateMetadata ({ params }: Props): Metadata  {
    const city = params.city;

    return {
        title: city === "all" ? "All Events" : `Events in ${capitaliseString(city)}`,
    };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({ params, searchParams }: EventsPageProps) {
    const city = params.city;
    const parsedPage = pageNumberSchema.safeParse(searchParams.page);
    if (!parsedPage.success) {
        throw new Error("Invalid page number");
    }

    return (
        <main className="flex flex-col items-center py-24 px-5 min-h-[110vh]">
            <H1 className="mb-28">
                {
                    city === 'all' ? 'All Events' : `Events in ${capitaliseString(city)}`
                }
            </H1>

            <Suspense key={city + parsedPage.data} fallback={<LoadingSkeleton />}>
                <EventsList city={city} page={parsedPage.data}/>
            </Suspense>
        </main>
    )
}
