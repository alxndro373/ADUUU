import i1 from '../assets/busIcon.png'

export const DropDown = ({ title, items }) => {

    return (
        <div className='fw-bold' style={{ fontSize: "20px", background: "white", marginTop: "9%" }}>
            <label>{title}</label>
            <select id={title} onChange={e => onChange(e.target.value)} style={{ width: "90%", borderRadius: "5px", border: "none" }}>
                {/* {
                    items.map((item,key) => (
                        <option key={key} value={item.estado}>{item.estado}</option>
                    ))
                } */}
            </select>
            <img src={i1} />
        </div>
        // <>
        // <i className="bi bi-bus-front-fill"></i>
        // <DropdownButton id="dropdown-basic-button" title={title} variant='secondary'>
        //     {
        //         items.map((item,key) => (
        //             <Dropdown.Item key={key} >{item.value}</Dropdown.Item>
        //         ))
        //     }
        //     </DropdownButton>
        // </>
    )
}