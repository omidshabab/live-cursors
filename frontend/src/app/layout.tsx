import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { LangDir, LangFont } from "@/lib/fonts";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import ModalProvider from "@/components/providers/ModalProvider";
import NextAuthProvider from "@/lib/auth/Provider";

/* 
    -- dynamic metadata based on locales --
*/
export async function generateMetadata(): Promise<Metadata> {
  const tMetadata = await getTranslations("metadata")

  return {
    title: (tMetadata)("name"),
    description: (tMetadata)("desc"),
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  const font = LangFont(locale);
  const dir = LangDir(locale);

  return (
    <html lang={font} dir={dir}>
      <body
        className={cn(
          font,
          "relative antialiased flex h-screen w-full items-center justify-center overflow-scroll none-scroll-bar"
        )}>
        <NextAuthProvider>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}>
            <main
              className="w-full h-full bg-grid-black/[0.1] relative flex items-center justify-center">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
              <div className="w-full">
                {children}

                <ModalProvider />
              </div>
            </main>
            <Toaster
              font={font}
              others={{
                position: "top-center",
              }} />
          </NextIntlClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
