import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const QuillEditor = forwardRef(
  ({ value = "", onChange, placeholder = "Write here...", darkMode ,readOnly = false, }, ref) => {

    const editorRef = useRef(null);
    const quillInstance = useRef(null);

    // 1️⃣ INIT QUILL (run once)
    useEffect(() => {
      if (editorRef.current && !quillInstance.current) {
        quillInstance.current = new Quill(editorRef.current, {
          theme: "snow",
          placeholder,
          modules: {
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link"],
              [{ align: [] }],
              ["clean"],
            ],
          },
        });

        quillInstance.current.root.innerHTML = value;

        quillInstance.current.on("text-change", () => {
          const html = quillInstance.current.root.innerHTML;
          onChange && onChange(html);
        });
      }
    }, []); 
    

    // 2️⃣ SYNC VALUE (for reset / external changes)
    useEffect(() => {
      if (quillInstance.current) {
        const currentHTML = quillInstance.current.root.innerHTML;

        if ((value || "") !== currentHTML) {
          quillInstance.current.root.innerHTML = value || "";
        }
      }
    }, [value]);

    // 3️⃣ DISABLE / ENABLE EDITOR
    useEffect(() => {
      if (quillInstance.current) {
        quillInstance.current.enable(!readOnly);
      }
    }, [readOnly]);

// muhimu: iwe empty dependency
    // 2️⃣ DARK MODE EFFECT (run kila darkMode ikibadilika)
        useEffect(() => {
          if (quillInstance.current) {
            const editorRoot = quillInstance.current.root;
    
            editorRoot.style.backgroundColor = darkMode
              ? "#1F2937"
              : "#F3F4F6";
    
            editorRoot.style.color = darkMode
              ? "#F9FAFB"
              : "#111827";
    
            editorRoot.style.borderColor = darkMode
              ? "#374151"
              : "#D1D5DB";
          }
        }, [darkMode]);
    return <div ref={editorRef} className="w-full h-full" />;
  }
)

export default  QuillEditor