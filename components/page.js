import { Head } from 'next/head'
import { Nav } from '.'

const Page = ({ children }) => (
  <div>
    <Nav />
    {children}
  </div>
)

export default Page
