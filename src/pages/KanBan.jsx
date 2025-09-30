export default function KanBan() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">KanBan</h1>

      <p className="mb-4">
        Here’s your KanBan board:
        <a
          href="https://docs.google.com/spreadsheets/d/1LQifEwH0oG13cJHlnnGzQM8-9SckD9c0aU4kF56R5CI/edit?pli=1&gid=1386834576"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Open in Google Sheets
        </a>
      </p>

      {/* Desktop / tablet iframe */}
      <div className="hidden md:block">
        <iframe
          src="https://docs.google.com/spreadsheets/d/1LQifEwH0oG13cJHlnnGzQM8-9SckD9c0aU4kF56R5CI/edit?usp=sharing&embedded=true"
          title="KanBan Board"
          className="w-full h-[80vh] border rounded-lg shadow"
        ></iframe>
      </div>

      {/* Mobile fallback message */}
      <div className="md:hidden text-gray-600">
        📱 On mobile devices, please use the “Open in Google Sheets” button above
        to view the KanBan board.
      </div>
    </div>
  );
}
