import {
  CurtainEffect,
  FadeIn,
  LineTextHeight,
  RandomTextEffect,
  ScrubberEffect,
  SlideIn,
  SlideInGroup,
  TypeWriter,
  WaterFillIn,
} from '@/components/animations/Effects';
import Banner from '@/components/Banner';
import Bounded from '@/components/Bounded';
import Cta from '@/components/Cta';
import FAQ from '@/components/FAQ';
import NewsSubscription from '@/components/NewsSubscription';
import ReviewForm from '@/components/ReviewForm';
import { SpinnerBlock } from '@/components/Spinner';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { TREATMENTS_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuoteLeft } from 'react-icons/fa';

export default async function Home() {
  const { data: treatments } = await sanityFetch({ query: TREATMENTS_QUERY });
  return (
    <Bounded>
      {/* Hero */}
      <div className="grid grid-cols-2 row-auto md:grid-cols-4 gap-2 text-center md:gap-0 add-padding">
        <CurtainEffect direction="top">
          <div className="col-start-1 md:place-self-end">
            <Image
              src="/hero-1.jpg"
              alt=""
              width={500}
              height={500}
              priority
              className="-rotate-4 rounded-full"
            />
          </div>

          <div className="col-start-2 place-self-end md:col-start-3 md:col-span-2 max-w-[300px] max-h-[300px] triangle-image">
            <Image
              src="/hero-2.jpg"
              alt=""
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <RandomTextEffect
            className="col-start-1 row-start-2 col-span-full uppercase font-medium md:col-start-2 md:col-span-2 md:row-start-2
            md:text-start
            text-fs-200"
          >
            <p>
              We care about{' '}
              <span className="underline underline-offset-2 decoration-1 decoration-wavy decoration-brand-cream">
                your
              </span>
            </p>
          </RandomTextEffect>

          <RandomTextEffect
            className="col-start-1 row-start-3 col-span-full font-serif uppercase font-normal
            md:col-start-2
            md:col-span-2"
          >
            <Title as="h1" size="md">
              Mental
            </Title>
          </RandomTextEffect>
        </CurtainEffect>

        <CurtainEffect direction="bottom">
          <RandomTextEffect className="col-start-1 row-start-4 col-span-full uppercase font-normal md:col-start-3 md:col-span-2 md:text-start">
            <Title as="h1" size="md">
              health
            </Title>
          </RandomTextEffect>

          <div className="col-start-1 row-start-5 col-span-full md:col-start-2 md:row-start-4 md:col-span-1 md:p-2">
            <Button className="md:w-full md:h-full">
              <Link href="/therapist">View More</Link>
            </Button>
          </div>

          <div className="col-start-1 col-span-full row-start-6 md:col-start-4 place-self-center">
            <Image
              src="/hero-3.jpg"
              alt=""
              width={500}
              height={500}
              priority
              className="rounded-sm"
            />
          </div>
        </CurtainEffect>
      </div>

      {/* About Mental Health */}
      <div className="grid grid-cols-2 gap-5 md:gap-10 row-auto md:grid-cols-6 add-padding">
        <ScrubberEffect className="uppercase font-serif col-span-full row-start-1">
          <Title as="h1" size="md" className="">
            Mental health is{' '}
            <span className="text-brand-light-green">preserved</span>
            <span className="text-brand-orange">wealth</span>
          </Title>
        </ScrubberEffect>

        <SpinnerBlock
          fill="#708840"
          className="col-span-full size-10 md:size-14 md:col-span-1"
        />

        <div className="col-start-1 col-span-full flex flex-col gap-y-5 md:gap-y-8 md:col-start-2 md:col-span-3 md:text-center md:row-start-2">
          <LineTextHeight className="first-letter:text-fs-700 first-letter:font-serif first-letter:float-left first-letter:mr-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            necessitatibus culpa quidem. Doloribus totam blanditiis atque
            eligendi incidunt aperiam libero. Tempora eligendi quo modi quisquam
            eum quasi recusandae dicta adipisci!
          </LineTextHeight>
          <LineTextHeight>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui
            soluta nemo minus natus doloremque laboriosam quam. Dolor delectus
            debitis qui modi? Ullam ex minima ipsa suscipit adipisci totam
            obcaecati doloribus harum vitae alias. Ducimus, est assumenda.
            Saepe, quae praesentium.
          </LineTextHeight>

          <Cta href="/treatment" className="self-start" />
        </div>

        <WaterFillIn className="col-start-1 col-span-1 row-span-2 self-center md:col-start-1 md:col-span-2 md:row-start-3">
          <Image
            src="/mindfulness-1.jpg"
            alt=""
            width={500}
            height={500}
            priority
            className="rounded-full"
          />
        </WaterFillIn>

        <WaterFillIn className="col-start-2 col-span-1 md:col-start-5 md:row-start-2 md:col-span-2 md:self-center md:row-span-2">
          <Image
            src="/mindfulness-22.jpg"
            alt=""
            width={500}
            height={500}
            priority
            className="rounded-full"
          />
        </WaterFillIn>

        <WaterFillIn className="col-start-2 col-span-1 md:col-start-5 md:self-end md:row-start-4">
          <Image
            src="/mindfulness-3.jpg"
            alt=""
            width={500}
            height={500}
            priority
            className="rounded-full"
          />
        </WaterFillIn>

        <WaterFillIn className="font-serif col-start-1 col-span-full md:col-start-2 md:col-span-3 ">
          <Title as="h3" size="sm">
            Why Mental Health <span className="wavy-em">Matters</span>
          </Title>
        </WaterFillIn>

        <LineTextHeight className="col-start-1 col-span-full md:col-start-3 md:col-span-2 first-line:text-brand-light-green first-line:font-semibold text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          repellendus quas consequuntur tenetur. Repellat atque saepe assumenda
          impedit, voluptates temporibus. Tempore fugiat unde sint quae quis
          eos, illo harum. Mollitia in provident esse ducimus sed aliquid porro
          exercitationem dicta eligendi.
        </LineTextHeight>

        <Banner className="row-start-8 col-span-full" />
      </div>

      {/* Treatment */}
      <div className="grid md:grid-cols-[300px_1fr] gap-y-5 bg-brand-light-gray px-10 add-padding text-brand-dark-gray py-42 gap-10 overflow-hidden">
        <SlideIn direction="left" duration={0.5}>
          <Title as="h3" size="sm" className="uppercase">
            How Can we help you today?
          </Title>
        </SlideIn>

        <SlideInGroup direction="right">
          {treatments.map((treatment) => (
            <Link
              href={`/treatment/${treatment.slug?.current}`}
              key={treatment.slug?.current}
              className="group py-10 block"
            >
              <div className="relative">
                <span className="uppercase block border-b relative z-20 font-bold group-hover:text-brand-orange">
                  {treatment.title}
                </span>
                {treatment.mainImage?.asset?.url && (
                  <Image
                    src={urlFor(treatment.mainImage?.asset?.url)
                      .width(200)
                      .height(200)
                      .format('webp')
                      .url()}
                    width={200}
                    height={200}
                    alt=""
                    priority
                    className="opacity-0 group-hover:opacity-100 absolute z-10 left-20 top-0 rounded-full transition-all duration-500 ease-in-out"
                  />
                )}
              </div>
            </Link>
          ))}
        </SlideInGroup>
      </div>

      {/* Quote */}
      <div className="flex flex-col px-10 md:px-14 py-5  text-brand-light-green font-semibold border-b border-b-brand-dark-blue">
        <p className="text-fs-500 flex gap-3">
          <span className="text-brand-orange text-fs-600">
            <FaQuoteLeft />
          </span>{' '}
          <TypeWriter
            text="We want to make sure our employees feel supported as we all adjust to
          this new way of working."
          />
        </p>

        <div className="self-end">
          <p>———&nbsp;Haru</p>
        </div>
      </div>

      {/* review form */}
      <SlideIn direction="left">
        <ReviewForm />
      </SlideIn>

      <FadeIn>
        <FAQ />
      </FadeIn>

      {/* newsletter */}
      <SlideIn direction="right">
        <NewsSubscription />
      </SlideIn>
    </Bounded>
  );
}
