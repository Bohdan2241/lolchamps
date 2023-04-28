function Navbar() {
  return (
    <section>
      <nav className="min-[1001px]:mx-[2%] uppercase text-[10px] font-semibold tracking-widest">
        <div className="max-[1000px]:border-y-[1px] max-[1000px]:border-[rgb(193,193,193)] max-w-[1400px] mx-auto">
          <div className="flex items-stretch h-[35px] min-[1001px]:h-[50px]">
            <div className="group min-[501px]:min-w-[138px] flex-initial min-[1001px]:flex-auto">
              <div className="flex px-[15px] h-full cursor-pointer relative before:bg-[rgb(193,193,193)] before:content[''] before:absolute before:inset-y-2.5 before:right-0 before:w-px before:transition-all before:ease-linear before:duration-[250ms] group-hover:before:inset-y-0">
                <div className="pl-[30px] flex-[0_0_auto] flex">
                  <svg viewBox="0 0 15.69 15.69">
                    <path d="M6.46 1.5c2.74 0 4.96 2.23 4.96 4.96s-2.23 4.96-4.96 4.96S1.5 9.2 1.5 6.46 3.73 1.5 6.46 1.5m0-1.5C2.89 0 0 2.89 0 6.46s2.89 6.46 6.46 6.46 6.46-2.89 6.46-6.46C12.93 2.89 10.03 0 6.46 0z" />
                    <path d="M10.25 10.26l4.89 4.89" />
                  </svg>
                  <div className="max-[500px]:hidden">Search</div>
                </div>
              </div>
            </div>
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
