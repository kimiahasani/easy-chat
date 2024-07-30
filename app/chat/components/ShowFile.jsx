export default function ShowFile({ fileName, fileUrl, fileType }) {
   if (fileType === 'image') return <img className='w-60' src={fileUrl} />;
   if (fileType === 'video') return <video className='w-60' src={fileUrl} controls={true} />;
   return <h1>File {fileName}</h1>;
}
