import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import {Badge, Table} from 'reactstrap'
const RepoItem = ({gist}) => {
    let files= [];
    Object.keys(gist.files).forEach(file=>{
        files.push(gist.files[file].language);
    })

    files= new Set(files);
    files = [...files];
    return ( 
        <>          
         <Table className='mt-5' striped>
    <tbody>
        <tr>
            <th>ID</th>
            <td>{gist.id}</td>  
        </tr>

        <tr>
            <th>Description</th>
            <td>{gist.description}</td>  
        </tr>

        <tr>
            <th>Files</th>
            <td className='d-flex content-justify-space-between'>
                {files.map((file,index) => <Badge key={index}>{file}</Badge>)}
            </td>
        </tr>

        <tr>
            <th>Owner</th>
            <td>
                <span>
                    <img className='rounded' width='40' alt={gist.owner.login} src={gist.owner.avatar_url}/>
                    {
                     '  '   
                    }{gist.owner.login}
                </span> 
            </td>  

        </tr>
        <tr>
            <th>Last Update</th>
            <td>{moment(gist.updated_at).calendar()}</td>  
        </tr>

        <tr>
            <th></th>
            <td className='d-flex justify-content-end'>
                <Link className='btn btn-primary' to={`/gist-content/${gist.id}`}>
                    Content
                </Link>
            </td>  
        </tr>
    </tbody>
</Table>
<hr></hr>

</> );
}
 
export default RepoItem;