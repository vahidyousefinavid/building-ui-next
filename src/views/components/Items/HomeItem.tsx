"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link';

interface ItemProps {
    title: string
    image: any
    link: string
}
function HomeItem(props: ItemProps) {
    const router = useRouter()

    return (
        <Link href={props.link}>
            <Box  className='flex w-[120px] h-[120px] bg-[#fff] rounded-[20px] flex flex-col justify-center gap-3 items-center z-10 cursor-pointer'>
                <Image
                    className=""
                    src={props.image}
                    alt="Vercel logomark"
                    width={40}
                    height={40}
                />
                <text>
                    {props.title}
                </text>
            </Box>
        </Link>
    )
}

export default HomeItem
