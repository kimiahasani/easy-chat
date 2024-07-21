export const nowTime = (date) =>
   String(date.getFullYear()).substring(2) +
   String(date.getUTCMonth()).padStart(2, '0') +
   String(date.getUTCDate()).padStart(2, '0') +
   String(date.getUTCHours()).padStart(2, '0') +
   String(date.getUTCMinutes()).padStart(2, '0') +
   String(date.getUTCSeconds()).padStart(2, '0') +
   String(date.getUTCMilliseconds()).padStart(3, '0');
