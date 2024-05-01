import React from 'react';
import TodayApod from './TodayApod';
import AllApod from './AllApod';
import ApodHero from './ApodHero';
import Planets from './Planets';

export default function ApodPage() {

  return (
    <>
    <ApodHero/>
    <TodayApod/>
    <Planets/>
    <AllApod/>
    </>
  );
}
