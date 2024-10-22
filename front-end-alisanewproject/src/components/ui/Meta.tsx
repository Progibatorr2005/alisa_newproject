import Head from "next/head"
import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"


interface ISeo {
    title: string
    description?: string
    image?: string
}

export const titleMerge = (title: string) => `${title} | Алиса - СТУДИЯ ЦВЕТОВ И ДЕКОРА`

const Meta : FC<PropsWithChildren<ISeo>> = ({
    title,
    description,
    image,
    children
}) => {
    const {asPath} = useRouter()
    const currentUrl = `${process.env.APP_URL}${asPath}`

    return (
        <>
            <Head>
                <title itemProp="headline">{titleMerge(title)}</title>
                {description ? (
                    <>
                        <meta itemProp="description" name="description" content={description}></meta>
                        <link rel="canonical" href={currentUrl}></link>
                        <meta property="og:locale" content='en'></meta>
                        <meta property="og:title" content={titleMerge(title)}></meta>
                        <meta property="og:url" content={currentUrl}></meta>
                        <meta property="og:image" content={image || '/favicon.svg'}></meta>
                        <meta property="og:description" content={description}></meta>
                    </>
                ) : (
                    <meta name="robots" content="noindex, nofolow"></meta>
                )}
            </Head>
            {children}
        </>
    )
}
export default Meta