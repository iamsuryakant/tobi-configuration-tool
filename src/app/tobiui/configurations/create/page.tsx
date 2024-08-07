'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Editor from '@monaco-editor/react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .min(1, { message: 'Name is required.' }),
  market: z.string().min(1, { message: 'Please select a market to display.' }),
  environment: z
    .string()
    .min(1, { message: 'Please select an environment to display.' }),
  appId: z.string().min(1, { message: 'Please select an app id to display.' }),
  configurationLanguage: z
    .string()
    .min(1, { message: 'Please select a configuration language to display.' }),
  jsonConfiguration: z.string().min(50, {
    message: 'Please add some valid configuration before submitting.',
  }),
});

export default function CreateConfigurations() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      market: '',
      environment: '',
      appId: '',
      configurationLanguage: '',
      jsonConfiguration: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <>
      <Breadcrumb className='hidden m-5 md:flex'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href='#'>Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href='#'>Configurations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>create</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className='text-md font-bold m-5'>Create Configurations</h2>
      <div className='flex justify-center p-2'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-2/3 space-y-6'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Configuration Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='market'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Market</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a market to display' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='VF-Group'>VF-Group</SelectItem>
                      <SelectItem value='VF-ABC'>VF-ABC</SelectItem>
                      <SelectItem value='VF-BCD'>VF-BCD</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='environment'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Environment</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select an environment to display' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='DEV'>DEV</SelectItem>
                      <SelectItem value='QA'>QA</SelectItem>
                      <SelectItem value='STG'>STG</SelectItem>
                      <SelectItem value='PP'>PP</SelectItem>
                      <SelectItem value='PROD'>PROD</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='appId'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>App Id</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select an app Id to display' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='TOBiUI_DEV_GROUP_TOBi'>
                        TOBiUI_DEV_GROUP_TOBi
                      </SelectItem>
                      <SelectItem value='TOBiUI_DEV_GROUP_TOBi_CB'>
                        TOBiUI_DEV_GROUP_TOBi_CB
                      </SelectItem>
                      <SelectItem value='TOBiUI_DEV_GROUP_TOBi_CZ'>
                        TOBiUI_DEV_GROUP_TOBi_CZ
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='configurationLanguage'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Configuration Language</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a configuration language to display' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='en'>en</SelectItem>
                      <SelectItem value='al'>al</SelectItem>
                      <SelectItem value='de'>de</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='jsonConfiguration'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add your configuration below.</FormLabel>
                  <FormControl>
                    <div className='rounded-xl overflow-hidden'>
                      <Editor
                        height='100vh'
                        language='json'
                        theme='vs-dark'
                        value={JSON.stringify({}, null, 2)}
                        onChange={field.onChange}
                        defaultLanguage='json'
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='mt-10 mb-10 flex justify-center'>
              <Button type='submit' className='bg-red-600 hover:bg-red-500'>
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
