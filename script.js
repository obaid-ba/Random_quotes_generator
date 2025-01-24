



function generate () {
  let p = document.querySelector( ".section2 .mainbox .content p" );
  let num = document.querySelector( ".section2 .mainbox .number" );
  fetch( "data.json" )
    .then( ( data ) => data.json() )
    .then( ( json ) => {
      let rand = Math.floor( Math.random() * ( ( json.content.length ) - 0 ) + 0 )
      p.innerHTML = json.content[rand].text
      num.innerHTML = json.content[rand].num
    } )
}


let test

function stopAuto () {
  console.log(test)
  clearInterval( test );
  console.log(test)
  // release our intervalID from the variable
  test = null;
}


function auto () {  
  console.log(test)
  if ( !test ) {
    test = setInterval(generate,1000)
  }
  console.log(test)
}
