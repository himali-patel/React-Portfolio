import { createClient } from 'contentful';
const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "i714dtkqixhz",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "6a0dcadf0264704bd4a384180e21806cd67a1affbd517b2ed85e0f60f3d3ba61"
  });

  export default client