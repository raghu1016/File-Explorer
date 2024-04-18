import "./styles.css";
import { useState } from "react";
import explorer from "./Data/folderData.js";
import Folder from "./components/Folder";
import useTraverseTree from './hooks/usetraversehook';

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const {insertNode} = useTraverseTree();

  const handleInsertNode = (folderId,item,isFolder)=>{
    const finalTree = insertNode(explorerData,folderId,item,isFolder);
    setExplorerData(finalTree);
 }
  return (
    <div className="App">
      <Folder explorer={explorerData} insertData = {handleInsertNode}/>
    </div>
  );
}
