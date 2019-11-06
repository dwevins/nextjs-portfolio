import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/works', label: 'Works' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const StyledNav = styled.nav`
  height: 100vh;
  left: 0;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: ${p => p.theme.sizing.navWidth};
`

const Nav = ({ className }) => (
  <StyledNav className={className}>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </StyledNav>
)

export default Nav
