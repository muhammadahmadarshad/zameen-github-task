import { useEffect, useState } from "react";
import React  from 'react';
import { useParams } from "react-router-dom";
import axios from "../../axios/index";
import { Card, Spinner, Table } from "reactstrap";

const Content = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(false);
    const [forks, setForks] = useState([]);
    
    useEffect(()=>{
        const getData = async ()=>{
        try{
            setError(false);
            setLoading(true);
           const res= await axios.get(`/gists/${id}`);
           const forks = await axios.get(`/gists/${id}/forks`)
           setForks(forks.data);
           setData(res.data);
           setLoading(false);
        }
        catch(err){
            setError(true);
            setLoading(false);
            
        }
    }

        getData();

    },[id]);

    if( loading){

        return <div className='mt-5 d-flex justify-content-center'>
            <Spinner></Spinner>
        </div>
    }

    else if(err && !loading){

        return <h1 className='text-center text-danger'>
            Not Found!
        </h1>
    }

    
    if(forks.length > 3 ){
        setForks(forks.slice(0,3));
    }
    return ( <div className='container'>
            <h1 className='text-center'>Content</h1>
            <Card>
                <Table>
                    <tbody>
                        {Object.keys(data.files).map((file,index)=> {
                            return <tr key={index}>
                                <th>{file}</th>
                                <td>{data.files[file].content}</td>
                            </tr>
                        })}

                        <tr>
                            <th>Forks</th>
                            <td>
                                <ul>
                                    {forks.map((fork, index)=>{

                                        return <li key={index} className='p-1'>
                                           <span>
                                               <img width='40' className='rounded' alt={fork.owner.login} src={fork.owner.avatar_url}/> 
                                               {'  '+fork.owner.login}
                                            </span>
                                        </li>
                                    })}
                            
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
    </div> );
}
 
export default Content;