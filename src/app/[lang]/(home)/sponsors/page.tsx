"use client";
import { ExternalLinkIcon, HeartHandshakeIcon } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitInfoButton } from "@/components/git-info-button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getSponsors } from "../actions";
import { useEffect, useState } from "react";

const featuredSponsors = [
  {
    name: 'Template until we have a sponsor',
    logo: '/branding/logo-light-348.png',
    url: 'https://hytalemodding.guide',
  },
];

const staticSponsors = [
  {
    name: 'ApexHosting',
    logo: '/sponsors/apexhosting.png',
    url: 'https://apexminecrafthosting.com',
  },
];

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState(staticSponsors);

  useEffect(() => {
    async function loadSponsors() {
      try {
        const openCollectiveSponsors = await getSponsors();
        const sortedSponsors = [...openCollectiveSponsors].sort((a, b) => {
          const amountA = a.totalAmountDonated || 0;
          const amountB = b.totalAmountDonated || 0;
          return amountB - amountA;
        });
        setSponsors([...sortedSponsors, ...staticSponsors]);
      } catch (error) {
        console.error('Failed to load sponsors:', error);
      }
    }
    loadSponsors();
  }, []);
  return (
    <div className="relative flex flex-1 overflow-hidden">
      <GitInfoButton />
      <Spotlight />
      <div className="container mx-auto flex flex-1 flex-col items-center gap-8 px-12 py-8 lg:flex-row lg:justify-between lg:py-0">
        <div className="max-w-xl space-y-6 max-lg:max-w-lg max-lg:py-32 max-lg:text-center">
          <h1 className="text-4xl font-semibold text-balance">
            Support Us
          </h1>
          <h2 className="text-muted-foreground text-lg text-balance">
            HytaleModding is an open-source community project, and part of managing the community involves paying for services, servers and infrastructure, like hosting this website. If you would like to support the project, consider becoming a sponsor!
            
            We use OpenCollective so you can see how funds are being used to support the community.
          </h2>
          <div className="flex flex-wrap gap-4 max-lg:justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-105 font-semibold">
              <Link href="https://opencollective.com/hytalemodding" target="_blank" rel="noopener noreferrer">
                <HeartHandshakeIcon className="mr-2 h-5 w-5" />
                Open Collective
                <ExternalLinkIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4 pt-8">
            <h3 className="text-xl font-semibold">Our Sponsors</h3>
            {/* <div className="space-y-3">
              {featuredSponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-fd-border bg-fd-card hover:bg-fd-accent transition-all hover:shadow-lg overflow-hidden"
                >
                  <div className="w-full h-24 relative">
                    <Image 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </a>
              ))}
            </div> */}
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap gap-3">
              {sponsors.map((sponsor) => {
                const logoSrc = sponsor.logo || sponsor.image;
                if (!logoSrc) return null;
                
                return (
                  <a
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    title={sponsor.name}
                  >
                    <Avatar className="h-16 w-16 border-2 border-fd-border hover:border-fd-primary hover:scale-110 transition-all">
                      <AvatarImage 
                        src={logoSrc} 
                        alt={sponsor.name}
                      />
                      <AvatarFallback className="bg-fd-card">
                        {sponsor.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-fd-popover text-fd-popover-foreground px-3 py-1 rounded-md text-sm font-medium pointer-events-none border border-fd-border shadow-lg z-10">
                      {sponsor.name}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}