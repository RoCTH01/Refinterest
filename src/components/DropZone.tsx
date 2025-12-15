function DropZone({children}: {children: React.ReactNode}) {

    return (
        <div className="drop-zone"
        onDragEnter={(e) => {
            e.preventDefault();
            console.log("Drag Entered Drop Zone",);
        }}
        onDragOver={(e) => {
            e.preventDefault();
            console.log("Dragging Over Drop Zone");
        }}
        onDrop={(e)=> {
            e.preventDefault();
            onFileDrop(e.dataTransfer.files);
            console.log("Files Dropped in Drop Zone");
        }}
        onDragLeave={(e) => {
            e.preventDefault();
            console.log("Drag Left Drop Zone");
        }}
        >
            {children}
        </div>
    );
}

//handle file drop and upload logic here


const onFileDrop = (files: FileList) => {

    console.log("Files dropped:", files);
    
}

export default DropZone;