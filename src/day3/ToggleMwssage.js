import React, {useState} from 'react';
function ToggleMessage(){
    const [showMessage,setShowMessage] = useState(false);
    const tgm=()=>{
        setShowMessage(!showMessage);
    };
    return(
        <div>
            <button onClick={tgm}>{showMessage?'Show Component':'Hide Component'}</button>
            {showMessage && <p>Hi! How are You!!</p>}
        </div>
    );
}

export default ToggleMessage;