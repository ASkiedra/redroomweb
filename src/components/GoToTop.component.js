const GoToTop = () => {
    console.log('123')
    if (document.getElementsByClassName('container')[0] !== undefined)
    {
      console.log('1')
      document.getElementsByClassName('container')[0].scrollTop = 0;
    }

    return null;
}

export default GoToTop;