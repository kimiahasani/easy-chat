// file selected from input
export function fileToBufferInFront(file) {
   return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
         const buffer = e.target.result;
         resolve(buffer);
      };
      // reader.error = () => reject(false);
      reader.readAsArrayBuffer(file);
   });
}
