import { GridContainer } from "../GridContainer";
import Image from "next/image";



export function SectionTestimonials (){
    return (
        <section className="py-16 xl:py-24 bg-gray-50">

            <GridContainer className="text-center flex flex-col items-center">
                <Image 
                src="/sisyphus.svg"
                width={140}
                height={40}
                alt="Sisyphus"        
               
                />
                <h2 className="my-8 text-3xl/tight xl:text-5xl/tight font-medium text-gray-900 -tracking-[0.96px]">We have been using Untitled to kick start 
                    every new project and can not imagine working without it.</h2>
                    <div>
                     <Image 
                      src="/avatar-candice.png"
                      width={64}
                      height={64}
                      alt="Avatar Candice"  
                      className="mx-auto mb-4"      
               
                />
                <span className="block text-lg font-medium text-gray-900">Candice Wu</span>
                <small className="block text-base text-gray-600">Product Manager, Sisyphus</small>

                    </div>
            </GridContainer>


        </section>
    )
}