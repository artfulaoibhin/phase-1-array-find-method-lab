function superbowlWin(array){
    const newObj = array.find(array => array.result === 'W')
    return !!newObj ? newObj.year : undefined
}