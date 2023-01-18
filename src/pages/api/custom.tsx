/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import clsx from 'clsx';
import { NextRequest } from 'next/server';

import { deploymentURL } from '@/constant/env';

export const inter400 = fetch(
  new URL('../../assets/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export const inter700 = fetch(
  new URL('../../assets/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export const ttCommons400 = fetch(
  new URL('../../assets/TT-Commons-Regular.otf', import.meta.url)
).then((res) => res.arrayBuffer());

export const ttCommons700 = fetch(
  new URL('../../assets/TT-Commons-Bold.otf', import.meta.url)
).then((res) => res.arrayBuffer());

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  const interRegular = await inter400;
  const interBold = await inter700;
  const ttCommonsRegular = await ttCommons400;
  const ttCommonsBold = await ttCommons700;

  const { searchParams } = new URL(req.url);

  const description = searchParams.get('description');
  const logo = searchParams.get('logo');

  const query = {
    siteName: 'StockSelect',
    description:
      description && description.length > 98
        ? description.slice(0, 98) + '...'
        : description,
    logo: logo ?? `${deploymentURL}/images/logo.jpg`,
  };

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          fontFamily: 'Inter',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0',
          margin: '0',
          backgroundColor: '#EBF3FF',
          color: '#2C3763',
        }}
      >
        <img
          style={{
            width: 180,
            height: 180,
          }}
          src={query.logo}
          alt='Favicon'
        />
        <h1 tw={clsx('mt-[27px]', 'text-[70px] font-medium', 'text-[#2C3763]')}>
          {query.siteName}
        </h1>
        {query.description && (
          <p
            tw={clsx('text-[55px] font-medium mt-[20px] w-full p-0 m-0')}
            style={{ fontFamily: 'TTCommons' }}
          >
            {query.description}
          </p>
        )}
        {!query.description && (
          <p
            tw={clsx('text-[60px] font-medium mt-[20px] w-full p-0 m-0')}
            style={{ fontFamily: 'TTCommons' }}
          >
            Find Your <span tw='font-bold ml-4 font-bold'>Best Investment</span>
          </p>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: 'twemoji',
      fonts: [
        {
          name: 'Inter',
          data: interRegular,
          weight: 400,
        },
        {
          name: 'Inter',
          data: interBold,
          weight: 700,
        },
        {
          name: 'TTCommons',
          data: ttCommonsRegular,
          weight: 400,
        },
        {
          name: 'TTCommons',
          data: ttCommonsBold,
          weight: 700,
        },
      ],
    }
  );
}
