
import ProyectoTabList from './proyectos/ProyectoTabList';
import { categoryList, proyectList } from '../db_proyectos';


const Proyectos = () => {


	return (
	<section className="site-section" id="section-portfolio">
		<div className="container">
			<div className="row">
				<div className="section-heading text-center col-md-12">
					<h2>Mis proyectos<strong>Portfolio</strong></h2>
				</div>
			</div>
				<div className="filters">
					<ProyectoTabList categoryList={categoryList} proyectList={proyectList}  />
				</div>
				<div>
     		</div>

		</div>
	</section>

		
					
    )
}


export default Proyectos;
