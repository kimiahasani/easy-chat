import ShowFile from './ShowFile';

export default function ShowFileInMessage({ file }) {
   console.log('file is :', file);

   if (!file?.fileUrl || !file) return null;

   const { fileName, fileUrl, fileType } = file;

   return (
      <section>
         <ShowFile fileName={fileName} fileType={fileType} fileUrl={fileUrl} />
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
