'use client';

import Form from 'next/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Button } from './ui/button';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const BlogFilter = ({ filter, tags }: { filter?: string; tags?: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('filter', value);
    } else {
      params.delete('filter');
    }

    params.delete('page');

    router.push(`/blog?${params.toString()}`);
  };

  const tagsList = [
    { title: 'Health', value: 'health' },
    { title: 'Trauma', value: 'trauma' },
    { title: 'Identity', value: 'identity' },
    { title: 'Boundaries', value: 'boundaries' },
    { title: 'Relationships', value: 'relationships' },
    { title: 'Artificial Intelligence', value: 'artificial-intelligence' },
    { title: 'Emotional Intelligence', value: 'emotional-intelligence' },
    { title: 'Resilience', value: 'resilience' },
    { title: 'Parenting', value: 'parenting' },
    { title: 'Anger', value: 'anger' },
    { title: 'Child Development', value: 'child-development' },
    { title: 'Sleep', value: 'sleep' },
  ];

  return (
    <div className="add-padding px-2 space-y-3 md:space-y-5 md:py-8">
      <p className="font-semibold">Filters</p>

      <Form action="" scroll={false} className="flex flex-col gap-3">
        <Select
          name="filter"
          value={filter || 'latest'}
          onValueChange={handleFilterChange}
        >
          <SelectTrigger className="min-w-full border-brand-black">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>

        <div className="space-y-3 md:space-y-5">
          <p className="font-semibold">Popular Tags</p>
          <div className="flex gap-2 flex-wrap md:flex-col">
            {tagsList.map((list) => (
              <Link
                key={list.value}
                scroll={false}
                href={{
                  pathname: '/blog',
                  query: {
                    ...(filter && { filter }),
                    tags: list.value,
                  },
                }}
                className="block bg-brand-dark-green rounded-lg text-brand-white px-2 cursor-pointer hover:text-brand-cream"
              >
                {list.title}
              </Link>
            ))}
          </div>
        </div>

        {(filter || tags) && (
          <Button
            type="reset"
            className="text-brand-white hover:text-brand-dark-gray bg-red-500"
          >
            <Link href={`/blog`}>Reset Filter</Link>
          </Button>
        )}
      </Form>
    </div>
  );
};

export default BlogFilter;
