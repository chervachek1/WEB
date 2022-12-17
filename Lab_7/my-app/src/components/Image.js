import React from "react"
import image from './image.jpg'

function Image() {
    const [zoom_value, setValue] = React.useState('500px')

    const zoomIn = () => {
        setValue(parseInt(zoom_value.replace('px', ''), 10) + 5 + 'px');
    }

    const zoomOut = () => {
        setValue(parseInt(zoom_value.replace('px', ''), 10) - 5 + 'px');
    }

    const [count, setCount] = React.useState(1);

    const addClick = () => {
        setCount(count + 1);
    };
    const removeClick = () => {
        setCount(count - 1);
    };
    
    var indents = [];
    for (var i = 0; i < count; i++) {
        indents.push(<a href="https://warsawtour.pl/en/main-page/">
        <img width={zoom_value} height={zoom_value} src={image}/></a>);
      }

    return (
        <div>
            {indents}
            <div className="buttons">
                <button onClick={addClick}>Додати</button>
                <button onClick={zoomIn}>Збільшити</button>
                <button onClick={zoomOut}>Зменшити</button>
                <button onClick={removeClick}>Видалити</button>
            </div>
        </div>
    )
}

export default Image
