import localFont from 'next/font/local';

export const serif = localFont({
  src: '../app/fonts/new-york-serif/newyork.otf',
  display: 'swap',
  style: 'normal',
  weight: '400',
  variable: '--font-serif',
});

export const sans = localFont({
  src: [
    {
      path: '../app/fonts/general-sans/GeneralSans-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../app/fonts/general-sans/GeneralSans-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../app/fonts/general-sans/GeneralSans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/general-sans/GeneralSans-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/general-sans/GeneralSans-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/general-sans/GeneralSans-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
});
