import React from 'react'

export default function HomeContact() {
  return (
    <div className='bg-dark p-5'>
        <div className="row justify-content-center">
            <div className="col-md-5 bg-light  p-5 rounded ">
                <p className='text-center fs-5'>If you want to order our furniture or have any questions or inquiries, please contact us now.</p>
                <form >
                    <div className="mb-3 mt-3">
                        <input type="nom" className="form-control   rounded" id="nom" placeholder="Enter your full name*" />
                    </div>
                    <div className="mb-3 mt-3">
                        <input type="number" className="form-control rounded" id="number" placeholder="Enter your phone number" />
                    </div>
                    <div className="mb-3 mt-3">
                        <input type="email" className="form-control rounded" id="email" placeholder="Enter your email*" />
                    </div>
                    <div className="mb-3 mt-3">
                        {/* <input type="text" className="form-control rounded" id="message" placeholder="Type your message*" /> */}
                        <textarea name="message" className="form-control rounded" id="message" cols="25" rows="5" placeholder="Type your message*"></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark w-100">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}
