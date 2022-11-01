import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
} from '@remix-run/react'
import NProgress from 'nprogress'
import nProgressStyles from 'nprogress/nprogress.css'
import { useEffect } from 'react'

export let links: LinksFunction = () => {
  // if you already have one only add this stylesheet to your list of links
  return [{ rel: 'stylesheet', href: nProgressStyles }]
}
export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix Search Params by Form',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  let transition = useTransition()
  useEffect(() => {
    if (transition.state !== 'idle') {
      NProgress.start()
    } else if (transition.state === 'idle') {
      NProgress.done()
    }
  }, [transition.state])
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
