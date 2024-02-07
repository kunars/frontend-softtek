import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

import { LIST_DOCUMENT_TYPE } from '@/constants';
import { useGeneralContext } from '@/context';
import { Input, Icon } from '@/elements/atoms';
import { Checkbox, Dropdown, DropdownItem } from '@/elements/molecules';
import { useAuthService } from '@/services';

type FormProps = {
  documentType: string;
  documentNumber: number | null;
  phone: number;
  privacyPolicy: boolean;
  ccPolicy: boolean;
};

export const Form = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { setUser } = useGeneralContext();

  const {
    register,
    control,
    formState: { errors, isValid },
    getValues,
    watch,
    setValue,
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      documentType: 'DNI',
    },
  });

  const { useGetUser } = useAuthService();
  const { push } = useRouter();

  const handleSubmit = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const { data } = await useGetUser();
      const { documentType, documentNumber, phone } = getValues();
      setUser({
        ...data,
        documentType,
        documentNumber: Number(documentNumber),
        phone,
      });
      push('/quotation');
    } catch (e) {
      console.log('err => ', e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="my-6 flex flex-col gap-4">
      <div className="flex items-center form-group">
        <div className="w-[140px]">
          <Controller
            control={control}
            name="documentType"
            rules={{ required: true }}
            render={({ field }) => (
              <Dropdown
                defaultValue={field.value}
                className="rounded-tr-none rounded-br-none border-r-0"
                onChange={(e) => {
                  field.onChange(e);
                  setValue('documentNumber', null, {
                    shouldValidate: true,
                  });
                }}
              >
                {LIST_DOCUMENT_TYPE.map((type) => (
                  <DropdownItem key={type.value} value={type.value}>
                    {type.label}
                  </DropdownItem>
                ))}
              </Dropdown>
            )}
          />
        </div>
        <div className="w-[calc(100%-140px)]">
          <Input
            label="Nro. de documento"
            className="w-full rounded-tl-none rounded-bl-none"
            onlyNumber
            hasError={!!errors.documentNumber}
            {...register('documentNumber', {
              required: true,
              minLength: 8,
            })}
            maxLength={watch('documentType') === 'DNI' ? 8 : 12}
          />
        </div>
      </div>
      <div className="form-group">
        <Input
          label="Celular"
          className="w-full"
          onlyNumber
          hasError={!!errors.phone}
          {...register('phone', { required: true, minLength: 9 })}
        />
      </div>
      <div className="mt-2">
        <Controller
          control={control}
          name="privacyPolicy"
          rules={{ required: true }}
          render={({ field }) => (
            <Checkbox
              defaultChecked={field.value}
              onChecked={(e) => field.onChange(e)}
            >
              <p className="text-comp-14 leading-6 xl:text-body-12">
                Acepto la Política de Privacidad
              </p>
            </Checkbox>
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="ccPolicy"
          rules={{ required: true }}
          render={({ field }) => (
            <Checkbox
              defaultChecked={field.value}
              onChecked={(e) => field.onChange(e)}
            >
              <p className="text-comp-14 leading-6 xl:text-body-12">
                Acepto la Política Comunicaciones Comerciales
              </p>
            </Checkbox>
          )}
        />
      </div>
      <Link
        href="https://www.rimac.com/politica-privacidad"
        target="_blank"
        className="text-body-12 font-semibold underline underline-offset-2 font-somona"
      >
        Aplican Términos y Condiciones.
      </Link>

      <button
        type="button"
        className="button-lg button-secondary mt-5 flex items-center justify-center xl:button-xl xl:w-fit"
        disabled={!isValid}
        onClick={handleSubmit}
      >
        {loading ? (
          <Icon name="ic_loading" className="inline animate-spin w-8 h-8" />
        ) : (
          'Cotiza aquí'
        )}
      </button>
    </form>
  );
};
