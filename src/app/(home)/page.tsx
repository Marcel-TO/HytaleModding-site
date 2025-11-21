import { Users, BookIcon, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" />
      <div className="max-w-3xl mx-auto text-center space-y-6 relative">
        <div className="inline-flex items-center gap-2">
          <Users className="w-4 h-4 text-slate-600 dark:text-slate-400" />
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Community
          </span>
        </div>
        <h1 className="font-grotesk text-5xl p-2 md:text-6xl font-bold tracking-normal bg-gradient-to-b from-slate-500 to-slate-900 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
          Hytale Modding
        </h1>
        <div className="w-24 h-1 bg-yellow-600 mx-auto" />
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
          Welcome to Hytale Modding!
          This is an unofficial community for modding Hytale, providing guides, documentation, and resources.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 transition-all duration-150 ease-out"
          >
            <BookIcon className="w-4 h-4 text-slate-600 dark:text-slate-400 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Documentation
            </span>
          </Link>
          <a
            href="https://discord.gg/54WX832HBM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 transition-all duration-150 ease-out"
          >
            <MessageCircle className="w-4 h-4 text-slate-600 dark:text-slate-400 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Discord
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
