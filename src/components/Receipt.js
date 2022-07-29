import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Receipt = () => {

    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMode, setPaymentMode] = useState('');
    const [remark, setRemark] = useState('');

    const [singleArray, setSingleArray] = useState([]);
    const [multipleArray, setMultipleArray] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        setDate(e.target.date.value);
        setAmount(e.target.amount.value);
        setPaymentMode(e.target.paymentMode.value);
        setRemark(e.target.remark.value);
        singleArray.push(e.target.date.value, e.target.amount.value, e.target.paymentMode.value, e.target.remark.value);
        e.target.reset();
    }

    multipleArray.push(...singleArray);
    const newArr = [];
    while (multipleArray.length) newArr.push(multipleArray.splice(0, 4));

    return (
        <div className='container bg-secondary bg-opacity-10 p-5'>
            <h2 className='text-start mb-3'> <u>Receipt Details</u> </h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="date" className="col-sm-2 col-form-label text-start">Date<span className='text-danger'>*</span></label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control border border-2" name="date" placeholder='Enter Date' required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="amount" className="col-sm-2 col-form-label text-start">Amount<span className='text-danger'>*</span></label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control border border-2" name="amount" placeholder='Enter Amount (in INR)' required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="paymentMode" className="col-sm-2 col-form-label text-start">Payment Mode<span className='text-danger'>*</span></label>
                    <div className="col-sm-6">
                        <select className="form-select border border-2" aria-label="Default select example" name='paymentMode' required>
                            <option value=''>Select here</option>
                            <option value="Cash">Cash</option>
                            <option value="Debit">Debit</option>
                            <option value="Paytm">Paytm</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="remark" className="col-sm-2 col-form-label text-start">Remark</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control border border-2" name="remark" placeholder='Enter remark' />
                    </div>
                </div>

                <div className='d-flex justify-content-end'>
                    <Link to='' className="btn btn-outline-danger px-5 py-3">CANCEL <br /> <small> <u>(ESC)</u> </small> </Link>

                    <button type="submit" className="btn btn-outline-success ms-5 me-5 px-5 py-3">SUBMIT <br /> <small> <u>(% S)</u> </small> </button>
                </div>
            </form>

            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Payment Mode</th>
                        <th scope="col">Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newArr.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td key={item[0]}>{item[0]}</td>
                                    <td key={item[1]}>{item[1]}</td>
                                    <td key={item[2]}>{item[2]}</td>
                                    <td key={item[3]}>{item[3]}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Receipt;