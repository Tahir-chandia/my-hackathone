import { CarouselSize } from '@/components/Carousal';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Newarrival from '@/components/Newarrival';
import Rectangle from '@/components/Rectangle';
import TopSeller from '@/components/TopSeller';
import React from 'react';

const Page = () => {
  return (

      <div>

        <Hero />
        <Rectangle />
        <Newarrival />
        <TopSeller />
        <Grid />
        <CarouselSize />
      </div>
  );
};

export default Page;
