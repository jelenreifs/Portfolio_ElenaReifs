

function ProyectoItem({ id, src, category, title, description, tecnologies, url }) {
	
	
  return (
    <>
    <article className="single-portfolio col-sm-4 all mockup">
		<a href="#" data-toggle="modal" data-target={"#"+"proyecto"+id}>
			<div className="relative">
				<div className="thumb mb-3">
              		<img className="image img-fluid" src={ src } alt={ title } />
				</div>
			</div>
			<div className="p-inner">
            	<h4>{title }</h4>
            	<div className="cat">{ category }</div>
			</div>
		</a>
				
		<div className="modal fade" id={"proyecto"+id} tabindex="-1" aria-labelledby="proyectoModal" aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="proyectoModal">{ title}</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
							  <h6>Tecnologías utilizadas</h6>
							  <div className="logos-tecnologias">
								  <p>{description}</p>
								  <ul>
									  {tecnologies.map((item, index) => {
										  return (
											  <li key={index} >
												  <img src={item.logo} alt={item.name} />
											  </li>
										  )
									  })
									  }
								  </ul>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-outline-secondary  icon-buttom-github">Código</button>
						<button type="button" className="btn btn-outline-secondary">Demo</button>
					</div>
				</div>
			</div>
		</div>
	</article> 

      </>
  );
}

export default ProyectoItem;

