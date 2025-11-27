export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center px-8 py-16 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-6xl font-bold tracking-tight text-black dark:text-white">
            Gameboxd
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Your Gaming Companion
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            By Team Level Up
          </p>
        </div>

        <div className="mt-12 grid w-full gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
              Discover Games
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Explore trending and featured games
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
              Write Reviews
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Share your thoughts and experiences
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
              Track Activity
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Follow your gaming journey
            </p>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <button className="rounded-full bg-black px-8 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            Get Started
          </button>
          <button className="rounded-full border border-zinc-300 bg-white px-8 py-3 text-black transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}
