import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo />

      <main>
        <section className='bg-gray-100'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center layout'>
            <h1>Open Graph Generator</h1>
            <p className='mt-2 text-sm text-gray-600'>
              Made for personal use using{' '}
              <CustomLink href='https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation'>
                @vercel/og
              </CustomLink>
            </p>
            <div className='flex flex-wrap gap-2 mt-4 text-sm text-gray-500'>
              <ButtonLink href='https://github.com/theodorusclarence/og'>
                See the repository
              </ButtonLink>
              <ButtonLink variant='light' href='/builder'>
                Link Builder
              </ButtonLink>
            </div>

            <footer className='absolute text-gray-800 bottom-2'>
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
