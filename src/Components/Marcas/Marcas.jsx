import "./marcas.css"
const Marcas = () => {
  return (
    <div className='full-screen kk-BG d-flex align-items-center justify-content-center position-relative'>
      <div id="requiez">
        <div className="row">
          <div className="col-lg-6">
            <img src="" alt="Logo requiez" />
            <p className="SANS-REGULAR text-light fs-4">La mejor línea de sillas y sillones para oficina.</p>
          </div>
          <div className="col-lg-9 bg-dark">
            <img src="" alt="Portada de Requiez" />
          </div>
        </div>
      </div>

      <div id="infiniti">
        <div className="row">
          <div className="col-lg-6 bg-dark">
            <img src="" alt="Portada Infiniti" />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center">
            <img src="" alt="logo infiniti" />
            <p className="SANS-REGULAR text-light fs-4 mt-3">
              Diseño italiano multicultural.
            </p>
          </div>
        </div>
      </div>


      <div id="interface">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center">
            <img src="" alt="logo infiniti" />
            <p className="SANS-REGULAR text-light fs-4 mt-3">
              Diseño italiano multicultural.
            </p>
          </div>
          <div className="col-lg-6 bg-dark ">
            <img src="" alt="Portada Infiniti" />
          </div>
        </div>
      </div>

      <div id="labenze">
        <div className="row">
          <div className="col-lg-7 bg-dark">
            <img src="" alt="Portada Labenze" />
          </div>
          <div className="col-lg-6">
            <img src="" alt="logo Labenze" />
            <p className="SANS-REGULAR text-light fs-4">Una linea ideal de mobiliario contract corporativo y residencial.</p>
          </div>
        </div>
      </div>
      <h1 className='SANS-REGULAR text-light titulo-marcas'>MARCAS</h1>
    </div>
  )
}

export default Marcas
