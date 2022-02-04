import dynamic from 'next/dynamic';
import React from 'react';
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor';
import { TuiEditorWithForwardedProps } from './TuiEditorWrapper';
import axios from 'axios';
import {uploadImage} from '../api/workApi'

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import("./TuiEditorWrapper"), { ssr: false });
const EditorWithForwardedRef = React.forwardRef<EditorType | undefined, EditorPropsWithHandlers>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

interface Props extends EditorProps {
  onChange(value: string): void;

  valueType?: "markdown" | "html";
}

const BlogEditor: React.FC<Props> = (props) => {
  const { initialValue, previewStyle, height, useCommandShortcut } = props;

  const editorRef = React.useRef<EditorType>();

  React.useEffect(()=>{
    if(editorRef.current){
      console.log("editorRef.current")
      editorRef.current.getInstance().removeHook('addImageBlobHook');
      editorRef.current.getInstance().addHook('addImageBlobHook', (blob, callback)=>{
        (async ()=>{
          let formData = new FormData();
          formData.append("file", blob);
          console.log("upload image");
          const imagePath = await uploadImage(formData);
          console.log(imagePath)
          callback("/"+imagePath, "alt text");
        })();

        return false;
      })
    }
    return () => {};
  },[])

  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
    const valueType = props.valueType || "markdown";

    props.onChange(valueType === "markdown" ? instance.getMarkdown() : instance.getHTML());
  }, [props, editorRef]);

  return <div>
    <EditorWithForwardedRef
      {...props}
      initialValue={initialValue || "hello react editor world!"}
      previewStyle={previewStyle || "vertical"}
      height={height || "600px"}
      initialEditType={"wysiwyg"}
      useCommandShortcut={useCommandShortcut || true}
      ref={editorRef}
      onChange={handleChange}
    />
  </div>;
};
 
export default BlogEditor;