import {useState} from 'react'

function List({listContacts}) {

  const [filterText,setFilterText] = useState("")
  const filtered = listContacts.filter( (item) => {
    return Object.keys(item).some((key) => 
          item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
      )
  })

  return (
    <div>
      <input placeholder='Arama Yap' value={filterText} onChange={ (e) => setFilterText(e.target.value)}></input>

      <ul className='list'> 
        {  
            filtered.map( (contact , i) => (
              <li key={i}>
                <span>{contact.fullname}</span>
                <span>{contact.phone_number}</span>
              </li>
            ))
        }
      </ul>

      <p id='kisisayisi'>Toplam Kişiler ({filtered.length})</p>
    </div>
  )
}

export default List
