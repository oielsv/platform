import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

export function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <div className="w-[280px] h-[220px]">
        <Image src="/images/404.png" alt="404" width={922} height={721} priority />
      </div>
      <span>{t('title')}</span>
      <Button className="uppercase">{t('btn')}</Button>
    </div>
  );
}
