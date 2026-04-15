export default function JobDetailPage() {
    return (
      <div className="space-y-4">
  
        {/* Job Header */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border">
          <h1 className="text-2xl font-bold">Job Title</h1>
          <p className="text-gray-500">Company</p>
        </div>
  
        {/* Description */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border">
          <h2 className="font-semibold mb-2">Description</h2>
  
          <div
            className="text-sm text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: "job.description here"
            }}
          />
        </div>
  
      </div>
    );
  }