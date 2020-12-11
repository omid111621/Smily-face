'use strict';
function smily(){
 const svg = d3.select('svg');
 const arc = d3.arc();
 const line = d3.line();

 //..........Varibles................
const face = {
    r: 200,
    x: +svg.attr('width') / 2,
    y: +svg.attr('height')/ 2
}
const eyeOffset ={
    r: 10,
    x: 80,
    y: 50
};
const mouthOffset ={
    y:30};
const eyebrowOffset ={
    x: -20,
    y: -30,
    width: 40,
    height: 10
};
 //Face Group...................
 const faceGroup = svg.append('g')
            .attr('transform', `translate(${face.x} ${face.y})`)
const mainFace = faceGroup.append('circle')
            .attr('r' , face.r)
            .attr('fill' , 'yellow')
            .attr('stroke', 'black');
//............Left Group..................
const leftGroup = faceGroup.append('g')
            .attr('transform', `translate(${+ eyeOffset.x} ${- eyeOffset.y})`)
            .attr('fill', 'black');
const leftEye = leftGroup.append('circle')
            .attr('r', face.r / eyeOffset.r);
const leftEyebrow = leftGroup.append('rect')
            .attr('transform', `translate(${eyebrowOffset.x} ${eyebrowOffset.y})`)
            .attr('width', `${eyebrowOffset.width}`)
            .attr('height', `${eyebrowOffset.height}`)
              .transition()
                .duration(1000)
                .attr('transform', `translate(${eyebrowOffset.x} ${eyebrowOffset.y -10})`)
              .transition()
                .duration(1000)
                .attr('transform', `translate(${eyebrowOffset.x} ${eyebrowOffset.y})`) ;
                  

//............Right Group................
const rightGroup = faceGroup.append('g')
            .attr('transform', `translate(${- eyeOffset.x} ${- eyeOffset.y})`)
            .attr('fill', 'black');
const rightEye  = rightGroup.append('circle')          
            .attr('r', face.r / eyeOffset.r);
const rightEyebrow = rightGroup.append('rect')
            .attr('transform', `translate(${eyebrowOffset.x} ${eyebrowOffset.y})`)
            .attr('width', `${eyebrowOffset.width}`)
            .attr('height', `${eyebrowOffset.height}`)
            .transition()
                .duration(1000)
                .attr('transform', `translate(${eyebrowOffset.x} ${eyebrowOffset.y -10})`)
              .transition()
                .duration(1000)
                .attr('transform', `translate(${eyebrowOffset.x} ${eyebrowOffset.y})`) ;
//...........Mouth Group...................
const mouthGroup = faceGroup.append('g')
            .attr('transform', `translate( 0 , ${mouthOffset.y})`);
const mouth = mouthGroup.append('path')
            .attr('d', arc({
                innerRadius: 90,
                outerRadius: 100,
                startAngle: Math.PI / 2,
                endAngle: Math.PI * 3/2
              }))
              .transition().duration(1000)
            .attr('d', arc({
                innerRadius: 90,
                outerRadius: 100,
                startAngle: Math.PI *(1-0.6),
                endAngle: Math.PI * (1+0.6) 
              }))
              .transition().duration(1000)
              .attr('d', arc({
                innerRadius: 90,
                outerRadius: 100,
                startAngle: Math.PI / 2,
                endAngle: Math.PI * 3/2
              }))
}
setInterval(smily,3000);