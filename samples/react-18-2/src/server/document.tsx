import React from 'react';

const Document = ({ head, body }) => {
  const Head = head;
  const Body = body;

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Head />
      </head>
      <body>
        <Body />
      </body>
    </html>
  );
};

export default Document;
