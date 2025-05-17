import Bounded from '@/components/Bounded';
import Cta from '@/components/Cta';
import NewsSubscription from '@/components/NewsSubscription';
import Title from '@/components/Title';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <Bounded>
      {/* hero */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-5 py-5 px-10 md:px-14">
        <Title
          as="h1"
          size="sm"
          className="uppercase col-start-1 col-span-full row-start-1 pb-5 text-center md:row-start-2 !text-fs-500 font-serif"
        >
          Mindfulness
        </Title>

        <div className="col-start-1 row-start-1 row-span-2 md:col-end-3 md:row-start-1 md:row-end-5 md:self-center">
          <Image
            src="/about-1.jpg"
            alt=""
            priority
            width={500}
            height={500}
            className="rounded-full min-w-full mx-auto object-cover"
          />
        </div>

        <div className="col-start-2 row-start-1 self-end row-span-2 pt-5 md:col-start-3 md:self-start md:row-start-3 md:col-span-2">
          <Image
            src="/about-2.jpg"
            alt=""
            priority
            width={500}
            height={500}
            className="rounded-full min-w-full mx-auto object-cover"
          />
        </div>

        <div className="col-start-3 row-start-1 row-span-2 md:col-start-5 md:col-span-2 md:row-end-4">
          <Image
            src="/about-3.jpg"
            alt=""
            priority
            width={500}
            height={500}
            className="rounded-full min-w-full mx-auto object-cover"
          />
        </div>

        <div className="col-span-full flex flex-col gap-3 text-fs-300 text-justify text-brand-cream">
          <p className="first-letter:font-serif first-letter:text-fs-600 first-letter:font-bold first-letter:float-left first-letter:mr-2">
            Founded in 2019, our mission has been clear from the start: to make
            mental health support more accessible, personalized, and stigma-free
            for everyone. We are a dedicated team of mental health
            professionals, technologists, and advocates who believe that
            everyone deserves access to quality care—anytime, anywhere.
          </p>
          <p>
            Our web app provides a safe, confidential platform where individuals
            can connect with licensed therapists, track their mental health
            progress, and access clinically-backed resources tailored to their
            needs.
          </p>
          <p>
            Whether you&apos;re managing stress, anxiety, depression, or just
            looking for someone to talk to, we&apos;re here to help you every
            step of the way. Since our launch, we&apos;ve helped thousands of
            users take control of their mental well-being with empathy, science,
            and innovation at the core of everything we do. We are constantly
            evolving to ensure we meet the unique and diverse needs of our
            growing community. Your mental health matters. And we&apos;re here
            for you.
          </p>
        </div>
      </div>

      {/* link 1 */}
      <div className="flex flex-col gap-3 md:gap-10 items-center justify-center text-center py-5 px-10 md:px-14">
        <Title
          as="h2"
          size="md"
          className="uppercase leading-[1] tracking-tighter"
        >
          we believe that good people make a better{' '}
          <span className="wavy-em">world</span>
        </Title>
        <Cta href="/treatment" className="self-start md:self-center" />
      </div>

      {/* link 2 */}
      <div className="flex flex-col md:flex-row gap-5 p-5 px-10 md:px-14">
        <div>
          <Image
            src="/about-4.jpg"
            alt=""
            priority
            width={500}
            height={500}
            className="rounded-lg mx-auto object-cover min-w-full"
          />
        </div>

        <div className="flex flex-col text-center gap-3 md:gap-5 items-center justify-center">
          <Title as="h3" size="sm" className="uppercase">
            <span className="font-serif text-brand-cream">Comprehensive</span>{' '}
            mental health care
          </Title>
          <p>
            Help your employees and their families feel more resilient,
            productive, and empowered.
          </p>
          <Cta href="/treatment" className="md:self-end" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-5 px-10 md:px-14">
        <div className="flex flex-col text-center gap-3 md:gap-5 items-center justify-center flex-1">
          <Title as="h3" size="sm" className="uppercase">
            Effective
            <span className="font-serif text-brand-cream">
              &nbsp;Treatments
            </span>{' '}
            for every need
          </Title>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            quas perspiciatis necessitatibus esse distinctio alias eveniet
            maiores odio optio, dolorum ut odit dolore! Explicabo voluptates
            modi aliquam deserunt nostrum rerum?
          </p>
          <Cta href="/treatment" className="md:self-end" />
        </div>

        <div>
          <Image
            src="/about-5.jpg"
            alt=""
            priority
            width={500}
            height={500}
            className="rounded-lg mx-auto object-cover min-w-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 p-5 gap-5 md:gap-10 px-10 md:px-14 ">
        <Title
          as="h3"
          size="sm"
          className="uppercase text-center col-span-full"
        >
          instead of being so stressed,{' '}
          <span className="wavy-em">release it all</span>
        </Title>

        <div className="md:col-span-2">
          <Image
            src="/about-6.jpg"
            alt=""
            priority
            className="rounded-full mx-auto object-cover"
            width={500}
            height={500}
          />
        </div>

        <p className="text-center md:text-end md:col-start-3 text-fs-200 md:self-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat
          dicta praesentium debitis officia alias reiciendis, vitae ipsum. Qui,
          maiores deleniti. Vel, illo architecto, ipsum sed voluptate
          consequuntur repellat velit illum magni, minus perspiciatis adipisci
          sequi praesentium. Quo, illo reprehenderit?
        </p>
      </div>

      <NewsSubscription />
    </Bounded>
  );
};

export default AboutPage;
