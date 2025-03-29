import ConvexClientProvider from "@/context/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { RootLayoutType } from "@/types";
import { metaInfo } from "@/meta";
import Footer from "@/components/Footer";
import "../styles/index.css";

export const metadata = metaInfo;

const RootLayout = ({ children }: RootLayoutType) => {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="body">
          <ConvexClientProvider>{children}</ConvexClientProvider>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
