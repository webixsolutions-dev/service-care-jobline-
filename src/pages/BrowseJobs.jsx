import React from 'react'
import BrowserHero from '../components/browserJob/BrowserHero'
import BrowseJobsSection from '../components/browserJob/BrowserJobSection'
import FilterJobsSection from '../components/browserJob/FilterJobSection'
import PopularCategories from '../components/browserJob/PopularCategories'
import CTASection from '../components/browserJob/CTAButton'

const BrowseJobs = () => {
  return (
    <>


      <BrowserHero />
      <BrowseJobsSection />
      <FilterJobsSection />
      <PopularCategories />
      <CTASection />


    </>)
}

export default BrowseJobs