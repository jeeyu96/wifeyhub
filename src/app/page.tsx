"use client";

import { useEffect, useMemo } from "react";

import { UserButton } from "@/features/auth/components/user-button";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/store/use-create-workspace-modal";



export default function Home () {
  const [open, setOpen] = useCreateWorkspaceModal();

  const { data, isLoading } = useGetWorkspaces();

  const workspaceID = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceID) {
      console.log("Redirect to workspace")
    } else if (!open){
      setOpen(true);

      console.log("Open creation modal");
    }
  }, [workspaceID, isLoading, open, setOpen]);

  return (
    <div>
      <UserButton />
    </div>
  );
};