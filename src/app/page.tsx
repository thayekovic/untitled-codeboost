import Image from "next/image";
import { Header } from "./components/Header";
import { SectionHero } from "./components/SectionHero";
import { SectionCompanies } from "./components/SectionCompanies";
import { SectionFeatures } from "./components/SectionFeatures";
import { SectionTestimonials } from "./components/SectionTestimonials";
import { SectionAnalitycs } from "./components/SectionAnalitycs";
import { SectionQuestions } from "./components/SectionQuestions";
import { SectionLaunch } from "./components/SectionLaunch";
import { SectionTrial } from "./components/SectionTrial";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
    
    <SectionHero/>
    <SectionCompanies/>
    <SectionFeatures/>
    <SectionTestimonials/>
    <SectionAnalitycs/>
    <SectionQuestions/>
    <SectionLaunch/> 
    <SectionTrial/>
   

    </>
  );
}
