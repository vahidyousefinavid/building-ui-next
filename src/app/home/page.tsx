import React from 'react'
import target from '../../../public/images/target.png'
import handshake from '../../../public/images/handshake.png'
import support from '../../../public/images/support.png'
import presentation from '../../../public/images/presentation.png'
import HomeItem from '@/views/components/Items/HomeItem'

export default function Home() {
   
    return (
        <div className='flex w-full flex-col justify-center gap-8 items-center'>
            <div className='flex gap-8 flex-wrap justify-center'>
                <HomeItem link='/home/target' image={target} title={'اهداف'} />
                <HomeItem link='/home/about-us' image={presentation} title={'درباره ما'} />
                <HomeItem link='/home/cooperation' image={handshake} title={'همکاری'} />
                <HomeItem link='/home/contact-us' image={support} title={'تماس با ما'} />
            </div>
            <div>

            </div>
        </div>
    )
}


