import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html data-theme="corporate">
            <Head />
            <body className="bg-muted">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}