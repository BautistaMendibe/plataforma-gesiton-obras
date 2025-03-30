"use client";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";

export function FiltrosDropdown() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filtros
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="start">
                <div className="space-y-3">
                    <h3 className="text-sm font-medium">Filtrar proyectos</h3>
                    <Input placeholder="Buscar por nombre..." />
                    <Input placeholder="Buscar por cliente..." />
                    <Input placeholder="Buscar por tipo..." />
                    {/* más filtros según lo que quieras */}
                    <Button className="w-full mt-2">Aplicar filtros</Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
