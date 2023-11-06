import InstitutionDropdown from "./InstitutionDropdown";

function NavBar() {
  return (
    <header className="bg-white shadow px-6 py-2 border border-gray-300">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Agenda Cultural</h1>
          <InstitutionDropdown />
        </div>
        <a
          href=""
          className="text-white bg-black flex justify-center items-center transition-all hover:opacity-75 px-2 rounded-md h-8"
        >
          Login
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
