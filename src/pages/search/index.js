
import React, {useState, useEffect} from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import { Form, Input , Button, Spinner} from 'reactstrap';
import axios from '../../axios';
import RepoItem from '../../components/table';
import  './search.css'



const Search = () => {
    const {search} = useLocation();
    const user = search.split('=')[1];
    const [username, setUsername] = useState(user?user:"" );
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid]= useState(false);
    const [data, setData] = useState([]);
    const {push} = useHistory()

    useEffect(() => {
        const getData = async ()=>{
            setLoading(true);
            const  res = await axios.get(`users/${user}/gists`);
            setData(res.data);
            setLoading(false);
        }
        if(user){
        getData();}
    }, [user])


    const searchGists =  (e) => {
        e.preventDefault();
        
        if(username===''){
            setInvalid(true);
            return;
        }
        push(`/search?user=${username}`)
        setLoading(true)
    }

    return ( <div className='container mt-5'>
        
            <Form onSubmit={searchGists} className={'flex'}>
                <Input   value={username} 
                    onChange={({target})=>{ 
                        setInvalid(false);
                        setUsername(target.value);
                    }
                }
                    placeholder='Enter Username'
                    invalid={invalid}
                />
                <Button>Search</Button>
            </Form>

            {loading ? 
            <div className='mt-5 d-flex justify-content-center flex-direction-row'>
                <Spinner/>
            </div>:
                <div className='mt-5'>
                    {data.map(gist => {
                        return <RepoItem key={gist.id} gist={gist}/>
                    })}

                </div>
            }



        </div>  
    );
}
 
export default Search;