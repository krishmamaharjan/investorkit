"use client"
import React, { useState } from 'react'
import Button from './button'
import { useInvestor } from '../context/InvestorContext';
import InterestLoan from './InterestLoan'
import PrincipalInterestLoan from './Principal_Interest_Loan'

const Rightbar = () => {
    const { formData } = useInvestor();

    const [activeTab, setActiveTab] = useState<'interest' | 'principal'>('interest');

    return (
        <div className='px-6'>
            <div className='flex gap-4 justify-end py-4 px-4'>
                <Button text='See Calculations' primary />
                <Button text='Share' secondary />
            </div>

            {/* <pre className="">
                {JSON.stringify(formData, null, 2)}
            </pre> */}

            <div className='flex items-center'>
                <div 
                    className={`border rounded-l-lg py-2 px-8 cursor-pointer ${activeTab === 'interest' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                    onClick={() => setActiveTab('interest')}
                >
                    Interest Only Loan
                </div>
                <div 
                    className={`border rounded-r-lg py-2 px-8 cursor-pointer ${activeTab === 'principal' ? 'bg-green-500 text-white' : 'bg-white'}`}
                    onClick={() => setActiveTab('principal')}
                >
                    Principal & Interest Loan
                </div>
            </div>

            <div>
                {activeTab === 'interest' && <InterestLoan />}
                {activeTab === 'principal' && <PrincipalInterestLoan />}
            </div>
        </div>
    )
}

export default Rightbar

