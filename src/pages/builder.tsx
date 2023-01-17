/* eslint-disable @next/next/no-img-element */
import queryString from 'query-string';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import Seo from '@/components/Seo';

import { deploymentURL } from '@/constant/env';

const queryKeys = [
  'siteName',
  'description',
  'templateTitle',
  'logo',
  'banner',
  'logoWidth',
  'logoHeight',
  'theme',
  'ogType',
];

type Query = Record<typeof queryKeys[number], string>;

export default function BuildPage() {
  const [link, setLink] = React.useState(`${deploymentURL}/api/general`);
  const [imgLink, setImgLink] = React.useState(`${deploymentURL}/api/general`);

  //#region  //*=========== Forms ===========
  const methods = useForm<Query>({
    mode: 'onTouched',
    defaultValues: {
      theme: 'dark',
    },
  });
  const { handleSubmit, watch } = methods;
  //#endregion  //*======== Forms ===========

  //#region  //*=========== Show live change ===========
  const formData = watch();
  React.useEffect(() => {
    const { ogType, ...rest } = formData;
    const qurl = queryString.stringifyUrl(
      {
        url: `${deploymentURL}/api/${ogType}`,
        query: { ...rest },
      },
      {
        skipEmptyString: true,
      }
    );

    setLink(qurl);
  }, [formData]);
  //#endregion  //*======== Show live change ===========

  //#region  //*=========== Submit ===========
  const onSubmit: SubmitHandler<Query> = () => {
    setImgLink(link);
  };
  //#endregion  //*======== Submit ===========

  return (
    <>
      <Seo templateTitle='Build' />

      <main>
        <section className='bg-gray-100'>
          <div className='min-h-screen py-20 layout'>
            <h1>Builder</h1>

            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-[2fr,3fr] gap-8 items-center'>
                  <div className='flex flex-col gap-3 mt-8 md:max-w-sm'>
                    <SelectInput
                      id='ogType'
                      label='ogType'
                      helperText='api type routes'
                    >
                      <option value='general'>general</option>
                      <option value='gradient'>gradient</option>
                      <option value='blog'>blog</option>
                    </SelectInput>
                    <Input id='siteName' label='siteName' />
                    <Input id='description' label='description' />
                    <Input
                      id='templateTitle'
                      label='templateTitle'
                      helperText='Adding templateTitle will change layout'
                    />
                    <Input
                      id='logo'
                      label='Logo Links'
                      helperText={`default: ${deploymentURL}/images/logo.jpg`}
                    />
                    <Input
                      id='banner'
                      label='Banner Links'
                      helperText='This is only for /blog'
                    />
                    <div className='flex gap-2'>
                      <Input
                        className='w-full'
                        id='logoWidth'
                        label='logoWidth'
                        helperText='default: 100'
                      />
                      <Input
                        className='w-full'
                        id='logoHeight'
                        label='logoHeight'
                        helperText='default: auto'
                      />
                    </div>
                    <SelectInput id='theme' label='theme'>
                      <option value='dark'>dark</option>
                      <option value='light'>light</option>
                    </SelectInput>
                    <Button>Generate</Button>
                  </div>
                  <div>
                    <img
                      key={imgLink}
                      src={imgLink}
                      className='w-full bg-gray-500'
                      alt=''
                      width='1200'
                      height='630'
                    />
                    <p className='mt-2 text-sm text-gray-600 break-all'>
                      {link}
                    </p>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
    </>
  );
}
