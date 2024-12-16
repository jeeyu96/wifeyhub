import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";


export const WorkspaceSwitcher = () => {
    const workspaceId = useWorkspaceId();
    const [_open, setOpen] = useCreateWorkspaceModal();

    const { data: workspaces, isLoading: workspacesLoading } = useGetWorkspaces();
    const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({  
        id: workspaceId 
    });

    const filterWorkspaces = workspaces?.filter(
        (workspace) => workspace?._id !== workspaceId
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 text-slate-800 font-semibold text-xl]">
                    A
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="start" className="w-64">

            </DropdownMenuContent>
        </DropdownMenu>
    );
};