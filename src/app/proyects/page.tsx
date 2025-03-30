import { Button } from "@/components/ui/button";
import {Plus, Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import TablaProyectos from "@/app/proyects/TablaProyectos";
import {FiltrosDropdown} from "@/components/FiltrosDropdown";
import {AgruparPorDropdown} from "@/components/AgruparPorDropdown";

export default function ProyectsPage() {
    return (
        <div>
            <div className="mb-6 flex justify-between items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Proyectos</h1>
                </div>

                <div>
                    <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        Nuevo proyecto
                    </Button>
                    <Button variant="outline" className="gap-2 ml-3">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path
                                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Descargar CSV
                    </Button>
                    {/*
                <Button variant="outline" className="gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Create folder
                </Button>
                 */}
                </div>
            </div>

            <div className="w-80 mb-5">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Buscar por Id" className="pl-9" />
                </div>

                <div className="flex gap-2 mb-4 pt-5">
                    <FiltrosDropdown />
                    <AgruparPorDropdown />
                </div>
            </div>

            <TablaProyectos />

        </div>
    );
}