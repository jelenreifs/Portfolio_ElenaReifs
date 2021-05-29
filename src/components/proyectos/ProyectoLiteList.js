import ProyectoItem from './ProyectoItem'


function ProyectoLiteList({ proyectList }) {



  return (
  <section className="filters-content">				

      <div className="row grid">
         {proyectList.map((item, key) => {
           const { id, src, category, title, description, tecnologies, url } = item;
           const [logo, name] = tecnologies
      
           return <ProyectoItem logo={logo} name={ name} id={id} key={key} src={src} category={category} title={title} description={description} tecnologies={tecnologies} url={url}/>
        })}
      
      </div>

  </section>

  );
}

export default ProyectoLiteList;
