const useTraverseTree = ()=>{
    function insertNode(tree,folderId,item,isFolder){
        console.log({folderId,item});
        if(tree.id===folderId && tree.isFolder){
            tree.items.unshift({
                folderId : new Date(),
                name : item,
                isFolder,
                items:[]
            })
            return tree;
        }
        let latest = [];
        latest = tree.items.map((eachItem)=>{
            return insertNode(eachItem,folderId,item,isFolder)
        })

        return {...tree,items:latest}
    }

    return {insertNode}
}

export default useTraverseTree;