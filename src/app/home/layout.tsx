import SignUpSection from "@/views/components/SignupSection/SignUpSection"
import { Box } from "@mui/material"

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav></nav>
      <Box sx={{
        display: 'flex',
        width: '100%',
        background: '#0d80c5',
        // height: '90%',
        minHeight: '80vh',
        borderRadius: '0px 0px 70px 70px',
        padding: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* <Box className='w-[80%] flex h-[50px] bg-[#fff] rounded-lg'>

        </Box> */}
        {children}
      </Box>
      <SignUpSection />
    </section>
  )
}