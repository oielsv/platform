import { useTranslations } from 'next-intl';
import upperCase from 'lodash/upperCase';

import { cn } from '@/lib/utils';

interface FooterLinksListProps {
  title: string;
  items: {
    label: string;
    href: string;
    target: '_self' | '_blank';
  }[];
}

export function FooterLinksList({ title, items }: FooterLinksListProps) {
  const t = useTranslations('footer');

  return (
    <div className="xs:mb-6">
      <h3 className="text-xs text-center md:text-left font-bold md:mb-3 text-neutral-50/85 mb-2">
        {upperCase(t(`${title}.title`))}
      </h3>
      {items.length > 0 && (
        <ul className="flex flex-wrap justify-center md:justify-baseline md:flex-col">
          {items.map(({ label, href, target }) => (
            <li
              key={href}
              className={cn([
                'relative px-2 md:px-0 [&:not(:last-child)]:md:mb-2 last:after:content-none md:after:content-none',
                "after:content-['']",
                'after:absolute after:top-0 after:bottom-0 after:mt-1 after:mb-0.5 after:right-0',
                'after:w-px after:bg-neutral-50/10',
              ])}
            >
              <a href={href} target={target} className="text-xs text-neutral-50/50 hover:text-neutral-50">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
