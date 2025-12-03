import React from "react";
// React 17 and earlier → JSX needs import React from "react"
// React 18 → JSX transform usually does NOT require import, BUT Babel must be configured correctly.
// Since you are using Webpack + Babel manually, you MUST import React.
export default function App(){
  console.log(React.version);
  return <h1>Hello Webpack + React</h1>;
}