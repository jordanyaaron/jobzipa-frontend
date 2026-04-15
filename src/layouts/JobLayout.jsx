import { Outlet } from "react-router-dom";

export default function JobLayout() {
  return (
    <div className="min-h-screen bg-[var(--main-bg)]">

      <div className="max-w-7xl mx-auto px-4 py-6">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT (optional sidebar or filters) */}
          <div className="hidden lg:block">
            {/* unaweza kuweka filters au navigation hapa */}
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2">
            <Outlet />
          </div>

          {/* RIGHT ADS SIDEBAR */}
          <div className="hidden lg:block space-y-4">

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
              <h3 className="font-semibold">Sponsored</h3>
              <p className="text-sm text-gray-600">
                Your ad here...
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
              <h3 className="font-semibold">Trending Jobs</h3>
              <p className="text-sm text-gray-600">
                Latest opportunities...
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}