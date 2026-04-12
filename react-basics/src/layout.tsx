import { NavLink, Outlet } from "react-router";


export default function Layout() {
    return (
        <section className="min-h-screen flex flex-col bg-gray-50">
            <nav className="bg-indigo-700 text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-6">
                    <span
                        className="font-bold text-lg tracking-wide mr-4 cursor-pointer select-none
                            bg-[linear-gradient(90deg,#fff_0%,#a5b4fc_20%,#f0abfc_40%,#fde68a_60%,#6ee7b7_80%,#fff_100%)]
                            bg-[length:250%_auto]
                            bg-clip-text text-transparent
                            animate-[shimmer_2.5s_linear_infinite]
                            hover:scale-110 transition-transform duration-200"
                        style={{
                            ["--tw-gradient-from" as string]: "#ffffff",
                        }}
                    >
                        MyApp
                    </span>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `text-sm font-medium px-3 py-1.5 rounded transition-colors ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/pokemon"
                        className={({ isActive }) =>
                            `text-sm font-medium px-3 py-1.5 rounded transition-colors ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
                        }
                    >
                        Pokemon
                    </NavLink>
                    <NavLink
                        to="/todo"
                        className={({ isActive }) =>
                            `text-sm font-medium px-3 py-1.5 rounded transition-colors ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
                        }
                    >
                        Todo
                    </NavLink>
                </div>
            </nav>

            <div className="flex flex-1 max-w-7xl w-full mx-auto px-4 py-6 gap-6">
                <aside className="w-52 shrink-0">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 px-4 pt-4 pb-2">
                            Navigation
                        </p>
                        <nav className="flex flex-col pb-2">
                            <NavLink
                                to="/pokemon"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${isActive ? "bg-indigo-50 text-indigo-700 border-r-2 border-indigo-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`
                                }
                            >
                                🐾 Pokemon
                            </NavLink>
                            <NavLink
                                to="/todo"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${isActive ? "bg-indigo-50 text-indigo-700 border-r-2 border-indigo-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`
                                }
                            >
                                ✅ Todo
                            </NavLink>
                        </nav>
                    </div>
                </aside>

                <main className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <Outlet />
                </main>
            </div>
        </section>
    );
}