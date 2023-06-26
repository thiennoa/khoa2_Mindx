import "./Student.css";

const Student =(props) => {
    const{studentName,classCode, math,phy,chem,children}=props || {};
    return(
        <div className="student">
            <h6>{studentName}</h6>
            <p>
                <strong>Lớp:</strong>
                {classCode}
            </p>
            <ul>
                <li>
                    <strong>Toán:</strong>
                    {math}
                </li>
                <li>
                    <strong>Hóa:</strong>
                    {chem}
                </li>
                <li>
                    <strong>Lý:</strong>
                    {phy}
                </li>
            
            </ul>
            
            {children}
            
        </div>
    )
} 


export default Student;