import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};
