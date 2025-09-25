import hljs from 'highlight.js';
import {useRef, useEffect} from "react"
import "highlight.js/styles/agate.css"
const HighlightedCode = ({ children, language }) => {

      const codeRef = useRef(null);

    useEffect(()=>{
        if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
    }, [])

  return <pre className={language}>
                <code ref={codeRef} className={`hljs ${language}`}>
                    {children}
                </code>
            </pre>
};

export default HighlightedCode;
