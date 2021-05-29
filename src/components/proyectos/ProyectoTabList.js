import { useState} from 'react';
import ProyectoItem from './ProyectoItem';


function ProductoTabList({ categoryList, proyectList }) {
  console.log(proyectList)
  
  const [filterList, setFilterList] = useState(proyectList);

  const handleFilter = (e) => {
    if(e.target.value === "Todos"){
      setFilterList(proyectList);
    } else {
      //const categories = proyectList.filter(item => (item.category === e.target.value))
      const categories = [...proyectList].filter((item) => (item.category === e.target.value) && item);
      setFilterList(categories);
    }
  }
  
  return (
    <>
      <div className="filters">
        <ul>
         {categoryList.map(({ id, name, category }, key) => {
           return <li key={key} data-filter={category}>
            <button value={name} onClick={handleFilter}>{ name}</button>
          </li>
        })}
        </ul>
      </div>
      <div className="filters-conten">				
				<div className="row grid">
        {filterList.map((item, key) => {
          const { id, src, title, description, category, tecnologies, url } = item
        const [ico, name] = tecnologies; 
          return <ProyectoItem id={id} key={key} src={src} category={category} title={title} description={description} tecnologies={tecnologies} name={name} ico={ico} url={url}  />
        })}
        </div>
        </div>
    </>
  );
}

export default ProductoTabList;
