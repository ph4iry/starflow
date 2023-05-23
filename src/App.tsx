import { useEffect } from "react";
import { Collapse, initTE } from 'tw-elements';
import PostTemplate from "./components/PostTemplate";
import Editor from "./components/Editor";

function App() {
  useEffect(() => {
    initTE({ Collapse });
  }, []);

  return (
    <div className="flex flex-row items-center h-screen bg-zinc-100 dark:bg-zinc-900 p-36 space-x-10">
    <PostTemplate accentColors={['#1da1f2']} backgroundColor="#ff77e9" />
    <Editor />
    </div>
  );
}

export default App;
