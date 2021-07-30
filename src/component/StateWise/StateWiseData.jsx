import React, { useEffect, useState } from 'react';

const StateWiseData = () =>{

    const [Data, setData] = useState([]);

    const getCovidCaseData = async() => {
        let response = await fetch('https://api.covid19india.org/data.json');
        response = await response.json();
        setData(response.statewise);
    }

    useEffect(()=>{
        getCovidCaseData();
    }, []);

    return (
        <>
            <h1 className=" text-center mt-5"><span className=" font-monospace text-black-50">INDIA</span> COVID-19 Dashboard</h1>
            <br />
            <table id="covid-case" className="table table-striped table-bordered text-center" style={{width:'100%'}}>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Data.map((currentElement)=>{
                        return (
                            <tr>
                                <td>{currentElement.state}</td>
                                <td>{currentElement.confirmed}</td>
                                <td>{currentElement.recovered}</td>
                                <td>{currentElement.deaths}</td>
                                <td>{currentElement.active}</td>
                                <td>{currentElement.lastupdatedtime}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </>
    );
}

export default StateWiseData;