import Search from './Search';

function Navbar() {
  return (
    <section>
      <nav className="min-[1001px]:mx-[2%] uppercase text-[10px] font-semibold tracking-widest">
        <div className="max-[1000px]:border-y-[1px] max-[1000px]:border-[rgb(193,193,193)] max-w-[1400px] mx-auto">
          <div className="flex items-stretch h-[35px] min-[1001px]:h-[50px]">
            <Search />

            <div>
              <ul className="hidden">Desktop tabs</ul>
              <div>All roles</div>
            </div>

            <div className="">all difficulties</div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
