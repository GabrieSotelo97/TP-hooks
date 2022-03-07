import React from 'react';
import {useState, useEffect, useRef} from 'react'



//import noPoster from '../assets/images/no-poster.jpg';

function SearchMovies(){

	const [Movie, setMovies] = useState([])

	let Titulo =''
	
	useEffect(()=>{
		fetch('http://www.omdbapi.com/?i=tt3896198&apikey=d4e35e92')
		.then(response => response.json())
		.then(data => {
			setMovies(data)
			console.log('%cse monto el componente','color:green' )
		})
		.catch(error => console.log(error))
	}, [])

	Titulo = useRef()

	useEffect(()=>{
		console.log('%cse actualizo el componente','color:yellow' )
	},[Movie])



	useEffect(()=>{
		return () => console.log('se desmonto el componente');
	},[])

	

	const keyword = 'PELÍCULA DEMO';

	const Buscar = () =>{
		console.log(`http://www.omdbapi.com/?i=tt3896198&apikey=d4e35e92t=t={Titulo.current.value}`);
		fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d4e35e92&t=${Titulo.current.value}`)
		.then(response => response.json())
		.then(data => {
			setMovies(data)
			
		})
		.catch(error => console.log(error))
	}
	
	

	
	
	
	return(
		<div className="container-fluid">
			{
				
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input ref={Titulo} type="text" className="form-control" />
								</div>
								<button onClick={Buscar} className="btn btn-info">Search</button>
							
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						 {
							 Movie &&  (
									<div className="col-sm-6 col-md-3 my-4" >
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{Movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={Movie.Poster}
														alt={Movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{Movie.Year}</p>
											</div>
										</div>
									</div>
								)
							
						}
					</div>
					{ Movie.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				
			}
		</div>
		
	)
	
}

export default SearchMovies;
