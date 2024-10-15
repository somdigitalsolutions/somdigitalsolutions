import React from "react";

export default function Footer() {
  return (
    <section className="relative  z-2 bg-gradient-to-r from-purple-900 to-indigo-900 bg-blueGray-100">
  <div className="container mx-auto mb-auto">        
        <h1 className="text-center text-4xl ">Tips of our Success</h1>

        <div className="flex flex-wrap justify-center gap-0 mt-20">

          {/* Card: Assessment */}
          
          <div className="w-full lg:w-4/12 px-3 mb-12 bg-lightBlue-500">
               
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                  Assessment                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                  Conducting an evaluation of our clients’ requirements by observing their operations and business structure is the preliminary step of our process.
                  </p>
                </blockquote>
              </div>


              <div className="w-full lg:w-4/12 px-3 mb-12 bg-lightBlue-500">
               
               <blockquote className="relative p-8 mb-4">
                 <svg
                   preserveAspectRatio="none"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 583 95"
                   className="absolute left-0 w-full block h-95-px -top-94-px"
                 >
                   <polygon
                     points="-30,95 583,95 583,65"
                     className="text-lightBlue-500 fill-current"
                   ></polygon>
                 </svg>
                 <h4 className="text-xl font-bold text-white">
                 Recommendation                  </h4>
                 <p className="text-md font-light mt-2 text-white">
                 The outcome of the assessment process, we afterwards endorse the most suitable solution that increase the productivity of our clients’ business.                 </p>
               </blockquote>
             </div>


             <div className="w-full lg:w-4/12 px-3 mb-12 bg-lightBlue-500">
               
               <blockquote className="relative p-8 mb-4">
                 <svg
                   preserveAspectRatio="none"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 583 95"
                   className="absolute left-0 w-full block h-95-px -top-94-px"
                 >
                   <polygon
                     points="-30,95 583,95 583,65"
                     className="text-lightBlue-500 fill-current"
                   ></polygon>
                 </svg>
                 <h4 className="text-xl font-bold text-white">
                 Implementation                 </h4>
                 <p className="text-md font-light mt-2 text-white">
                 With intensely organized and planned strategy, we deploy the selected solution right on time in a seamlessly manner.

</p>
               </blockquote>
             </div>

        

        

        </div>
      </div>
    </section>
  );
}
