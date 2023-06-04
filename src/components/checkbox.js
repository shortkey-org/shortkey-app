const CheckboxControl = ({ isChecked = false, centerLabel = false, label = null, desc = null, ...props }) => {
    return (
        <label className="checkbox-container">

            <div
                className={("label-item") + (centerLabel ? " --center" : "")}>
                <div className="label">
                    <span className="fs20B lH25 fCPrimary">{label}</span>
                </div>
                <div className="desc">
                    <p className="fs20 fCBody lH25">{desc}</p>
                </div>
            </div>

            <input {...props} type="checkbox" key={`${isChecked}`} defaultChecked={isChecked}></input>
            <span className="checkbox-checkmark"></span>
        </label>
    );
}

export default CheckboxControl;