
const Descarga = ({ archivo }) => {

    const handleDownload = () => {
        if (archivo) {
            const link = document.createElement('a');
            link.href = archivo;
            link.setAttribute('download', '');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <button
            className=""
            type="button"
            onClick={handleDownload}
        >
            <div className="p-0 m-0">
            <span className="">{mensaje}</span>
            </div>
        </button>
    );
};

export default Descarga;
