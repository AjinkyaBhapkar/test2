import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './components/Card/Card';

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {

    if (search.length >= 2) {

      (axios.get(`http://localhost:5000/data/search=${search}`)
        .then(res => {
          setData(res.data)

        })
      )

    }
  }, [search])

  return (
    <div>
      <div className='input-container'>

      <input
      className='input'
      type="text"
      placeholder="Search here"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      <div className='all-cards'>
        {

          data.map(data => {

            return (<Card key={data._id} data={data} />)
          })
        }
      </div>

    </div>
  );
}

export default App;
