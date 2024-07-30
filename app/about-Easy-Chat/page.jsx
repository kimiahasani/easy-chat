'use client';
import { signFormClasses, signFormContainerClasses } from '@/styles/commonClasses';


export default function aboutEasyChat() {
    

    return (
      <main className={signFormContainerClasses}>
      <header className="p-6">
         <h1 className="text-3xl font-bold text-center">Easy Chat</h1>
      </header>
      <section className="flex flex-col items-center justify-center p-4">
         <p className="text-lg">
            Easy Chat is a full stack real-time messaging application designed to facilitate seamless communication between users. With a focus on real-time messaging and multimedia sharing, Easy Chat is perfect for individuals who frequently communicate with friends, family, or colleagues.
         </p>
         <h2 className="text-2xl font-semibold mt-6">Features</h2>
         <ul className="list-disc pl-6">
            <li>
               <strong>User Authentication:</strong> Provides both email/password authentication and JWT token for secure login.
            </li>
            <li>
               <strong>Real-time Messaging:</strong> Enables users to send and receive text messages in real-time using Socket.IO.
            </li>
            <li>
               <strong>Responsive Design:</strong> Mobile-first approach, compatible with all devices including desktops and tablets.
            </li>
            <li>
               <strong>Chat Interface:</strong> User-friendly chat interface with message bubbles and input fields.
            </li>
            <li>
               <strong>One-on-one Messaging:</strong> Facilitates private conversations between two users.
            </li>
            <li>
               <strong>Multimedia Sharing:</strong> Allows users to share photos, videos, and documents.
            </li>
            <li>
               <strong>Message Editing and Deletion:</strong> Users can delete and edit sent messages.
            </li>
            <li>
               <strong>AI Integration:</strong> Includes chatbot and other AI-driven features to enhance the chat experience.
            </li>
         </ul>
         <h2 className="text-2xl font-semibold mt-6">Technology Stack</h2>
         <ul className="list-disc pl-6">
            <li>
               <strong>Front-end:</strong> Next.js, JavaScript, TypeScript
            </li>
            <li>
               <strong>State Management:</strong> Redux Toolkit
            </li>
            <li>
               <strong>Back-end:</strong> Next.js
            </li>
            <li>
               <strong>Database:</strong> MongoDB
            </li>
            <li>
               <strong>Real-time Communication:</strong> Socket.IO
            </li>
            <li>
               <strong>Security:</strong> JWT Tokens for secure connections
            </li>
         </ul>
      </section>
   </main>
   
    );
}


