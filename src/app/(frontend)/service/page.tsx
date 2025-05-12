import Banner from '@/components/Banner';
import Bounded from '@/components/Bounded';
import Cta from '@/components/Cta';
import NewsSubscription from '@/components/NewsSubscription';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const ServicePage = () => {
  return (
    <Bounded>
      {/* hero */}
      <div className="flex gap-5 md:gap-10 justify-center items-center px-10 md:px-14">
        <div className="flex-1">
          <Image
            src="/service-1.jpg"
            alt=""
            priority
            width={500}
            height={500}
            className="rounded-sm object-cover mx-auto max-h-[300px] w-auto"
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-5 text-center flex-1">
          <Title as="h1" size="md" className="uppercase">
            <span className='after:content-["*"] after:text-brand-orange inline-block after:ml-0.5'>
              stay
            </span>
            <span className="font-serif">mentally</span> strong
          </Title>
          <Cta href="/treatment" className="self-start" />
        </div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-12 gap-2 md:gap-4 px-10 md:px-14 bg-brand-light-gray text-brand-dark-green py-5 md:py-10">
        <Title as="h2" size="md" className="uppercase col-span-full">
          a better you, <span className="font-serif block">today.</span>
        </Title>

        <p className="col-span-full text-brand-brown text-fs-300 font-medium md:col-start-4 md:col-end-11">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          dolores dolorem, ratione sapiente repellendus architecto maiores nemo
          distinctio voluptatum aperiam rem debitis facere voluptatem eos
          quaerat deserunt, placeat veritatis quibusdam ad atque? Ullam sit
          debitis, maxime iusto assumenda distinctio adipisci est optio, aliquid
          non, nam a tempore tenetur excepturi similique.
        </p>

        <Cta href="/treatment" className="col-start-1 w-1/2 md:col-start-4" />

        <Banner className="col-span-full" />

        <div className="bg-brand-light-gray text-brand-dark-gray col-span-full">
          <p className="text-fs-900 overflow-hidden font-serif uppercase text-nowrap border-b border-b-brand-light-green">
            mental health is preserved{' '}
            <span className="text-fs-light-green">wealth</span>
          </p>

          <p className="text-fs-900 overflow-hidden font-serif uppercase text-nowrap ">
            This is the only
            <span className="text-fs-light-green">journey</span>
          </p>
        </div>
      </div>

      {/* reviews */}

      <div className="grid md:place-items-center px-10 md:px-14 text-center gap-4 md:gap-10">
        <Title as="h2" size="md" className="uppercase md:order-1">
          Mind your
        </Title>

        <Title as="h2" size="md" className="font-serif uppercase md:order-3">
          health
        </Title>

        <p className="text-fs-200 md:order-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quo
          quam incidunt ab consectetur fugiat, autem repellendus natus aliquam,
          sunt, hic saepe earum magni eaque aperiam deserunt? Illo quos,
          provident suscipit nisi culpa et ipsum commodi veritatis quibusdam
          laborum praesentium consequatur magnam accusantium dicta harum, qui
          atque vel possimus fuga totam? Iure sed facilis hic, nobis a assumenda
          harum obcaecati?
        </p>

        <div className="md:order-2">
          <Image
            alt="a woman doing yoga pose on the rock at the beach in the early morning"
            priority
            width={500}
            height={500}
            className="rounded-lg"
            src="/service-2.jpg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3 md:gap-5 p-5 h-[800px] md:h-[500px] items-center">
        <div className="grid grid-cols-4 grid-rows-4 relative place-items-center">
          <div className="col-start-1 col-span-3 w-full aspect-square rounded-full bg-brand-light-green/5 absolute z-10" />
          <Image
            src="/service-3.jpg"
            alt="a group of people meditating in the forest"
            priority
            className="col-start-2 col-span-full row-start-2 row-end-4 relative z-20 md:row-start-1 md:row-end-5"
            width={200}
            height={200}
          />
        </div>

        <div className="flex flex-col gap-3 md:gap-5">
          <Title as="h3" size="sm" className="uppercase">
            why inidivual preferences matter in mental{' '}
            <span className="font-serif">health care</span>
          </Title>
          <Button variant="link" className="self-start">
            <Link href="/treatment">View More</Link>
          </Button>
        </div>
      </div>

      <NewsSubscription />
    </Bounded>
  );
};

export default ServicePage;
