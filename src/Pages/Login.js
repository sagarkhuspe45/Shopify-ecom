import React from 'react'

export default function Login() {
    return (
        <>
            <div class="modal-dialog modal-dialog-centered">
            <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex={-1} role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h1 className="fw-bold mb-0 fs-2">Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body p-5 pt-0">
                            <form className>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Login</button>
                                <small className="text-body-secondary">By clicking Login, you agree to the terms of use.</small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}
