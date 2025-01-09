import "./footer.css"
import { EnvelopeAt } from "react-bootstrap-icons"
const Footer = () => {
    return (
        <div className='limon-viejo-BG  w-100'>
            <div className="row p-5 m-0">
                <div className="col-lg-4 ps-3 fw-bold">
                    <br />
                    <p className='lh-1'>CopyRight ©2025 All rights reserved</p>
                    <p className='lh-1'>Grupo Requiez</p>
                </div>
                <div className="col-lg-4">
                    <h5>CONTACTO</h5>
                    <a className='text-dark text-decoration-none fw-bold' href="mailto:hola@gruporequiez.com">hola@gruporequiez.com</a>
                    <br />
                    <a className='text-dark text-decoration-none fw-bold' href="tel:3338337788" >+52 33 3833 7788</a>
                </div>
                <div className="col-lg-4">
                    <h5>SUSCRIBETE AL NEWSLETTER</h5>
                    <div className="input-group input-email-newsletter mb-3">
                        <input type="email" className="form-control border-0 input-email-newsletter" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon2" />
                        <button type="submit" className="input-group-text btn kk-BG border-0 fw-bold" id="basic-addon2"><EnvelopeAt/></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
