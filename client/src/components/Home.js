import React from 'react'
import { Link } from 'react-router-dom'
import bgSvg from '../Images/bg.svg'
import stuffSvg from '../Images/stuff.svg'


function Home() {
    return (
        <>
            <div className="bg-indigo-900 relative overflow-hidden">

                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-24 xl:py-40">
                    <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
                        <span className="font-mitr uppercase text-indigo-500">Kubiko | Quiz | Polls</span>
                        <h1 className="font-roboto-slab text-4xl sm:text-6xl text-red-400 leading-tight mt-4">Taking Tests <br /> to the
        moon</h1>
                        <div className="max-w-md">
                            <p className="font-source-sans-pro text-indigo-500 mt-6 text-lg">
                                Easy Monitoring and creation of Quizes and Live polls, Maintain your scores and progress now with
                                ease.
        </p>
                        </div>
                        <Link to="/login" className="block bg-indigo-500 hover:bg-indigo-400 py-2 px-4 rounded-full text-sm font-mitr text-white uppercase mt-10">Get
        started</Link>
                    </div>
                    <img src={bgSvg} className="hidden sm:block absolute bottom-0 right-0 -mr-40 lg:mr-0" alt="background" />
                </div>
                <img src={stuffSvg} className="absolute left-0 bottom-0 w-full h-full" alt="clouds" />
            </div>
        </>
    )
}

export default Home
