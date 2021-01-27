import React from 'react';

let listOfImages = [];

class AllPictures extends React.Component {
  importAll(allPhotos) {
      
    return allPhotos.keys().map(allPhotos);
  }

  componentDidMount() {
    listOfImages = this.importAll(require.context('../../public', true,/\.(png|jpe?g|svg)$/));
    console.log(typeof(listOfImages))
    console.log(listOfImages)
  }
  


  render() {
    return (
        <div>
        {

          // make the inside of this a component https://reactjs.org/docs/components-and-props.html#extracting-components
          listOfImages.map(
            (image) => <img style={{width: "150px"}} key={image.toString()} src={image} alt="info"></img>
          )

        }
      </div>
    )
  }
}

export default AllPictures;