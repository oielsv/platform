import { FooterLinksList } from '@/components/Footer/components/FooterLinksList';

interface FooterLink {
  label: string;
  href: string;
  target: '_self' | '_blank';
}

interface FooterSection {
  title: string;
  items: FooterLink[];
}

interface FooterConfig {
  links: {
    [key: string]: FooterSection;
  };
}

interface FooterProps {
  config: FooterConfig;
}

export function Footer({ config }: FooterProps) {
  const { links } = config;

  return (
    <footer className="py-8 px-4 border-t border-neutral-50/10">
      <div className="flex flex-col md:flex-row gap-x-10 gap-y-4 justify-center max-w-5xl mx-auto">
        {Object.values(links).map((section) => (
          <FooterLinksList key={section.title} title={section.title} items={section.items} />
        ))}
      </div>
    </footer>
  );
}
