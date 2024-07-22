export default function ShowFileInMessage({ file }) {
   console.log('file is :', file);
   return null;
   const { fileName, fileUrl } = file;

   if (!fileUrl) return null;

   const isImage = fileUrl.split('/').includes('images');
   const isVideo = fileUrl.split('/').includes('vid');
   const isFile = () => {
      if (!isImage && !isVideo) {
         return true;
      } else {
         return false;
      }
   };
   return (
      <section>
         {isImage && <img src={fileUrl} />}
         {isVideo && <video src={fileUrl} controls='true' />}
         {isFile() && (
            <a download={fileName} target='_blank' href={fileUrl}>
               {fileName}
            </a>
         )}
      </section>
   );
}

// downloadFile('downloadPhoto.jpg' , './photo1.jpg');

// function downloadFile(fileName , address) {
//    const _link = document.createElement('a');
//    _link.download = fileName;
//    _link.href = address;
//    //_link.href = canvas.toDataURL();
//    _link.click();
//    _link.delete;
// }
