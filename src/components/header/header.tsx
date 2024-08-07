"use client";

import {
  Building2,
  CircleUser,
  CodeSquare,
  Database,
  Handshake,
  Key,
  LayoutDashboard,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function Header() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);

  return (
    <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='flex flex-col'>
          <nav className='grid gap-2 text-sm font-medium'>
            <Link
              href='#'
              className='flex items-center gap-2 text-sm font-semibold'
            >
              <div className='flex justify-start'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 378 380'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  data-testid='vf-tobi-logo'
                >
                  <g>
                    <path
                      fill='#e60000'
                      d='M 119.441406 14.328125 C 166.90625 -4.589844 222.195312 -3.28125 268.394531 18.691406 C 255.230469 16.691406 241.839844 18.199219 228.808594 20.402344 C 193.417969 27.085938 159.785156 43.738281 133.496094 68.476562 C 108.289062 93.253906 90.625 126.128906 85.636719 161.300781 C 82.335938 186.222656 85.394531 212.363281 96.578125 235.046875 C 108.101562 258.847656 128.386719 278.367188 152.835938 288.441406 C 176.394531 298.410156 203.722656 298.300781 227.585938 289.402344 C 263.390625 276.261719 289.117188 240.78125 292.058594 202.875 C 293.910156 178.03125 287.867188 151.601562 271.175781 132.546875 C 255.242188 113.894531 231.9375 103.621094 208.617188 97.773438 C 207.367188 74.773438 218.203125 52.050781 235.386719 37.09375 C 244.929688 28.488281 256.773438 23.003906 269.019531 19.492188 L 269.949219 19.171875 C 305.007812 35.984375 334.796875 63.710938 353.777344 97.75 C 370.039062 126.730469 378.519531 160.125 377.679688 193.390625 C 377.519531 236.40625 361.441406 278.996094 333.878906 311.886719 C 307.816406 343.253906 271.363281 365.816406 231.632812 374.851562 C 191.796875 384.042969 148.9375 380.078125 111.65625 363.148438 C 75.175781 346.855469 44.269531 318.53125 24.609375 283.691406 C 8.253906 254.738281 -0.398438 221.355469 0.320312 188.050781 C 0.398438 146.554688 15.132812 105.378906 40.859375 72.929688 C 61.410156 47.019531 88.671875 26.417969 119.441406 14.328125 Z M 119.441406 14.328125 '
                    ></path>
                    <path
                      fill='#ffffff'
                      d='M 228.808594 20.402344 C 241.839844 18.199219 255.230469 16.691406 268.394531 18.691406 L 270.285156 19.011719 L 269.019531 19.492188 C 256.773438 23.003906 244.929688 28.488281 235.386719 37.09375 C 218.203125 52.050781 207.367188 74.773438 208.617188 97.773438 C 231.9375 103.621094 255.242188 113.894531 271.175781 132.546875 C 287.867188 151.601562 293.910156 178.03125 292.058594 202.875 C 289.117188 240.78125 263.390625 276.261719 227.585938 289.402344 C 203.722656 298.300781 176.394531 298.410156 152.835938 288.441406 C 128.386719 278.367188 108.101562 258.847656 96.578125 235.046875 C 85.394531 212.363281 82.335938 186.222656 85.636719 161.300781 C 90.625 126.128906 108.289062 93.253906 133.496094 68.476562 C 159.785156 43.738281 193.417969 27.085938 228.808594 20.402344 Z M 228.808594 20.402344 '
                    ></path>
                  </g>
                </svg>
              </div>
              <span className=''>Tobi Configurations</span>
            </Link>
            <Link
              href='/dashboards'
              className='mx-[-0.65rem] flex items-center gap-4 bg-muted rounded-xl px-3 py-2 text-foreground hover:text-red-600'
            >
              <LayoutDashboard className='h-5 w-5 text-red-500' />
              Dashboard
            </Link>
            <Link
              href='#'
              className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-red-600'
            >
              <CodeSquare className='h-5 w-5 text-blue-500' />
              Configurations
              {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge> */}
            </Link>
            <Link
              href='#'
              className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-red-600'
            >
              <Database className='h-5 w-5 text-orange-500' />
              Deployments
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className='flex w-full'>
        <Link href='/' className='flex items-center gap-2 font-semibold'>
          <div className='flex justify-start'>
            <svg
              width={24}
              height={24}
              viewBox='0 0 378 380'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-testid='vf-tobi-logo'
            >
              <g>
                <path
                  fill='#e60000'
                  d='M 119.441406 14.328125 C 166.90625 -4.589844 222.195312 -3.28125 268.394531 18.691406 C 255.230469 16.691406 241.839844 18.199219 228.808594 20.402344 C 193.417969 27.085938 159.785156 43.738281 133.496094 68.476562 C 108.289062 93.253906 90.625 126.128906 85.636719 161.300781 C 82.335938 186.222656 85.394531 212.363281 96.578125 235.046875 C 108.101562 258.847656 128.386719 278.367188 152.835938 288.441406 C 176.394531 298.410156 203.722656 298.300781 227.585938 289.402344 C 263.390625 276.261719 289.117188 240.78125 292.058594 202.875 C 293.910156 178.03125 287.867188 151.601562 271.175781 132.546875 C 255.242188 113.894531 231.9375 103.621094 208.617188 97.773438 C 207.367188 74.773438 218.203125 52.050781 235.386719 37.09375 C 244.929688 28.488281 256.773438 23.003906 269.019531 19.492188 L 269.949219 19.171875 C 305.007812 35.984375 334.796875 63.710938 353.777344 97.75 C 370.039062 126.730469 378.519531 160.125 377.679688 193.390625 C 377.519531 236.40625 361.441406 278.996094 333.878906 311.886719 C 307.816406 343.253906 271.363281 365.816406 231.632812 374.851562 C 191.796875 384.042969 148.9375 380.078125 111.65625 363.148438 C 75.175781 346.855469 44.269531 318.53125 24.609375 283.691406 C 8.253906 254.738281 -0.398438 221.355469 0.320312 188.050781 C 0.398438 146.554688 15.132812 105.378906 40.859375 72.929688 C 61.410156 47.019531 88.671875 26.417969 119.441406 14.328125 Z M 119.441406 14.328125 '
                ></path>
                <path
                  fill='#ffffff'
                  d='M 228.808594 20.402344 C 241.839844 18.199219 255.230469 16.691406 268.394531 18.691406 L 270.285156 19.011719 L 269.019531 19.492188 C 256.773438 23.003906 244.929688 28.488281 235.386719 37.09375 C 218.203125 52.050781 207.367188 74.773438 208.617188 97.773438 C 231.9375 103.621094 255.242188 113.894531 271.175781 132.546875 C 287.867188 151.601562 293.910156 178.03125 292.058594 202.875 C 289.117188 240.78125 263.390625 276.261719 227.585938 289.402344 C 203.722656 298.300781 176.394531 298.410156 152.835938 288.441406 C 128.386719 278.367188 108.101562 258.847656 96.578125 235.046875 C 85.394531 212.363281 82.335938 186.222656 85.636719 161.300781 C 90.625 126.128906 108.289062 93.253906 133.496094 68.476562 C 159.785156 43.738281 193.417969 27.085938 228.808594 20.402344 Z M 228.808594 20.402344 '
                ></path>
              </g>
            </svg>
          </div>
          <span className=''>Tobi Configurations</span>
        </Link>
      </div>
      <div className='w-full flex justify-end'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='outline'
              className='text-gray-700 transition-colors hover:text-red-600'
            >
              Switch Teams
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>Teams</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              Tobi UI
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
            >
              Tobi Core Engine
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              Tobi Composer
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='secondary' size='icon' className='rounded-full'>
            <CircleUser className='h-5 w-5' />
            <span className='sr-only'>Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <Button className='border-2 w-40 bg-red-600 hover:bg-red-500 text-gray-50'>
            Logout
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
