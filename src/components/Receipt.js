import React from 'react';
import { Link } from 'react-router-dom';

const Receipt = () => {
    return (
        <div className='container bg-secondary bg-opacity-10 p-5'>
            <h2 className='text-start mb-3'> <u>Receipt Details</u> </h2>
            <form>
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
                        <select className="form-select border border-2" aria-label="Default select example" name='paymentMode'>
                            <option>Select here</option>
                            <option value="Cash">Cash</option>
                            <option value="Debit">Debit</option>
                            <option value="Online Pay">Online Pay</option>
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

        </div>
    );
};

export default Receipt;