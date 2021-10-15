import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <h1>Open Graph Generator</h1>
            <p className='mt-2 text-sm text-gray-300'>
              Made for personal use using{' '}
              <CustomLink href='https://github.com/neg4n/next-api-og-image'>
                next-api-og-image
              </CustomLink>
            </p>
            <p className='mt-4 text-sm text-gray-200'>
              <ButtonLink href='https://github.com/theodorusclarence/og'>
                See the repository
              </ButtonLink>
            </p>

            <footer className='absolute text-gray-500 bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <CustomLink href='https://theodorusclarence.com?ref=og'>
                Theodorus Clarence
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
