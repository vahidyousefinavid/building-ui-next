"use client";

import { Box } from '@mui/material'
import React, { useState } from 'react'
import SignUpDrawer from '../SignUpDrawer/SignUpDrawer'

function SignUpSection() {
    const [open, setOpen] = useState(false)
    return (
        <Box className='w-full h-[20vh]  flex justify-center items-center flex p-4'>
            <button onClick={()=>{setOpen(true)}} className='h-10 w-[200px] px-6 font-semibold rounded-md bg-black text-white'>
                ثبت نام
            </button>
            <SignUpDrawer
                open={open}
                setOpen={setOpen}
            />
        </Box>
    )
}

export default SignUpSection
