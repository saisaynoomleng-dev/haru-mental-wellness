import Banner from '@/components/Banner';
import Bounded from '@/components/Bounded';
import Cta from '@/components/Cta';
import Newsletter from '@/components/Newsletter';
import { SpinnerBlock } from '@/components/Spinner';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Home() {
  return (
    <Bounded variant="without-padding">
      {/* Hero */}
      <div className="grid grid-cols-2 row-auto md:grid-cols-4 gap-2 text-center md:gap-0 px-10 md:px-14">
        <div className="col-start-1 md:place-self-end">
          <Image
            src="/hero-1.jpg"
            alt=""
            width={500}
            height={500}
            priority
            className="-rotate-4 rounded-sm"
          />
        </div>

        <p
          className="col-start-1 row-start-2 col-span-full uppercase font-medium md:col-start-2 md:col-span-2 md:row-start-2
          md:text-start
          text-fs-200"
        >
          We care about{' '}
          <span className="underline underline-offset-2 decoration-1 decoration-wavy decoration-brand-cream">
            your
          </span>
        </p>

        <Title
          as="h1"
          size="md"
          className="col-start-1 row-start-3 col-span-full font-serif uppercase font-normal
          md:col-start-2
          md:col-span-2"
        >
          Mental
        </Title>

        <Title
          as="h1"
          size="md"
          className="col-start-1 row-start-4 col-span-full uppercase font-normal md:col-start-3 md:col-span-2 md:text-start"
        >
          health
        </Title>

        <div className="col-start-1 row-start-5 col-span-full md:col-start-2 md:row-start-4 md:col-span-1 md:p-2">
          <Button className="md:w-full md:h-full">View more</Button>
        </div>

        <div className="col-start-2 place-self-end md:col-start-3 md:col-span-2">
          <Image
            src="/hero-2.jpg"
            alt=""
            width={500}
            height={500}
            priority
            className="rotate-6 rounded-sm"
          />
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
      </div>

      {/* About Mental Health */}
      <div className="grid grid-cols-2 gap-5 md:gap-10 row-auto md:grid-cols-6 px-10 md:px-14">
        <Title
          as="h1"
          size="md"
          className="uppercase font-serif col-span-full row-start-1"
        >
          Mental health is{' '}
          <span className="text-brand-light-green">preserved</span>
          <span className="text-brand-orange">wealth</span>
        </Title>

        <SpinnerBlock
          fill="#708840"
          className="col-span-full size-10 md:size-14 md:col-span-1"
        />

        <div className="col-start-1 col-span-full flex flex-col gap-y-5 md:gap-y-8 md:col-start-2 md:col-span-3 md:text-center md:row-start-2">
          <p className="first-letter:text-fs-700 first-letter:font-serif first-letter:float-left first-letter:mr-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            necessitatibus culpa quidem. Doloribus totam blanditiis atque
            eligendi incidunt aperiam libero. Tempora eligendi quo modi quisquam
            eum quasi recusandae dicta adipisci!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui
            soluta nemo minus natus doloremque laboriosam quam. Dolor delectus
            debitis qui modi? Ullam ex minima ipsa suscipit adipisci totam
            obcaecati doloribus harum vitae alias. Ducimus, est assumenda.
            Saepe, quae praesentium.
          </p>

          <Cta href="/" className="self-start" />
        </div>

        <div className="col-start-1 col-span-1 row-span-2 self-center md:col-start-1 md:col-span-2 md:row-start-3">
          <Image
            src="/mindfulness-1.jpg"
            alt=""
            width={500}
            height={500}
            priority
            className="rounded-full"
          />
        </div>

        <div className="col-start-2 col-span-1 md:col-start-5 md:row-start-2 md:col-span-2 md:self-center md:row-span-2">
          <Image
            src="/mindfulness-22.jpg"
            alt=""
            width={500}
            height={500}
            priority
            className="rounded-full"
          />
        </div>

        <div className="col-start-2 col-span-1 md:col-start-5 md:self-end md:row-start-4">
          <Image
            src="/mindfulness-3.jpg"
            alt=""
            width={500}
            height={500}
            priority
            className="rounded-full"
          />
        </div>

        <Title
          className="font-serif col-start-1 col-span-full md:col-start-2 md:col-span-3 "
          as="h3"
          size="sm"
        >
          Why Mental Health{' '}
          <span className="text-brand-light-green underline underline-offset-6 decoration-3 decoration-wavy decoration-brand-cream">
            Matters
          </span>
        </Title>

        <p className="col-start-1 col-span-full md:col-start-3 md:col-span-2 first-line:text-brand-light-green first-line:font-semibold text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          repellendus quas consequuntur tenetur. Repellat atque saepe assumenda
          impedit, voluptates temporibus. Tempore fugiat unde sint quae quis
          eos, illo harum. Mollitia in provident esse ducimus sed aliquid porro
          exercitationem dicta eligendi.
        </p>

        <Banner className="row-start-8 col-span-full" />
      </div>

      {/* Treatment */}
      <div className="flex flex-col md:flex-row gap-y-5 bg-brand-light-gray px-10 md:px-14 py-10 text-brand-dark-gray">
        <Title as="h3" size="sm" className="uppercase md:flex-1/2">
          How Can we help you today?
        </Title>

        <div className="divide-y-2 divide-brand-dark-gray">
          {/* treatments  */}
        </div>
      </div>

      {/* Quote */}
      <div className="flex flex-col px-10 md:px-14 py-5  text-brand-light-green font-semibold border-b border-b-brand-dark-blue">
        <p className="text-fs-500 flex gap-3">
          <span className="text-brand-orange text-fs-600">
            <FaQuoteLeft />
          </span>{' '}
          We want to make sure our employees feel supported as we all adjust to
          this new way of working.
        </p>

        <div className="self-end">
          <p>———&nbsp;Haru</p>
        </div>
      </div>

      {/* newsletter */}
      <div className="flex  gap-5 md:gap-10 flex-col item-center justify-center text-center py-10">
        <Title as="h2" size="md" className="uppercase">
          Want to know How we help{' '}
          <span className="font-serif underline underline-offset-6 decoration-wavy decoration-2 decoration-brand-cream text-brand-light-green">
            people
          </span>
          ?
        </Title>
        <p>
          Join our{' '}
          <span className="text-brand-orange font-bold"> Newsletter</span>
        </p>

        <Newsletter />
      </div>
    </Bounded>
  );
}
