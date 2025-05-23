import Bounded from '@/components/Bounded';
import ContactForm from '@/components/ContactForm';
import Newsletter from '@/components/Newsletter';
import Title from '@/components/Title';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const ContactPage = () => {
  return (
    <Bounded className="grid md:grid-cols-2 gap-5 md:gap-10 py-10 md:py-16 add-padding">
      <div className="flex flex-col gap-5 md:gap-8 ">
        <Title as="h1" size="md">
          Get in <span className="font-serif uppercase">touch</span>
        </Title>
        <p>Any question or remarks? Just write us a message</p>
        <ContactForm />
      </div>

      <div className="self-center">
        <Image
          src="/contact-form1.jpg"
          alt=""
          width={500}
          height={500}
          priority
          className="rounded-lg max-md:hidden object-cover mx-auto min-w-full"
        />
      </div>

      <div className="flex gap-5 md:gap-10 flex-col item-center justify-center text-center py-10 col-span-full">
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
};

export default ContactPage;
