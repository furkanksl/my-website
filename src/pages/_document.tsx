import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>Furkan | Sr. Software Eng.</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Senior Software Engineer" />
            <meta
                name="keywords"
                content="website, mobile apps, frontend, backend, fullstack, styling, architecture, html5, css3, mobile first, responsive, problem solving"
            />
            <meta name="author" content="https://github.com/furkanksl" />

            <meta property="og:title" content="Furkan Koseoglu" />
            <meta
                property="og:image"
                content="https://pbs.twimg.com/profile_images/1547275961481166851/fYEahriE_400x400.jpg"
            />
            <meta property="og:url" content="https://furkanksl.com" />
            <meta property="og:site_name" content="furkanksl" />
            <meta property="og:description" content="Sr. Software Engineer" />
            <meta name="twitter:title" content="Furkan Koseoglu" />
            <meta name="twitter:description" content="Sr. Software Engineer" />
            <meta name="twitter:site" content="@frknksglu" />
            <meta
                name="twitter:image"
                content="https://pbs.twimg.com/profile_images/1547275961481166851/fYEahriE_400x400.jpg"
            />
            <meta name="twitter:url" content="https://twitter.com/frknksglu" />
            <meta name="twitter:card" content="summary_large_image" />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
