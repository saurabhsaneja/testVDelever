export const getSFProDisplayFont = (type) => {
    let fullType = ''
    if (type === 'S') {
        fullType = 'Semibold'
    }
    else if (type === 'BL') {
        fullType = 'Black'
    }
    else if (type === 'BO') {
        fullType = 'Black'
    }
    else if (type === 'H') {
        fullType = 'Heavy'
    }
    else if (type === 'L') {
        fullType = 'Light'
    }
    else if (type === 'M') {
        fullType = 'Medium'
    }
    else if (type === 'R') {
        fullType = 'Regular'
    }
    else if (type === 'T') {
        fullType = 'Thin'
    }
    else if (type === 'U') {
        fullType = 'Ultralight'
    }
    return 'SF-Pro-Display-' + fullType
}