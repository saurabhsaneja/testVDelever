import ConstructionImage from './assets/images/construction.svg'
import EntertainmentImage from './assets/images/entertainment.svg'
import PetCareImage from './assets/images/pet-care.svg'
import HomeCareImage from './assets/images/home-care.svg'
import EventsImage from './assets/images/events.svg'
import HealthcareImage from './assets/images/healthcare.svg'
import { Image, StyleSheet, View } from 'react-native'

export const getSFProDisplayFont = (type) => {
    let fullType = ''
    if (type === 'S') {
        fullType = 'Semibold'
    }
    else if (type === 'BL') {
        fullType = 'Black'
    }
    else if (type === 'BO') {
        fullType = 'Bold'
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

export const getInterFont = (type) => {
    let fullType = ''
    if (type === 'S') {
        fullType = 'Semibold'
    }
    else if (type === 'BL') {
        fullType = 'Black'
    }
    else if (type === 'BO') {
        fullType = 'Bold'
    }
    else if (type === 'EBO') {
        fullType = 'ExtraBold'
    }
    else if (type === 'L') {
        fullType = 'Light'
    }
    else if (type === 'EL') {
        fullType = 'ExtraLight'
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
    return 'Inter_24pt-' + fullType
}

export const categoriesData = [
    [{
        id: '1',
        title: 'Construction',
        image: <ConstructionImage />,
        colors: ['white', '#CBE0FF'],
    },
    {
        id: '2',
        title: 'Entertainment',
        image: <EntertainmentImage />,
        colors: ['white', '#FFE9BE'],
    }],
    [{
        id: '3',
        title: 'Pet Care',
        image: <PetCareImage />,
        colors: ['#FEF2F3', '#FFB0DD'],
    },
    {
        id: '4',
        title: 'Home Care',
        image: <HomeCareImage />,
        colors: ['white', '#C0FCF6']
    },
    {

        id: '5',
        title: 'Events',
        image: <EventsImage />,
        colors: ['white', '#FFC8AB']
    }],
    [{
        id: '6',
        title: 'Healthcare',
        image: <HealthcareImage />,
        colors: ['white', '#CFCFFF']
    }],
]

export const popularServices = [
    {
        id: '5',
        title: 'Pet Grooming',
        image: <Image source={require('./assets/images/PetGrooming.png')} />,
        size: [166, 193],
        edgeImages: (<>
            <View style={{ position: 'absolute', top: 0, left: 0 }} >
                <Image source={require('./assets/images/PGroomingTopLeft.png')} />
            </View>
            <View style={{ position: 'absolute', right: 0, bottom: 0 }} >
                <Image source={require('./assets/images/PGroomingRightBottom.png')} />
            </View>
        </>)
    },
    {
        id: '4',
        title: 'Pet Walking',
        image: <Image source={require('./assets/images/PetWalking.png')} />,
        size: [166, 140],
        edgeImages: (<>
            <View style={{ position: 'absolute', right: 0, top: 0 }} >
                <Image source={require('./assets/images/PWalkingTopRight.png')} />
            </View>
            <View style={{ position: 'absolute', left: 0, bottom: 0 }} >
                <Image source={require('./assets/images/PWalkingLeftBottom.png')} />
            </View>
        </>)
    },
    {
        id: '3',
        title: 'Pet Dating',
        image: <Image source={require('./assets/images/PetDating.png')} />,
        size: [166, 140],
        edgeImages: (<>
            <View style={{ position: 'absolute', left: 0, bottom: 0 }} >
                <Image source={require('./assets/images/PDatingBottomLeft.png')} />
            </View>
            <View style={{ position: 'absolute', right: 0, top: 0 }} >
                <Image source={require('./assets/images/PDatingTopRight.png')} />
            </View>
        </>)
    },
    {
        id: '2',
        title: 'Pet Training',
        image: <Image source={require('./assets/images/PetTraining.png')} />,
        size: [166, 193],
        edgeImages: (<>
            <View style={{ position: 'absolute', right: 0, bottom: 0 }} >
                <Image source={require('./assets/images/PTrainingRightBottom.png')} />
            </View>
            <View style={{ position: 'absolute', left: 0, top: 0 }} >
                <Image source={require('./assets/images/PTrainingLeftTop.png')} />
            </View>
        </>)
    },
    {
        id: '1',
        title: 'Pet Adoption',
        image: <Image source={require('./assets/images/PetAdoption.png')} />,
        size: [166, 193],
        edgeImages: (<>
            <View style={{ position: 'absolute', top: 0, left: 0 }} >
                <Image source={require('./assets/images/PGroomingTopLeft.png')} />
            </View>
            <View style={{ position: 'absolute', right: 0, bottom: 0 }} >
                <Image source={require('./assets/images/PGroomingRightBottom.png')} />
            </View>
        </>)
    },
]