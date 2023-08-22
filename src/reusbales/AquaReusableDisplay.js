const AquaReusableDisplay = ({label , value}) => {
    return (
        <>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">{label}</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={value}/>
                </div>
            </div>
        </>
    )
}