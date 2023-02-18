// this is for Triangle Area Calculation
document.getElementById('btn-triangle-calculate').addEventListener('click', function () {
    const triangleValueOne = getInputFieldValueById('input-triangle-One');
    const triangleValueTwo = getInputFieldValueById('input-triangle-Two');
    const triangleArea = 0.5 * triangleValueOne * triangleValueTwo;
    if (isNaN(triangleArea) == false) {
        setElementValueById(triangleArea.toFixed(2), 'triangle-title');
    }
})

// this is for Rectangle Area Calculation
document.getElementById('btn-rectangle-cal').addEventListener('click', function () {
    const rectangleValueOne = getInputFieldValueById('input-rectangle-One');
    const rectangleValueTwo = getInputFieldValueById('input-rectangle-Two');
    const rectangleArea = rectangleValueOne * rectangleValueTwo;
    if (isNaN(rectangleArea) == false) {
        setElementValueById(rectangleArea.toFixed(2), 'rectangle-title');
    }
})

// this is for Parallelogram Area Calculation
document.getElementById('btn-parallelogram-calculate').addEventListener('click', function () {
    const parallelogramValueOne = getInputFieldValueById('input-parallelogram-One');
    const parallelogramValueTwo = getInputFieldValueById('input-parallelogram-Two');
    const parallelogramArea = parallelogramValueOne * parallelogramValueTwo;
    if (isNaN(parallelogramArea) == false) {
        setElementValueById(parallelogramArea.toFixed(2), 'parallelogram-title');
    }

})

//this is for Rhombus Area Calculation
document.getElementById('btn-rhombus-calculate').addEventListener('click', function () {
    const rhombusValueOne = getInputFieldValueById('input-rhombus-one');
    const rhombusValueTwo = getInputFieldValueById('input-rhombus-two');
    const rhombusArea = .5 * rhombusValueOne * rhombusValueTwo;
    if (isNaN(rhombusArea) == false) {
        setElementValueById(rhombusArea.toFixed(2), 'rhombus-title');
    }
})

// this is for RPentagon Area Calculation
document.getElementById('btn-pentagon-calculate').addEventListener('click', function () {
    const pentagonValueOne = getInputFieldValueById('input-pentagon-One');
    const pentagonValueTwo = getInputFieldValueById('input-pentagon-Two');
    const pentagonArea = 0.5 * pentagonValueOne * pentagonValueTwo;
    if (isNaN(pentagonArea) == false) {
        setElementValueById(pentagonArea.toFixed(2), 'pentagon-title');
    }

})

// this is for  Ellipse Area Calculation
document.getElementById('btn-ellipse-calculate').addEventListener('click', function () {
    const ellipseValueOne = getInputFieldValueById('input-ellipse-one');
    const ellipseValueTwo = getInputFieldValueById('input-ellipse-two');
    const pi = 3.1416;
    const ellipseArea = pi * ellipseValueOne * ellipseValueTwo;
    if (isNaN(ellipseArea) == false) {
        setElementValueById(ellipseArea.toFixed(2), 'ellipse-title');
    }

})

// this is for  Trianle Random Color
document.getElementById('triangle-bg').addEventListener('mouseover', function () {
    document.getElementById('triangle-bg').style.backgroundColor = randomColor();
});

//this is for Rectangle Random color
document.getElementById('rectangle-bg').addEventListener('mouseover', function () {
    document.getElementById('rectangle-bg').style.backgroundColor = randomColor();
});

//this is for Parallelogram Random Color
document.getElementById('parallelogram-bg').addEventListener('mouseover', function () {
    document.getElementById('parallelogram-bg').style.backgroundColor = randomColor();
});

//this is for Rhombus Random Color
document.getElementById('rhombus-bg').addEventListener('mouseover', function () {
    document.getElementById('rhombus-bg').style.backgroundColor = randomColor();
});

//this is for Pentagon Random Color
document.getElementById('pentagon-bg').addEventListener('mouseover', function () {
    document.getElementById('pentagon-bg').style.backgroundColor = randomColor();
});

// this is for Ellipse Random Color
document.getElementById('ellipse-bg').addEventListener('mouseover', function () {
    document.getElementById('ellipse-bg').style.backgroundColor = randomColor();
});
