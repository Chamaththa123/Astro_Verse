import React from 'react';
import TodayApod from './TodayApod';
import AllApod from './AllApod';
import ApodHero from './ApodHero';

export default function ApodPage() {

  return (
    <>
    <ApodHero/>
    <TodayApod/>
    <AllApod/>
    </>
  );
}
