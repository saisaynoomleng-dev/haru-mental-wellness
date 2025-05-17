import BlogCard from '@/components/BlogCard';
import BlogFilter from '@/components/BlogFilter';
import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import { LATEST_BLOGS_QUERY, OLDEST_BLOGS_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import { Metadata } from 'next';
import Link from 'next/link';
import { GrPrevious, GrNext } from 'react-icons/gr';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'All Haru Mental Wellness blogs',
};

const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    filter?: string;
    tags?: string;
  }>;
}) => {
  const { page, filter, tags } = await searchParams;
  const params = {
    filter: filter || null,
    tags: tags || null,
  };

  const oldestQuery = OLDEST_BLOGS_QUERY;
  const latestQuery = LATEST_BLOGS_QUERY;
  const blogQuery = filter === 'oldest' ? oldestQuery : latestQuery;

  const { data: allBlogs } = await sanityFetch({ query: blogQuery, params });

  const currentPage = parseInt(page || '1', 10);
  const blogsPerPage = 6;
  const totalBlogs = allBlogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const blogs = allBlogs.slice(startIndex, endIndex);

  return (
    <Bounded>
      <Title as="h1" size="sm" className="uppercase text-center">
        Let&apos;s take a good control of our own{' '}
        <span className="font-serif text-brand-orange">health</span>
      </Title>

      <div className="grid md:grid-cols-[auto_1fr] gap-5 md:gap-10 bg-brand-cream text-brand-dark-gray">
        {/* filter */}
        <BlogFilter filter={filter} tags={tags} />

        {/* blogs */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 py-2 md:py-5 px-2 md:px-4">
          <Title as="h2" size="sm" className="uppercase col-span-full ">
            Today&apos;s Essential <span className="font-serif">Reads</span>
          </Title>

          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug?.current}
              href={`/blog/${blog?.slug?.current}`}
              {...blog}
            />
          ))}

          <div className="col-span-full flex gap-3 items-center">
            <Button variant="pagination" disabled={currentPage === 1}>
              <Link
                href={{
                  pathname: '/blog',
                  query: {
                    ...(filter && { filter }),
                    ...(tags && { tags }),
                    page: currentPage > 1 ? currentPage - 1 : currentPage,
                  },
                }}
              >
                <GrPrevious />
              </Link>
            </Button>
            {totalPages > 1 && (
              <div className="flex gap-3">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNumber) => (
                    <Link
                      key={pageNumber}
                      href={{
                        pathname: '/blog',
                        query: {
                          ...(filter && { filter }),
                          ...(tags && { tags }),
                          page: pageNumber,
                        },
                      }}
                      className={clsx(
                        '',
                        pageNumber === currentPage &&
                          'text-brand-light-green font-semibold',
                      )}
                    >
                      {pageNumber}
                    </Link>
                  ),
                )}
              </div>
            )}
            <Button variant="pagination" disabled={currentPage === totalPages}>
              <Link
                href={{
                  pathname: '/blog',
                  query: {
                    ...(filter && { filter }),
                    ...(tags && { tags }),
                    page:
                      currentPage < totalPages ? currentPage + 1 : currentPage,
                  },
                }}
              >
                <GrNext />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default BlogPage;
