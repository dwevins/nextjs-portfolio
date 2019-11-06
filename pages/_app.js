import App from 'next/app'
import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { Resets, Theme } from '../global'
import { Nav } from '../components'

const NavPlaceholder = styled.div`
  flex-shrink: 0;
  min-height: 100vh;
  width: ${p => p.theme.sizing.navWidth};
`

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={Theme}>
        <Resets />
        <PageWrapper>
          <Nav />
          <NavPlaceholder />
          <Component {...pageProps} />
        </PageWrapper>
      </ThemeProvider>
    )
  }
}
