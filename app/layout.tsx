import '@/app/ui/global.css';

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    console.log("RootLayout rendered");

    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );

}
