import { CodeSquare, Database, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1 p-4">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/tobiui/dashboards"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-foreground transition-all hover:text-red-600"
            >
              <LayoutDashboard className="h-5 w-5 text-red-500" />
              Dashboard
            </Link>
            <Link
              href="/tobiui/configurations"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-red-600"
            >
              <CodeSquare className="h-5 w-5 text-blue-500" />
              Configurations
              {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge> */}
            </Link>
            <Link
              href="/tobiui/deployments"
              className="flex items-center gap-3 rounded-lg  px-3 py-2 text-muted-foreground transition-all hover:text-red-600"
            >
              <Database className="h-5 w-5 text-orange-500" />
              Deployments{" "}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
