import React from 'react';

import { Card } from 'antd';


const { Meta } = Card;

const MovieList = (props) => {
	return (
		
		<>
{/* <Card
    hoverable
    style={{ width: 240 }}
    cover={<img className="imges" src={movie.Poster} alt='movie'/>}
  >

  </Card>, */}
	
  		
			{props.movies.map((movie, index) => (
				<div className='img'>
					<img className="imges" src={movie.Poster} alt='movie'></img>
				</div>
			))}
		</>
	);
};

export default MovieList;