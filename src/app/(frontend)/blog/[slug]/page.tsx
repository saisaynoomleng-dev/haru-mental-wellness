import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { formatDate } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { BLOG_QUERY } from '@/sanity/lib/queries';
import { MyPortableTextComponent } from '@/sanity/MyPortableTextComponent';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: blog } = await sanityFetch({
    query: BLOG_QUERY,
    params: await params,
  });

  if (!blog) {
    notFound();
  }

  return (
    <Bounded className="add-padding !space-y-2 !md:space-y-5">
      <Link href={`/blog`} className="flex gap-2 items-center col-span-full">
        <FaArrowLeft /> Back to All Blogs
      </Link>

      <div className="grid md:grid-cols-[auto_1fr] gap-y-1 gap-x-5 md:gap-y-2 md:gap-x-10 items-start">
        <Link
          href={`/author/${blog.author?.slug?.current}`}
          className="flex flex-col gap-2 items-center justify-center"
        >
          <div className="md:max-w-[300px]">
            {blog.author?.mainImage?.asset?.url && (
              <Image
                src={urlFor(blog.author.mainImage.asset.url)
                  .width(200)
                  .height(200)
                  .format('webp')
                  .url()}
                alt={blog.author.mainImage.alt || ''}
                priority
                width={200}
                height={200}
                className="rounded-full object-cover mx-auto max-w-[100px]"
              />
            )}
          </div>

          <p className="text-fs-200">{blog.author?.name}</p>
        </Link>

        <div className="flex flex-col gap-1 md:gap-2">
          <p className="text-brand-orange">{blog.category}</p>
          <Title as="h1" size="sm">
            {blog.title}
          </Title>
          <p className="italic font-medium text-brand-light-green">
            {blog.subtitle}
          </p>
          <p className="text-fs-200">
            Posted {blog.publishedAt && formatDate(blog.publishedAt)}
          </p>

          <div className="prose md:prose-lg lg:prose-xl min-w-full mt-3 md:mt-5">
            {blog.desc && (
              <PortableText
                value={blog.desc}
                components={MyPortableTextComponent}
              />
            )}
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default BlogDetailPage;
