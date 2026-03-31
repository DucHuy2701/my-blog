import PageWrapper from "../components/common/PageWrapper";

export default function Resume() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto mt-10 space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Resume
          </h1>

          <a
            href="/resume/huy-le-resume.pdf"
            download
            className="px-5 py-2 bg-primary text-white rounded-lg hover:scale-105 transition"
          >
            Download PDF
          </a>
        </div>

        {/* PREVIEW */}
        <div className="w-full h-[80vh] border rounded-xl overflow-hidden shadow-md
          bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800
        ">
          <iframe
            src="/resume/Resume_DucHuyLe.pdf"
            title="Resume"
            className="w-full h-full"
          />
        </div>

      </div>
    </PageWrapper>
  );
}