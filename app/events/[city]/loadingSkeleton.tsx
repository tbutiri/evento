import React from 'react'
import SkeletonCard from "@/app/components/skeleton-card";

export default function LoadingSkeleton() {
    return (
        <div className={"flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] py-24 gap-20"}>
            {
                Array.from({ length: 6}).map((item, index) => {
                    return <SkeletonCard key={index}/>
                })
            }
        </div>
    )
}
