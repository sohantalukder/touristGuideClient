import "./globals.css";
import { Providers } from "./redux/Provider";
import UserRootLayout from "./userRootLayout";
import { GoogleProvider } from "./Providers/GoogleLoginProviders/GoogleLoginProviders";
export const metadata = {
    title: "Tourist Guide",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body suppressHydrationWarning={true}>
                <GoogleProvider>
                    <Providers>
                        <UserRootLayout>{children}</UserRootLayout>
                    </Providers>
                </GoogleProvider>
            </body>
        </html>
    );
}
