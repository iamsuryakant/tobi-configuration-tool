'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleCreateConfiguration = () => {
    router.push('/tobiui/configurations/create');
  };
  return (
    <div className='flex min-h-screen left-0 w-full flex-col bg-muted/40'>
      <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
        <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
          <Tabs defaultValue='all'>
            <div className='flex items-center'>
              <TabsList>
                <TabsTrigger value='all'>All</TabsTrigger>
                <TabsTrigger value='active'>Active</TabsTrigger>
                <TabsTrigger value='draft'>Draft</TabsTrigger>
                <TabsTrigger value='archived' className='hidden sm:flex'>
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className='ml-auto flex items-center gap-2'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='outline' size='sm' className='h-8 gap-1'>
                      <ListFilter className='h-3.5 w-3.5' />
                      <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size='sm' variant='outline' className='h-8 gap-1'>
                  <File className='h-3.5 w-3.5' />
                  <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                    Export
                  </span>
                </Button>
                <Button
                  size='sm'
                  className='h-8 gap-1 bg-red-600 hover:bg-red-500'
                  onClick={handleCreateConfiguration}
                >
                  <PlusCircle className='h-3.5 w-3.5' />
                  <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                    Create Configuration
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value='all'>
              <Card>
                <CardHeader>
                  <CardTitle>Configurations</CardTitle>
                  <CardDescription>
                    Manage your configurations and view their details.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className='text-gray-800'>Id</TableHead>
                        <TableHead className='text-gray-800'>Name</TableHead>
                        <TableHead className='text-gray-800'>
                          Configuration Language
                        </TableHead>
                        <TableHead className='hidden text-gray-800 md:table-cell'>
                          Status
                        </TableHead>
                        <TableHead className='hidden text-gray-800 md:table-cell'>
                          Created at
                        </TableHead>
                        <TableHead className='hidden text-gray-800 md:table-cell'>
                          Updated at
                        </TableHead>
                        <TableHead>
                          <span className='text-gray-800'>Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className='hidden sm:table-cell'>
                          123456
                        </TableCell>
                        <TableCell className='font-medium'>
                          Laser Lemonade Machine
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          en
                        </TableCell>
                        <TableCell>
                          <Badge variant='outline' className='text-blue-600'>
                            Draft
                          </Badge>
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2023-07-12 10:42 AM
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2023-07-12 10:42 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup='true'
                                size='icon'
                                variant='ghost'
                              >
                                <MoreHorizontal className='h-5 w-5' />
                                <span className='sr-only'>Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='hidden sm:table-cell'>
                          2345678
                        </TableCell>
                        <TableCell className='font-medium'>
                          Hypernova Headphones
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          al
                        </TableCell>
                        <TableCell>
                          <Badge variant='outline' className='text-green-600'>
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2023-10-18 03:21 PM
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2023-10-18 03:21 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup='true'
                                size='icon'
                                variant='ghost'
                              >
                                <MoreHorizontal className='h-5 w-5' />
                                <span className='sr-only'>Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='hidden sm:table-cell'>
                          345678
                        </TableCell>
                        <TableCell className='font-medium'>
                          AeroGlow Desk Lamp
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          en
                        </TableCell>
                        <TableCell>
                          <Badge variant='outline' className='text-green-600'>
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2023-11-29 08:15 AM
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2023-11-29 08:15 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup='true'
                                size='icon'
                                variant='ghost'
                              >
                                <MoreHorizontal className='h-5 w-5' />
                                <span className='sr-only'>Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='hidden sm:table-cell'>
                          4567890
                        </TableCell>
                        <TableCell className='font-medium'>
                          TechTonic Energy Drink
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          de
                        </TableCell>
                        <TableCell>
                          <Badge variant='outline' className='text-blue-600'>
                            Draft
                          </Badge>
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2023-12-25 11:59 PM
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2023-12-25 11:59 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup='true'
                                size='icon'
                                variant='ghost'
                              >
                                <MoreHorizontal className='h-5 w-5' />
                                <span className='sr-only'>Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='hidden sm:table-cell'>
                          5678901
                        </TableCell>
                        <TableCell className='font-medium'>
                          Gamer Gear Pro Controller
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          en
                        </TableCell>
                        <TableCell>
                          <Badge variant='outline' className='text-green-600'>
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2024-01-01 12:00 AM
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2024-01-01 12:00 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup='true'
                                size='icon'
                                variant='ghost'
                              >
                                <MoreHorizontal className='h-5 w-5' />
                                <span className='sr-only'>Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className='hidden sm:table-cell'>
                          23456789
                        </TableCell>
                        <TableCell className='font-medium'>
                          Luminous VR Headset
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          en
                        </TableCell>
                        <TableCell>
                          <Badge variant='outline' className='text-green-600'>
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2024-02-14 02:14 PM
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2024-02-14 02:14 PM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup='true'
                                size='icon'
                                variant='ghost'
                              >
                                <MoreHorizontal className='h-5 w-5' />
                                <span className='sr-only'>Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className='flex justify-between'>
                  <div className='text-xs text-muted-foreground'>
                    Showing <strong>1-10</strong> of <strong>32</strong>{' '}
                    products
                  </div>
                  <div className='text-md text-muted-foreground'>
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href='#' />
                        </PaginationItem>
                        <PaginationItem>
                          <Link href='#'>1</Link>
                        </PaginationItem>
                        <PaginationItem>
                          <Link href='#'>2</Link>
                        </PaginationItem>
                        <PaginationItem>
                          <Link href='#'>3</Link>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href='#' />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
