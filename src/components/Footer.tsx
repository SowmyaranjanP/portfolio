import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
              PS
            </div>
            <span className="font-semibold">Padhi Sowmyaranjan</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>and React</span>
          </div>

          <div className="text-gray-400 text-sm">
            {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
