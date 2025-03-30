import { Button } from "@/components/ui/button";
import { Tabs } from "@radix-ui/react-tabs";
import {Plus} from "lucide-react";
import {TabsList, TabsTrigger} from "@/components/ui/tabs";
import ProyectCard from "@/components/proyects/ProyectCard";

export default function ProyectsPage() {
    return (
        <div className="p-2">
            <div className="mb-6 flex items-center gap-4">
                <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Create
                </Button>
                <Button variant="outline" className="gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path
                            d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Upload
                </Button>
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

            </div>

            <div className="mb-6">
                <Tabs defaultValue="recent">
                    <TabsList>
                        <TabsTrigger value="recent">Recent</TabsTrigger>
                        <TabsTrigger value="starred">Starred</TabsTrigger>
                        <TabsTrigger value="shared">Shared</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProyectCard title="Q4 Sales Deck" metadata="Shared folder • 8 presentations" thumbnail="/placeholder.svg" />
                <ProyectCard title="Product Videos" metadata="Shared folder • 5 videos" thumbnail="/placeholder.svg" />
                <ProyectCard title="ROI Calculator" metadata="Shared file • 1 Excel" thumbnail="/placeholder.svg" />
            </div>
        </div>
    );
}