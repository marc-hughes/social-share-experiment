import Head from 'next/head'

export default function WroteSentence(props) {

    // <!--You can use Open Graph tags to customize link previews.
    // Learn more: https://developers.facebook.com/docs/sharing/webmasters -->
    return <div>
        <Head>
            <title>Wrote 5 Sentences</title>

            <meta
                property="og:url"
                content="https://social-share-experiment.vercel.app/wrotesentence"
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Wrote 5 Sentences!" />
            <meta property="og:description" content="Learner figured out how to write 5 sentences using Rosetta Stone" />
            <meta
                property="og:image"
                content="https://placekitten.com/200/287"
                oldcontent="https://social-share-experiment.vercel.app/wrotesentence.png"
            />


            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@rosettastone" />
            <meta name="twitter:creator" content="@rosettastone" />
            <meta name="twitter:card" content="summary"></meta>
        </Head>

        <h1>HEY! I wrote 5 sentences!</h1>

        <h2>You can too!</h2>
        <p>Get Rosetta Stone now!</p>
        <img src="https://placekitten.com/200/287" />
    </div>
}