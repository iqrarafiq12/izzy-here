import { ThemeProvider } from "@/Providers/theme-provider"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
   <ThemeProvider
         attribute="class"
         defaultTheme="system"
         >
        {children}
        </ThemeProvider>
        </main>
    )
}

