import Link from "next/link";

export default function BtnContinue() {
    return (
        <Link href='/sign' className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Continue
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7" 
                    />
                </svg>
        </Link>
    );
}