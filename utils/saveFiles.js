import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

export const saveFile = (file) => {
   const __filename = fileURLToPath(import.meta.url);
   const __dirname = dirname(__filename);

   let fileName = file.fileName;
   let fileUrl = '/file/' + fileName;

   switch (file.fileType) {
      case 'video':
         fileUrl = '/vid/' + fileName;
         break;
      case 'application':
         fileUrl = '/pdf/' + fileName;
         break;
      case 'image':
         fileUrl = '/images/' + fileName;
         break;
   }

   const myPath = String(path.join(__dirname, '/../public', fileUrl));
   console.log(myPath);
   try {
      fs.writeFileSync(myPath, file.buffer);
   } catch (err) {
      fileName = '1';
      fileUrl = '1';
   }

   return { fileName, fileUrl };
};
