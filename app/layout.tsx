import type { Metadata } from 'next'
import QueryProvider from '@/tanstack-provider'
import './globals.css'

export const metadata: Metadata = {
	title: 'Next with Tanstack Query and Supabase',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	)
}
