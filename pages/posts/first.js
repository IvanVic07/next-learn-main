import Link from 'next/link'

export default function FirstPost() {
   return (
      <>
         <h1>My First Post</h1>
         <h2>
            <Link href="/">Home</Link>
         </h2>
         <br />
         <img src="https://th.bing.com/th/id/OIP.GJTYnGHAA9SdIZqRppSF1gHaDb?w=273&h=162&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="TutorialsPoint Logo" />
      </>	  
   )
}
