		drawSVG = function  (argument) {
			// body...
			var canvas = d3.select('body').append("svg")
			   .attr('height',500 )
			   .attr('width',500 );

			   var circle = canvas.append('circle')
			       .attr('cx', 250)
			       .attr('cy', 250)
			       .attr('r', 50)
			       .style('fill', 'red');

/*				var rect = canvas.append('rect')
				    .attr('width', 100)
				    .attr('height', 50)
				    .style('fill', '#000');
				var line = canvas.append('line')
				    .attr('x1',0 )
				    .attr('y1', 100)
				    .attr('x2',400 )
				    .attr('y2', 400)
				    .attr('stroke', 'green')
				    .attr('stroke-width', '10');*/
				    
		};

