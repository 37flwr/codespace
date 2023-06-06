import { useEffect, useState } from "react";

const useCodeState = () => {
  const [html, setHtml] = useState<string>("");
  const [css, setCss] = useState<string>("");
  const [js, setJs] = useState<string>("");
  const [srcDoc, setSrcDoc] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>`);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return {
    states: {
      html,
      css,
      js,
    },
    setters: {
      html: setHtml,
      css: setCss,
      js: setJs,
    },
    doc: srcDoc,
    setDoc: setSrcDoc,
  };
};

export default useCodeState;
