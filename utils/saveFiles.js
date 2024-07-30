import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

export const saveFile = (file) => {
   return new Promise((resolve, reject) => {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);

      let fileName = file.fileName;
      let fileUrl = `/${file.fileType}/${fileName}`;

      const myPath = String(path.join(__dirname, '/../public', fileUrl));
      console.log(myPath);
      try {
         fs.writeFileSync(myPath, file.buffer);
         resolve(fileUrl);
      } catch (err) {
         reject(fileUrl);
      }
   });
};
