"use client"
import React, { useState } from 'react'
// import { lvr, grossYield, monthlyRepayment, annualCashFlow, stampDuty, deposit } from '../../utils/calculation';
import { useInvestor } from '../context/InvestorContext';
const Leftbar = () => {

    const [propertyOpen, setPropertyOpen] = useState(true);
    const [IncomeOpen, setIncomeOpen] = useState(true);
    const [costOpen, setCostOpen] = useState(true);
    const [acquisitionOpen, setAcquisitionOpen] = useState(true);
    const [annualHoldingOpen, setAnnualHoldingOpen] = useState(true);

    const { formData, setFormData, depositValue, stampDutyValue, totalAcquisition, lvrValue, grossYieldValue } = useInvestor();

    // const depositValue = deposit(Number(formData.propertyValue), Number(formData.loanAmount));
    // const lvrValue = lvr(Number(formData.propertyValue), Number(formData.loanAmount));
    // const grossYieldValue = grossYield(Number(formData.weeklyRent), Number(formData.propertyValue));
    // const stampDutyValue = stampDuty(Number(formData.propertyValue));

    // const monthlyRepaymentValue = monthlyRepayment(
    //     Number(formData.loanAmount),
    //     Number(formData.interestRate),
    //     Number(formData.loanTerm),
    //     'IO'
    // );

    // const otherCosts = 0;
    // const annualCashFlowValue = annualCashFlow(
    //     Number(formData.weeklyRent),
    //     monthlyRepaymentValue,
    //     otherCosts
    // );

    // const depositValue = Number(formData.propertyValue) - Number(formData.loanAmount);
    // const lvrValue = lvr(Number(formData.propertyValue), Number(formData.loanAmount));
    // const grossYieldValue = grossYield(Number(formData.weeklyRent), Number(formData.propertyValue));

    const toNumber = (v: string) => Number(v) || 0;

    const propertyValue = toNumber(formData.propertyValue);
    const loanAmount = toNumber(formData.loanAmount);
    const interestRate = toNumber(formData.interestRate);
    const loanTerm = toNumber(formData.loanTerm);
    const lmi = toNumber(formData.lmi);

    // const totalAcquisition = depositValue + stampDutyValue + toNumber(formData.inspection) + toNumber(formData.conveyancingFees) + toNumber(formData.transferFees) + toNumber(formData.miscellaneousCosts);


    {/* <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm space-y-2">
  <div className="flex justify-between">
    <span>Deposit</span>
    <span>${deposit.toLocaleString()}</span>
  </div>

  <div className="flex justify-between">
    <span>Loan to Value Ratio (LVR)</span>
    <span>{lvr.toFixed(2)}%</span>
  </div>

  <div className="flex justify-between">
    <span>Monthly Interest (IO)</span>
    <span>${monthlyInterestOnly.toLocaleString()}</span>
  </div>

  <div className="flex justify-between">
    <span>LMI</span>
    <span>${lmi.toLocaleString()}</span>
  </div>

  <div className="flex justify-between font-semibold border-t pt-2">
    <span>Total Upfront Cost</span>
    <span>${(lmi + stampDuty).toLocaleString()}</span>
  </div>
</div> */}


    // const lvr =
    //   propertyValue > 0 ? (loanAmount / propertyValue) * 100 : 0;


    {/* <input
  type="text"
  className='rounded-sm border border-primary w-full py-2 bg-gray-100'
  value={lvr.toFixed(2) + "%"}
  readOnly
/> */}






    // const monthlyLoanRepayment = monthlyRepayment(
    //     Number(formData.loanAmount),
    //     Number(formData.interestRate),
    //     Number(formData.loanTerm),
    //     formData.loanType
    // );

    // const otherCosts =
    //     formData.propertyManagementFee +
    //     formData.lettingFee +
    //     formData.maintenanceCosts +
    //     formData.councilRates +
    //     formData.waterRates +
    //     formData.insurance +
    //     formData.landTax;

    // const annualCashFlowValue = annualCashFlow(Number(formData.weeklyRent), monthlyLoanRepayment, Number(otherCosts));

    return (
        <div className='w-full h-full'>
            <div className='py-6 bg-primary text-white sticky left-0 top-0'>
                InvestorKit A.R.I v1.5
            </div>

            <div className='px-2'>
                <h1 className='py-6 font-semibold text-lg'>Property Details</h1>
                <div className='bg-white rounded-lg'>

                    <div
                        onClick={() => setPropertyOpen(prev => !prev)}
                        className='flex items-center justify-between bg-primary text-white py-4 px-4'
                    >
                        <h1 className=''>Property Details</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6" /></svg>
                    </div>
                    {
                        (propertyOpen &&
                            <form action="" className='px-4 py-4'>
                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Street Address</label>
                                    <input
                                        type="text"
                                        className='rounded-sm border border-primary w-full py-2'
                                        value={formData.streetAddress}
                                        onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                                    />
                                </div>

                                <div className='flex gap-2'>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>State</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={formData.state}
                                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>Postcode</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={formData.postcode}
                                            onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Property Type</label>
                                    <select className='rounded-sm border border-primary w-full py-2'>
                                        <option >Residential</option>
                                        <option >Commercial</option>
                                        <option >Land</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Property Value</label>
                                    <input
                                        type="text" className='rounded-sm border border-primary w-full py-2'
                                        value={formData.propertyValue}
                                        onChange={(e) => setFormData({ ...formData, propertyValue: e.target.value })}
                                    />
                                </div>

                                <div className='flex gap-2'>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>Weekly Rent</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={formData.weeklyRent}
                                            onChange={(e) => setFormData({ ...formData, weeklyRent: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>Gross Yield</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={grossYieldValue.toFixed(2) + '%'}
                                        />
                                        {/* <p>{grossYieldValue.toFixed(2)}%</p> */}
                                    </div>
                                </div>

                                {/* <div className='mt-6 bg-gray-50 p-4 rounded-lg space-y-2'>
                                    <p>Deposit: ${depositValue.toLocaleString()}</p>
                                    <p>LVR: {lvrValue.toFixed(2)}%</p>
                                    <p>Gross Yield: {grossYieldValue.toFixed(2)}%</p>
                                    <p>Monthly Loan Repayment: ${monthlyLoanRepayment.toLocaleString()}</p>
                                    <p>Annual Cash Flow: ${annualCashFlowValue.toLocaleString()}</p>
                                </div> */}
                            </form>
                        )
                    }


                </div>
            </div>

            <div className='px-2'>
                <h1 className='py-6 font-semibold text-lg'>Income</h1>
                <div className='bg-white rounded-lg'>
                    <div className='flex items-center justify-between bg-primary text-white py-4 px-4'
                        onClick={() => setIncomeOpen(prev => !prev)}

                    >
                        <h1 className=''>Individual Income</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6" /></svg>
                    </div>

                    {(IncomeOpen &&
                        <form action="" className='px-4 py-4'>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm pt-4 px-4'>Self-Managed Superfund</p>
                                <p>toggle</p>
                            </div>


                            <div>
                                <label htmlFor="" className='text-xs text-zinc-500'>Employment Income</label>
                                <input type="text" className='rounded-sm border border-primary w-full py-2'
                                    value={formData.income}
                                    onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="" className='text-xs text-zinc-500'>Other taxable income</label>
                                <input type="text" className='rounded-sm border border-primary w-full py-2'
                                    value={formData.taxIncome}
                                    onChange={(e) => setFormData({ ...formData, taxIncome: e.target.value })}
                                />
                            </div>
                        </form>
                    )}
                </div>
            </div>

            <div className='px-2'>
                <h1 className='py-6 font-semibold text-lg'>Property Costs</h1>
                <div className='bg-white rounded-lg'>
                    <div className='flex items-center justify-between bg-primary text-white py-4 px-4'
                        onClick={() => setCostOpen(prev => !prev)}
                    >
                        <h1 className=''>Funding Structure</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6" /></svg>
                    </div>
                    {
                        (costOpen &&
                            <form action="" className='px-4 py-4'>
                                <div className='flex gap-2'>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>Loan Amount</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={formData.loanAmount}
                                            onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                                        />
                                        <p>${loanAmount.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>LVR</label>
                                        <input
                                            value={lvrValue.toFixed(2) + "%"}
                                            readOnly
                                            type="text"
                                            className='rounded-sm border border-primary w-full py-2'
                                        />

                                    </div>
                                </div>

                                <div className='flex gap-2'>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>Interest Rate</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={formData.interestRate}
                                            onChange={(e) => setFormData({ ...formData, interestRate: e.target.value })}
                                        />
                                        <p>${interestRate.toLocaleString()}</p>

                                    </div>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>Loan Term</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={formData.loanTerm}
                                            onChange={(e) => setFormData({ ...formData, loanTerm: e.target.value })}
                                        />
                                        <p>${loanTerm.toLocaleString()}</p>

                                    </div>
                                </div>

                                <hr className='my-4 text-zinc-200 ' />
                                <h1>Lenders Mortgage Insurance</h1>

                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>LMI Premium (Varies by Bank)</label>
                                    <input type="text" className='rounded-sm border border-primary w-full py-2'
                                        value={lmi.toLocaleString()}
                                        readOnly
                                    // onChange={(e) => setFormData({ ...formData, lmi: e.target.value })}
                                    />
                                    {/* <p>${lmi.toLocaleString()}</p> */}

                                </div>
                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Additional Stamp Duty on LMI</label>
                                    <input type="text" className='rounded-sm border border-primary w-full py-2'
                                        // value={`$${stampDutyValue.toLocaleString()}`}
                                        readOnly
                                    // onChange={(e) => setFormData({ ...formData, stampDuty: e.target.value })}
                                    />
                                    {/* <p>${stampDutyValue.toLocaleString()}</p> */}

                                </div>
                            </form>
                        )
                    }


                </div>
            </div>

            <div className='px-2'>
                <div className='bg-white rounded-lg'>
                    <div className='flex items-center justify-between bg-primary text-white py-4 px-4'
                        onClick={() => setAcquisitionOpen(prev => !prev)}
                    >
                        <h1 className=''>Acquisition Costs</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6" /></svg>
                    </div>
                    {
                        (acquisitionOpen &&
                            <form action="" className='px-4 py-4'>
                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Deposit</label>
                                    <input type="text" className='rounded-sm border border-primary w-full py-2'
                                        value={`${depositValue.toLocaleString()}`}
                                        readOnly
                                    />
                                </div>


                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Build & Pest Inspection</label>
                                    <input
                                        type="text"
                                        className='rounded-sm border border-primary w-full py-2'
                                        value={formData.inspection}
                                        onChange={(e) => setFormData({ ...formData, inspection: e.target.value })}

                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Stamp Duty</label>
                                    <input type="text" className='rounded-sm border border-primary w-full py-2'
                                        value={`$${stampDutyValue.toLocaleString()}`}
                                        readOnly
                                    />
                                </div>


                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Conveyancing Fees</label>
                                    <input type="text" className='rounded-sm border border-primary w-full py-2'
                                        value={formData.conveyancingFees}
                                        onChange={(e) => setFormData({ ...formData, conveyancingFees: e.target.value })}

                                    />
                                </div>

                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Transfer Registration Fee</label>
                                    <input type="text" className='rounded-sm border border-primary w-full py-2' 
                                        value={formData.transferFees}
                                        onChange={(e) => setFormData({ ...formData, transferFees: e.target.value })}

                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Miscellaneous costs</label>
                                    <input type="text" className='rounded-sm border border-primary w-full py-2'
                                        value={formData.miscellaneousCosts}
                                        onChange={(e) => setFormData({ ...formData, miscellaneousCosts: e.target.value })}

                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Total Acquisition</label>
                                    <input type="text" className='rounded-sm border border-primary w-full py-2'
                                        value={`$${(totalAcquisition).toLocaleString()}`}
                                        readOnly
                                    />
                                </div>
                            </form>
                        )
                    }


                </div>
            </div>

            <div className='px-2'>
                <div className='bg-white rounded-lg'>
                    <div className='flex items-center justify-between bg-primary text-white py-4 px-4'
                        onClick={() => setAnnualHoldingOpen(prev => !prev)}
                    >
                        <h1 className=''>Annual Holding Costs</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6" /></svg>
                    </div>
                    {
                        (annualHoldingOpen &&
                            <form action="" className='px-4 py-4'>
                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Property Management Fee</label>
                                    <input type="text" className='rounded-sm border border-primary w-full py-2'
                                        value={formData.propertyManagementFee}
                                        onChange={(e) => setFormData({ ...formData, propertyManagementFee: e.target.value })}
                                    />
                                </div>

                                <div className='flex gap-2'>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>Letting Fee</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={formData.lettingFee}
                                            onChange={(e) => setFormData({ ...formData, lettingFee: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>Vacancy Period (wks)</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={formData.vacancyWeeks}
                                            onChange={(e) => setFormData({ ...formData, vacancyWeeks: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className='text-xs text-zinc-500'>Maintenance Costs</label>
                                    <input type="text" className='rounded-sm border border-primary w-full py-2'
                                        value={formData.maintenanceCosts}
                                        onChange={(e) => setFormData({ ...formData, maintenanceCosts: e.target.value })}
                                    />
                                </div>

                                <div className='flex gap-2'>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>Council Rates</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={formData.councilRates}
                                            onChange={(e) => setFormData({ ...formData, councilRates: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>Water Rates</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={formData.waterRates}
                                            onChange={(e) => setFormData({ ...formData, waterRates: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className='flex gap-2'>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>Insurance</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={formData.insurance}
                                            onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="" className='text-xs text-zinc-500'>Land Tax</label>
                                        <input type="text" className='rounded-sm border border-primary w-full py-2'
                                            value={formData.landTax}
                                            onChange={(e) => setFormData({ ...formData, landTax: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </form>
                        )
                    }


                </div>
            </div>


        </div>
    )
}

export default Leftbar
