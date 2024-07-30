// // file selected from input
// export function fileToBufferInFront(file) {
//    return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//          const buffer = e.target.result;
//          resolve(buffer);
//       };
//       // reader.error = () => reject(false);
//       reader.readAsArrayBuffer(file);
//    });
// }

// name         : file name with suffix
// lastModified : Time to modified per number
// suffix       : Suffix of file name
// size         : Size file per KB
// fileType     : File type such as image or video
// buffer       : Convert file to buffer
// dataUrl      : Unique url of file to show in front such as <img href={dataUrl} ...

export function fullFileInfo(file) {
   const { name, lastModified } = file;
   const nameArr = file.name.split('.');
   const suffix = nameArr.length > 1 ? nameArr.at(-1) : '';
   const size = file.size / 1024;
   const fullType = file.type?.split('/');
   const fileType = fullType ? fullType[0] : 'file';

   return new Promise((resolve) => {
      const reader = new FileReader();
      let buffer, dataUrl;

      reader.onload = (e) => {
         buffer = e.target.result;

         const dataReader = new FileReader();
         dataReader.onloadend = () => {
            dataUrl = dataReader.result;
            resolve({ name, lastModified, suffix, size, fileType, buffer, dataUrl });
         };
         dataReader.readAsDataURL(file);
      };

      reader.readAsArrayBuffer(file);
   });
}
