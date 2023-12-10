//1
function func(options) {
    let { color = 'blue', width = 200, height = 300 } = options;

}

func({ color: 'red', width: 400, height: 500 });
//2
function func2(options) {
    let {width, height, color = 'black'} = options

    console.log(width, height, color)
}

func2( {color: 'red', width: 400, height: 500} );