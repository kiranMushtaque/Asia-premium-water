// real layout hai ye website ka
// import "./globals.css";


// import { ReactNode } from "react";

//  export const metadata = {
//   title: "Asia Water",
//    description: "Clean and lab-tested water delivery service",
//  };

//  export default function RootLayout({ children }: { children: ReactNode }) {
//    return (
//      <html lang="en">
//        <body>{children}</body>
//      </html>
//    );
//  }



// app/layout.tsx
// import './globals.css';
// import { ReactNode } from 'react';
// import ChunkErrorHandler from '../components/ChunkErrorHandler'; // client component

// export const metadata = {
//   title: 'Asia Water',
//   description: 'Clean and lab-tested water delivery service',
// };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         {/* Global chunk error handler */}
//         <ChunkErrorHandler />
//         {children}
//       </body>
//     </html>
//   );
// }










// // app/layout.tsx
// import "./globals.css";
// import { ReactNode } from "react";
// import ChunkErrorHandler from "../components/ChunkErrorHandler";

// // ✅ SEO Metadata
// export const metadata = {
//   title: "Asia Water | Clean & Lab-tested Water Delivery",
//   description:
//     "Asia Water provides fresh, clean and lab-tested water delivered to your doorstep in Karachi. Affordable, reliable and trusted by thousands.",
//   keywords: [
//     "Asia Water",
//     "clean water delivery Karachi",
//     "lab-tested water",
//     "bottle water service",
//   ],
//   authors: [{ name: "Asia Water Team" }],
//   openGraph: {
//     title: "Asia Water | Premium Drinking Water",
//     description:
//       "Trusted clean & lab-tested water delivery service in Karachi. Freshness & quality guaranteed.",
//     url: "https://www.asiawater.com", // ✅ jab live karoge yaha apna domain dalna
//     siteName: "Asia Water",
//     images: [
//       {
//         url: "/images/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "Asia Water Logo",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Asia Water | Premium Drinking Water",
//     description:
//       "Asia Water provides clean, fresh, and lab-tested drinking water for homes and offices.",
//     images: ["/images/logo.png"],
//   },
// };

// // ✅ Root Layout Component
// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* ✅ Favicon & SEO Icons */}
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//         <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
//         <meta name="theme-color" content="#2563eb" />
//       </head>
//       <body className="antialiased bg-white text-gray-900">
//         {/* ✅ Global Error Handler */}
//         <ChunkErrorHandler />
//         {children}
//       </body>
//     </html>
//   );
// }









// // app/layout.tsx
// import "./globals.css";
// import { ReactNode } from "react";
// import ChunkErrorHandler from "../components/ChunkErrorHandler";

// import { CartProvider } from "../context/CartContext";

// // ✅ SEO Metadata
// export const metadata = {
//   title: "Asia Water | Clean & Lab-tested Water Delivery",
//   description:
//     "Asia Water provides fresh, clean and lab-tested water delivered to your doorstep in Karachi. Affordable, reliable and trusted by thousands.",
//   keywords: [
//     "Asia Water",
//     "clean water delivery Karachi",
//     "lab-tested water",
//     "bottle water service",
//   ],
//   authors: [{ name: "Asia Water Team" }],
//   openGraph: {
//     title: "Asia Water | Premium Drinking Water",
//     description:
//       "Trusted clean & lab-tested water delivery service in Karachi. Freshness & quality guaranteed.",
//     url: "https://www.asiawater.com",
//     siteName: "Asia Water",
//     images: [
//       {
//         url: "/images/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "Asia Water Logo",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Asia Water | Premium Drinking Water",
//     description:
//       "Asia Water provides clean, fresh, and lab-tested drinking water for homes and offices.",
//     images: ["/images/logo.png"],
//   },
// };

// // ✅ Root Layout Component
// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* ✅ Favicon & SEO Icons */}
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//         <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
//         <meta name="theme-color" content="#2563eb" />
//       </head>
//       <body className="antialiased bg-white text-gray-900">
//         {/* ✅ Global Error Handler */}
//         <ChunkErrorHandler />

//         {/* ✅ Wrap children in CartProvider */}
//         <CartProvider>{children}</CartProvider>
//       </body>
//     </html>
//   );
// }


// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { CartProvider } from "../context/CartContext";

// ✅ SEO Metadata (Server Component)
export const metadata = {
  title: "Asia Water | Clean & Lab-tested Water Delivery",
  description:
    "Asia Water provides fresh, clean and lab-tested water delivered to your doorstep in Karachi. Affordable, reliable and trusted by thousands.",
  keywords: [
    "Asia Water",
    "clean water delivery Karachi",
    "lab-tested water",
    "bottle water service",
  ],
  authors: [{ name: "Asia Water Team" }],
  metadataBase: new URL("https://www.asiawater.com"),
  openGraph: {
    title: "Asia Water | Premium Drinking Water",
    description:
      "Trusted clean & lab-tested water delivery service in Karachi. Freshness & quality guaranteed.",
    url: "https://www.asiawater.com",
    siteName: "Asia Water",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Asia Water Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asia Water | Premium Drinking Water",
    description:
      "Asia Water provides clean, fresh, and lab-tested drinking water for homes and offices.",
    images: ["/images/logo.png"],
  },
};

// ✅ Root Layout Component
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {/* ✅ Wrap children in CartProvider to fix useCart error */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
