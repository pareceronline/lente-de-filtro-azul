import React, { useState } from "react";
import MaskedInput from 'react-text-mask'


const Subscribe = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhonenumber,] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/7458896/b9f76f42-1cac-4b94-8d63-22136fffc9a0'
        var data = {
            "fields": [
                {
                    "name": "email",
                    "value": email
                },
                {
                    "name": "firstname",
                    "value": name
                },
                { 
                    "name": "phone",
                    "value": phone
                },
            ],
            "context": {
                "pageUri": "",
                "pageName": ""
            },
        }
        console.log(data)
        var final_data = JSON.stringify(data)

        xhr.open('POST', url);
        // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText); // Returns a 200 response if the submission is successful.
            } else if (xhr.readyState === 4 && xhr.status === 403) {
                alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.     
            } else if (xhr.readyState === 4 && xhr.status === 404) {
                alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found    
            }
        }
        // Sends the request 
        xhr.send(final_data)
    }

    return (
        
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <div className="mb-3">
                <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="Nome Completo"
                className="focus:outline-none border-b-2 border-gray-500 w-full"
                />
            </div>
            <div className="mb-3">
                <MaskedInput mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                type="tel"
                value={phone}
                onChange={e => setPhonenumber(e.target.value)}
                required
                placeholder="Telefone"
                className="focus:outline-none border-b-2 border-gray-500 w-full"
                render={(ref, props) => (
                    <input ref={ref} {...props} />
                  )}
                />
            </div>
            <div className="mb-3">
                <input 
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Seu melhor Email"
                className="focus:outline-none border-b-2 border-gray-500 w-full"
                />
            </div>
            <div className="flex flex-col w-full items-center">
            <input 
            type="submit" 
            value="Enviar"
            className="bg-azul hoverButton rounded-lg w-32 h-8 text-white font-bold"
            />
            </div>
        </form>
    );
}

export default Subscribe