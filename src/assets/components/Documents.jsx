import Navbar from './Navbar'
import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import { Link } from 'react-router-dom';
import Pdf from '../documents/SecureDonationChain.pdf'
import Pdf1 from '../documents/ProjectSpecificationReport.pdf'
import Pdf2 from '../documents/AnalysisReport.pdf'
import Pdf3 from '../documents/HighLevelDesignReport.pdf'
import Pdf4 from '../documents/LLD.pdf'
import Pdf5 from '../documents/TestPlanReportFinal.pdf'
import Pdf6 from '../documents/CMPE492-FinalReport-SDC.pdf'




export const Documents = () => {

    return (
        <div>
            <Navbar />
            <ParticlesBg type="lines" bg={true} />
            <div class="App">                
                <div class="">
                    {/* <ul>
                        <li>
                            <a className='mb-4 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-5xl' href={Pdf} target="_blank">Project Proposal</a>
                        </li>
                        <li>
                            <a className='mt-30 my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf1} target="_blank">Project Specification</a>
                        </li>
                        <li>
                            <a className='mt-30 my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf2} target="_blank">Analysis Report</a>
                        </li>
                        <li>
                            <a className='mt-30 my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf3} target="_blank">High Level Design Report</a>
                        </li>
                        <li>
                            <a className='mt-30 my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf4} target="_blank">Low Level Design Report</a>
                        </li>
                        <li>
                            <a className='mt-30 my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf5} target="_blank">Test Plan Report</a>
                        </li>
                        <li>
                            <a className='mt-30 my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf6} target="_blank">Final Report</a>
                        </li>

                    </ul> */}
                     <h1 class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900 mb-40" >ALL DOCUMENTS</h1>
                    <a className='text-xl text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf} target="_blank">Project Proposal &emsp;</a>
                    <a className='text-xl my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf1} target="_blank">Project Specification</a>
                    <a className='text-xl my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf2} target="_blank">Analysis Report</a>
                    <a className='text-xl my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf3} target="_blank">High Level Design Report</a>
                    <a className='text-xl my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf4} target="_blank">Low Level Design Report</a>
                    <a className='text-xl my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf5} target="_blank">Test Plan Report</a>
                    <a className='text-xl my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' href={Pdf6} target="_blank">Final Report</a>

                </div>
            </div>


        </div>
    )
}

export default Documents